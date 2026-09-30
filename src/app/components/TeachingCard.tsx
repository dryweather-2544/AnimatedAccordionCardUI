import { useState } from "react";
import { ChevronDown, ChevronRight, Play } from "lucide-react";

interface Slide {
  title: string;
  content: string;
  type?: "principle" | "example" | "warning" | "script";
}

interface TeachingCardProps {
  title: string;
  icon: React.ReactNode;
  accentColor: string;
  hook: string;
  slides: Slide[];
  keyTakeaways: string[];
  phase?: string;
  totalPhases?: number;
}

export function TeachingCard({
  title,
  icon,
  accentColor,
  hook,
  slides,
  keyTakeaways,
  phase,
  totalPhases,
}: TeachingCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showingSlides, setShowingSlides] = useState(false);

  const handleStartLesson = () => {
    setShowingSlides(true);
    setCurrentSlide(0);
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div
      className="rounded-2xl transition-all duration-300"
      style={{
        background: "rgba(15, 23, 42, 0.4)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
      }}
    >
      {/* Card Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-colors rounded-t-2xl"
      >
        <div className="flex items-center gap-4">
          <div
            className="p-2.5 rounded-xl"
            style={{
              background: accentColor,
              opacity: 0.9,
            }}
          >
            {icon}
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {title}
            </h3>
            {phase && totalPhases && (
              <p className="text-xs text-slate-400 mt-1">
                Phase {phase} of {totalPhases}
              </p>
            )}
          </div>
        </div>
        {isExpanded ? (
          <ChevronDown className="size-5 text-slate-400" />
        ) : (
          <ChevronRight className="size-5 text-slate-400" />
        )}
      </button>

      {/* Card Content */}
      {isExpanded && (
        <div className="px-6 pb-6">
          {/* Hook Section */}
          <div
            className="rounded-xl p-5 mb-6"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              borderLeft: `3px solid ${accentColor}`,
            }}
          >
            <p className="text-sm text-slate-300 leading-relaxed opacity-90">
              {hook}
            </p>
          </div>

          {!showingSlides ? (
            <button
              onClick={handleStartLesson}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-white transition-all hover:scale-[1.02]"
              style={{
                background: accentColor,
              }}
            >
              <Play className="size-5" />
              START LESSON
            </button>
          ) : (
            <>
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-slate-400 tracking-wide">
                    SLIDE {currentSlide + 1} OF {slides.length}
                  </p>
                  <p className="text-xs text-slate-400">
                    {Math.round(((currentSlide + 1) / slides.length) * 100)}%
                  </p>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-300 rounded-full"
                    style={{
                      width: `${((currentSlide + 1) / slides.length) * 100}%`,
                      background: accentColor,
                    }}
                  />
                </div>
              </div>

              {/* Slide Content */}
              <div
                className="rounded-xl p-6 mb-6 min-h-[300px]"
                style={{
                  background: "rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <h4 className="text-2xl font-bold text-white mb-4">
                  {currentSlideData.title}
                </h4>

                {currentSlideData.type === "script" && (
                  <div
                    className="rounded-lg p-4 mb-4"
                    style={{
                      background: "rgba(251, 191, 36, 0.1)",
                      border: "1px solid rgba(251, 191, 36, 0.3)",
                    }}
                  >
                    <p className="text-xs font-bold text-yellow-400 mb-2 tracking-wider">
                      🟡 SAY THIS:
                    </p>
                  </div>
                )}

                {currentSlideData.type === "warning" && (
                  <div
                    className="rounded-lg p-4 mb-4"
                    style={{
                      background: "rgba(239, 68, 68, 0.1)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                    }}
                  >
                    <p className="text-xs font-bold text-red-400 mb-2 tracking-wider">
                      ⚠️ AVOID THIS:
                    </p>
                  </div>
                )}

                {currentSlideData.type === "example" && (
                  <div
                    className="rounded-lg p-4 mb-4"
                    style={{
                      background: "rgba(59, 130, 246, 0.1)",
                      border: "1px solid rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    <p className="text-xs font-bold text-blue-400 mb-2 tracking-wider">
                      💡 EXAMPLE:
                    </p>
                  </div>
                )}

                <div
                  className="text-base text-slate-300 leading-relaxed whitespace-pre-line"
                  style={{ opacity: 0.85 }}
                  dangerouslySetInnerHTML={{ __html: currentSlideData.content }}
                />
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  disabled={currentSlide === 0}
                  className="flex-1 px-6 py-3 rounded-xl font-semibold text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  PREVIOUS
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentSlide === slides.length - 1}
                  className="flex-1 px-6 py-3 rounded-xl font-semibold text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{
                    background: accentColor,
                  }}
                >
                  {currentSlide === slides.length - 1 ? "COMPLETE" : "NEXT"}
                </button>
              </div>
            </>
          )}

          {/* Key Takeaways */}
          {showingSlides && currentSlide === slides.length - 1 && (
            <div
              className="rounded-xl p-5 mt-6"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <p className="text-xs font-bold text-slate-400 mb-3 tracking-wider">
                KEY TAKEAWAYS:
              </p>
              <ul className="space-y-2">
                {keyTakeaways.map((takeaway, index) => (
                  <li
                    key={index}
                    className="text-sm text-slate-300 flex items-start gap-3"
                  >
                    <span
                      className="size-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: accentColor }}
                    />
                    {takeaway}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
