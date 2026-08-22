import * as React from "react";
import { Service } from "@/types/service";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/project-card";

interface ServiceProjectsProps {
  service: Service;
}

export function ServiceProjects({ service }: ServiceProjectsProps) {
  const relatedProjects = projects.filter((project) => {
    if (!project.services) return false;
    return project.services.some(
      (ps) =>
        ps.toLowerCase().includes(service.title.toLowerCase()) ||
        service.title.toLowerCase().includes(ps.toLowerCase())
    );
  });

  if (relatedProjects.length === 0) return null;

  return (
    <div className="pt-24 pb-12 border-t border-neutral-200 mt-24">
      <h2 className="text-3xl font-bold font-mono tracking-tight mb-12">
        Related Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {relatedProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}
