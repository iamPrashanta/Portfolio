// ─────────────────────────────────────────────────────────
// Navigation Configuration — prashanta.dev
// ─────────────────────────────────────────────────────────
// Single source of truth for all navigation links.

export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface NavColumn {
  title: string;
  items: NavItem[];
}

export interface NavFeaturedItem {
  title: string;
  description: string;
  href: string;
  image?: string;
  ctaText?: string;
}

export interface NavMegaMenu {
  title: string;
  type: "mega-menu";
  columns: NavColumn[];
  featured?: NavFeaturedItem;
}

export interface NavLink {
  title: string;
  href: string;
}

export type NavigationEntry = NavLink | NavMegaMenu;

export function isNavMegaMenu(entry: NavigationEntry): entry is NavMegaMenu {
  return "type" in entry && entry.type === "mega-menu";
}

// ── Primary Navigation ──────────────────────────────────

export const navigation: NavigationEntry[] = [
  {
    title: "Overview",
    href: "/",
  },
  {
    title: "Explore",
    type: "mega-menu",
    columns: [
      {
        title: "PORTFOLIO",
        items: [
          { title: "Projects", href: "/projects", description: "Selected engineering work" },
          { title: "Case Studies", href: "/case-studies", description: "Technical decision breakdowns" },
          { title: "Skills", href: "/skills", description: "Technical stack by domain" },
          { title: "Resume", href: "/resume", description: "Experience and background" },
        ],
      },
      {
        title: "COMPANY",
        items: [
          { title: "Clients", href: "/clients", description: "Organizations I've worked with" },
          { title: "Services", href: "/services", description: "Consulting & engineering services" },
        ],
      },
    ],
    featured: {
      title: "Building systems that scale.",
      description: "AI & Backend Engineering.",
      href: "/projects",
      ctaText: "View Selected Work →",
      image: "/images/nav/explore-featured.jpg"
    }
  },
  {
    title: "Insights",
    type: "mega-menu",
    columns: [
      {
        title: "TOPICS",
        items: [
          { title: "Backend Architecture", href: "/insights?category=backend" },
          { title: "System Design", href: "/insights?category=system-design" },
          { title: "Security", href: "/insights?category=security" },
          { title: "AI / LLM", href: "/insights?category=ai" },
        ],
      },
      {
        title: "EXPLORE",
        items: [
          { title: "All Insights", href: "/insights", description: "Engineering articles and writing" },
          { title: "Engineering Notes", href: "/engineering", description: "Raw engineering thoughts" },
        ],
      },
    ],
    featured: {
      title: "Latest Insight",
      description: "Read the latest engineering articles and thoughts.",
      href: "/insights",
      ctaText: "Read Articles →",
      image: "/images/nav/insights-featured.jpg"
    }
  },
  {
    title: "Lab",
    type: "mega-menu",
    columns: [
      {
        title: "ENGINEERING",
        items: [
          { title: "Engineering Hub", href: "/engineering", description: "System design & patterns" },
          { title: "Tools", href: "/tools", description: "Developer utilities" },
          { title: "MCP", href: "/mcp", description: "Model Context Protocol" },
        ],
      },
      {
        title: "COMPUTER SCIENCE",
        items: [
          { title: "DSA", href: "/dsa", description: "Data Structures & Algorithms" },
          { title: "CP", href: "/cp", description: "Competitive Programming" },
          { title: "Experiments", href: "/lab/experiments", description: "Technical prototypes" },
        ],
      },
    ],
    featured: {
      title: "The Engineering Lab",
      description: "Explore experiments, internal tools, and competitive programming.",
      href: "/engineering",
      ctaText: "Enter the Lab →",
      image: "/images/nav/lab-featured.jpg"
    }
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Connect",
    href: "/connect",
  },
];

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

export { isNavMegaMenu as isNavGroup }; // Aliased temporarily to prevent build breaks elsewhere
