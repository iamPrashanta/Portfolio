"use client";

import * as React from "react";
import { LegalSection } from "@/types/legal";
import { cn } from "@/lib/utils";


interface LegalTocProps {
  sections: LegalSection[];
}

export function LegalToc({ sections }: LegalTocProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-[120px]">
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex lg:hidden w-full items-center justify-between bg-neutral-100 p-4 rounded-lg font-medium text-sm text-black mb-6"
      >
        <span>Table of Contents</span>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        )}
      </button>

      {/* TOC Content */}
      <div className={cn(
        "lg:block", 
        isOpen ? "block" : "hidden"
      )}>
        <h3 className="hidden lg:block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-6">
          On this page
        </h3>
        <ul className="flex flex-col gap-3">
          {sections.map((section) => (
            <li key={section.id}>
              <a 
                href={`#${section.id}`} 
                onClick={() => setIsOpen(false)}
                className="text-[14px] text-neutral-600 hover:text-black hover:font-medium transition-colors flex gap-3"
              >
                <span className="text-neutral-400 font-mono text-xs mt-[2px]">{section.number}</span>
                <span className="leading-snug">{section.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
