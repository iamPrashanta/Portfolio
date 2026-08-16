"use client";

import * as React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/cards/service-card";
import { services } from "@/data/services";

export function ServicesList() {
  const [openIndex, setOpenIndex] = React.useState<number>(0);

  return (
    <Section size="lg" className="bg-black">
      <Container size="xlarge">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <div className="text-white">
            <SectionHeading
              badge="Services"
              heading="End-to-End Engineering"
              subtext="Comprehensive technical solutions for businesses, from backend architecture to AI integration."
              className="sticky top-32"
            />
          </div>
          
          <div className="flex flex-col">
            <div className="border-t border-white/10" />
            {services.map((service, idx) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={idx}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
