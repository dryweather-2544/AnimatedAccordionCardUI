import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageZoom({ src, alt, className = "" }: ImageZoomProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaxZoom, setIsMaxZoom] = useState(false);

  return (
    <>
      {/* Thumbnail with zoom hint */}
      <div 
        className={`relative group cursor-pointer ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full rounded-lg transition-all group-hover:brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-black/60 backdrop-blur-sm rounded-full p-3">
            <ZoomIn className="size-6 text-white" />
          </div>
        </div>
      </div>

      {/* Fullscreen modal - rendered via portal to document.body */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 backdrop-blur-md z-[400]"
                onClick={() => {
                  setIsMaxZoom(false);
                  setIsOpen(false);
                }}
              />

              {/* Image container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-0 z-[401] flex items-center justify-center p-8"
                onClick={() => {
                  setIsMaxZoom(false);
                  setIsOpen(false);
                }}
              >
                <div className="relative max-w-6xl max-h-full">
                  {/* Close button */}
                  <button
                    onClick={() => {
                      setIsMaxZoom(false);
                      setIsOpen(false);
                    }}
                    className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                  >
                    <X className="size-6 text-white" />
                  </button>

                  {/* Zoomed image with second zoom level */}
                  <motion.div
                    className="relative group cursor-zoom-in"
                    animate={{ scale: isMaxZoom ? 1.5 : 1 }}
                    transition={{ type: "spring", damping: 20, stiffness: 200 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMaxZoom(!isMaxZoom);
                    }}
                  >
                    <img
                      src={src}
                      alt={alt}
                      className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                    />
                    {!isMaxZoom && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-black/60 backdrop-blur-sm rounded-full p-3">
                          <ZoomIn className="size-6 text-white" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}