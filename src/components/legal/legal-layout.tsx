import * as React from "react";
import { Container } from "@/components/ui/container";
import { LegalSection as LegalSectionType } from "@/types/legal";
import { LegalToc } from "./legal-toc";
import { LegalSection } from "./legal-section";
import { Section } from "@/components/ui/section";

interface LegalLayoutProps {
  sections: LegalSectionType[];
}

export function LegalLayout({ sections }: LegalLayoutProps) {
  return (
    <Section size="none" className="bg-white py-16 lg:py-24">
      <Container size="default">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
          
          <LegalToc sections={sections} />
          
          <div className="flex-1 w-full max-w-[800px]">
            {sections.map((section) => (
              <LegalSection key={section.id} section={section} />
            ))}
          </div>
          
        </div>
      </Container>
    </Section>
  );
}
