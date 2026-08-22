import React from "react";
import { Section } from "@/components/ui/section";

interface LearningContextProps {
  intro: string;
  pillars: Array<{ title: string; description: string; id: string }>;
}

export function LearningContext({ intro, pillars }: LearningContextProps) {
  return (
    <Section className="py-12 border-b border-border/50">
      <div className="max-w-3xl mb-12">
        <h3 className="text-sm font-semibold tracking-wider text-accent uppercase mb-4">
          What we really study
        </h3>
        <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
          {intro}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pillars.map((pillar) => (
          <div key={pillar.id} className="group relative">
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 group-hover:scale-150 transition-transform" />
              <div>
                <h4 className="text-sm font-bold tracking-widest text-foreground uppercase mb-2">
                  [ {pillar.title} ]
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
