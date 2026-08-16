"use client";

import * as React from "react";
import { ProjectCard } from "@/components/cards/project-card";
import { projects } from "@/data/projects";

export function ProjectMarquee() {
  // To create a seamless infinite marquee, we duplicate the items
  const marqueeItems = [...projects, ...projects, ...projects];

  return (
    <div className="relative w-full overflow-hidden bg-white py-10 flex flex-col gap-8">
      {/* Top row - scrolls left */}
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-6 px-3 hover:[animation-play-state:paused]">
          {marqueeItems.map((project, idx) => (
            <ProjectCard key={`${project.id}-top-${idx}`} project={project} variant="v1" />
          ))}
        </div>
      </div>
      
      {/* Bottom row - scrolls right (optional, keeping it single row for now to match Structa) */}
    </div>
  );
}
