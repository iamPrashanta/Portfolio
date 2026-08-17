import { useState, useCallback, useEffect } from "react";
import { PermissionStatus, isMediaSupported } from "@/lib/permissions";

export interface MediaPermissionOptions {
  video?: boolean;
  audio?: boolean;
}

export interface MediaPermissionError {
  type: "NotAllowedError" | "NotFoundError" | "NotReadableError" | "UnsupportedError" | "UnknownError";
  message: string;
}

export function useMediaPermission() {
  const [status, setStatus] = useState<PermissionStatus>("idle");
  const [error, setError] = useState<MediaPermissionError | null>(null);

  const evaluatePermission = useCallback((): boolean => {
    if (!isMediaSupported()) {
      setStatus("unsupported");
      setError({
        type: "UnsupportedError",
        message: "Your browser does not support camera or microphone access, or you are not in a secure context (HTTPS).",
      });
      return false;
    }

    setStatus("prompt");
    setError(null);
    return true;
  }, []);

  const requestPermission = useCallback(async (options: MediaPermissionOptions = { video: true, audio: true }): Promise<boolean> => {
    if (!isMediaSupported()) {
      setStatus("unsupported");
      return false;
    }
    
    setStatus("requesting");
    setError(null);
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia(options);
      
      // Permission granted - IMMEDIATELY stop tracks so hardware is released.
      stream.getTracks().forEach((track) => track.stop());
      
      setStatus("granted");
      return true;
    } catch (err: unknown) {
      console.error("Error requesting media permission:", err);
      setStatus("denied");
      
      let errorType: MediaPermissionError["type"] = "UnknownError";
      let errorMessage = "An unknown error occurred while accessing the camera or microphone.";
      
      if (err instanceof Error) {
        if (err.name === "NotAllowedError") {
          errorType = "NotAllowedError";
          errorMessage = "Camera or microphone access wasn't enabled. You can update this later in your browser settings.";
        } else if (err.name === "NotFoundError") {
          errorType = "NotFoundError";
          errorMessage = "No camera or microphone could be found on your device.";
        } else if (err.name === "NotReadableError") {
          errorType = "NotReadableError";
          errorMessage = "Your camera or microphone is already in use by another application.";
        }
      }
      
      setError({ type: errorType, message: errorMessage });
      return false;
    }
  }, []);

  const dismissPermission = useCallback(() => {
    setStatus("idle");
    setError(null);
  }, []);

  return {
    status,
    error,
    evaluatePermission,
    requestPermission,
    dismissPermission,
  };
}
