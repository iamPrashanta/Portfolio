import * as React from "react";
import Link from "next/link";
import { Skill, skills } from "@/data/skills";
import { ArrowRight } from "lucide-react";

interface SkillRelatedProps {
  skill: Skill;
}

export function SkillRelated({ skill }: SkillRelatedProps) {
  if (!skill.content?.relatedSkills || skill.content.relatedSkills.length === 0) return null;

  const relatedSkillsData = skill.content.relatedSkills
    .map(slug => skills.find(s => s.slug === slug))
    .filter((s): s is Skill => s !== undefined);

  if (relatedSkillsData.length === 0) return null;

  return (
    <div className="flex flex-col gap-8 pt-16 border-t border-neutral-200 mt-8">
      <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
        Related Technologies
      </h3>

      <div className="flex flex-wrap gap-4">
        {relatedSkillsData.map((relatedSkill, idx) => (
          <Link 
            key={idx} 
            href={`/skills/${relatedSkill.slug}`}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 transition-colors font-medium group"
          >
            {relatedSkill.name}
            <ArrowRight size={16} className="text-neutral-400 group-hover:text-neutral-900 transition-colors group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </div>
  );
}
