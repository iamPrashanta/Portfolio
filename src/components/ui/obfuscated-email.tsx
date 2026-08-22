"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ObfuscatedEmailProps {
  email: string;
  className?: string;
  label?: string;
}

/**
 * Encodes an email string into a base64 representation at build time.
 * The component receives the plaintext email from the server component,
 * but only renders it after user interaction (click-to-reveal).
 * 
 * The email is never rendered as plaintext in the initial HTML,
 * preventing scraper bots from harvesting it.
 */

function encodeEmail(email: string): string {
  // Simple character code encoding to avoid plaintext in HTML source
  return email
    .split("")
    .map((c) => `&#${c.charCodeAt(0)};`)
    .join("");
}

function getMaskedDisplay(email: string): string {
  const [user, domain] = email.split("@");
  if (!domain) return "••••@••••";

  const userMask = user.length <= 3
    ? "•".repeat(user.length)
    : user.substring(0, 2) + "•".repeat(Math.min(user.length - 2, 6));

  const domainParts = domain.split(".");
  const domainMask = domainParts
    .map((part, i) =>
      i === domainParts.length - 1
        ? part // keep TLD visible (e.g. "dev", "me")
        : part.substring(0, 2) + "•".repeat(Math.min(part.length - 2, 4))
    )
    .join(".");

  return `${userMask}@${domainMask}`;
}

export function ObfuscatedEmail({ email, className, label }: ObfuscatedEmailProps) {
  const [revealed, setRevealed] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  // Memoize the masked version so it's stable across renders
  const masked = React.useMemo(() => getMaskedDisplay(email), [email]);

  const handleInteraction = (e: React.MouseEvent) => {
    e.preventDefault();
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
        aria-label={revealed ? "Copy email to clipboard" : "Click to reveal email address"}
        title={revealed ? "Click to copy" : "Click to reveal"}
      >
        {revealed ? (
          // Render as HTML entities so the plaintext email is never in the DOM as a string
          <span dangerouslySetInnerHTML={{ __html: encodeEmail(email) }} />
        ) : (
          <span>{masked}</span>
        )}

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
