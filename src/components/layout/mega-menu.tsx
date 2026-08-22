import * as React from "react";
import { NavMegaMenu } from "@/config/navigation";
import { MegaMenuColumn } from "./mega-menu-column";
import { MegaMenuFeatured } from "./mega-menu-featured";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  menu: NavMegaMenu;
  isOpen: boolean;
}

export function MegaMenu({ menu, isOpen }: MegaMenuProps) {
  return (
    <div
      className={cn(
        "absolute top-[calc(100%+16px)] left-0 w-full bg-white rounded-3xl p-8 shadow-[0_40px_80px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.05)] border border-neutral-100",
        "transition-all duration-300 transform origin-top",
        isOpen 
          ? "opacity-100 visible translate-y-0 scale-100" 
          : "opacity-0 invisible -translate-y-4 scale-[0.98] pointer-events-none"
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Columns Area */}
        <div 
          className={cn(
            "grid gap-8", 
            menu.featured ? "lg:col-span-8" : "lg:col-span-12", 
            "grid-cols-1 md:grid-cols-2",
            menu.columns.length === 3 ? "lg:grid-cols-3" : menu.columns.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-2"
          )}
        >
          {menu.columns.map((column, idx) => (
            <MegaMenuColumn key={idx} column={column} />
          ))}
        </div>

        {/* Featured Area */}
        {menu.featured && (
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-neutral-100 pt-8 lg:pt-0 lg:pl-8">
            <MegaMenuFeatured featured={menu.featured} />
          </div>
        )}
      </div>
    </div>
  );
}
