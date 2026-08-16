import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/cards/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-[96px] md:py-[144px]">
      <Container size="xlarge">
        <SectionHeading
          badge="Featured Work"
          heading="Selected engineering projects and case studies."
          subtext="A collection of systems I've built, ranging from scalable backend architectures to intelligent automation agents."
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mb-16">
          {featured.map((project, idx) => (
            <div
              key={project.id}
              className={`opacity-0 animate-fade-up ${idx % 2 === 1 ? 'md:mt-16' : ''}`}
              style={{ animationDelay: `${(idx % 2) * 0.2}s` }}
            >
              <ProjectCard project={project} variant="v2" />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="/projects" variant="outlineDark">View All Projects</Button>
        </div>
      </Container>
    </section>
  );
}
