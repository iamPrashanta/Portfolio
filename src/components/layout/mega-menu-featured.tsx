import * as React from "react";
import Link from "next/link";
import { NavFeaturedItem } from "@/config/navigation";
import { PrashantaImage } from "@/components/ui/prashanta-image";

interface MegaMenuFeaturedProps {
  featured: NavFeaturedItem;
}

export function MegaMenuFeatured({ featured }: MegaMenuFeaturedProps) {
  return (
    <Link 
      href={featured.href}
      className="group flex flex-col h-full rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors"
    >
      <div className="relative w-full aspect-[4/3] bg-neutral-200 overflow-hidden">
        <PrashantaImage 
          src={featured.image}
          alt={featured.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          fallbackLabel="FEATURED"
        />
        {/* Overlay gradient for dark text contrast if image is light */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h4 className="text-[1.125rem] font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
          {featured.title}
        </h4>
        <p className="text-[14px] text-muted mb-6 flex-1">
          {featured.description}
        </p>
        
        <div className="flex items-center text-[14px] font-medium text-foreground group-hover:text-accent transition-colors">
          {featured.ctaText || "View Detail →"}
        </div>
      </div>
    </Link>
  );
}
