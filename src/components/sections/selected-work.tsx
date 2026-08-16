import React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

const works = [
  {
    num: "01",
    title: "Scalable Product Engineering",
    desc: "Secure full-stack applications, APIs, databases, authentication, payments, and operational systems.",
  },
  {
    num: "02",
    title: "Real-Time & Distributed Systems",
    desc: "WebRTC, telemetry, live data, Redis state management, WebSockets, and event-driven backend architecture.",
  },
  {
    num: "03",
    title: "AI & Intelligent Applications",
    desc: "AI document understanding, LLM-powered workflows, automation systems, and intelligent application development.",
  },
  {
    num: "04",
    title: "Data & Spatial Engineering",
    desc: "PostgreSQL, PostGIS, H3 indexing, large-scale geospatial data, and interactive map systems.",
  },
];

export function SelectedWork() {
  return (
    <Section size="lg">
      <Container size="large">
        <div className="flex flex-col md:grid md:grid-cols-[1.5fr_2fr] gap-12 md:gap-24 animate-fade-up">
          
          <div className="flex flex-col">
            <h4 className="font-badge uppercase tracking-wider text-[12px] text-muted mb-6">
              + SELECTED WORK
            </h4>
            <h2 className="text-[2rem] md:text-[2.5rem] font-medium leading-tight mb-8">
              Backend · AI · Real-time · Mobile
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {works.map((work) => (
              <div key={work.num} className="flex flex-col">
                <span className="font-badge text-muted text-[12px] mb-3">{work.num}</span>
                <h3 className="text-[1.125rem] font-medium mb-3">{work.title}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-muted">
                  {work.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}
