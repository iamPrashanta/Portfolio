import * as React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ObfuscatedEmail } from "@/components/ui/obfuscated-email";

export function ContactCta() {
  return (
    <Section size="lg">
      <Container size="default">
        <div className="relative rounded-[24px] overflow-hidden bg-accent text-white py-[80px] md:py-[120px] px-[32px] md:px-[64px] flex flex-col items-center text-center">
          {/* Subtle noise pattern overlay */}
          <div className="noise" />
          
          <div className="relative z-10 animate-fade-up max-w-[800px]">
            <h2 className="text-display-md mb-8">
              Let&apos;s build something exceptional together.
            </h2>
            
            <p className="text-[1.25rem] text-white/90 mb-12 max-w-2xl mx-auto">
              {siteConfig.location} based. Available for freelance opportunities and full-time roles globally.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-8">
              <Button href="/contact" variant="dark" className="w-full sm:w-auto">
                Get in Touch
              </Button>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                {siteConfig.emails.map((email) => (
                  <ObfuscatedEmail key={email} email={email} className="group-dark" />
                ))}
              </div>
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
