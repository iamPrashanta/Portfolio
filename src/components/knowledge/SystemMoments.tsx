import React from "react";
import { Section } from "@/components/ui/section";

interface SystemMomentsProps {
  moments: Array<{
    title: string;
    whatHappened: string;
    principle: string;
    lesson: string;
    usageToday: string;
  }>;
}

export function SystemMoments({ moments }: SystemMomentsProps) {
  return (
    <Section className="py-12 border-b border-border/50 bg-surface-muted/30 -mx-4 px-4 md:-mx-8 md:px-8 rounded-xl my-12">
      <div className="mb-12 max-w-3xl">
        <h3 className="text-sm font-semibold tracking-wider text-accent uppercase mb-4">
          System Moments
        </h3>
        <p className="text-xl text-foreground font-medium">
          When Computer Science Became Important
        </p>
        <p className="text-muted text-sm mt-2">
          Engineering turning points and historical incidents that shaped how we build systems today.
        </p>
      </div>

      <div className="space-y-12">
        {moments.map((moment, idx) => (
          <div key={idx} className="relative pl-8 md:pl-0 border-l border-border/50 md:border-l-0">
            {/* Timeline marker for mobile */}
            <div className="absolute left-0 top-0 w-3 h-3 bg-accent rounded-full -ml-[6px] md:hidden mt-1.5" />
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Side: Title & What Happened */}
              <div className="flex-1 md:pr-8 md:border-r border-border/50 relative">
                {/* Timeline marker for desktop */}
                <div className="hidden md:block absolute right-0 top-0 w-3 h-3 bg-accent rounded-full -mr-[6px] mt-1.5" />
                
                <h4 className="text-lg font-bold text-foreground mb-4 uppercase tracking-widest">
                  {moment.title}
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-muted uppercase block mb-1">
                      What Happened
                    </span>
                    <p className="text-sm text-muted leading-relaxed">
                      {moment.whatHappened}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Principle, Lesson, Usage Today */}
              <div className="flex-1 space-y-6 md:pl-8 pt-4 md:pt-0">
                <div className="bg-surface border border-border p-4 rounded text-sm">
                  <span className="text-[10px] font-bold tracking-widest text-accent uppercase block mb-2">
                    The Technical Principle
                  </span>
                  <p className="text-foreground font-medium">
                    {moment.principle}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-widest text-muted uppercase block mb-1">
                    The Lesson
                  </span>
                  <p className="text-sm text-muted leading-relaxed">
                    {moment.lesson}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-widest text-muted uppercase block mb-1">
                    Where We See It Today
                  </span>
                  <p className="text-sm text-muted leading-relaxed">
                    {moment.usageToday}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
