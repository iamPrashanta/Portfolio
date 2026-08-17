import * as React from "react";
import { Skill } from "@/data/skills";
import { ShieldCheck } from "lucide-react";

interface SkillSecurityProps {
  skill: Skill;
}

export function SkillSecurity({ skill }: SkillSecurityProps) {
  if (!skill.content?.security) return null;
  const { overview, practices, platformSpecific } = skill.content.security;

  return (
    <div className="flex flex-col gap-12 pt-16 border-t border-neutral-200">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-neutral-400">09 — SECURITY</span>
        <h2 className="text-3xl font-medium text-foreground tracking-tight">Hardening & Best Practices</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          <p className="text-muted text-lg leading-relaxed">{overview}</p>
          
          {platformSpecific && (
            <div className="p-6 rounded-[12px] bg-neutral-100 border border-neutral-200 text-neutral-800 text-sm leading-relaxed">
              <span className="font-bold block mb-2">Platform Specific</span>
              {platformSpecific}
            </div>
          )}
        </div>
        
        <div className="bg-neutral-50 p-8 rounded-[16px] border border-neutral-200">
          <ul className="flex flex-col gap-4">
            {practices.map((practice, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <ShieldCheck size={20} className="text-accent shrink-0 mt-0.5" />
                <span className="text-foreground leading-relaxed">{practice}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
