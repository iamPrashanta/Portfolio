import React from "react";
import { Section } from "@/components/ui/section";

interface ConceptChainProps {
  chains: Array<{
    title: string;
    chain: string[];
  }>;
}

export function ConceptChain({ chains }: ConceptChainProps) {
  return (
    <Section className="py-12 border-b border-border/50">
      <div className="mb-12 max-w-3xl">
        <h3 className="text-sm font-semibold tracking-wider text-accent uppercase mb-4">
          How Concepts Connect
        </h3>
        <p className="text-muted text-sm leading-relaxed">
          Understanding the flow of information and architecture from the highest abstraction down to the metal, or from user interaction to database storage.
        </p>
      </div>

      <div className="space-y-16">
        {chains.map((chainData, idx) => (
          <div key={idx}>
            <h4 className="text-xs font-mono text-muted uppercase tracking-widest border-b border-border/50 pb-2 mb-8">
              {chainData.title}
            </h4>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 w-full">
              {chainData.chain.map((concept, conceptIdx) => (
                <React.Fragment key={conceptIdx}>
                  {/* The Concept Node */}
                  <div className="flex-1 bg-surface border border-border px-4 py-3 rounded text-center shadow-sm w-full md:w-auto">
                    <span className="text-sm font-medium text-foreground">{concept}</span>
                  </div>

                  {/* The Connector Arrow (Down on mobile, Right on desktop) */}
                  {conceptIdx < chainData.chain.length - 1 && (
                    <div className="text-muted/50 shrink-0 flex items-center justify-center">
                      <span className="hidden md:inline-block">→</span>
                      <span className="inline-block md:hidden">↓</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
