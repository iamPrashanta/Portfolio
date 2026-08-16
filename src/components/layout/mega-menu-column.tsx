import * as React from "react";
import Link from "next/link";
import { NavColumn } from "@/config/navigation";

interface MegaMenuColumnProps {
  column: NavColumn;
}

export function MegaMenuColumn({ column }: MegaMenuColumnProps) {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-badge text-[12px] tracking-wider uppercase text-muted">
        {column.title}
      </h4>
      <ul className="flex flex-col gap-4">
        {column.items.map((item, idx) => (
          <li key={idx}>
            <Link href={item.href} className="group flex flex-col">
              <span className="text-[1rem] font-medium text-foreground transition-colors group-hover:text-accent">
                {item.title}
              </span>
              {item.description && (
                <span className="text-[13px] text-muted mt-1 leading-snug">
                  {item.description}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
