"use client";

import * as React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { profile } from "@/data/profile";
import { useInView } from "framer-motion";

function Counter({ end, duration = 1500, inView }: { end: number; duration?: number; inView: boolean }) {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    if (!inView) {
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Use easeOutQuart for a nice deceleration
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      
      setCount(end * easeOut);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  // Format to 1 decimal place if the end number is a float, otherwise whole number
  return <>{Number.isInteger(end) ? Math.floor(count) : count.toFixed(1)}</>;
}

export function Metrics() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <Section size="sm">
      <Container size="default" ref={ref}>
        <Divider className="mb-12" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {profile.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start opacity-0 animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="text-[3rem] md:text-[4rem] leading-none font-medium text-black mb-2 tracking-tighter">
                <Counter end={metric.numericValue || parseInt(metric.value)} inView={isInView} duration={1500} />{metric.suffix || ""}
              </div>
              <div className="text-[14px] text-neutral-900 font-badge uppercase tracking-wider text-center md:text-left">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
        
        <Divider className="mt-12" />
      </Container>
    </Section>
  );
}
