"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, isNavGroup } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6">
      <div
        className={cn(
          "w-full max-w-[1200px] bg-black rounded-[50px] transition-all duration-300",
          "grid grid-cols-2 md:grid-cols-3 items-center px-[20px] h-[76px]",
          "shadow-[0_16px_36px_rgba(0,0,0,0.2),0_40px_40px_rgba(0,0,0,0.06),inset_0_10px_30px_rgba(255,255,255,0.15)]",
          isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-black"
        )}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center pl-1 text-white font-medium text-lg tracking-tight">
          prashanta<span className="text-accent">.dev</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center justify-center space-x-1">
          {navigation.map((item, idx) => {
            if (isNavGroup(item)) {
              // Simple dropdown for groups (can enhance later)
              return (
                <div key={idx} className="relative group px-4 py-[28px] cursor-pointer">
                  <span className="text-white text-[14px] leading-[1.4] transition-opacity hover:opacity-70 flex items-center gap-2">
                    {item.title}
                    <Image src="/icons/arrow.svg" alt="" width={10} height={10} className="rotate-90 opacity-70" />
                  </span>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[22.5rem] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2 bg-white rounded-md shadow-xl border border-neutral-100 p-6">
                     <div className="flex flex-col gap-3">
                       {item.items.map((subitem, subidx) => (
                         <Link key={subidx} href={subitem.href} className="flex flex-col group/link">
                           <span className="text-[14px] font-medium text-black group-hover/link:text-accent transition-colors">{subitem.title}</span>
                           {subitem.description && <span className="text-[12px] text-neutral-900 mt-1">{subitem.description}</span>}
                         </Link>
                       ))}
                     </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={idx}
                href={item.href}
                className={cn(
                  "px-4 py-[28px] text-[14px] leading-[1.4] transition-opacity hover:opacity-70",
                  pathname === item.href ? "text-white opacity-100" : "text-white opacity-80"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center justify-end gap-4">
          <Button href={siteConfig.navCta.href} variant="primary" className="hidden md:inline-flex whitespace-nowrap">
            {siteConfig.navCta.text}
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
