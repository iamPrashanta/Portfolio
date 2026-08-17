"use client";

import React from "react";
import { PermissionDialog } from "./permission-dialog";
import { useNotificationPermission } from "@/hooks/use-notification-permission";

interface NotificationPermissionProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (granted: boolean) => void;
}

export function NotificationPermission({ isOpen, onClose, onComplete }: NotificationPermissionProps) {
  const { status, requestPermission, dismissPermission } = useNotificationPermission();

  const handleDismiss = () => {
    dismissPermission();
    onClose();
    onComplete(false);
  };

  const handlePrimaryAction = async () => {
    const granted = await requestPermission();
    onClose();
    onComplete(granted);
  };

  const description = (
    <div className="space-y-4">
      <p>
        Receive occasional updates about new articles, experiments, and engineering work.
      </p>
      <ul className="space-y-2 mt-4 text-foreground font-medium">
        <li className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-2.5 h-2.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          New technical articles
        </li>
        <li className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-2.5 h-2.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          Engineering experiments
        </li>
        <li className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-2.5 h-2.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          AI and development insights
        </li>
        <li className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-2.5 h-2.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          Important project updates
        </li>
      </ul>
    </div>
  );

  return (
    <PermissionDialog
      isOpen={isOpen}
      onClose={handleDismiss}
      onPrimaryAction={handlePrimaryAction}
      eyebrow="+ STAY UPDATED"
      heading="Get engineering insights when they matter."
      description={description}
      primaryLabel="Enable notifications"
      secondaryLabel="Not now"
      supportingText="You can change this anytime in your browser settings."
      isRequesting={status === "requesting"}
    />
  );
}
