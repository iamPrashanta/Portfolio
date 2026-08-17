# Permission Architecture

This document describes the reusable, contextual permission architecture implemented in `prashanta.dev`.

## Philosophy
To ensure a premium and respectful user experience, this project strictly adheres to the principle of **no immediate browser permission popups on page load**. 

Instead, permissions are requested gracefully:
1. **Contextual Trigger**: Permissions are only asked when the user tries to use a feature that needs them (e.g., clicking "Stay Updated" or "Join Video Call").
2. **Pre-Permission Dialog**: Before triggering the native browser prompt, a custom, branded dialog explains *why* the permission is needed and *what* it will be used for.
3. **Graceful Degradation**: If a user dismisses the prompt or denies permission, the UI handles this without repeatedly harassing the user.

---

## 1. Notification Permissions

Used for the Insights & Blog system to send occasional updates.

**Flow:**
1. A feature calls `requestNotificationPermission()`.
2. The system evaluates current permission status (`granted`, `denied`, `unsupported`).
3. If a prompt is needed and the 30-day cooldown hasn't expired since the last dismissal, it returns `false`.
4. Otherwise, the `<NotificationPermission />` modal appears.
5. If the user clicks "Not now", a timestamp is stored in `localStorage` under `permissions:notifications:dismissedAt` to prevent pestering them for 30 days.
6. If the user clicks "Enable notifications", `Notification.requestPermission()` is called.

**Usage Example:**
```tsx
"use client";
import { usePermissions } from "@/components/permissions/permission-provider";

export function InsightsSubscribeButton() {
  const { requestNotificationPermission } = usePermissions();

  const handleSubscribe = async () => {
    const granted = await requestNotificationPermission();
    if (granted) {
      // Connect to push notification backend
    }
  };

  return <button onClick={handleSubscribe}>Stay Updated</button>;
}
```

---

## 2. Media (Camera & Microphone) Permissions

Used for future Video Consultation / WebRTC functionality.

**Flow:**
1. A feature calls `requestMediaPermission({ video: true, audio: true })`.
2. The system evaluates browser support (requires HTTPS).
3. The `<MediaPermission />` modal appears.
4. If the user clicks "Continue", `navigator.mediaDevices.getUserMedia` is called.
5. **Important**: The resulting tracks are *immediately* stopped after testing. This ensures the hardware light turns off right away. The actual WebRTC session is responsible for requesting the stream again when the call actually starts.
6. Handles specific errors like `NotAllowedError` and `NotFoundError` gracefully within the modal UI.

**Usage Example:**
```tsx
"use client";
import { usePermissions } from "@/components/permissions/permission-provider";

export function JoinVideoCallButton() {
  const { requestMediaPermission } = usePermissions();

  const handleJoin = async () => {
    const granted = await requestMediaPermission({ video: true, audio: true });
    if (granted) {
      // Initialize WebRTC connection and request actual stream
    }
  };

  return <button onClick={handleJoin}>Join Video Session</button>;
}
```

---

## Technical Details

### State Management
All permission Modals and their state are globally orchestrated by `PermissionProvider` located in `src/components/permissions/permission-provider.tsx`, which wraps the application in `src/app/layout.tsx`.

### SSR Safety
Next.js App Router enforces strict server-side rendering boundaries. All capability checks (e.g., `window.Notification` or `navigator.mediaDevices`) are safely guarded with `typeof window !== "undefined"` checks in `src/lib/permissions.ts`. No hydration errors will occur.

### Security Limitations
Camera and microphone access via `navigator.mediaDevices` strictly requires a Secure Context (`https://` or `localhost`). If tested on a non-secure production environment, it will fail gracefully and report as unsupported.
