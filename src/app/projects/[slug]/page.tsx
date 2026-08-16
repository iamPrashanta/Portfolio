import * as React from "react";
import { notFound } from "next/navigation";
import { PrashantaImage } from "@/components/ui/prashanta-image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

import { Section } from "@/components/ui/section";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Section size="none" className="pt-[140px] pb-[40px] md:pt-[180px] md:pb-[60px] overflow-hidden">
          <Container size="large" className="flex flex-col items-start animate-fade-up">
            <SectionHeading
              badge={project.client || "Case Study"}
              heading={project.title}
              subtext={project.description}
              headingAs="h1"
              className="max-w-[800px] mb-12"
            />
            
            <div className="flex flex-wrap gap-8 py-6 border-y border-neutral-200 w-full mb-12">
              <div className="flex flex-col gap-2">
                <span className="text-neutral-500 font-badge uppercase text-[12px] tracking-wide">Year</span>
                <span className="font-medium">{project.year || "2024"}</span>
              </div>
              
              {project.services && (
                <div className="flex flex-col gap-2">
                  <span className="text-neutral-500 font-badge uppercase text-[12px] tracking-wide">Services</span>
                  <span className="font-medium">{project.services.join(", ")}</span>
                </div>
              )}
              
              {project.link && (
                <div className="flex flex-col gap-2 ml-auto">
                  <span className="text-neutral-500 font-badge uppercase text-[12px] tracking-wide">Live Demo</span>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
                    View Project ↗
                  </a>
                </div>
              )}
            </div>
          </Container>
        </Section>

        {/* Hero Image */}
        <Section size="none" className="py-[40px]">
          <Container size="xlarge">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] overflow-hidden bg-neutral-100 animate-fade-up">
              <PrashantaImage 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover" 
                priority
                fallbackLabel="PROJECT"
              />
            </div>
          </Container>
        </Section>

        {/* Project Details Content */}
        <Section size="none" className="py-[64px] md:py-[96px]">
          <Container size="large">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16">
              <div className="flex flex-col gap-8 animate-fade-up">
                <h2 className="text-[2rem] font-medium tracking-tight">The Challenge</h2>
                <p className="text-[1.125rem] text-neutral-900 leading-[1.6]">
                  {/* Placeholder text. In a real app, this would be in the project data */}
                  Developing scalable architecture to handle the complex requirements of {project.title}. 
                  The primary objective was to ensure a robust, secure, and performant application capable of 
                  scaling with the client&apos;s needs while maintaining strict data integrity.
                </p>
                
                <h2 className="text-[2rem] font-medium tracking-tight mt-8">The Solution</h2>
                <p className="text-[1.125rem] text-neutral-900 leading-[1.6]">
                  By leveraging modern engineering practices and a powerful tech stack, the system was 
                  architected to be both flexible and incredibly fast. Features included automated background 
                  processing, optimized database queries, and a highly secure access control system.
                </p>
              </div>
              
              <div className="flex flex-col gap-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="bg-neutral-50 rounded-[16px] p-8 border border-neutral-200">
                  <Badge className="mb-6">Tech Stack</Badge>
                  <ul className="flex flex-col gap-4">
                    {project.techStack?.map((tech, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-[1rem] font-medium text-black">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
