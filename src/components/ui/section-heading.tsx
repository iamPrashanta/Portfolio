import * as React from "react";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  badge: string;
  heading?: string;
  subtext?: React.ReactNode;
  align?: "left" | "center" | "right";
  headingAs?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  badge,
  heading,
  subtext,
  align = "left",
  headingAs: HeadingAs = "h2",
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
      <Badge className="mb-6">{badge}</Badge>
      
      {heading && (
        <HeadingAs className="mb-6">{heading}</HeadingAs>
      )}
      
      {subtext && (
        <div className="text-[1rem] text-neutral-900 md:max-w-[80%]">
          {subtext}
        </div>
      )}
    </div>
  );
}
