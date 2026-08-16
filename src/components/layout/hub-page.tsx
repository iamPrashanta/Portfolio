import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

interface HubPageProps {
  title: string;
  description: string;
}

export function DeveloperHubPage({ title, description }: HubPageProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col justify-center">
        <section className="pt-[180px] pb-[144px]">
          <Container size="medium" className="text-center flex flex-col items-center animate-fade-up">
            <SectionHeading
              badge="Developer Hub"
              heading={title}
              subtext={description}
              align="center"
              headingAs="h1"
              className="mb-12 max-w-[800px]"
            />
            <div className="bg-neutral-50 border border-neutral-200 rounded-[16px] p-8 max-w-lg mb-10 w-full">
              <p className="text-neutral-900 text-[1.125rem]">
                This section is currently under development. It will feature open-source tools, algorithms, and experiments.
              </p>
            </div>
            <Button href="/" variant="primary">
              Return Home
            </Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
