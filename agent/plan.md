# prashanta.dev — Structa Webflow to Next.js Implementation Plan

## Project Goal

Convert the downloaded **Structa Webflow template** into a production-quality Next.js portfolio and personal engineering platform for `prashanta.dev`.

The final website should combine three purposes:

1. **Senior Engineer Portfolio**
   Demonstrate technical skills, experience, architecture decisions, projects, and case studies.

2. **Independent Software Consultant / Freelance Business**
   Attract international clients through service pages, case studies, clear calls to action, and a professional contact flow.

3. **Technical Publication & Developer Hub**
   Support future blogging, engineering articles, AI/LLM content, DevOps content, tools, MCP experiments, DSA, and technical projects.

---

# Core Strategy

We will **not rebuild Structa from scratch based only on screenshots**.

Instead:

```text
Downloaded Structa Webflow Template
                ↓
        Inspect file structure
                ↓
Extract HTML / CSS / assets / fonts
                ↓
Map existing Structa sections
                ↓
Convert reusable components
                ↓
Convert pages to Next.js App Router
                ↓
Replace Webflow interactions
                ↓
Create reusable design system
                ↓
Restructure navigation
                ↓
Add prashanta.dev content architecture
                ↓
Build dynamic content routes
```

The first objective is to preserve as much of the original Structa visual quality as possible while removing Webflow-specific dependencies.

---

# Phase 0 — Inspect the Downloaded Structa Template

Before modifying the existing Next.js project, inspect the downloaded Webflow files.

## Inspect

```text
HTML files
CSS files
JavaScript files
Fonts
Images
SVG files
Webflow interactions
Navigation structure
Footer structure
Forms
CMS-related structures
Individual page layouts
```

Determine whether the download contains a structure similar to:

```text
structa/
├── index.html
├── about.html
├── services.html
├── service-single.html
├── projects.html
├── project-single.html
├── blog.html
├── blog-post.html
├── contact.html
│
├── css/
├── js/
├── images/
└── fonts/
```

## Output of Phase 0

Create a conversion inventory.

Example:

| Webflow Asset        | Next.js Destination                 | Status        |
| -------------------- | ----------------------------------- | ------------- |
| Navbar               | `components/layout/navbar.tsx`      | Convert       |
| Footer               | `components/layout/footer.tsx`      | Convert       |
| Hero section         | `components/sections/hero.tsx`      | Reuse         |
| Project cards        | `components/cards/project-card.tsx` | Reusable      |
| Service cards        | `components/cards/service-card.tsx` | Reusable      |
| Blog cards           | `components/cards/article-card.tsx` | Reusable      |
| Contact form         | `components/forms/contact-form.tsx` | Convert later |
| Webflow JS animation | CSS / React / Motion                | Evaluate      |

No unnecessary redesign should happen during this phase.

---

# Phase 1 — Convert Structa Into the Next.js Foundation

The current project already contains:

```text
Next.js
TypeScript
Tailwind CSS v4
App Router
@/* path alias
```

The goal is to convert Structa into the Next.js application structure.

## Target Structure

```text
src/
├── app/
├── components/
├── config/
├── content/
├── data/
├── lib/
├── hooks/
└── types/
```

---

# Phase 2 — Asset Migration

Move all Webflow assets into a clean Next.js structure.

```text
public/
├── images/
│   ├── branding/
│   ├── projects/
│   ├── services/
│   ├── case-studies/
│   ├── blog/
│   └── backgrounds/
│
├── icons/
├── fonts/
└── documents/
    └── prashanta-mondal-resume.pdf
```

## Asset Rules

* Do not hotlink Webflow assets.
* Preserve original image quality initially.
* Convert image usage to `next/image` where appropriate.
* Optimize large images later.
* Preserve SVGs as reusable assets or React components where beneficial.
* Self-host downloaded fonts when licensing and files allow it.

---

# Phase 3 — Extract the Structa Design System

Before creating all portfolio pages, convert Structa's visual language into reusable tokens.

## Create

```text
src/
├── styles/
│   └── tokens.css
│
├── config/
│   └── design.ts
│
└── components/
    └── ui/
```

## Extract

```text
Colors
Typography
Font sizes
Spacing
Container widths
Border radius
Buttons
Cards
Shadows
Grid systems
Section spacing
Responsive breakpoints
Animations
Hover states
```

The goal is:

```tsx
<Button variant="primary">
  Start a Project
</Button>
```

instead of copying Structa button markup everywhere.

---

# Phase 4 — Convert Shared Structa Components

Create reusable components from the existing template.

## Layout

```text
components/
├── layout/
│   ├── navbar.tsx
│   ├── mobile-navigation.tsx
│   ├── footer.tsx
│   ├── page-header.tsx
│   └── site-shell.tsx
```

## UI

```text
components/
├── ui/
│   ├── button.tsx
│   ├── container.tsx
│   ├── badge.tsx
│   ├── section-heading.tsx
│   ├── card.tsx
│   ├── tag.tsx
│   └── divider.tsx
```

## Cards

```text
components/
├── cards/
│   ├── project-card.tsx
│   ├── service-card.tsx
│   ├── article-card.tsx
│   ├── skill-card.tsx
│   └── case-study-card.tsx
```

## Sections

```text
components/
├── sections/
│   ├── hero.tsx
│   ├── services.tsx
│   ├── featured-projects.tsx
│   ├── case-studies.tsx
│   ├── client-cta.tsx
│   ├── experience.tsx
│   ├── tech-stack.tsx
│   └── latest-insights.tsx
```

The original Structa sections should be reused whenever possible.

---

# Phase 5 — New prashanta.dev Navigation Architecture

The Structa navigation should be replaced with your portfolio architecture.

## Recommended Desktop Navigation

```text
[ PRASHANTA.DEV ]

About

Services

Work
⌄

Insights
⌄

Lab
⌄

                     [ Start a Project ↗ ]
```

This is intentionally simpler than exposing every route.

---

## About

```text
/about
/about/journey
/about/now
/resume
```

---

## Services

This is important for freelance client acquisition.

```text
/services
/services/backend-development
/services/full-stack-development
/services/api-integration
/services/cloud-devops
/services/database-optimization
/services/security-engineering
/services/ai-automation
```

These pages should be designed for clients.

Example:

```text
Backend Development

Build reliable, secure and scalable
backend systems for your product.

What I can help with

• REST APIs
• Payment integrations
• Authentication
• Database architecture
• API performance
• Security
• Third-party integrations

Relevant Experience

Selected Projects

[ Start a Project ]
```

---

## Work

Dropdown:

```text
/projects
/case-studies
/skills
```

Potential structure:

```text
Work
├── Projects
├── Case Studies
└── Skills
```

---

## Insights

This becomes the future traffic engine.

```text
/insights
/insights/[slug]

/engineering
/engineering/[topic]
```

Future categories:

```text
Backend
DevOps
AI & LLM
Security
Databases
System Design
Data Engineering
Career
Experiments
```

---

## Lab

Technical and experimental content.

```text
/lab
/lab/experiments
/lab/architecture

/tools
/tools/[slug]

/mcp

/dsa

/cp
```

---

## Connect

```text
/connect
/contact
```

---

# Phase 6 — Final Route Architecture

The target App Router structure should be:

```text
src/
└── app/
    │
    ├── page.tsx
    │
    ├── about/
    │   ├── page.tsx
    │   ├── journey/
    │   │   └── page.tsx
    │   └── now/
    │       └── page.tsx
    │
    ├── resume/
    │   └── page.tsx
    │
    ├── services/
    │   ├── page.tsx
    │   └── [slug]/
    │       └── page.tsx
    │
    ├── projects/
    │   ├── page.tsx
    │   └── [slug]/
    │       └── page.tsx
    │
    ├── case-studies/
    │   ├── page.tsx
    │   └── [slug]/
    │       └── page.tsx
    │
    ├── skills/
    │   ├── page.tsx
    │   └── [slug]/
    │       └── page.tsx
    │
    ├── insights/
    │   ├── page.tsx
    │   └── [slug]/
    │       └── page.tsx
    │
    ├── engineering/
    │   ├── page.tsx
    │   └── [topic]/
    │       └── page.tsx
    │
    ├── lab/
    │   ├── page.tsx
    │   ├── experiments/
    │   │   └── page.tsx
    │   └── architecture/
    │       └── page.tsx
    │
    ├── tools/
    │   ├── page.tsx
    │   └── [slug]/
    │       └── page.tsx
    │
    ├── mcp/
    │   └── page.tsx
    │
    ├── dsa/
    │   └── page.tsx
    │
    ├── cp/
    │   └── page.tsx
    │
    ├── connect/
    │   └── page.tsx
    │
    ├── contact/
    │   └── page.tsx
    │
    ├── status/
    │   └── page.tsx
    │
    ├── sitemap.ts
    ├── robots.ts
    ├── not-found.tsx
    ├── layout.tsx
    └── globals.css
```

---

# Phase 7 — Convert Existing Structa Pages First

Do not immediately create placeholder pages.

First identify which downloaded Structa pages already correspond to our needs.

Example mapping:

| Structa Page   | prashanta.dev      |
| -------------- | ------------------ |
| Home           | `/`                |
| About          | `/about`           |
| Services       | `/services`        |
| Service Single | `/services/[slug]` |
| Projects       | `/projects`        |
| Project Single | `/projects/[slug]` |
| Blog           | `/insights`        |
| Blog Post      | `/insights/[slug]` |
| Contact        | `/contact`         |

These should receive the highest conversion priority.

This means the website will immediately look like a real professional website instead of a collection of placeholders.

---

# Phase 8 — Home Page Conversion

The Structa homepage should be retained structurally but rewritten for your personal brand.

## Target Hero

```text
Senior Full Stack Engineer
& Independent Software Consultant

I build secure, scalable software systems,
cloud infrastructure, and intelligent applications.

Backend Engineering
Cloud & DevOps
AI & Automation

[ Start a Project ]
[ View My Work ]
```

---

## Homepage Structure

```text
NAVIGATION

HERO

TRUST / EXPERIENCE STRIP

SERVICES

SELECTED WORK

CASE STUDIES

TECHNICAL EXPERTISE

ABOUT / EXPERIENCE

LATEST INSIGHTS

CLIENT CTA

FOOTER
```

This gives the site two simultaneous purposes:

```text
Recruiter / Company
        ↓
Evaluate Experience
        ↓
Projects
        ↓
Case Studies
        ↓
Resume
```

and:

```text
Potential Client
        ↓
Understand Services
        ↓
See Relevant Work
        ↓
Build Trust
        ↓
Start a Project
```

---

# Phase 9 — Dynamic Content Architecture

Do not hardcode every project or service directly inside pages.

Create a content/data layer.

## Initial Structure

```text
src/
├── data/
│   ├── services.ts
│   ├── projects.ts
│   ├── case-studies.ts
│   ├── skills.ts
│   └── navigation.ts
```

Example:

```ts
export const projects = [
  {
    slug: "interactive-kyc-system",
    title: "Interactive KYC & Identity Verification System",
    description: "...",
    technologies: [
      "PHP",
      "JavaScript",
      "WebRTC",
      "AWS S3"
    ],
    featured: true,
  },
];
```

Then:

```text
/projects/interactive-kyc-system
```

is generated from:

```text
projects/[slug]/page.tsx
```

The same system should power:

```text
/services/[slug]

/projects/[slug]

/case-studies/[slug]

/skills/[slug]

/tools/[slug]

/insights/[slug]
```

---

# Phase 10 — Webflow Interaction Migration

Webflow JavaScript should not simply be copied blindly.

Every interaction should be classified.

## Type A — CSS

Use CSS or Tailwind for:

```text
Hover effects
Transitions
Color changes
Simple transforms
Opacity
Dropdowns
```

## Type B — React State

Use React for:

```text
Mobile menu
Accordion
Tabs
Filters
Interactive cards
```

## Type C — Animation Library

Only add an animation library when Structa contains complex interactions that cannot be reproduced cleanly.

Possible future choice:

```text
Motion
```

Do not add it unless necessary.

The goal is:

```text
Same premium visual experience
+
Less Webflow JavaScript
+
Better maintainability
+
Better performance
```

---

# Phase 11 — SEO Foundation

Create:

```text
src/app/sitemap.ts
src/app/robots.ts
```

Add central site configuration:

```text
src/config/site.ts
```

Example:

```ts
export const siteConfig = {
  name: "Prashanta Mondal",
  domain: "https://prashanta.dev",
  title: "Senior Full Stack Engineer & Software Consultant",
  description:
    "I build secure, scalable software systems, cloud infrastructure and intelligent applications.",
};
```

Every dynamic route should generate metadata.

Example:

```text
/projects/interactive-kyc-system

Title:
Interactive KYC System | Prashanta Mondal

Description:
A secure WebRTC-based identity verification system...
```

This is important because projects, services, and future technical articles can all become searchable landing pages.

---

# Phase 12 — Placeholder Strategy

Do not create ugly "Coming Soon" pages everywhere.

Instead, use Structa's existing visual language.

For pages without content:

```text
Page Title

A short professional description.

Relevant sections coming soon.
```

The page should still feel like part of the finished website.

---

# Phase 13 — Implementation Order

## Step 1 — Audit

```text
Inspect downloaded Structa files
Map HTML pages
Map assets
Map CSS
Map JavaScript
Identify Webflow dependencies
```

## Step 2 — Foundation

```text
Move assets
Configure fonts
Configure globals
Create design tokens
Create site config
```

## Step 3 — Shared Components

```text
Navbar
Mobile navigation
Footer
Buttons
Containers
Cards
Section components
```

## Step 4 — Convert Existing Structa Pages

Priority:

```text
/
 /about
 /services
 /projects
 /contact
```

## Step 5 — Convert Dynamic Pages

```text
/services/[slug]
/projects/[slug]
/case-studies/[slug]
/insights/[slug]
/skills/[slug]
/tools/[slug]
```

## Step 6 — Add Your Content

```text
Professional experience
Projects
Services
Skills
Case studies
Resume
Social links
Contact information
```

## Step 7 — Add Extended Technical Sections

```text
/lab
/mcp
/tools
/dsa
/cp
/engineering
```

## Step 8 — SEO & Production

```text
Metadata
Open Graph
Twitter cards
Sitemap
Robots
404
Image optimization
Performance testing
Accessibility review
```

---

# Proposed File Structure

```text
src/
├── app/
│
├── components/
│   ├── cards/
│   ├── forms/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── config/
│   ├── navigation.ts
│   └── site.ts
│
├── data/
│   ├── case-studies.ts
│   ├── projects.ts
│   ├── services.ts
│   ├── skills.ts
│   └── tools.ts
│
├── hooks/
│
├── lib/
│   ├── metadata.ts
│   ├── utils.ts
│   └── slug.ts
│
└── types/
    ├── project.ts
    ├── service.ts
    ├── article.ts
    └── case-study.ts
```

---

# Technology Decisions

## Keep

```text
Next.js 16
TypeScript
App Router
Tailwind CSS v4
```

## Do Not Add Yet

```text
shadcn/ui
Radix
Framer Motion
Database
CMS
MDX
Authentication
```

These can be added later only when required.

The first goal is a **clean Structa → Next.js conversion**.

---

# Verification Plan

## Automated

```bash
npm run build

npm run lint
```

## Route Testing

Verify:

```text
/
 /about
 /services
 /services/backend-development
 /projects
 /projects/[project]
 /case-studies
 /skills
 /insights
 /lab
 /tools
 /mcp
 /contact
```

## Responsive Testing

Test:

```text
Mobile
Tablet
Laptop
Large desktop
```

## Conversion Testing

Compare the original Structa template and Next.js version for:

```text
Layout
Spacing
Typography
Images
Cards
Navigation
Footer
Responsive behavior
Animations
```

The initial Next.js conversion should visually preserve Structa as closely as possible before we begin personalizing individual pages.

---

# Definition of Phase 1 Complete

Phase 1 is complete when:

* [ ] Structa assets are migrated into Next.js.
* [ ] The Structa design system is reusable.
* [ ] The navbar is replaced with the `prashanta.dev` navigation architecture.
* [ ] Mobile navigation works.
* [ ] Homepage is converted and personalized.
* [ ] About page is converted.
* [ ] Services page is converted.
* [ ] Projects page is converted.
* [ ] Contact page is converted.
* [ ] Footer is converted.
* [ ] Dynamic route architecture exists.
* [ ] No Webflow runtime dependency is required.
* [ ] The project builds successfully.
* [ ] The site is responsive.

---

# Final Principle

The implementation should follow this rule:

> **Preserve Structa's premium UI. Replace Structa's business/content structure with Prashanta's engineering identity.**

The final website should not look like:

```text
A copied Webflow template
```

It should look like:

```text
A premium independent software engineer
and technical consultant website
built specifically for prashanta.dev.
```
