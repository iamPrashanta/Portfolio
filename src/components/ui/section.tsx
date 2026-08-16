import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: "lg" | "md" | "sm" | "none";
  className?: string;
  children: React.ReactNode;
}

export function Section({ size = "md", className, children, ...props }: SectionProps) {
  return (
    <section 
      className={cn(
        "w-full relative px-page",
        size === "lg" && "py-section-lg",
        size === "md" && "py-section-md",
        size === "sm" && "py-section-sm",
        size === "none" && "",
        className
      )} 
      {...props}
    >
      {children}
    </section>
  );
}
