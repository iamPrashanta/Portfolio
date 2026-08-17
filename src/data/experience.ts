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
    headline: "Full Stack Engineer & Consultant",
    description:
      "Architecting and developing full-stack web applications, secure backend systems, and intelligent tools for international clients and personal engineering products.",
    highlights: [
      "Building full-stack systems using Next.js, React, Node.js, Python, PostgreSQL, Redis, and Docker.",
      "Delivering secure backend architectures, API integrations, and role-based access control (RBAC/ABAC).",
      "Architecting real-time WebRTC applications, spatial analytics, and workflow automations.",
      "Developing independent products, tools, and open engineering experiments.",
      "Building high-performance mobile applications for Android and iOS platforms.",
      "Conducting comprehensive security penetration testing and system hardening.",
      "Designing and implementing resilient microservices and highly scalable distributed systems.",
      "Training and optimizing AI models utilizing teacher-student knowledge distillation strategies in Python.",
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
];
