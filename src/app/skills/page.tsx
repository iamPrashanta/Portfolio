import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import { skills } from "@/data/skills";

import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Skills",
  description: "Technical skills, languages, and frameworks used by Prashanta Mondal.",
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-header">
        <Section size="lg" className="overflow-hidden">
          <Container size="large" className="text-center flex flex-col items-center animate-fade-up">
            <SectionHeading
              badge="Skills"
              heading="Technical Expertise"
              subtext="The tools, languages, and frameworks I use to build robust software systems."
              align="center"
              headingAs="h1"
              className="max-w-[800px] items-center"
            />
          </Container>
        </Section>

        <Section size="none" className="py-[48px] md:py-[64px]">
          <Container size="default">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="animate-fade-up bg-neutral-50 p-8 rounded-[16px] border border-neutral-200" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <h4 className="text-[1.25rem] font-medium mb-6 pb-4 border-b border-neutral-200">
                    {skillGroup.category}
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {skillGroup.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-neutral-900 text-[1rem] flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="font-medium text-black">{item}</span>
                      </li>
                    ))}
                  </ul>
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
