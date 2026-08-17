export type PermissionStatus =
  | "idle"
  | "prompt"
  | "requesting"
  | "granted"
  | "denied"
  | "unsupported";

export const PERMISSION_COOLDOWN_DAYS = 30;
export const NOTIFICATIONS_DISMISSED_KEY = "permissions:notifications:dismissedAt";

export function isNotificationSupported(): boolean {
  return typeof window !== "undefined" && "Notification" in window;
}

export function isMediaSupported(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof navigator !== "undefined" &&
    !!navigator.mediaDevices &&
    !!navigator.mediaDevices.getUserMedia
  );
}

export function hasNotificationCooldownElapsed(): boolean {
  if (typeof window === "undefined") return true;

  const dismissedAt = localStorage.getItem(NOTIFICATIONS_DISMISSED_KEY);
  if (!dismissedAt) return true;

  try {
    const dismissDate = new Date(dismissedAt).getTime();
    const now = Date.now();
    const daysSinceDismiss = (now - dismissDate) / (1000 * 60 * 60 * 24);
    
    return daysSinceDismiss >= PERMISSION_COOLDOWN_DAYS;
  } catch (_) {
    // If parsing fails, ignore cooldown
    return true;
  }
}

export function setNotificationCooldown(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(NOTIFICATIONS_DISMISSED_KEY, new Date().toISOString());
}
