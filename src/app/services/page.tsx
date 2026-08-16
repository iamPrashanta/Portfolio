import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServicesList } from "@/components/sections/services-list";
import { ContactCta } from "@/components/sections/contact-cta";
import { skills } from "@/data/skills";

export const metadata = {
  title: "Services",
  description: "End-to-end software engineering, backend architecture, and technical consulting services.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Section size="lg" className="overflow-hidden mt-[80px] !pb-0">
          <Container size="large" className="text-center flex flex-col items-center animate-fade-up">
            <SectionHeading
              badge="Services"
              heading="Comprehensive engineering solutions for ambitious products."
              subtext="From secure backend architectures to intelligent automation, I help businesses build robust, scalable digital systems."
              align="center"
              headingAs="h1"
              className="max-w-[800px] items-center"
            />
          </Container>
        </Section>

        {/* Detailed Services Accordion */}
        <ServicesList />

        {/* Tech Stack / Skills Section */}
        <Section size="lg">
          <Container size="large">
            <SectionHeading
              badge="Tech Stack"
              heading="Tools & Technologies"
              subtext="The primary technologies I use to build scalable products."
              className="mb-16"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <h4 className="text-[1.25rem] font-medium mb-6 pb-4 border-b border-neutral-200">
                    {skillGroup.category}
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {skillGroup.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-neutral-900 text-[1rem] flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                        {item}
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
