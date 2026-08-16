import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: boolean;
}

export function Badge({ children, icon = true, className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "relative z-10 flex items-center gap-1 text-[14px] leading-[1.4] uppercase tracking-[0.6px] text-black font-badge",
        className
      )}
      {...props}
    >
      {icon && (
        <Image
          src="/icons/plus.svg"
          alt=""
          width={20}
          height={20}
          className="h-5 w-auto rounded-none"
        />
      )}
      <div>{children}</div>
    </div>
  );
}
