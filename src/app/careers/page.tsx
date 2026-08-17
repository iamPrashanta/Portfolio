import * as React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Careers & Collaboration",
  description: "Career opportunities and specialist collaborations at prashanta.dev.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-header min-h-screen flex flex-col bg-white dark:bg-black">
        <Section size="lg" className="flex-1 flex flex-col justify-center">
          <Container size="default">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <SectionHeading
                badge="Careers"
                heading="Opportunities to build."
                subtext="Career opportunities and specialist collaborations will appear here. No open full-time positions are currently listed."
                align="center"
              />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
