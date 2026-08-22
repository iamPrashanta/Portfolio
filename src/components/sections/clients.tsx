import * as React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export function Clients() {
  const logos = [
    "/images/clients/logo1.svg",
    "/images/clients/logo2.svg",
    "/images/clients/logo3.svg",
    "/images/clients/logo4.svg",
  ];

  return (
    <Section size="sm">
      <Container size="large">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 opacity-0 animate-fade-up">
          <Badge>Trusted By</Badge>
          <Badge icon={false}>2021-2026</Badge>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <Image src={logo} alt="Client Logo" width={160} height={40} style={{ width: "auto" }} className="h-8 md:h-10 w-auto rounded-none" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
