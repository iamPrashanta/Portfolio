import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { careers, Career } from "@/data/careers";

function SpecialistCard({ career }: { career: Career }) {
  return (
    <Link href={`/careers/${career.slug}`} className="block relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-[24px]">
      <div className="w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/3] rounded-[24px] overflow-hidden bg-neutral-100 border border-transparent group-hover:border-accent/30 transition-all duration-500 relative">
        {career.image && (
          <Image
            src={career.image}
            alt={career.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        )}
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none transition-opacity duration-500" />
        
        {/* Stronger overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end">
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-[1.5rem] md:text-[2rem] font-medium leading-tight mb-2">
              {career.title}
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-white/70 text-[0.875rem] md:text-[1rem] font-medium tracking-wide">
                {career.engagement}
              </p>
              
              {/* Arrow Icon */}
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                <svg className="w-4 h-4 text-white transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function TeamSection() {
  return (
    <Section size="lg" id="team" className="bg-white">
      <Container size="large">
        <div className="flex flex-col mb-16 animate-fade-up">
          <h4 className="font-badge uppercase tracking-wider text-[12px] text-muted mb-8">
            + SPECIALIST NETWORK
          </h4>
          
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 pb-12 border-b border-black/10">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium leading-tight max-w-2xl text-foreground">
              A flexible team for complex work.
            </h2>
            <p className="text-[1.125rem] leading-relaxed text-muted max-w-sm lg:pb-2">
              When a project needs expertise beyond the core engineering work, specialists can be brought in.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {careers.map((career) => (
            <SpecialistCard key={career.slug} career={career} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
