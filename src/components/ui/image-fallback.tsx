import * as React from "react";
import { cn } from "@/lib/utils";

interface ImageFallbackProps {
  label?: string;
  className?: string;
}

export function ImageFallback({ label = "IMAGE UNAVAILABLE", className }: ImageFallbackProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[200px] flex flex-col items-center justify-center overflow-hidden",
        "bg-dark text-dark-foreground font-badge border border-border-dark",
        className
      )}
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none noise" />
      
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-2 p-6 text-center">
        <span className="text-accent font-medium tracking-widest text-[0.75rem] md:text-[0.875rem]">
          PRASHANTA.DEV
        </span>
        <span className="text-muted-on-dark text-[0.625rem] md:text-[0.75rem] tracking-wider uppercase">
          {label}
        </span>
      </div>

      {/* Animated scanning line */}
      <div className="absolute left-0 right-0 h-[1px] bg-accent/50 shadow-[0_0_8px_2px_rgba(255,77,46,0.3)] animate-scan-line" />
      
      {/* System Status indicator */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="text-[0.5rem] tracking-widest text-muted-on-dark">SYSTEM / ONLINE</span>
      </div>
    </div>
  );
}
