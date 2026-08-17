import * as React from "react";
import { Skill } from "@/data/skills";

interface SkillHistoryProps {
  skill: Skill;
}

export function SkillHistory({ skill }: SkillHistoryProps) {
  if (!skill.content?.history || skill.content.history.length === 0) return null;

  return (
    <div className="flex flex-col gap-12 pt-16 border-t border-neutral-200">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-neutral-400">02 — HISTORY</span>
        <h2 className="text-3xl font-medium text-foreground tracking-tight">From the first release to today</h2>
      </div>

      <div className="flex flex-col gap-0 max-w-3xl">
        {skill.content.history.map((item, idx) => (
          <div key={idx} className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-6 group">
            <div className="flex flex-col items-start relative pt-4 pb-8 border-r border-neutral-200 group-last:border-transparent pr-6">
              <span className="text-sm font-bold text-accent">{item.year}</span>
              <div className="absolute right-[-4px] top-5 w-2 h-2 rounded-full bg-neutral-200 group-hover:bg-accent transition-colors" />
            </div>
            <div className="flex flex-col gap-1 pt-3 pb-8">
              <h4 className="text-lg font-medium text-foreground">{item.title}</h4>
              <p className="text-muted text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
