import * as React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PrashantaImage } from "@/components/ui/prashanta-image";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function AboutPreview() {
  return (
    <Section size="lg">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden w-full max-w-[500px] mx-auto lg:mx-0 opacity-0 animate-fade-up">
            {/* The Structa template uses a video here, but we can use an image or video */}
            <PrashantaImage 
              src="/images/me/me2.png" 
              alt="Prashanta" 
              fill 
              className="object-cover" 
              fallbackLabel="ABOUT"
            />
            
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-transparent">
               {/* Optional play button if it were a video */}
            </div>
          </div>
          
          <div className="flex flex-col items-start opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <SectionHeading
              badge="About Me"
              heading="Engineering scalable solutions with a focus on security and performance."
              className="mb-8"
            />
            
            <p className="text-[1.125rem] text-neutral-900 leading-[1.6] mb-10">
              {profile.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button href="/about">Read Full Bio</Button>
              <Button href="/contact" variant="outlineDark">Get in Touch</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
