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
    <Section size="lg">
      <Container size="large">
        <div className="flex flex-col animate-fade-up">
          <h4 className="font-badge uppercase tracking-wider text-[12px] text-muted mb-6">
            + NOW
          </h4>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium leading-tight mb-16">
            What I Build Now
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-16">
            {focuses.map((focus, idx) => (
              <div key={idx} className="flex flex-col">
                <h3 className="text-[1.25rem] font-medium mb-3">{focus.title}</h3>
                <p className="text-[1rem] leading-relaxed text-muted max-w-[400px]">
                  {focus.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button variant="primary" size="large">
                Explore Projects
              </Button>
            </Link>
            <Link href="/lab">
              <Button variant="outlineDark" size="large">
                Visit the Lab
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
