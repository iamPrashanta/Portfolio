import * as React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ContactCta() {
  return (
    <Section size="lg">
      <Container size="xlarge">
        <div className="relative rounded-[24px] overflow-hidden bg-accent text-white py-[80px] md:py-[120px] px-[32px] md:px-[64px] flex flex-col items-center text-center">
          {/* Subtle noise pattern overlay */}
          <div className="noise" />
          
          <div className="relative z-10 animate-fade-up max-w-[800px]">
            <h2 className="text-[3rem] md:text-[4rem] font-medium leading-[1.1] tracking-tight mb-8">
              Let&apos;s build something exceptional together.
            </h2>
            
            <p className="text-[1.25rem] text-white/90 mb-12 max-w-2xl mx-auto">
              {siteConfig.location} based. Available for freelance opportunities and full-time roles globally.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary">
                Get in Touch
              </Button>
              <Button href={`mailto:${siteConfig.email}`} variant="outlineLight">
                Email Me
              </Button>
            </div>
          </div>
          
          {/* Optional decorative star */}
          <Image
            src="/icons/stars.svg"
            alt=""
            width={120}
            height={120}
            className="absolute top-10 right-10 opacity-20 pointer-events-none rounded-none"
          />
        </div>
      </Container>
    </Section>
  );
}
