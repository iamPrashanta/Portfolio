import React from "react";
import Link from "next/link";
import { ExperienceEntry } from "@/data/experience";
import { RoleProgression } from "./role-progression";

export function JourneyEntry({ entry, isLast }: { entry: ExperienceEntry; isLast?: boolean }) {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-8 md:gap-16 pb-24 group">
      
      {/* Timeline central line */}
      {!isLast && (
        <div className="absolute left-0 md:left-[200px] lg:left-[240px] top-4 bottom-[-16px] w-[1px] bg-neutral-200 hidden md:block" />
      )}
      
      {/* Mobile timeline line */}
      {!isLast && (
        <div className="absolute left-[5px] top-8 bottom-[-24px] w-[1px] bg-neutral-200 block md:hidden" />
      )}

      {/* Left Column: Metadata (Desktop) */}
      <div className="hidden md:flex flex-col pt-1">
        <h4 className="font-badge uppercase tracking-wider text-[12px] text-muted mb-2">
          {entry.period}
        </h4>
        <div className="text-[0.875rem] text-neutral-500 uppercase tracking-wide">
          {entry.location}
          {entry.workMode && <><br />{entry.workMode}</>}
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="relative pl-6 md:pl-0">
        
        {/* Timeline Dot (Desktop) */}
        <div className="absolute left-[-21.5px] top-[10px] w-[11px] h-[11px] rounded-full bg-black border-2 border-white hidden md:block z-10" />
        
        {/* Timeline Dot (Mobile) */}
        <div className="absolute left-[0px] top-[8px] w-[11px] h-[11px] rounded-full bg-black border-2 border-white block md:hidden z-10" />

        {/* Mobile Metadata */}
        <div className="flex md:hidden flex-col mb-4">
          <h4 className="font-badge uppercase tracking-wider text-[12px] text-muted mb-1">
            {entry.period}
          </h4>
          <div className="text-[0.75rem] text-neutral-500 uppercase tracking-wide">
            {entry.location} {entry.workMode && `· ${entry.workMode}`}
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <h3 className="text-[1.75rem] font-medium leading-tight">{entry.company}</h3>
          {entry.headline && (
            <div className="text-[1.125rem] font-medium text-neutral-600">{entry.headline}</div>
          )}
        </div>

        {entry.description && (
          <p className="text-[1rem] leading-relaxed text-neutral-800 mb-8 max-w-[700px]">
            {entry.description}
          </p>
        )}

        {/* Roles Progression */}
        {entry.roles && entry.roles.length > 0 && (
          <RoleProgression roles={entry.roles} />
        )}

        {/* Highlights */}
        {entry.highlights && entry.highlights.length > 0 && (
          <ul className="flex flex-col gap-3 mt-6 max-w-[700px]">
            {entry.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-[10px] shrink-0" />
                <span className="text-[1rem] leading-[1.7] text-neutral-800">{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Projects / Links */}
        {entry.projects && entry.projects.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-8">
            {entry.projects.map((project, idx) => (
              <Link key={idx} href={project.href} className="text-[0.875rem] font-medium text-black hover:text-accent transition-colors bg-neutral-100 px-4 py-2 rounded-full">
                {project.title}
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
