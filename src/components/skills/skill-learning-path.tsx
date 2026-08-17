import * as React from "react";
import { Skill } from "@/data/skills";

interface SkillLearningPathProps {
  skill: Skill;
}

export function SkillLearningPath({ skill }: SkillLearningPathProps) {
  if (!skill.content?.learningPath || skill.content.learningPath.length === 0) return null;

  return (
    <div className="flex flex-col gap-12 pt-16 border-t border-neutral-200">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-neutral-400">05 — LEARNING PATH</span>
        <h2 className="text-3xl font-medium text-foreground tracking-tight">How I Learn This</h2>
      </div>

      <div className="flex flex-col gap-4">
        {skill.content.learningPath.map((item, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 p-6 rounded-[12px] bg-neutral-50 border border-neutral-200">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 text-white font-medium text-lg shrink-0">
              {item.step}
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <h4 className="text-xl font-medium text-foreground">{item.title}</h4>
              <p className="text-muted text-base leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
