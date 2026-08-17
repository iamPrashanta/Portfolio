import * as React from "react";
import { Skill } from "@/data/skills";
import { ArrowUpRight } from "lucide-react";

interface SkillAboutProps {
  skill: Skill;
}

export function SkillAbout({ skill }: SkillAboutProps) {
  if (!skill.content) return null;

  return (
    <div className="flex flex-col gap-12 pt-16 border-t border-neutral-200">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-neutral-400">01 — ABOUT</span>
        <h2 className="text-3xl font-medium text-foreground tracking-tight">What is {skill.name}?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 lg:gap-24">
        <div className="prose prose-neutral max-w-none text-muted text-lg leading-relaxed">
          <p>{skill.content.overview}</p>
        </div>
        
        <div className="flex flex-col gap-6">
          {skill.content.creator && (
            <div className="flex flex-col gap-1">
              <span className="text-sm text-neutral-400 font-medium">Created By</span>
              <span className="text-foreground font-medium">{skill.content.creator}</span>
            </div>
          )}
          
          {skill.content.initialRelease && (
            <div className="flex flex-col gap-1">
              <span className="text-sm text-neutral-400 font-medium">Initial Release</span>
              <span className="text-foreground font-medium">{skill.content.initialRelease}</span>
            </div>
          )}
          
          {skill.content.officialWebsite && (
            <div className="flex flex-col gap-1 mt-2">
              <a 
                href={skill.content.officialWebsite} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline w-fit"
              >
                Official Website
                <ArrowUpRight size={14} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
