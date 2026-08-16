import * as React from "react";
import { PrashantaImage } from "@/components/ui/prashanta-image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";

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
        <section className="pt-[140px] pb-[40px] md:pt-[180px] md:pb-[60px] overflow-hidden">
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
        </section>

        {/* Hero Image */}
        <section className="py-[40px] md:py-[60px]">
          <Container size="xlarge">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[24px] overflow-hidden bg-neutral-100 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <PrashantaImage 
                src="/images/team/person7.avif" 
                alt="Prashanta" 
                fill 
                className="object-cover" 
                priority
                fallbackLabel="PRASHANTA"
              />
            </div>
          </Container>
        </section>

        {/* Experience Section */}
        <section className="py-[96px] md:py-[144px]">
          <Container size="large">
            <SectionHeading
              badge="Experience"
              heading="Professional Journey"
              className="mb-16"
            />
            
            <div className="flex flex-col gap-12">
              {experience.map((exp, idx) => (
                <div key={exp.id} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 border-t border-neutral-200 pt-12 animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div>
                    <h3 className="text-[1.5rem] font-medium mb-2">{exp.company}</h3>
                    <div className="text-neutral-900 font-badge uppercase tracking-wide text-[0.875rem] mb-2">
                      {exp.duration}
                    </div>
                    <div className="text-neutral-500 text-[0.875rem]">{exp.location}</div>
                  </div>
                  
                  <div>
                    <h4 className="text-[1.25rem] font-medium mb-4">{exp.role}</h4>
                    <p className="text-[1.125rem] text-neutral-900 mb-6">{exp.description}</p>
                    <ul className="flex flex-col gap-3">
                      {exp.achievements.map((achievement, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <span className="text-neutral-900 text-[1rem] leading-[1.6]">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
