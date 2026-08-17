import * as React from "react";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  badge: string;
  heading?: string;
  subtext?: React.ReactNode;
  align?: "left" | "center" | "right";
  headingAs?: "h1" | "h2" | "h3";
  inverse?: boolean;
}

export function SectionHeading({
  badge,
  heading,
  subtext,
  align = "left",
  headingAs: HeadingAs = "h2",
  inverse = false,
  className,
  ...props
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl", alignClasses[align], className)} {...props}>
      <Badge className={cn("mb-6", inverse && "bg-white/10 text-white border-white/20")}>{badge}</Badge>
      
      {heading && (
        <HeadingAs className={cn("mb-6", inverse ? "text-white" : "text-foreground")}>{heading}</HeadingAs>
      )}
      
      {subtext && (
        <div className={cn("text-[1rem] md:max-w-[80%]", inverse ? "text-white/70" : "text-muted")}>
          {subtext}
        </div>
      )}
    </div>
  );
}
