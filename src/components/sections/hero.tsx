import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { ProjectMarquee } from "./project-marquee";

export function Hero() {
  return (
    <section className="pt-[140px] pb-[40px] md:pt-[180px] md:pb-[60px] overflow-hidden">
      <Container size="large" className="text-center flex flex-col items-center">
        <div className="animate-fade-up flex flex-col items-center max-w-[800px]">
          <Badge className="mb-6">Welcome to prashanta.dev</Badge>
          
          <h1 className="mb-6 tracking-tight">
            {profile.tagline}
          </h1>
          
          <p className="text-[1.125rem] text-neutral-900 mb-10 max-w-2xl">
            {profile.bio}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button href="/contact">Start a Project</Button>
            <Button href="/projects" variant="outlineDark">View My Work</Button>
          </div>
        </div>
      </Container>
      
      <div className="mt-[60px] md:mt-[100px] animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <ProjectMarquee />
      </div>
    </section>
  );
}
