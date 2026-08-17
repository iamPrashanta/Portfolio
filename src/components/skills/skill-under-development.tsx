import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Hammer } from "lucide-react";
import { Skill } from "@/data/skills";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

interface SkillUnderDevelopmentProps {
  skill: Skill;
}

export function SkillUnderDevelopment({ skill }: SkillUnderDevelopmentProps) {
  return (
    <main className="pt-header min-h-[80vh] flex flex-col justify-center bg-background">
      <Section size="md" className="py-12 md:py-24">
        <Container size="default" className="max-w-3xl mx-auto flex flex-col gap-12 text-center items-center">
          
          <div className="flex flex-col gap-6 items-center">
            <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-2">
              <Hammer size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
              {skill.name}
            </h1>
            <p className="text-xl text-muted leading-relaxed max-w-xl">
              {skill.description}
            </p>
          </div>

          <div className="p-8 rounded-[16px] bg-neutral-50 border border-neutral-200 max-w-2xl w-full">
            <p className="text-neutral-900 text-lg leading-relaxed">
              This section is currently under development. It will feature history, ecosystem details, architecture, advanced concepts, security practices, and practical implementation knowledge.
            </p>
          </div>

          <Link 
            href="/skills" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors group mt-4"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Return to Skills
          </Link>
          
        </Container>
      </Section>
    </main>
  );
}
