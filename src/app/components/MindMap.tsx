import { useState, useRef } from "react";
import { motion } from "motion/react";
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

interface MindMapNode {
  id: string;
  title: string;
  x: number;
  y: number;
  color?: string;
  icon?: string;
  children?: MindMapNode[];
}

interface MindMapProps {
  data: MindMapNode;
  className?: string;
  onNodeClick?: (nodeId: string) => void;
}

export function MindMap({ data, className = "", onNodeClick }: MindMapProps) {
  const [scale, setScale] = useState(0.8);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    const newScale = Math.min(Math.max(0.3, scale + delta), 2);
    setScale(newScale);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).closest('.mind-map-svg')) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const zoomIn = () => setScale(Math.min(scale + 0.2, 2));
  const zoomOut = () => setScale(Math.max(scale - 0.2, 0.3));
  const resetView = () => {
    setScale(0.8);
    setPosition({ x: 0, y: 0 });
  };

  // Function to render curved lines between nodes
  const renderConnection = (from: MindMapNode, to: MindMapNode) => {
    const controlPointX = (from.x + to.x) / 2;
    const controlPointY = Math.min(from.y, to.y) - 50;
    
    return (
      <path
        d={`M ${from.x} ${from.y} Q ${controlPointX} ${controlPointY} ${to.x} ${to.y}`}
        stroke={to.color || "#60A5FA"}
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
    );
  };

  // Collect all connections
  const collectConnections = (node: MindMapNode): JSX.Element[] => {
    const connections: JSX.Element[] = [];
    
    if (node.children) {
      node.children.forEach((child) => {
        connections.push(
          <g key={`connection-${node.id}-${child.id}`}>
            {renderConnection(node, child)}
          </g>
        );
        connections.push(...collectConnections(child));
      });
    }
    
    return connections;
  };

  // Collect all nodes
  const collectNodes = (node: MindMapNode): JSX.Element[] => {
    const nodes: JSX.Element[] = [];

    // Render node
    nodes.push(
      <motion.g
        key={node.id}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.rect
          x={node.x - 100}
          y={node.y - 25}
          width="200"
          height="50"
          rx="25"
          fill={node.color || "#60A5FA"}
          className="cursor-pointer"
          whileHover={{ filter: "brightness(1.2)" }}
          onClick={() => onNodeClick && onNodeClick(node.id)}
        />
        <text
          x={node.x}
          y={node.y}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="13"
          fontWeight="600"
          className="pointer-events-none select-none"
          style={{ maxWidth: "180px" }}
        >
          {node.icon && <tspan fontSize="16">{node.icon} </tspan>}
          {node.title.length > 35 ? node.title.substring(0, 35) + "..." : node.title}
        </text>
      </motion.g>
    );

    // Recursively collect child nodes
    if (node.children) {
      node.children.forEach((child) => {
        nodes.push(...collectNodes(child));
      });
    }

    return nodes;
  };

  return (
    <div className={`relative bg-slate-900/30 rounded-xl overflow-hidden border border-slate-700/50 ${className}`}>
      {/* Controls */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button
          onClick={zoomIn}
          className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 backdrop-blur-sm transition-colors"
          title="Zoom In"
        >
          <ZoomIn className="size-4 text-slate-300" />
        </button>
        <button
          onClick={zoomOut}
          className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 backdrop-blur-sm transition-colors"
          title="Zoom Out"
        >
          <ZoomOut className="size-4 text-slate-300" />
        </button>
        <button
          onClick={resetView}
          className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 backdrop-blur-sm transition-colors"
          title="Reset View"
        >
          <Maximize2 className="size-4 text-slate-300" />
        </button>
      </div>

      {/* Zoom indicator */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-600/50 backdrop-blur-sm">
        <span className="text-xs text-slate-300 font-medium">{Math.round(scale * 100)}%</span>
      </div>

      {/* Instruction hint */}
      <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-600/30 backdrop-blur-sm">
        <span className="text-xs text-slate-400">Drag to pan • Click nodes to explore</span>
      </div>

      {/* Mind map canvas */}
      <div
        ref={containerRef}
        className={`w-full h-full ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg
          className="mind-map-svg w-full h-full"
          style={{
            minHeight: "500px",
          }}
        >
          <motion.g
            animate={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            style={{ transformOrigin: "center center" }}
          >
            {/* Center the content */}
            <g transform="translate(400, 300)">
              {collectConnections(data)}
              {collectNodes(data)}
            </g>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}