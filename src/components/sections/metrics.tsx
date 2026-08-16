import * as React from "react";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { profile } from "@/data/profile";

export function Metrics() {
  return (
    <section className="py-[48px] md:py-[64px]">
      <Container size="xlarge">
        <Divider className="mb-12" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {profile.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start opacity-0 animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="text-[3rem] md:text-[4rem] leading-none font-medium text-black mb-2 tracking-tighter">
                {metric.value}
              </div>
              <div className="text-[14px] text-neutral-900 font-badge uppercase tracking-wider text-center md:text-left">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
        
        <Divider className="mt-12" />
      </Container>
    </section>
  );
}
