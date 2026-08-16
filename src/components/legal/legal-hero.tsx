import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

interface LegalHeroProps {
  title: string;
  description: string;
  lastUpdated: string;
}

export function LegalHero({ title, description, lastUpdated }: LegalHeroProps) {
  return (
    <Section size="sm" className="pt-[140px] md:pt-[180px] bg-neutral-50 border-b border-neutral-200">
      <Container size="large" className="flex flex-col items-start animate-fade-up">
        <Badge className="mb-6 uppercase tracking-widest text-[10px] font-bold">
          + LEGAL
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-[800px] mb-8">
          {description}
        </p>
        <div className="flex items-center gap-2 text-sm text-neutral-500 font-mono">
          <span>Last Updated:</span>
          <span className="text-black font-medium">{lastUpdated}</span>
        </div>
      </Container>
    </Section>
  );
}
