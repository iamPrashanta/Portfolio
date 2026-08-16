"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, isNavMegaMenu } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import { MegaMenu } from "./mega-menu";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeMenuTitle, setActiveMenuTitle] = React.useState<string | null>(null);
  
  // Track timeout to debounce hiding the menu, preventing flickering when moving between trigger and panel
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on route change
  React.useEffect(() => {
    // Optional: Avoid calling setState synchronously during render by using a small timeout, or just rely on state reset
    const t = setTimeout(() => setActiveMenuTitle(null), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenuTitle(title);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenuTitle(null);
    }, 150); // Small delay to allow moving to the panel
  };

  // Close when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("header")) {
        setActiveMenuTitle(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header 
      className="fixed top-0 md:top-4 left-0 right-0 z-50 flex justify-center px-0 md:px-6"
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full max-w-[1200px]">
        {/* Pill Navbar */}
        <div
          className={cn(
            "w-full bg-black rounded-none md:rounded-[50px] transition-all duration-300",
            "grid grid-cols-2 md:grid-cols-[auto_1fr_auto] items-center px-[24px] h-[76px]",
            "shadow-[0_16px_36px_rgba(0,0,0,0.2),0_40px_40px_rgba(0,0,0,0.06),inset_0_10px_30px_rgba(255,255,255,0.15)]",
            isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-black",
            // Keep pill on top of mega menu when open
            "relative z-20"
          )}
        >
          {/* Brand */}
          <Link 
            href="/" 
            className="flex items-center pl-1 text-white font-medium text-lg tracking-tight"
            onMouseEnter={() => handleMouseEnter("")} // clear active menu
          >
            prashanta<span className="text-accent">.dev</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center justify-center space-x-2 w-full">
            {navigation.map((item, idx) => {
              if (isNavMegaMenu(item)) {
                const isActive = activeMenuTitle === item.title;
                return (
                  <div 
                    key={idx} 
                    className="relative px-4 py-[28px] cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(item.title)}
                  >
                    <span 
                      className={cn(
                        "text-[14px] leading-[1.4] transition-colors flex items-center gap-1.5",
                        isActive ? "text-white" : "text-white/80 hover:text-white"
                      )}
                    >
                      {item.title}
                      <span className={cn(
                        "w-1.5 h-1.5 rounded-full bg-accent transition-all duration-300",
                        isActive ? "opacity-100 scale-100" : "opacity-40 scale-75"
                      )} />
                    </span>
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  href={item.href}
                  onMouseEnter={() => handleMouseEnter("")} // clear active menu
                  className={cn(
                    "px-4 py-[28px] text-[14px] leading-[1.4] transition-colors hover:text-white",
                    pathname === item.href ? "text-white" : "text-white/80"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div 
            className="flex items-center justify-end gap-4"
            onMouseEnter={() => handleMouseEnter("")} // clear active menu
          >
            <Button href={siteConfig.navCta.href} variant="primary" className="hidden md:inline-flex whitespace-nowrap">
              {siteConfig.navCta.text}
            </Button>
            <MobileNav />
          </div>
        </div>

        {/* Mega Menu Overlay */}
        <div 
          className={cn(
            "absolute top-0 left-0 w-full pt-[76px] z-10 pointer-events-none transition-all duration-300",
            activeMenuTitle ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="relative w-full pointer-events-auto" onMouseEnter={() => activeMenuTitle && handleMouseEnter(activeMenuTitle)}>
            {navigation.filter(isNavMegaMenu).map((menu) => (
              <MegaMenu 
                key={menu.title} 
                menu={menu} 
                isOpen={activeMenuTitle === menu.title} 
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
