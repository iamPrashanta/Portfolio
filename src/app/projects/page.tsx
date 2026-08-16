import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/cards/project-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description: "A selection of engineering projects, case studies, and systems built by Prashanta Mondal.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Section size="lg" className="overflow-hidden mt-[80px] !pb-0">
          <Container size="large" className="text-center flex flex-col items-center animate-fade-up">
            <SectionHeading
              badge="Projects"
              heading="Engineering Work & Case Studies"
              subtext="A collection of backend systems, intelligent applications, and full-stack solutions built for international clients and startups."
              align="center"
              headingAs="h1"
              className="max-w-[800px] items-center"
            />
          </Container>
        </Section>

        {/* Projects Grid */}
        <Section size="sm">
          <Container size="xlarge">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {projects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`animate-fade-up ${idx % 2 === 1 ? 'md:mt-16' : ''}`}
                  style={{ animationDelay: `${(idx % 2) * 0.2}s` }}
                >
                  <ProjectCard project={project} variant="v2" />
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
