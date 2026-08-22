"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface NodeData {
  id: string;
  label: string;
  dependsOn?: string[];
  enables?: string[];
  usedIn?: string[];
}

interface DomainData {
  id: string;
  title: string;
  nodes: NodeData[];
}

interface KnowledgeMapProps {
  domains: DomainData[];
}

export function KnowledgeMap({ domains }: KnowledgeMapProps) {
  const [activeNode, setActiveNode] = useState<NodeData | null>(null);

  return (
    <Section className="py-12 border-b border-border/50">
      <div className="mb-10">
        <h3 className="text-sm font-semibold tracking-wider text-accent uppercase mb-2">
          Knowledge Map
        </h3>
        <p className="text-muted text-sm max-w-2xl">
          Hover over concepts to see their dependencies, what they enable, and where they are used.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Graph Area */}
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((domain) => (
            <div key={domain.id} className="space-y-4">
              <h4 className="text-xs font-mono text-muted uppercase tracking-widest border-b border-border/50 pb-2">
                {domain.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {domain.nodes.map((node) => (
                  <button
                    key={node.id}
                    onMouseEnter={() => setActiveNode(node)}
                    onMouseLeave={() => setActiveNode(null)}
                    className={cn(
                      "text-xs px-3 py-1.5 rounded-full border transition-all duration-300",
                      activeNode?.id === node.id
                        ? "bg-foreground text-background border-foreground shadow-md"
                        : "bg-surface border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
                    )}
                  >
                    {node.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Details Panel */}
        <div className="w-full lg:w-80 shrink-0 bg-surface border border-border rounded-[var(--radius-default)] p-6 min-h-[300px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeNode ? (
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <h4 className="text-lg font-medium text-foreground border-b border-border/50 pb-3">
                  {activeNode.label}
                </h4>

                {activeNode.dependsOn && activeNode.dependsOn.length > 0 && (
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted mb-2 block">
                      Depends On
                    </span>
                    <ul className="space-y-1">
                      {activeNode.dependsOn.map((dep, i) => (
                        <li key={i} className="text-sm text-foreground flex items-center gap-2">
                          <span className="text-accent text-[10px]">↳</span> {dep}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeNode.enables && activeNode.enables.length > 0 && (
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted mb-2 block">
                      Enables
                    </span>
                    <ul className="space-y-1">
                      {activeNode.enables.map((en, i) => (
                        <li key={i} className="text-sm text-foreground flex items-center gap-2">
                          <span className="text-accent text-[10px]">↳</span> {en}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeNode.usedIn && activeNode.usedIn.length > 0 && (
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted mb-2 block">
                      Used In
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeNode.usedIn.map((use, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-1 bg-surface-muted rounded text-muted-foreground border border-border/30">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center text-center p-6"
              >
                <p className="text-sm text-muted">
                  Hover over a concept in the map to explore its relationships.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
