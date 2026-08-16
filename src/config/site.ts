export const siteConfig = {
  name: "Prashanta Mondal",
  domain: "https://prashanta.dev",
  title: "Full Stack Engineer & Independent Software Consultant",
  description:
    "I design and build secure, scalable software systems, cloud infrastructure, and intelligent applications for startups, businesses, and SaaS companies.",
  shortDescription:
    "Full Stack Engineer specializing in backend systems, cloud infrastructure, and AI automation.",
  email: "hello@prashanta.dev",
  location: "India",
  available: true,

  social: {
    github: "https://github.com/iamPrashanta",
    linkedin: "https://linkedin.com/in/prashantamondal",
    twitter: "https://x.com/iamPrashanta",
  },

  navCta: {
    text: "Start a Project",
    href: "/contact",
  },
} as const;

export type SiteConfig = typeof siteConfig;
