import * as React from "react";
import { LegalSection as LegalSectionType, LegalContentBlock } from "@/types/legal";

interface LegalSectionProps {
  section: LegalSectionType;
}

function renderBlock(block: LegalContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return <p key={index} className="text-[1.05rem] leading-[1.7] text-neutral-700 mb-6">{block.content}</p>;
    
    case "list_bullet":
      return (
        <ul key={index} className="list-disc pl-6 mb-6 space-y-3 text-[1.05rem] text-neutral-700">
          {block.items?.map((item, i) => (
            <li key={i} className="pl-2 leading-[1.6]">{item}</li>
          ))}
        </ul>
      );
      
    case "list_number":
      return (
        <ol key={index} className="list-decimal pl-6 mb-6 space-y-3 text-[1.05rem] text-neutral-700">
          {block.items?.map((item, i) => (
            <li key={i} className="pl-2 leading-[1.6]">{item}</li>
          ))}
        </ol>
      );
      
    case "callout":
      return (
        <div key={index} className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 mb-6">
          {block.title && <h4 className="font-medium text-black mb-2">{block.title}</h4>}
          <p className="text-neutral-600 text-[1rem] leading-[1.6] m-0">{block.content}</p>
        </div>
      );
      
    case "note":
      return (
        <div key={index} className="border-l-4 border-black pl-4 py-1 mb-6">
          <p className="text-neutral-600 text-[1rem] italic leading-[1.6] m-0">{block.content}</p>
        </div>
      );
      
    default:
      return null;
  }
}

export function LegalSection({ section }: LegalSectionProps) {
  return (
    <section id={section.id} className="scroll-mt-[120px] mb-16 lg:mb-24 animate-fade-up group">
      <div className="flex items-baseline gap-4 mb-8">
        <span className="text-sm font-mono text-neutral-400 group-hover:text-black transition-colors">{section.number} —</span>
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-black">{section.title}</h2>
      </div>
      
      <div className="prose-legal max-w-none">
        {section.content.map((block, index) => renderBlock(block, index))}
      </div>
    </section>
  );
}
