import * as React from "react";
import { Skill } from "@/data/skills";

interface SkillUnderTheHoodProps {
  skill: Skill;
}

export function SkillUnderTheHood({ skill }: SkillUnderTheHoodProps) {
  if (!skill.content?.underTheHood || skill.content.underTheHood.length === 0) return null;

  return (
    <div className="flex flex-col gap-12 pt-16 border-t border-neutral-200">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-neutral-400">06 — UNDER THE HOOD</span>
        <h2 className="text-3xl font-medium text-foreground tracking-tight">How it works</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {skill.content.underTheHood.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-3 p-8 rounded-[16px] bg-neutral-900 text-white border border-neutral-800">
            <h4 className="text-xl font-medium text-white">{item.title}</h4>
            <p className="text-neutral-400 text-lg leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
