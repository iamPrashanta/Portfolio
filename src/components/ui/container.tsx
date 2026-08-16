import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "small" | "medium" | "large";
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    const sizes = {
      default: "max-w-[var(--container-width)]",
      small: "max-w-[var(--content-sm)]",
      medium: "max-w-[var(--content-md)]",
      large: "max-w-[var(--content-lg)]",
    };

    return (
      <div ref={ref} className={cn("w-full mx-auto relative", sizes[size], className)} {...props}>
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";
