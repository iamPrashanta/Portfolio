"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { navigation, isNavGroup } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { createPortal } from "react-dom";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuContent = (
    <div
      className={cn(
        "fixed inset-0 top-[76px] z-40 bg-black transition-transform duration-300 ease-in-out px-6 py-8 overflow-y-auto",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <nav className="flex flex-col space-y-8">
        {navigation.map((item, idx) => {
          if (isNavGroup(item)) {
            return (
              <div key={idx} className="flex flex-col space-y-4">
                <div className="text-white text-xl font-medium">{item.title}</div>
                <div className="flex flex-col space-y-6 pl-4 border-l border-white/10 mt-2">
                  {item.columns.map((column, colIdx) => (
                    <div key={colIdx} className="flex flex-col space-y-3">
                      <span className="text-[12px] uppercase tracking-wider text-white/50 font-badge">
                        {column.title}
                      </span>
                      <div className="flex flex-col space-y-3">
                        {column.items.map((subitem, subidx) => (
                          <Link
                            key={subidx}
                            href={subitem.href}
                            onClick={() => setIsOpen(false)}
                            className="text-white/80 text-[1rem] font-medium"
                          >
                            {subitem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-medium"
            >
              {item.title}
            </Link>
          );
        })}
        
        <div className="pt-6 mt-6 border-t border-white/10">
          <Link
            href={siteConfig.navCta.href}
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center rounded-[50px] bg-accent px-6 py-4 text-white font-medium text-lg"
          >
            {siteConfig.navCta.text}
          </Link>
        </div>
      </nav>
    </div>
  );

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md transition-opacity hover:opacity-70"
        aria-label="Toggle menu"
      >
        <Image src="/icons/hamburger.svg" alt="Menu" width={24} height={24} className="h-6 w-6 rounded-none" />
      </button>

      {/* Slide-over menu ported to document.body to break out of backdrop-filter contexts */}
      {mounted && createPortal(menuContent, document.body)}
    </div>
  );
}
