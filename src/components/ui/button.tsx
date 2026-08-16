import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "dark" | "light" | "outlineLight" | "outlineDark" | "ghostDark" | "ghostLight";
  size?: "default" | "small" | "large";
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-[50px] font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";

    const variants = {
      primary: "bg-[#ff4d2e] text-white hover:bg-[#ff6245]",
      dark: "bg-black text-white hover:bg-neutral-800",
      light: "bg-white text-black border border-black/10 hover:bg-black hover:text-white hover:border-black",
      outlineLight: "bg-transparent border border-white/20 text-white hover:border-white/50 hover:bg-white/5",
      outlineDark: "bg-transparent border border-black/20 text-black hover:bg-black hover:text-white hover:border-black",
      ghostDark: "text-white hover:bg-white/10",
      ghostLight: "text-black hover:bg-black hover:text-white",
    };

    const sizes = {
      default: "px-[1.875rem] py-[1.125rem] text-[0.875rem]",
      small: "px-[1.25rem] py-[0.75rem] text-[0.875rem]",
      large: "px-[2.5rem] py-[1.5rem] text-[1.125rem]",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
