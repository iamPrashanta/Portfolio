import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Skill } from "@/data/skills";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

interface SkillCtaProps {
  skill: Skill;
}

export function SkillCta({ skill }: SkillCtaProps) {
  if (!skill.relatedServices || skill.relatedServices.length === 0) return null;

  const relatedServicesData = skill.relatedServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s) => s !== undefined);

  if (relatedServicesData.length === 0) return null;

  return (
    <div className="mt-16 bg-neutral-900 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative group">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      
      {/* Decorative gradient orb */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-white opacity-[0.03] blur-3xl rounded-full group-hover:opacity-[0.05] transition-opacity duration-700"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="max-w-xl">
          <h3 className="text-2xl font-bold font-mono tracking-tight mb-3">
            Need {skill.name} Expertise?
          </h3>
          <p className="text-neutral-400 text-lg leading-relaxed">
            I specialize in building production-ready systems using {skill.name}. Explore how I can help architect and develop your next project.
          </p>
        </div>

        <div className="flex flex-col gap-3 shrink-0">
          {relatedServicesData.map((service, idx) => (
            <Link key={idx} href={`/services/${service!.slug}`}>
              <Button 
                variant="light" 
                className="w-full justify-between group/btn"
              >
                <span>{service!.title}</span>
                <ArrowRight className="w-4 h-4 ml-3 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
