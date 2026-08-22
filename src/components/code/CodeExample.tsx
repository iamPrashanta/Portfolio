"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { CodeExample as CodeExampleType, CodeImplementation } from "@/types/code";

interface CodeExampleProps {
  example: CodeExampleType;
  className?: string;
}

export function CodeExample({ example, className }: CodeExampleProps) {
  const [activeLanguage, setActiveLanguage] = React.useState<string>(
    example.implementations[0]?.language || ""
  );
  const [copied, setCopied] = React.useState(false);

  // If there are no implementations, don't render anything
  if (!example.implementations || example.implementations.length === 0) {
    return null;
  }

  const activeImplementation = example.implementations.find(
    (imp) => imp.language === activeLanguage
  ) || example.implementations[0];

  const handleCopy = async () => {
    if (!activeImplementation) return;
    try {
      await navigator.clipboard.writeText(activeImplementation.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={cn("my-8 rounded-[16px] overflow-hidden border border-neutral-200/20 bg-[#121212]", className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#1A1A1A] border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {example.implementations.map((imp) => (
              <button
                key={imp.language}
                onClick={() => setActiveLanguage(imp.language)}
                className={cn(
                  "text-sm font-medium transition-colors px-3 py-1.5 rounded-md",
                  activeLanguage === imp.language
                    ? "bg-white/10 text-white"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                )}
              >
                {imp.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {activeImplementation.filename && (
            <span className="text-xs text-neutral-500 font-mono hidden md:inline-block">
              {activeImplementation.filename}
            </span>
          )}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors p-1.5 rounded-md hover:bg-white/5"
            aria-label="Copy code"
          >
            {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
            <span className="hidden sm:inline-block">{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      </div>

      {/* Code Block */}
      <div className="p-4 md:p-6 overflow-x-auto">
        <pre className="text-[13px] md:text-sm leading-relaxed font-mono text-neutral-300">
          <code>{activeImplementation.code}</code>
        </pre>
      </div>
      
      {/* Explanation */}
      {activeImplementation.explanation && (
        <div className="px-4 py-3 bg-[#1A1A1A] border-t border-white/5 text-sm text-neutral-400">
          {activeImplementation.explanation}
        </div>
      )}
    </div>
  );
}
