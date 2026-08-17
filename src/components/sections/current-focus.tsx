import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const focuses = [
  {
    title: "Scalable Systems",
    desc: "Backend architecture, APIs, databases, caching, cloud infrastructure, and distributed systems.",
  },
  {
    title: "Intelligent Applications",
    desc: "AI-powered products, document understanding, automation, LLM workflows, and developer tools.",
  },
  {
    title: "Real-Time & Spatial Systems",
    desc: "WebRTC, live telemetry, geospatial databases, PostGIS, H3 indexing, mapping, and streaming data.",
  },
  {
    title: "Product Engineering",
    desc: "Full-stack web applications and Flutter/mobile products with strong architecture and practical UX.",
  },
];

export function CurrentFocus() {
  return (
    <Section size="lg" className="relative overflow-hidden bg-black text-white">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-30 mix-blend-screen"
        >
          <source src="/videos/waves.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent" />
      </div>

      <Container size="large" className="relative z-10">
        <div className="flex flex-col animate-fade-up">
          <h4 className="font-badge uppercase tracking-wider text-[12px] text-accent mb-6">
            + NOW
          </h4>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium leading-tight mb-16 max-w-2xl">
            What I Build Now
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {focuses.map((focus, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col p-8 md:p-10 rounded-[24px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-500 overflow-hidden backdrop-blur-md"
              >
                {/* Glow effect on hover */}
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <h3 className="text-[1.5rem] font-medium mb-4 text-white group-hover:text-accent transition-colors duration-300">
                  {focus.title}
                </h3>
                <p className="text-[1.125rem] leading-relaxed text-white/70 max-w-[400px]">
                  {focus.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button variant="primary" size="large" className="shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/40">
                Explore Projects
              </Button>
            </Link>
            <Link href="/lab">
              <Button variant="outlineLight" size="large" className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm">
                Visit the Lab
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
