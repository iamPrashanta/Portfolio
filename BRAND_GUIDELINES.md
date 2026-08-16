# prashanta.dev — Brand Guidelines

This document outlines the usage of the visual identity system for `prashanta.dev`.

## 1. Logo Variants

The brand system uses a highly reusable React component (`<Logo />`) that supports three variants:

- `mark`: The "Engineering Node" symbol only. Use when space is tight or as a decorative element.
- `wordmark`: The text `prashanta.dev` only.
- `horizontal`: The full lockup `[MARK] prashanta.dev`.

## 2. Component Usage

Always use the `<Logo />` component rather than importing raw SVGs.

```tsx
import { Logo } from "@/components/brand/logo";

// Default (Horizontal, Auto theme, Medium size)
<Logo />

// Symbol only, animated
<Logo variant="mark" animated />

// Large horizontal for footer
<Logo variant="horizontal" size="lg" />
```

## 3. The "Engineering Node" Concept

The logo symbol (Concept F4) subtly derives from a "P" while focusing primarily on representing connected systems, API nodes, and product architecture. It avoids generic "freelancer" aesthetics in favor of a serious, high-end technical identity.

## 4. Light and Dark Themes

The logo component supports `theme="light"`, `theme="dark"`, and `theme="auto"` (default).
- `auto` uses `text-current`, allowing the logo to inherit the color of its container.
- Always ensure sufficient contrast. Do not use the dark logo on dark backgrounds.

## 5. Animation

The `<Logo animated />` prop enables a subtle pulse on the floating node. 
- **Rule:** Use animation sparingly. It is appropriate for loading states, empty states (404), or subtle image fallbacks. Do not animate the main navbar logo.

## 6. Favicon & Metadata

The 16x16 and 32x32 favicons use the `mark` symbol exclusively. The wordmark should never be used as a favicon.

## 7. Forbidden Modifications

- Do not change the aspect ratio of the mark.
- Do not add gradients or drop shadows to the mark.
- Do not change the brand accent color (`#ff4d2e`) on the `.dev` portion of the wordmark.
