"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ObfuscatedEmailProps {
  email: string;
  className?: string;
  label?: string;
}

export function ObfuscatedEmail({ email, className, label }: ObfuscatedEmailProps) {
  const [revealed, setRevealed] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const getMaskedEmail = (em: string) => {
    if (em === "contact@prashanta.dev") return "contact@pras*CLICK_ME";
    if (em === "prashanta1403@proton.me") return "prash*CLICK_ME*oton.me";
    
    // Generic fallback for any other emails added later
    const [user, domain] = em.split("@");
    if (!domain) return "*CLICK_ME*";
    return `${user.substring(0, Math.min(5, user.length))}*CLICK_ME*@${domain}`;
  };

  const handleInteraction = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent accidental form submissions if wrapped in a form
    if (!revealed) {
      setRevealed(true);
    } else {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {label && <span className="text-sm font-medium opacity-60 uppercase tracking-wider">{label}</span>}
      <button
        onClick={handleInteraction}
        className={cn(
          "inline-flex items-center w-fit text-left text-[1.125rem] font-mono tracking-tight transition-all",
          revealed 
            ? "hover:text-accent select-all" 
            : "opacity-70 hover:opacity-100 cursor-pointer"
        )}
        aria-label={revealed ? "Copy email to clipboard" : "Reveal email address"}
        title={revealed ? "Click to copy" : "Click to reveal"}
      >
        {revealed ? email : getMaskedEmail(email)}
        
        {revealed && (
          <span className={cn(
            "ml-3 text-[0.75rem] px-2 py-0.5 rounded-md font-sans tracking-normal transition-opacity duration-300",
            copied ? "opacity-100 bg-green-500/10 text-green-600 border border-green-500/20" : "opacity-0"
          )}>
            Copied!
          </span>
        )}
      </button>
    </div>
  );
}
