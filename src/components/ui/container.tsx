import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "small" | "medium" | "large" | "xlarge";
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    const sizes = {
      default: "max-w-[1200px]",
      small: "max-w-[480px]",
      medium: "max-w-[654px]",
      large: "max-w-[896px]",
      xlarge: "max-w-[1138px]",
    };

    return (
      <div ref={ref} className={cn("w-full mx-auto relative", sizes[size], className)} {...props}>
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";
