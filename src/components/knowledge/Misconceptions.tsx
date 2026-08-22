import React from "react";
import { Section } from "@/components/ui/section";

interface MisconceptionsProps {
  items: Array<{
    myth: string;
    reality: string;
  }>;
}

export function Misconceptions({ items }: MisconceptionsProps) {
  return (
    <Section className="py-12 border-b border-border/50">
      <div className="mb-12 max-w-3xl">
        <h3 className="text-sm font-semibold tracking-wider text-accent uppercase mb-4">
          Common Misconceptions
        </h3>
        <p className="text-xl text-foreground font-medium">
          Myth vs Reality
        </p>
        <p className="text-muted text-sm mt-2 leading-relaxed">
          Technically useful corrections to common misunderstandings in the field.
        </p>
      </div>

      <div className="space-y-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-8 bg-surface border border-border p-6 rounded-[var(--radius-default)] items-start">
            <div className="flex-1 md:border-r border-border/50 md:pr-8">
              <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase block mb-2">
                Myth
              </span>
              <p className="text-sm text-foreground font-medium italic">
                &quot;{item.myth}&quot;
              </p>
            </div>
            
            <div className="flex-[2]">
              <span className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase block mb-2">
                Reality
              </span>
              <p className="text-sm text-muted leading-relaxed">
                {item.reality}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
