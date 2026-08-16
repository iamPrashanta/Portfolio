"use client";

import * as React from "react";
import { ProjectCard } from "@/components/cards/project-card";
import { projects } from "@/data/projects";

export function ProjectMarquee() {
  // To create a seamless infinite marquee, we duplicate the items
  const marqueeItems = [...projects, ...projects, ...projects];

  return (
    <div className="relative w-full overflow-hidden pt-24 pb-32 rounded-t-[2.5rem] md:rounded-t-[4rem] flex flex-col gap-8 mt-12">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 bg-neutral-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-80"
        >
          <source src="/videos/waves.mp4" type="video/mp4" />
        </video>
        {/* Optional overlay to deepen the color */}
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
      </div>

      {/* Top row - scrolls left */}
      <div className="relative z-10 flex overflow-hidden whitespace-nowrap">
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
