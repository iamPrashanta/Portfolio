import React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { experience } from "@/data/experience";
import { JourneyEntry } from "./journey-entry";

export function ProfessionalJourney() {
  return (
    <Section size="lg" className="bg-neutral-50/50">
      <Container size="large">
        <div className="flex flex-col mb-24 animate-fade-up">
          <h4 className="font-badge uppercase tracking-wider text-[12px] text-muted mb-6">
            + EXPERIENCE
          </h4>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium leading-tight">
            Professional Journey
          </h2>
        </div>

        <div className="flex flex-col animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {experience.map((entry, idx) => (
            <JourneyEntry 
              key={entry.id} 
              entry={entry} 
              isLast={idx === experience.length - 1} 
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
