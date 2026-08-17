import * as React from "react";
import { Skill } from "@/data/skills";

interface SkillCodingStyleProps {
  skill: Skill;
}

export function SkillCodingStyle({ skill }: SkillCodingStyleProps) {
  if (!skill.content?.codingStyles) return null;
  const styles = skill.content.codingStyles;

  return (
    <div className="flex flex-col gap-12 pt-16 border-t border-neutral-200">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-neutral-400">08 — CODING STYLE</span>
        <h2 className="text-3xl font-medium text-foreground tracking-tight">Architecture & Paradigms</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {styles.procedural && (
          <div className="flex flex-col gap-3 p-6 rounded-[12px] bg-neutral-50 border border-neutral-200">
            <h4 className="font-bold text-neutral-900 uppercase tracking-widest text-xs">Procedural</h4>
            <p className="text-muted leading-relaxed">{styles.procedural}</p>
          </div>
        )}
        
        {styles.oop && (
          <div className="flex flex-col gap-3 p-6 rounded-[12px] bg-neutral-50 border border-neutral-200">
            <h4 className="font-bold text-neutral-900 uppercase tracking-widest text-xs">Object-Oriented</h4>
            <p className="text-muted leading-relaxed">{styles.oop}</p>
          </div>
        )}
        
        {styles.functional && (
          <div className="flex flex-col gap-3 p-6 rounded-[12px] bg-neutral-50 border border-neutral-200">
            <h4 className="font-bold text-neutral-900 uppercase tracking-widest text-xs">Functional</h4>
            <p className="text-muted leading-relaxed">{styles.functional}</p>
          </div>
        )}
      </div>

      {styles.whenToUseWhat && (
        <div className="p-8 rounded-[16px] bg-neutral-900 text-white border border-neutral-800">
          <h4 className="font-bold text-accent uppercase tracking-widest text-xs mb-3">When to use what</h4>
          <p className="text-neutral-300 text-lg leading-relaxed">{styles.whenToUseWhat}</p>
        </div>
      )}
    </div>
  );
}
