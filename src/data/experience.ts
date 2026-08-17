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
    description: "Building independent software products, engineering tools, client solutions, and technical experiments. \n\nDuring full-time employment periods, independent work focused primarily on existing commitments, personal products, engineering experiments, and projects supported through established collaborators.",
    highlights: [
      "Architecting and developing independent software products, full-stack applications, secure backend systems, and intelligent tools.",
      "Building systems using Next.js, React, Node.js, Python, PostgreSQL, Redis, Docker, and related technologies.",
      "Developing personal engineering products, open experiments, technical prototypes, and selected client solutions.",
      "Designing backend architectures, APIs, authentication systems, RBAC/ABAC, workflow automation, and real-time applications.",
      "Exploring AI engineering, distributed systems, spatial analytics, mobile applications, and model optimization.",
      "Maintaining and evolving existing projects and engineering commitments through established collaboration where appropriate."
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
      "Progressed through backend and full-stack roles while building secure, scalable fintech platforms, integrating banking APIs, and leading technical teams.",
    roles: [
      {
        title: "Team Lead & Senior Full Stack Developer",
        period: "Sep 2025 - Jun 2026",
        highlights: [
          "Led development of scalable fintech platforms with integrated transaction monitoring and high concurrency reliability.",
          "Secured applications via rate-limiting, RBAC/ABAC models, and runtime anomaly detection.",
          "Managed AWS infrastructure (EC2, S3, RDS, CloudWatch, GuardDuty) ensuring 99.9% uptime.",
          "Designed and maintained robust CI/CD pipelines using Jenkins, GitHub Actions, and Docker with Blue-Green strategies.",
        ],
      },
      {
        title: "Senior Full Stack Developer",
        period: "Sep 2024 - Sep 2025",
        highlights: [
          "Implemented full suite of banking APIs (Yes Bank, Axis Bank, SBI, IDFC) with 2-way SSL and AES-256 encryption.",
          "Delivered high-performance Node.js/Express backends and Python microservices backed by PostgreSQL (Drizzle ORM).",
          "Built and deployed a video KYC system using WebRTC ensuring banking compliance and secure identity verification.",
        ],
      },
      {
        title: "PHP Laravel Developer",
        period: "May 2024 - Sep 2024",
        highlights: [
          "Developed scalable backend APIs for Escrow Accounts, Account Verification, and Onboarding workflows.",
          "Added static and dynamic QR code systems with payload validation and error traceability.",
          "Executed performance and load tests using JMeter and K6.",
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
      "Grew from Web Developer to Team Leader while building real-time systems, optimizing databases, and engineering robust backend workflows.",
    roles: [
      {
        title: "Team Leader",
        period: "Mar 2023 - Mar 2024",
        highlights: [
          "Designed and led development of a feature-rich social media platform inspired by Facebook.",
          "Implemented event-driven architecture and asynchronous message queues for chat delivery.",
          "Enforced multi-layered authentication with IP whitelisting, device fingerprinting, and token-based access controls.",
        ],
      },
      {
        title: "Senior Web Developer",
        period: "Apr 2022 - Mar 2023",
        highlights: [
          "Built a real-time internal chat module, upgrading from long-polling to WebSockets for persistent messaging.",
          "Improved database query speed by 20% using indexing and normalization techniques.",
          "Integrated OTP-based email verification via AWS SES, cutting fake registrations by 50%.",
        ],
      },
      {
        title: "Web Developer",
        period: "Mar 2021 - Apr 2022",
        highlights: [
          "Developed secure user and admin portals using MVC architecture.",
          "Integrated payment gateways including Razorpay and PayPal.",
          "Integrated third-party APIs including Axis Bank and TextGuru messaging.",
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
      "Built and deployed client projects from initial requirements to production.",
      "Developed backend systems, databases, authentication, APIs, admin panels, and custom business workflows.",
      "Worked directly with clients on requirements, technical planning, feature development, maintenance, and ongoing improvements.",
      "Built experience across the complete software lifecycle—from client communication and architecture to deployment and support.",
    ],
  },
];
