// ─────────────────────────────────────────────────────────
// Design Tokens — extracted from Structa Webflow template
// ─────────────────────────────────────────────────────────
// These tokens mirror the Structa CSS custom properties.
// They are referenced in globals.css and throughout components.

export const design = {
  colors: {
    // Base
    black: "#000000",
    white: "#ffffff",
    accent: "#ff4d2e", // Structa orange

    // Semantic surfaces
    surface: "#ffffff",
    surfaceMuted: "#ecece8",
    background: "#f5f5f0",
    foreground: "#1a1a1a",

    // Dark semantic surfaces
    dark: {
      base: "#0a0a0a",
      soft: "#171717",
      foreground: "#f5f5f5",
    },

    // Neutral shades (legacy structa mappings if needed)
    neutral: {
      50: "#fafafa",  // Primary page background
      100: "#f7f7f7",
      200: "#f2f2f2",
      300: "#ededed", // Borders, dividers
      400: "#e6e6e6",
      500: "#dedede",
      600: "#d9d9d9",
      700: "#d1d1d1",
      800: "#c2c2c2",
      900: "#a6a6a6", // Muted text
    },
  },

  fonts: {
    body: "var(--font-geist-sans), sans-serif",
    heading: "var(--font-geist-sans), sans-serif",
    badge: "var(--font-space-mono), monospace",
  },

  // Content widths (max-width for containers)
  contentWidth: {
    container: "1200px",
    xLarge: "1138px",
    large: "896px",
    medium: "654px",
    small: "480px",
  },

  // Section vertical padding
  sectionPadding: {
    small: "48px",   // 3rem
    medium: "96px",  // 6rem
    large: "144px",  // 9rem
  },

  // Border radius
  radius: {
    default: "16px",  // 1rem — cards, images
    button: "50px",   // Pill shape — buttons, navbar
    small: "8px",
    full: "9999px",
  },

  // Typography scale (matches Structa CSS exactly)
  typography: {
    h1: { size: "3.5rem", weight: 400, lineHeight: 1.1 },
    h2: { size: "2.5rem", weight: 400, lineHeight: 1.15 },
    h3: { size: "2rem", weight: 400, lineHeight: 1.2 },
    h4: { size: "1.75rem", weight: 500, lineHeight: 1.2 },
    h5: { size: "1.25rem", weight: 500, lineHeight: 1.3 },
    h6: { size: "1.125rem", weight: 500, lineHeight: 1.3 },
    body: { size: "1rem", weight: 400, lineHeight: 1.5 },
    small: { size: "0.875rem", weight: 400, lineHeight: 1.4 },
    tiny: { size: "0.755rem", weight: 400, lineHeight: 1.4 },
    large: { size: "1.125rem", weight: 400, lineHeight: 1.5 },
  },

  // Spacing scale used by Structa spacers
  spacing: {
    xxsmall: "0.5rem",   // 8px
    xsmall: "1rem",      // 16px
    small: "1.5rem",     // 24px
    medium: "2rem",      // 32px
    large: "3rem",       // 48px — spacer-large
    xlarge: "3.75rem",   // 60px
    xxlarge: "6rem",     // 96px
  },

  // Animation durations
  animation: {
    fast: "150ms",
    normal: "200ms",
    slow: "400ms",
  },
} as const;

export type Design = typeof design;
