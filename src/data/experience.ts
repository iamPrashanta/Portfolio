export type Role = {
  title: string;
  period: string;
  description?: string;
  highlights?: string[];
  technologies?: string[];
};

export type ExperienceEntry = {
  id: string;
  company: string;
  period: string;
  location: string;
  workMode?: string;
  headline?: string;
  description: string;
  roles?: Role[];
  highlights?: string[];
  technologies?: string[];
  projects?: {
    title: string;
    href: string;
  }[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "independent-consultant",
    company: "Independent / prashanta.dev",
    period: "2023 — Present",
    location: "Remote",
    headline: "Full Stack Engineer & Consultant",
    description:
      "Architecting and developing full-stack web applications, secure backend systems, and intelligent tools for international clients and personal engineering products.",
    highlights: [
      "Full-stack systems using Next.js, React, Node.js, Python, PostgreSQL, Redis, and Docker.",
      "Secure backend, API, KYC, encryption, and role-based access control work.",
      "Real-time, WebRTC, spatial analytics, AI/LLM, and automation experiments.",
      "Building independent products and open engineering experiments.",
    ],
    projects: [
      { title: "Genlabs Admin", href: "/projects/genlabs" },
      { title: "Koi Bus", href: "/projects/koibus" },
      { title: "Astro Observatory", href: "/projects/astro" },
      { title: "Porbi", href: "/projects/porbi" },
    ],
  },
  {
    id: "unpay",
    company: "UnPay",
    period: "2024 — 2026",
    location: "Kolkata, India",
    workMode: "On-site",
    headline: "Fintech Engineering",
    description:
      "Progressed through backend and full-stack roles while building secure, scalable fintech platforms, APIs, transaction workflows, and production systems.",
    roles: [
      {
        title: "Team Lead & Senior Full Stack Developer",
        period: "Sep 2025 — May 2026",
        highlights: [
          "Led the design and development of secure, scalable fintech platforms.",
          "Worked with Node.js / Express, React, PHP / Laravel, Python microservices, PostgreSQL, and Prisma ORM.",
          "Built and integrated APIs and financial workflows.",
          "Managed system reliability, performance, backend architecture, and production changes.",
        ],
      },
      {
        title: "Senior Full Stack Developer",
        period: "Sep 2024 — Sep 2025",
        highlights: [
          "Continued full-stack development for fintech products.",
          "Worked with backend architecture, APIs, databases, integrations, and production systems.",
          "Built scalable application features across frontend and backend.",
        ],
      },
      {
        title: "PHP Laravel Developer",
        period: "Apr 2024 — Sep 2024",
        highlights: [
          "Developed scalable and responsive fintech application features.",
          "Worked with integrated transaction monitoring and backend workflows.",
          "Performed performance and load testing using JMeter and k6.",
          "Contributed to payment, API, database, and production application systems.",
        ],
      },
    ],
    technologies: ["Node.js", "Express", "React", "Laravel", "Python", "PostgreSQL", "Prisma"],
  },
  {
    id: "yesnet",
    company: "YESNET DIGITAL ECOMM PVT. LTD.",
    period: "2021 — 2024",
    location: "Kolkata, India",
    workMode: "Hybrid",
    headline: "Web Engineering",
    description:
      "Grew from Web Developer to Team Leader while working across web applications, backend development, databases, software design, and production features.",
    roles: [
      {
        title: "Team Leader",
        period: "Mar 2023 — Mar 2024",
      },
      {
        title: "Senior Web Developer",
        period: "Apr 2022 — Mar 2023",
      },
      {
        title: "Web Developer",
        period: "Mar 2021 — Apr 2022",
      },
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "OOP"],
  },
];
