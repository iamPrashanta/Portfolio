import * as React from "react";
import { cn } from "@/lib/utils";

export type LogoVariant = "mark" | "wordmark" | "horizontal";
export type LogoTheme = "light" | "dark" | "auto";
export type LogoSize = "sm" | "md" | "lg";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: LogoVariant;
  theme?: LogoTheme;
  size?: LogoSize;
  animated?: boolean;
}

export function Logo({
  variant = "horizontal",
  theme = "auto",
  size = "md",
  animated = false,
  className,
  ...props
}: LogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
  };

  const themeClasses = {
    light: "text-black",
    dark: "text-white",
    auto: "text-current",
  };

  const markSizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const classes = cn(
    "shrink-0",
    sizeClasses[size],
    themeClasses[theme],
    className
  );

  const renderMark = () => (
    <svg 
      className={cn("shrink-0", markSizeClasses[size])} 
      viewBox="0 0 120 120" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="24" y="24" width="20" height="72" rx="10" />
      <rect x="44" y="24" width="36" height="20" rx="10" />
      <rect x="76" y="24" width="20" height="48" rx="10" />
      <rect x="44" y="52" width="20" height="20" rx="10" />
      <circle 
        cx="86" 
        cy="86" 
        r="10" 
        className={cn(animated && "animate-pulse origin-center")}
      />
    </svg>
  );

  const renderWordmark = () => (
    <span className="font-sans font-medium tracking-tight" style={{ fontSize: "1.125em", letterSpacing: "-0.02em" }}>
      prashanta<span className="text-[#ff4d2e]">.dev</span>
    </span>
  );

  if (variant === "mark") {
    return (
      <div className={cn("inline-flex", classes)} {...props}>
        {renderMark()}
      </div>
    );
  }

  if (variant === "wordmark") {
    return (
      <div className={cn("inline-flex items-center", classes)} {...props}>
        {renderWordmark()}
      </div>
    );
  }

  // horizontal
  return (
    <div className={cn("inline-flex items-center gap-3", classes)} {...props}>
      {renderMark()}
      {renderWordmark()}
    </div>
  );
}
