"use client";

import * as React from "react";
import Image, { ImageProps } from "next/image";
import { ImageFallback } from "./image-fallback";
import { cn } from "@/lib/utils";

interface PrashantaImageProps extends Omit<ImageProps, "src" | "alt"> {
  src?: string | null;
  alt: string;
  fallbackLabel?: string;
}

export function PrashantaImage({
  src,
  alt,
  fallbackLabel = "IMAGE UNAVAILABLE",
  className,
  ...props
}: PrashantaImageProps) {
  const [hasError, setHasError] = React.useState(!src);
  const [prevSrc, setPrevSrc] = React.useState(src);

  // If the src changes, reset the error state during render
  if (src !== prevSrc) {
    setPrevSrc(src);
    setHasError(!src);
  }

  if (hasError || !src) {
    if (process.env.NODE_ENV === "development" && src) {
      console.warn(`[PrashantaImage] Failed to load image:\nsrc: ${src}\nfallback: ${fallbackLabel}`);
    }
    
    return (
      <div className={cn(className, props.fill && "absolute inset-0 w-full h-full")}>
        <ImageFallback label={fallbackLabel} />
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      sizes={props.fill && !props.sizes ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : props.sizes}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
