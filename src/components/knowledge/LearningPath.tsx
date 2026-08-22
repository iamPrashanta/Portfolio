import React from "react";
import { Section } from "@/components/ui/section";

interface LearningPathProps {
  path: Array<{
    phase: string;
    title: string;
    description: string;
    topics: string[];
  }>;
}

export function LearningPath({ path }: LearningPathProps) {
  return (
    <Section className="py-12">
      <div className="mb-12 max-w-3xl">
        <h3 className="text-sm font-semibold tracking-wider text-accent uppercase mb-4">
          Suggested Learning Journey
        </h3>
        <p className="text-xl text-foreground font-medium">
          A Path Through the Ecosystem
        </p>
        <p className="text-muted text-sm mt-2 leading-relaxed">
          The recommended progression for building a deep, interconnected understanding of the field.
        </p>
      </div>

      <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border/50 before:to-transparent">
        {path.map((phase, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active py-8">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-surface-muted shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-accent group-hover:border-accent/20">
              <span className="text-[10px] font-bold text-muted-foreground group-hover:text-background">{phase.phase.replace("PHASE ", "")}</span>
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface border border-border p-6 rounded-[var(--radius-default)] transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-md">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase block mb-2">
                {phase.phase}
              </span>
              <h4 className="text-lg font-bold text-foreground mb-2">
                {phase.title}
              </h4>
              <p className="text-sm text-muted mb-4 leading-relaxed">
                {phase.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {phase.topics.map((topic, i) => (
                  <span key={i} className="text-[10px] font-mono text-muted-foreground bg-surface-muted px-2 py-1 rounded border border-border/30">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
