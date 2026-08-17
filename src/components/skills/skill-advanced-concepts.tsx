import * as React from "react";
import { Skill } from "@/data/skills";
import { Zap } from "lucide-react";

interface SkillAdvancedConceptsProps {
  skill: Skill;
}

export function SkillAdvancedConcepts({ skill }: SkillAdvancedConceptsProps) {
  if (!skill.content?.concurrency && !skill.content?.advancedConcepts?.length) return null;

  return (
    <div className="flex flex-col gap-12 pt-16 border-t border-neutral-200">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-neutral-400">07 — ADVANCED CONCEPTS</span>
        <h2 className="text-3xl font-medium text-foreground tracking-tight">Concurrency & Advanced Features</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skill.content.concurrency && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-neutral-100 rounded-full">
                <Zap size={20} className="text-accent" />
              </div>
              <h3 className="text-xl font-medium text-foreground">{skill.content.concurrency.title}</h3>
            </div>
            <p className="text-muted text-lg leading-relaxed">{skill.content.concurrency.description}</p>
          </div>
        )}

        {skill.content.advancedConcepts && skill.content.advancedConcepts.length > 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium text-foreground">Key Concepts</h3>
            <ul className="flex flex-col gap-3">
              {skill.content.advancedConcepts.map((concept, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted leading-relaxed">
                  <span className="text-accent shrink-0 mt-1">•</span>
                  {concept}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
