import React from "react";
import { Role } from "@/data/experience";

export function RoleProgression({ roles }: { roles: Role[] }) {
  if (!roles || roles.length === 0) return null;

  return (
    <div className="relative mt-8 pl-[21px] flex flex-col gap-8">
      {/* Subtle vertical connector line */}
      <div className="absolute left-0 top-3 bottom-3 w-[1px] bg-neutral-200" />
      
      {roles.map((role, idx) => {
        const isLatest = idx === 0;
        return (
          <div key={idx} className="relative">
            {/* The connector node */}
            <div className={`absolute left-[-24px] top-[10px] w-[5px] h-[5px] rounded-full border border-white ${isLatest ? 'bg-black' : 'bg-neutral-400'}`} />
            
            <h4 className={`text-[1.125rem] font-medium ${isLatest ? 'text-black' : 'text-neutral-600'}`}>
              {role.title}
            </h4>
            <div className="text-[0.875rem] text-neutral-500 mt-1">{role.period}</div>
            
            {role.description && (
              <p className="text-[0.9375rem] text-muted leading-relaxed mt-3">{role.description}</p>
            )}
            
            {role.highlights && role.highlights.length > 0 && (
              <ul className="flex flex-col gap-2 mt-4">
                {role.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/80 mt-2 shrink-0" />
                    <span className="text-[0.9375rem] leading-relaxed text-muted">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
