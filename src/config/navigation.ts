// ─────────────────────────────────────────────────────────
// Navigation Configuration — prashanta.dev
// ─────────────────────────────────────────────────────────
// Single source of truth for all navigation links.
// The navbar, mobile nav, footer, and future command palette
// all read from this configuration.

export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export type NavigationEntry = NavItem | NavGroup;

function isNavGroup(entry: NavigationEntry): entry is NavGroup {
  return "items" in entry;
}

// ── Primary Navigation ──────────────────────────────────

export const navigation: NavigationEntry[] = [
  {
    title: "About",
    href: "/about",
  },

  {
    title: "Services",
    href: "/services",
  },

  {
    title: "Work",
    items: [
      {
        title: "Projects",
        href: "/projects",
        description: "Production and open source engineering work",
      },
      {
        title: "Case Studies",
        href: "/case-studies",
        description: "In-depth engineering decision breakdowns",
      },
      {
        title: "Skills",
        href: "/skills",
        description: "Technical skills organized by domain",
      },
    ],
  },

  {
    title: "Insights",
    items: [
      {
        title: "Articles",
        href: "/insights",
        description: "Engineering articles and technical writing",
      },
      {
        title: "Engineering",
        href: "/engineering",
        description: "System design, backend, DevOps, security",
      },
    ],
  },

  {
    title: "Lab",
    items: [
      {
        title: "Experiments",
        href: "/lab/experiments",
        description: "Technical experiments and prototypes",
      },
      {
        title: "Architecture",
        href: "/lab/architecture",
        description: "System architecture explorations",
      },
      {
        title: "Tools",
        href: "/tools",
        description: "Developer tools and utilities",
      },
      {
        title: "MCP",
        href: "/mcp",
        description: "Model Context Protocol ecosystem",
      },
      {
        title: "DSA",
        href: "/dsa",
        description: "Data Structures & Algorithms",
      },
      {
        title: "CP",
        href: "/cp",
        description: "Competitive Programming",
      },
    ],
  },

  {
    title: "Connect",
    href: "/connect",
  },
] as const;

// ── Footer Navigation ───────────────────────────────────

export const footerNavigation = {
  services: {
    title: "Services",
    links: [
      { title: "Backend Development", href: "/services/backend-development" },
      { title: "Full Stack Development", href: "/services/full-stack-development" },
      { title: "API Integration", href: "/services/api-integration" },
      { title: "Cloud & DevOps", href: "/services/cloud-devops" },
      { title: "Database Optimization", href: "/services/database-optimization" },
      { title: "Security & Architecture", href: "/services/security-architecture" },
      { title: "AI & Automation", href: "/services/ai-automation" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Projects", href: "/projects" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "Resume", href: "/resume" },
      { title: "Contact", href: "/contact" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { title: "Insights", href: "/insights" },
      { title: "Engineering", href: "/engineering" },
      { title: "Skills", href: "/skills" },
      { title: "Tools", href: "/tools" },
      { title: "Lab", href: "/lab" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { title: "Terms & Conditions", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy" },
    ],
  },
} as const;

export { isNavGroup };
