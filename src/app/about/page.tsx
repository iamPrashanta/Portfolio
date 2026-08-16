import * as React from "react";
import { PrashantaImage } from "@/components/ui/prashanta-image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import { SelectedWork } from "@/components/sections/selected-work";
import { ProfessionalJourney } from "@/components/sections/professional-journey";
import { CurrentFocus } from "@/components/sections/current-focus";
import { profile } from "@/data/profile";

export const metadata = {
  title: "About",
  description: "Learn more about Prashanta Mondal's background, experience, and approach to software engineering.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Section size="lg" className="overflow-hidden mt-[80px] !pb-0">
          <Container size="large" className="text-center flex flex-col items-center animate-fade-up">
            <SectionHeading
              badge="About"
              heading={profile.tagline}
              subtext={profile.bio}
              align="center"
              headingAs="h1"
              className="max-w-[800px] items-center"
            />
          </Container>
        </Section>

        {/* Hero Image */}
        <Section size="sm">
          <Container size="xlarge">
            <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-[21/9] rounded-[24px] overflow-hidden bg-neutral-100 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <PrashantaImage 
                src="/images/me/me2.png" 
                alt="Prashanta" 
                fill 
                className="object-cover object-center" 
                priority
                fallbackLabel="PRASHANTA"
              />
            </div>
          </Container>
        </Section>

        <SelectedWork />
        <ProfessionalJourney />
        <CurrentFocus />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
