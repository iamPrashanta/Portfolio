import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import { skills } from "@/data/skills";
import { Section } from "@/components/ui/section";
import { SkillsHub } from "@/components/skills/skills-hub";

export const metadata = {
  title: "Technical Skills — Languages, Frameworks & Infrastructure",
  description: "A structured overview of the programming languages, frameworks, cloud infrastructure, and systems engineering tools I work with.",
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-header bg-background">
        <Section size="lg" className="overflow-hidden">
          <Container size="large" className="text-center flex flex-col items-center animate-fade-up">
            <SectionHeading
              badge="DEVELOPER HUB"
              heading="Skills & Technologies"
              subtext="A structured overview of the technologies, frameworks, tools and systems I work with."
              align="center"
              headingAs="h1"
              className="max-w-[800px] items-center"
            />
          </Container>
        </Section>

        <SkillsHub skills={skills} />

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
