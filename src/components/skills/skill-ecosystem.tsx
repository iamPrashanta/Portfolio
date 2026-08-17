import * as React from "react";
import { Skill, SkillEcosystemItem } from "@/data/skills";
import { ArrowUpRight } from "lucide-react";

interface SkillEcosystemProps {
  skill: Skill;
}

export function SkillEcosystem({ skill }: SkillEcosystemProps) {
  const hasFrameworks = skill.content?.frameworks && skill.content.frameworks.length > 0;
  const hasLibraries = skill.content?.libraries && skill.content.libraries.length > 0;
  const hasTools = skill.content?.tools && skill.content.tools.length > 0;
  const hasOfficialResources = skill.content?.officialResources && skill.content.officialResources.length > 0;

  if (!hasFrameworks && !hasLibraries && !hasTools && !hasOfficialResources) return null;

  const renderEcosystemGrid = (items: SkillEcosystemItem[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col gap-2 p-6 rounded-[12px] bg-neutral-50 border border-neutral-200 group hover:border-accent/30 transition-colors">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-medium text-foreground">{item.name}</h4>
            {item.website && (
              <a 
                href={item.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 group-hover:text-accent transition-colors"
                aria-label={`Visit ${item.name} website`}
              >
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
          <p className="text-muted text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-12 pt-16 border-t border-neutral-200">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-neutral-400">04 — ECOSYSTEM</span>
        <h2 className="text-3xl font-medium text-foreground tracking-tight">Frameworks, Libraries & Tools</h2>
      </div>

      <div className="flex flex-col gap-12">
        {hasFrameworks && (
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium text-foreground">Frameworks</h3>
            {renderEcosystemGrid(skill.content!.frameworks!)}
          </div>
        )}

        {hasLibraries && (
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium text-foreground">Libraries</h3>
            {renderEcosystemGrid(skill.content!.libraries!)}
          </div>
        )}

        {hasTools && (
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium text-foreground">Tools / Runtime / Platform</h3>
            {renderEcosystemGrid(skill.content!.tools!)}
          </div>
        )}

        {hasOfficialResources && (
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium text-foreground">Official Ecosystem Resources</h3>
            {renderEcosystemGrid(skill.content!.officialResources!)}
          </div>
        )}
      </div>
    </div>
  );
}
