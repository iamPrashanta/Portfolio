"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface PermissionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onPrimaryAction: () => void;
  eyebrow: string;
  heading: string;
  description: React.ReactNode;
  primaryLabel: string;
  secondaryLabel: string;
  supportingText?: React.ReactNode;
  isRequesting?: boolean;
}

export function PermissionDialog({
  isOpen,
  onClose,
  onPrimaryAction,
  eyebrow,
  heading,
  description,
  primaryLabel,
  secondaryLabel,
  supportingText,
  isRequesting = false,
}: PermissionDialogProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isRequesting) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, isRequesting]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-up" style={{ animationDuration: "0.3s" }}>
      <div 
        className="w-full max-w-[480px] bg-white dark:bg-[#111] rounded-[24px] p-8 md:p-10 shadow-2xl border border-black/5 dark:border-white/10 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="permission-dialog-title"
      >
        {/* Eyebrow */}
        <h4 className="font-badge uppercase tracking-wider text-[11px] md:text-[12px] text-muted mb-4">
          {eyebrow}
        </h4>

        {/* Heading */}
        <h2 id="permission-dialog-title" className="text-[1.75rem] md:text-[2rem] font-medium leading-tight mb-4 text-black dark:text-white">
          {heading}
        </h2>

        {/* Description */}
        <div className="text-[1rem] text-muted leading-relaxed mb-8">
          {description}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button 
            onClick={onPrimaryAction} 
            disabled={isRequesting}
            className="w-full sm:w-auto px-8"
          >
            {isRequesting ? "Waiting..." : primaryLabel}
          </Button>
          <button
            onClick={onClose}
            disabled={isRequesting}
            className="px-6 py-3 rounded-full text-[1rem] font-medium text-muted hover:text-black dark:hover:text-white transition-colors"
          >
            {secondaryLabel}
          </button>
        </div>

        {/* Supporting Privacy Text */}
        {supportingText && (
          <div className="pt-6 border-t border-black/10 dark:border-white/10">
            <p className="text-[0.875rem] text-muted/80">
              {supportingText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
