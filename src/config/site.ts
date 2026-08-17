export const siteConfig = {
  name: "Prashanta Mondal",
  domain: "https://prashanta.dev",
  title: "Full Stack Engineer & Independent Software Consultant",
  description:
    "I design and build secure, scalable software systems, cloud infrastructure, and intelligent applications for startups, businesses, and SaaS companies.",
  shortDescription:
    "Full Stack Engineer specializing in backend systems, cloud infrastructure, and AI automation.",
  emails: [
    "contact@prashanta.dev",
    "prashanta1403@proton.me"
  ],
  location: "India",
  available: true,

  social: {
    github: "https://github.com/iamPrashanta",
    linkedin: "https://linkedin.com/in/iamprashanta",
    whatsapp: "https://wa.me/+919064381514",
  },

  navCta: {
    text: "Start a Project",
    href: "/contact",
  },
  lastUpdated: "2026-08-17T00:00:00Z",
} as const;

export type SiteConfig = typeof siteConfig;
