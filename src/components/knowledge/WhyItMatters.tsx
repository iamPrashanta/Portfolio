import React from "react";
import { Section } from "@/components/ui/section";

interface WhyItMattersProps {
  items: Array<{
    concept: string;
    practicalExamples: string[];
  }>;
}

export function WhyItMatters({ items }: WhyItMattersProps) {
  return (
    <Section className="py-12 border-b border-border/50">
      <div className="mb-12 max-w-3xl">
        <h3 className="text-sm font-semibold tracking-wider text-accent uppercase mb-4">
          Why This Matters
        </h3>
        <p className="text-xl text-foreground font-medium">
          Theory in Practice
        </p>
        <p className="text-muted text-sm mt-2 leading-relaxed">
          How foundational concepts directly enable the technology we use every day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="bg-surface border border-border p-6 rounded-[var(--radius-default)]">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
              {item.concept}
            </h4>
            <div className="space-y-3">
              {item.practicalExamples.map((example, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-accent mt-0.5">→</span>
                  <p className="text-sm text-muted leading-relaxed">{example}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
