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
      <main className="flex-1 flex flex-col pt-header">
        <Section size="none" className="pb-[144px]">
          <Container size="default" className="text-center relative">
            <h1 className="text-display-lg font-medium tracking-tight mb-6 relative z-10 text-black">
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
