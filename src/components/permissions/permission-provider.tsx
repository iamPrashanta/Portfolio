"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { NotificationPermission } from "./notification-permission";
import { MediaPermission } from "./media-permission";
import { MediaPermissionOptions } from "@/hooks/use-media-permission";
import { useNotificationPermission } from "@/hooks/use-notification-permission";
import { useMediaPermission } from "@/hooks/use-media-permission";

interface PermissionContextValue {
  requestNotificationPermission: () => Promise<boolean>;
  requestMediaPermission: (options?: MediaPermissionOptions) => Promise<boolean>;
}

const PermissionContext = createContext<PermissionContextValue | null>(null);

export function usePermissions() {
  const context = useContext(PermissionContext);
  if (!context) {
    throw new Error("usePermissions must be used within a PermissionProvider");
  }
  return context;
}

export function PermissionProvider({ children }: { children: React.ReactNode }) {
  // Notification State
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notificationResolver, setNotificationResolver] = useState<((granted: boolean) => void) | null>(null);
  const { evaluatePermission: evalNotif } = useNotificationPermission();

  // Media State
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [mediaOptions, setMediaOptions] = useState<MediaPermissionOptions>({ video: true, audio: true });
  const [mediaResolver, setMediaResolver] = useState<((granted: boolean) => void) | null>(null);
  const { evaluatePermission: evalMedia } = useMediaPermission();

  const requestNotificationPermission = useCallback((): Promise<boolean> => {
    return new Promise((resolve) => {
      const needsPrompt = evalNotif();
      if (!needsPrompt) {
        // Either unsupported, already granted, already denied, or in cooldown.
        // In a full app you might return actual status instead of just boolean.
        resolve(false); 
        return;
      }

      setNotificationResolver(() => resolve);
      setIsNotificationOpen(true);
    });
  }, [evalNotif]);

  const requestMediaPermission = useCallback((options: MediaPermissionOptions = { video: true, audio: true }): Promise<boolean> => {
    return new Promise((resolve) => {
      const needsPrompt = evalMedia();
      if (!needsPrompt) {
        resolve(false);
        return;
      }

      setMediaOptions(options);
      setMediaResolver(() => resolve);
      setIsMediaOpen(true);
    });
  }, [evalMedia]);

  const handleNotificationComplete = useCallback((granted: boolean) => {
    setIsNotificationOpen(false);
    if (notificationResolver) {
      notificationResolver(granted);
      setNotificationResolver(null);
    }
  }, [notificationResolver]);

  const handleMediaComplete = useCallback((granted: boolean) => {
    setIsMediaOpen(false);
    if (mediaResolver) {
      mediaResolver(granted);
      setMediaResolver(null);
    }
  }, [mediaResolver]);

  return (
    <PermissionContext.Provider value={{ requestNotificationPermission, requestMediaPermission }}>
      {children}
      
      <NotificationPermission 
        isOpen={isNotificationOpen} 
        onClose={() => setIsNotificationOpen(false)}
        onComplete={handleNotificationComplete}
      />
      
      <MediaPermission 
        isOpen={isMediaOpen} 
        options={mediaOptions}
        onClose={() => setIsMediaOpen(false)}
        onComplete={handleMediaComplete}
      />
    </PermissionContext.Provider>
  );
}
