import * as React from "react";
import { Skill } from "@/data/skills";
import { CheckCircle2 } from "lucide-react";

interface SkillProblemSolvedProps {
  skill: Skill;
}

export function SkillProblemSolved({ skill }: SkillProblemSolvedProps) {
  if (!skill.content?.problemSolved) return null;
  const { title, description, problems } = skill.content.problemSolved;

  return (
    <div className="flex flex-col gap-12 pt-16 border-t border-neutral-200">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-neutral-400">03 — WHY IT EXISTS</span>
        <h2 className="text-3xl font-medium text-foreground tracking-tight">{title}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="prose prose-neutral max-w-none text-muted text-lg leading-relaxed">
          <p>{description}</p>
        </div>
        
        <div className="bg-neutral-50 p-8 rounded-[16px] border border-neutral-200">
          <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-6">Problems Solved</h4>
          <ul className="flex flex-col gap-4">
            {problems.map((prob, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                <span className="text-foreground leading-relaxed">{prob}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
