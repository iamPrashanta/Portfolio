"use client";

import React from "react";
import { PermissionDialog } from "./permission-dialog";
import { useMediaPermission, MediaPermissionOptions } from "@/hooks/use-media-permission";

interface MediaPermissionProps {
  isOpen: boolean;
  options: MediaPermissionOptions;
  onClose: () => void;
  onComplete: (granted: boolean) => void;
}

export function MediaPermission({ isOpen, options, onClose, onComplete }: MediaPermissionProps) {
  const { status, error, requestPermission, dismissPermission } = useMediaPermission();

  const handleDismiss = () => {
    dismissPermission();
    onClose();
    onComplete(false);
  };

  const handlePrimaryAction = async () => {
    const granted = await requestPermission(options);
    
    // Only close and complete if it was granted. 
    // If it failed, we keep the dialog open to show the error state.
    if (granted) {
      onClose();
      onComplete(true);
    }
  };

  const description = (
    <div className="space-y-4">
      <p>
        A video session may use your camera and microphone so we can communicate in real time. Your browser will ask for permission before anything is shared.
      </p>
      
      {/* Error state */}
      {error && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 mt-4">
          <p className="text-sm text-red-600 font-medium">
            {error.message}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <PermissionDialog
      isOpen={isOpen}
      onClose={handleDismiss}
      onPrimaryAction={handlePrimaryAction}
      eyebrow="+ VIDEO SESSION"
      heading="Camera access when you're ready."
      description={description}
      primaryLabel="Continue"
      secondaryLabel="Not now"
      supportingText="Your camera and microphone are only accessed after you explicitly continue."
      isRequesting={status === "requesting"}
    />
  );
}
