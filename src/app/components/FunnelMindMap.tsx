import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ZoomOut, Maximize2, ChevronRight, CheckCircle2 } from "lucide-react";
import { HARD_SELL_NESTED_ITEMS } from "./HARD_SELL_ENHANCED";
import { STEP1_AND_2_MERGED } from "./STEP1_AND_2_MERGED";
import { STEP2_V2_NESTED_ITEMS } from "./STEP2_V2_NESTED";
import { STEP3_NESTED_ITEMS } from "./STEP3_NESTED_ITEMS";
import { STEP4_NESTED_ITEMS } from "./STEP4_NESTED_ITEMS";
import { STEP5_NESTED_ITEMS } from "./STEP5_ENHANCED";
import { STEP6_NESTED_ITEMS } from "./STEP6_NESTED_ITEMS";
import { STEP7_NESTED_ITEMS } from "./STEP7_NESTED_ITEMS";
import { STEP8_NESTED_ITEMS } from "./STEP8_BRANCH_POINT";
import { STEP9_NESTED_ITEMS } from "./STEP9_NESTED_ITEMS";

interface MindMapNode {
  id: string;
  title: string;
  x: number;
  y: number;
  color: string;
  icon?: string;
  description?: string;
  phase?: string;
  price?: string;
  children?: MindMapNode[];
}

const mindMapData: MindMapNode = {
  id: "center",
  title: "OnlyFans Milking System",
  x: 0,
  y: 0,
  color: "#A855F7",
  icon: "💎",
  description: "The complete $0 to $2500+ sales funnel",
  children: [
    {
      id: "phase1",
      title: "Phase 1: Engagement",
      x: -500,
      y: -300,
      color: "#3B6EEB",
      icon: "🎯",
      phase: "Foundation Building",
      children: [
        {
          id: "step1",
          title: "STEP 1: Know Your Client",
          x: -800,
          y: -450,
          color: "#3B6EEB",
          description: "Build trust before selling",
          price: "$0"
        }
      ]
    },
    {
      id: "phase2",
      title: "Phase 2: Escalation",
      x: 0,
      y: -450,
      color: "#F5A524",
      icon: "🔥",
      phase: "Value Ladder Climb",
      children: [
        {
          id: "step2",
          title: "STEP 2: Exclusivity Bridge",
          x: -250,
          y: -650,
          color: "#F5A524",
          description: "Transaction to Investment",
          price: "$35"
        },
        {
          id: "step3",
          title: "STEP 3: Shared Reality",
          x: 250,
          y: -650,
          color: "#EF4444",
          description: "Intimacy to Immersion",
          price: "$55"
        },
        {
          id: "step4",
          title: "STEP 4: High-Tier Access",
          x: 0,
          y: -750,
          color: "#B91C1C",
          description: "Emotional Significance",
          price: "$115"
        }
      ]
    },
    {
      id: "phase3",
      title: "Phase 3: The Finale",
      x: 500,
      y: -300,
      color: "#7A4AE6",
      icon: "👑",
      phase: "Whale Confirmation",
      children: [
        {
          id: "step5",
          title: "STEP 5: Ultimate Scarcity",
          x: 800,
          y: -550,
          color: "#7A4AE6",
          description: "Singular Access",
          price: "$195"
        },
        {
          id: "step6",
          title: "STEP 6: Trust Vault",
          x: 800,
          y: -350,
          color: "#9333EA",
          description: "Gratitude Framing",
          price: "$200"
        }
      ]
    },
    {
      id: "phase4",
      title: "Phase 4: Milking",
      x: 0,
      y: 300,
      color: "#F59E0B",
      icon: "🏆",
      phase: "Giga Whale Territory",
      children: [
        {
          id: "step7",
          title: "STEP 7: Giga Whale Finale",
          x: -400,
          y: 500,
          color: "#F59E0B",
          description: "Capacity Test",
          price: "$400"
        },
        {
          id: "step8",
          title: "STEP 8: Branch Point",
          x: 0,
          y: 550,
          color: "#A855F7",
          description: "Three Paths",
          price: "$900-$2500+"
        },
        {
          id: "step9",
          title: "STEP 9: 45-Second Rule",
          x: 400,
          y: 500,
          color: "#DC2626",
          description: "Timing is Everything",
          price: "⚠️"
        }
      ]
    }
  ]
};

export function FunnelMindMap() {
  const [zoom, setZoom] = useState(0.7);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.3));
  const handleReset = () => {
    setZoom(0.7);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".mind-map-node")) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const renderConnections = (node: MindMapNode, parentX: number, parentY: number) => {
    if (!node.children) return null;

    return node.children.map((child) => {
      const childX = parentX + child.x;
      const childY = parentY + child.y;

      return (
        <g key={`connection-${node.id}-${child.id}`}>
          <motion.line
            x1={parentX}
            y1={parentY}
            x2={childX}
            y2={childY}
            stroke={child.color}
            strokeWidth="3"
            strokeOpacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          {renderConnections(child, childX, childY)}
        </g>
      );
    });
  };

  const renderNodes = (node: MindMapNode, parentX: number = 0, parentY: number = 0) => {
    const nodeX = parentX + node.x;
    const nodeY = parentY + node.y;
    const isCenter = node.id === "center";
    const isPhase = node.id.startsWith("phase");
    const isSelected = selectedNode === node.id;

    const nodeSize = isCenter ? 180 : isPhase ? 140 : 120;

    return (
      <g key={node.id}>
        <motion.g
          className="mind-map-node cursor-pointer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: isCenter ? 0 : 0.3 }}
          onClick={() => setSelectedNode(isSelected ? null : node.id)}
        >
          {/* Glow effect */}
          <motion.circle
            cx={nodeX}
            cy={nodeY}
            r={nodeSize / 2 + 10}
            fill={node.color}
            opacity="0.2"
            animate={{
              r: isSelected ? nodeSize / 2 + 20 : nodeSize / 2 + 10,
              opacity: isSelected ? 0.3 : 0.2,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Main node circle */}
          <motion.circle
            cx={nodeX}
            cy={nodeY}
            r={nodeSize / 2}
            fill={node.color}
            stroke="white"
            strokeWidth={isCenter ? 4 : isPhase ? 3 : 2}
            strokeOpacity={0.8}
            animate={{
              scale: isSelected ? 1.1 : 1,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />

          {/* Icon */}
          {node.icon && (
            <text
              x={nodeX}
              y={nodeY - 15}
              textAnchor="middle"
              fontSize={isCenter ? "40" : isPhase ? "30" : "25"}
              style={{ userSelect: "none" }}
            >
              {node.icon}
            </text>
          )}

          {/* Title */}
          <text
            x={nodeX}
            y={nodeY + (node.icon ? 15 : 5)}
            textAnchor="middle"
            fill="white"
            fontSize={isCenter ? "16" : isPhase ? "14" : "12"}
            fontWeight="bold"
            style={{ userSelect: "none" }}
          >
            {node.title.length > 20 && !isCenter
              ? node.title.substring(0, 20) + "..."
              : node.title}
          </text>

          {/* Price tag for steps */}
          {node.price && !isPhase && (
            <text
              x={nodeX}
              y={nodeY + 35}
              textAnchor="middle"
              fill="#FFD700"
              fontSize="11"
              fontWeight="bold"
              style={{ userSelect: "none" }}
            >
              {node.price}
            </text>
          )}

          {/* Description for phases */}
          {node.phase && (
            <text
              x={nodeX}
              y={nodeY + 30}
              textAnchor="middle"
              fill="rgba(255, 255, 255, 0.7)"
              fontSize="10"
              style={{ userSelect: "none" }}
            >
              {node.phase}
            </text>
          )}
        </motion.g>

        {node.children?.map((child) => renderNodes(child, nodeX, nodeY))}
      </g>
    );
  };

  const getAllNodes = (node: MindMapNode, parentX = 0, parentY = 0): Array<MindMapNode & { absX: number; absY: number }> => {
    const nodeX = parentX + node.x;
    const nodeY = parentY + node.y;
    
    let nodes = [{ ...node, absX: nodeX, absY: nodeY }];
    
    if (node.children) {
      node.children.forEach((child) => {
        nodes = [...nodes, ...getAllNodes(child, nodeX, nodeY)];
      });
    }
    
    return nodes;
  };

  const selectedNodeData = selectedNode ? getAllNodes(mindMapData).find(n => n.id === selectedNode) : null;

  // Get detailed content for steps
  const getStepDetails = (stepId: string) => {
    const stepDataMap: Record<string, any> = {
      step1: STEP1_AND_2_MERGED,
      step2: STEP2_V2_NESTED_ITEMS,
      step3: STEP3_NESTED_ITEMS,
      step4: STEP4_NESTED_ITEMS,
      step5: STEP5_NESTED_ITEMS,
      step6: STEP6_NESTED_ITEMS,
      step7: STEP7_NESTED_ITEMS,
      step8: STEP8_NESTED_ITEMS,
      step9: STEP9_NESTED_ITEMS,
    };
    return stepDataMap[stepId] || null;
  };

  const stepDetails = selectedNode && selectedNode.startsWith('step') ? getStepDetails(selectedNode) : null;

  return (
    <div className="fixed inset-0 bg-slate-950 z-50">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-900/95 to-transparent backdrop-blur-sm z-20 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white text-2xl font-bold mb-1">The Complete Milking System</h1>
            <p className="text-slate-400 text-sm">$0 to $2500+ Journey Visualization</p>
          </div>
          <button
            onClick={() => window.history.back()}
            className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-white transition-all"
          >
            <X className="size-6" />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute top-24 right-6 z-20 flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-white transition-all backdrop-blur-sm"
          title="Zoom In"
        >
          <ZoomIn className="size-5" />
        </button>
        <button
          onClick={handleZoomOut}
          className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-white transition-all backdrop-blur-sm"
          title="Zoom Out"
        >
          <ZoomOut className="size-5" />
        </button>
        <button
          onClick={handleReset}
          className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-white transition-all backdrop-blur-sm"
          title="Reset View"
        >
          <Maximize2 className="size-5" />
        </button>
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 left-6 z-20 bg-slate-900/90 backdrop-blur-sm rounded-xl p-4 text-white">
        <h3 className="text-sm font-bold mb-3 text-slate-300">REVENUE PHASES</h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ background: "#3B6EEB" }} />
            <span>Phase 1: Engagement ($0)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ background: "#F5A524" }} />
            <span>Phase 2: Escalation ($35-$115)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ background: "#7A4AE6" }} />
            <span>Phase 3: Finale ($195-$200)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ background: "#F59E0B" }} />
            <span>Phase 4: Milking ($400-$2500+)</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-700">
          <p className="text-slate-400 text-xs italic">Click nodes for details • Drag to pan</p>
        </div>
      </div>

      {/* SVG Canvas */}
      <div
        className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg
          width="100%"
          height="100%"
          style={{
            background: "radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)",
          }}
        >
          <g transform={`translate(${position.x}, ${position.y}) scale(${zoom})`}>
            <g transform="translate(960, 540)">
              {/* Render connections first */}
              {renderConnections(mindMapData, 0, 0)}
              
              {/* Render nodes on top */}
              {renderNodes(mindMapData)}
            </g>
          </g>
        </svg>
      </div>

      {/* Detail Panel */}
      <AnimatePresence>
        {selectedNodeData && stepDetails && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="absolute top-0 right-0 bottom-0 w-[600px] bg-slate-900/98 backdrop-blur-xl z-40 overflow-y-auto border-l-2"
            style={{ borderColor: selectedNodeData.color }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm p-6 border-b border-slate-700 z-10">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {selectedNodeData.icon && (
                    <span className="text-5xl">{selectedNodeData.icon}</span>
                  )}
                  <div>
                    <h2 className="text-white font-bold text-2xl">{selectedNodeData.title}</h2>
                    {selectedNodeData.price && (
                      <p className="text-yellow-400 text-lg font-bold mt-1">{selectedNodeData.price}</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-white transition-all"
                >
                  <X className="size-6" />
                </button>
              </div>
              {selectedNodeData.description && (
                <p className="text-slate-300">{selectedNodeData.description}</p>
              )}
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {stepDetails.map((item: any, index: number) => (
                <motion.div
                  key={item.label || `item-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl p-6"
                  style={{
                    background: `linear-gradient(135deg, ${selectedNodeData.color}15 0%, ${selectedNodeData.color}05 100%)`,
                    border: `1px solid ${selectedNodeData.color}40`,
                  }}
                >
                  {/* Label/Title */}
                  {item.label && (
                    <h3 className="text-white font-bold text-lg mb-4 pb-3 border-b border-slate-700/50">
                      {item.label}
                    </h3>
                  )}

                  {/* JSX Content */}
                  {item.content && (
                    <div className="prose-invert max-w-none [&_p]:text-slate-200 [&_p]:opacity-100 [&_li]:text-slate-200 [&_li]:opacity-100 [&_div]:text-slate-200 [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_strong]:text-white [&_span]:opacity-100">
                      {item.content}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Basic info panel for phases and center */}
        {selectedNodeData && !stepDetails && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="absolute top-24 right-24 w-80 bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 z-30 border-2"
            style={{ borderColor: selectedNodeData.color }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                {selectedNodeData.icon && (
                  <span className="text-4xl">{selectedNodeData.icon}</span>
                )}
                <div>
                  <h3 className="text-white font-bold text-lg">{selectedNodeData.title}</h3>
                  {selectedNodeData.price && (
                    <p className="text-yellow-400 text-sm font-bold mt-1">{selectedNodeData.price}</p>
                  )}
                </div>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>
            
            {selectedNodeData.description && (
              <p className="text-slate-300 text-sm mb-3">{selectedNodeData.description}</p>
            )}
            
            {selectedNodeData.phase && (
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Phase Type</p>
                <p className="text-white text-sm">{selectedNodeData.phase}</p>
              </div>
            )}
            
            {selectedNodeData.children && selectedNodeData.children.length > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">Contains</p>
                <div className="space-y-1">
                  {selectedNodeData.children.map((child) => (
                    <div
                      key={child.id}
                      className="text-sm text-slate-300 flex items-center gap-2 cursor-pointer hover:text-white transition-colors"
                      onClick={() => setSelectedNode(child.id)}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ background: child.color }} />
                      {child.title}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}