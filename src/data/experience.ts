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
    period: "2023 - Present",
    location: "Remote",
    workMode: "Independent Engineering · Consulting · Personal Products",
    headline: "Full Stack Engineer & Consultant",
    description:
      "Building independent software products, engineering tools, selected client solutions, and technical experiments.\n\nDuring periods of full-time employment, this work primarily focused on personal products, existing long-term commitments, technical experiments, and projects supported through trusted engineering collaborators.",
    highlights: [
      "Architecting and developing independent software products, full-stack applications, secure backend systems, and intelligent tools.",
      "Building systems with Next.js, React, Node.js, Python, PostgreSQL, Redis, Docker, and related technologies.",
      "Developing personal products, open engineering experiments, technical prototypes, and selected client solutions.",
      "Designing backend architectures, APIs, authentication systems, RBAC/ABAC, workflow automation, and real-time applications.",
      "Exploring AI engineering, distributed systems, spatial analytics, mobile applications, and model optimization.",
      "Maintaining long-term projects and selected client engagements through collaboration with trusted engineering partners where appropriate.",
    ],
  },
  {
    id: "unpay",
    company: "Unnatim Payments (UnPay)",
    period: "May 2024 - Jun 2026",
    location: "Kolkata, India",
    workMode: "On-site",
    headline: "Fintech Engineering & Leadership",
    description:
      "Progressed through backend and full-stack engineering roles while building secure fintech platforms, integrating banking APIs, and later leading technical initiatives.",
    roles: [
      {
        title: "Team Lead & Senior Full Stack Developer",
        period: "Sep 2025 - Jun 2026",
        highlights: [
          "Led development of scalable fintech platforms with transaction monitoring and support for high-concurrency workloads.",
          "Improved application security through rate limiting, RBAC/ABAC models, and runtime monitoring.",
          "Managed and worked with AWS infrastructure including EC2, S3, RDS, CloudWatch, and GuardDuty.",
          "Designed and maintained CI/CD pipelines using Jenkins, GitHub Actions, and Docker, including Blue-Green deployment strategies.",
        ],
      },
      {
        title: "Senior Full Stack Developer",
        period: "Sep 2024 - Sep 2025",
        highlights: [
          "Implemented banking API integrations with Yes Bank, Axis Bank, SBI, and IDFC using secure communication and encryption practices.",
          "Developed high-performance Node.js/Express backends and Python microservices backed by PostgreSQL and Drizzle ORM.",
          "Built and deployed a WebRTC-based video KYC system for secure identity verification workflows.",
        ],
      },
      {
        title: "PHP Laravel Developer",
        period: "May 2024 - Sep 2024",
        highlights: [
          "Developed backend APIs for Escrow Accounts, Account Verification, and onboarding workflows.",
          "Built static and dynamic QR code systems with payload validation and error traceability.",
          "Performed performance and load testing using JMeter and k6.",
        ],
      },
    ],
    technologies: ["Node.js", "Python", "React", "Laravel", "PostgreSQL", "AWS", "WebRTC", "Docker"],
  },
  {
    id: "yesnet",
    company: "YESNET DIGITAL ECOMM PVT. LTD.",
    period: "Mar 2021 - Mar 2024",
    location: "Kolkata, India",
    workMode: "Hybrid",
    headline: "Web Engineering",
    description:
      "Progressed from Web Developer to Team Leader while building real-time systems, optimizing databases, and engineering robust backend workflows.",
    roles: [
      {
        title: "Team Leader",
        period: "Mar 2023 - Mar 2024",
        highlights: [
          "Designed and led development of a feature-rich social media platform inspired by modern social networking systems.",
          "Implemented event-driven architecture and asynchronous messaging workflows for chat delivery.",
          "Enforced multi-layered authentication with IP whitelisting, device fingerprinting, and token-based access controls.",
        ],
      },
      {
        title: "Senior Web Developer",
        period: "Apr 2022 - Mar 2023",
        highlights: [
          "Built a real-time internal chat module, migrating from long polling to persistent WebSocket-based communication.",
          "Improved database query performance through indexing and normalization.",
          "Integrated OTP-based email verification using AWS SES to strengthen registration validation.",
        ],
      },
      {
        title: "Web Developer",
        period: "Mar 2021 - Apr 2022",
        highlights: [
          "Developed user and administrative portals using MVC architecture.",
          "Integrated payment gateways including Razorpay and PayPal.",
          "Integrated third-party APIs including banking and messaging services.",
        ],
      },
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "AWS SES", "WebSockets"],
  },
  {
    id: "freelance-developer",
    company: "Independent Software Developer",
    period: "Mar 2019 - Mar 2021",
    location: "Remote",
    workMode: "Freelance",
    headline: "Web Development",
    description:
      "Worked independently with multiple clients, delivering custom websites, web applications, backend systems, and business solutions.",
    highlights: [
      "Built and deployed client projects from initial requirements through production.",
      "Developed backend systems, databases, authentication, APIs, admin panels, and custom business workflows.",
      "Worked directly with clients on requirements, technical planning, feature development, maintenance, and ongoing improvements.",
      "Gained hands-on experience across the complete software lifecycle, from client communication and architecture to deployment and support.",
    ],
  },
];
