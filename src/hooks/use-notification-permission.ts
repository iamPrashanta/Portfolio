import { useState, useCallback, useEffect } from "react";
import {
  PermissionStatus,
  isNotificationSupported,
  hasNotificationCooldownElapsed,
  setNotificationCooldown,
} from "@/lib/permissions";

export function useNotificationPermission() {
  const [status, setStatus] = useState<PermissionStatus>("idle");

  const evaluatePermission = useCallback((): boolean => {
    if (!isNotificationSupported()) {
      setStatus("unsupported");
      return false;
    }

    if (Notification.permission === "granted") {
      setStatus("granted");
      return false;
    }

    if (Notification.permission === "denied") {
      setStatus("denied");
      return false;
    }

    if (!hasNotificationCooldownElapsed()) {
      return false;
    }

    setStatus("prompt");
    return true;
  }, []);

  const requestPermission = useCallback(async (): Promise<boolean> => {
    if (!isNotificationSupported()) return false;
    
    setStatus("requesting");
    
    try {
      const result = await Notification.requestPermission();
      
      if (result === "granted") {
        setStatus("granted");
        return true;
      } else {
        setStatus("denied");
        return false;
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      setStatus("denied");
      return false;
    }
  }, []);

  const dismissPermission = useCallback(() => {
    setNotificationCooldown();
    setStatus("idle");
  }, []);

  return {
    status,
    evaluatePermission,
    requestPermission,
    dismissPermission,
  };
}
