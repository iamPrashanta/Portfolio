"use client";

import Link from "next/link";
import { PrashantaImage } from "@/components/ui/prashanta-image";
import { Service } from "@/types/service";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export function ServiceCard({ service, index, isOpen, onToggle }: ServiceCardProps) {
  const number = (index + 1).toString().padStart(2, "0");

  return (
    <div className="border-b border-white/10 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-8 text-left focus:outline-none group"
      >
        <div className="flex items-center gap-8 md:gap-16">
          <span className="text-white/40 font-badge text-[14px]">{number}</span>
          <h3 className="text-white text-[1.5rem] md:text-[2rem] font-medium transition-colors group-hover:text-accent">
            {service.title}
          </h3>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <PrashantaImage
              src={service.icon}
              alt=""
              width={48}
              height={48}
              className={cn("transition-all duration-500", isOpen ? "opacity-100" : "opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100")}
              fallbackLabel="ICON"
            />
          </div>
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-colors group-hover:border-white">
            <div className="relative w-4 h-4">
              <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2 transition-transform duration-300" />
              <span className={cn("absolute top-0 left-1/2 w-[2px] h-full bg-white -translate-x-1/2 transition-transform duration-300", isOpen ? "rotate-90 scale-0" : "rotate-0 scale-100")} />
            </div>
          </div>
        </div>
      </button>

      <div
        className={cn(
          "grid transition-all duration-500 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 mb-8" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pl-0 md:pl-[6.5rem] pr-0 md:pr-[12rem]">
            <p className="text-white/80 text-[1.125rem] leading-[1.6] mb-8">
              {service.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-white/90 text-[0.875rem]">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-3 text-white text-[0.875rem] font-medium group/link uppercase tracking-wider"
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/link:bg-white group-hover/link:border-white transition-all">
                <PrashantaImage src="/icons/arrow.svg" alt="" width={12} height={12} className="rotate-180 opacity-60 group-hover/link:opacity-100 group-hover/link:invert transition-all" fallbackLabel="ICON" />
              </div>
              Explore Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
