"use client";

import { useEffect } from "react";

export function ConsoleMessage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const style = [
        "color: #10b981", // Emerald green
        "font-size: 16px",
        "font-weight: bold",
        "font-family: monospace",
        "padding: 10px 0",
        "text-shadow: 0 0 5px rgba(16, 185, 129, 0.5)",
      ].join(";");

      const linkStyle = [
        "color: #3b82f6", // Blue
        "font-size: 14px",
        "font-weight: bold",
        "font-family: monospace",
        "text-decoration: underline",
      ].join(";");

      console.log(
        "%c👋 Hi Devs, Hackers, and Testers! \n%cLooking under the hood? I respect the curiosity.\n\nIf you find a bug, want to collaborate, or just want to chat about architecture, hit me up on the contact page:\n👉 %chttps://prashanta.dev/contact\n\n%cI'm always happy to debug, build, and explore together!",
        style,
        "color: #94a3b8; font-size: 14px; font-family: monospace;",
        linkStyle,
        "color: #94a3b8; font-size: 14px; font-family: monospace; padding-top: 10px; display: block;"
      );
    }
  }, []);

  return null;
}
