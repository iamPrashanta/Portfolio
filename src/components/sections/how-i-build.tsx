import React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

const steps = [
  {
    num: "01",
    title: "Research & Architecture",
    desc: "Deep dive into requirements, constraints, and business goals. Blueprinting the optimal architecture, database schemas, and technical stack.",
  },
  {
    num: "02",
    title: "Planning & Design",
    desc: "Translating architecture into actionable milestones. Defining APIs, system interfaces, and mapping out the user experience.",
  },
  {
    num: "03",
    title: "MVP Development",
    desc: "Iterative engineering to build the core engine. Establishing the foundation for scalable, high-performance execution.",
  },
  {
    num: "04",
    title: "Security & QA",
    desc: "Rigorous testing, vulnerability scanning, and code reviews. Ensuring data integrity, penetration resistance, and robust error handling.",
  },
  {
    num: "05",
    title: "UAT & Debugging",
    desc: "Deploying to staging environments for user acceptance testing. Gathering feedback, isolating edge cases, and polishing the final product.",
  },
  {
    num: "06",
    title: "Production & Monitoring",
    desc: "Seamless, zero-downtime deployment. Implementing continuous telemetry, real-time logging, and active performance monitoring.",
  },
];

export function HowIBuild() {
  return (
    <Section size="lg" className="bg-neutral-50/50">
      <Container size="large">
        <div className="flex flex-col animate-fade-up">
          <h4 className="font-badge uppercase tracking-wider text-[12px] text-muted mb-6">
            + ENGINEERING PROCESS
          </h4>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium leading-tight mb-16">
            How I Build
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[3.5rem] font-bold text-neutral-200 leading-none mb-6 tracking-tighter">
                  {step.num}
                </span>
                <h3 className="text-[1.25rem] font-medium mb-3">{step.title}</h3>
                <p className="text-[1rem] leading-relaxed text-muted">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
