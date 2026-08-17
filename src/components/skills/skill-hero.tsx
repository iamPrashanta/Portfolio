import * as React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Skill } from "@/data/skills";

interface SkillHeroProps {
  skill: Skill;
}

export function SkillHero({ skill }: SkillHeroProps) {
  return (
    <div className="flex flex-col gap-8 mb-16">
      <Link href="/skills" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors w-fit group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        BACK TO SKILLS
      </Link>
      
      <div className="flex flex-col gap-6 max-w-3xl">
        <div className="flex flex-col gap-4">
          <span className="text-xs tracking-widest uppercase text-accent font-medium">
            Technology Profile
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            {skill.name}
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted leading-relaxed">
          {skill.description}
        </p>

        <div className="flex items-center gap-3 mt-2">
          <span className="inline-flex px-3 py-1 bg-neutral-200/50 text-neutral-800 rounded-full text-sm font-medium">
            {skill.category}
          </span>
        </div>
      </div>
    </div>
  );
}
