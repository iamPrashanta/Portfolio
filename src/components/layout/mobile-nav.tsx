"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { navigation, isNavGroup } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

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

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md transition-opacity hover:opacity-70"
        aria-label="Toggle menu"
      >
        <Image src="/icons/hamburger.svg" alt="Menu" width={24} height={24} className="h-6 w-6" />
      </button>

      {/* Slide-over menu */}
      <div
        className={cn(
          "fixed inset-0 top-[96px] z-40 bg-black transition-transform duration-300 ease-in-out px-6 py-8 overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          {navigation.map((item, idx) => {
            if (isNavGroup(item)) {
              return (
                <div key={idx} className="flex flex-col space-y-3">
                  <div className="text-white/60 uppercase tracking-wider text-xs font-badge">{item.title}</div>
                  <div className="flex flex-col space-y-4 pl-4 border-l border-white/10">
                    {item.items.map((subitem, subidx) => (
                      <Link
                        key={subidx}
                        href={subitem.href}
                        onClick={() => setIsOpen(false)}
                        className="text-white text-lg font-medium"
                      >
                        {subitem.title}
                      </Link>
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
    </div>
  );
}
