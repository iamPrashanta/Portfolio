import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col justify-center">
        <Section size="none" className="pt-[180px] pb-[144px]">
          <Container size="medium" className="text-center flex flex-col items-center animate-fade-up">
            <h1 className="text-[6rem] md:text-[8rem] font-medium leading-none tracking-tighter text-black mb-6">
              404
            </h1>
            <h2 className="text-[2rem] font-medium mb-6">Page Not Found</h2>
            <p className="text-[1.125rem] text-neutral-900 mb-10">
              The page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Button href="/" variant="primary">
              Return Home
            </Button>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
