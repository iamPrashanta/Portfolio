export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
}

export const experience: Experience[] = [
  {
    id: "independent-consultant",
    role: "Full Stack Engineer & Consultant",
    company: "Independent / prashanta.dev",
    duration: "2023 - Present",
    location: "Remote",
    description: "Architecting and developing full-stack web applications, secure backend systems, and AI integrations for international clients.",
    achievements: [
      "Designed and deployed the Genlabs Admin platform using FastAPI, PostgreSQL, and Redis, integrating WooCommerce data synchronization.",
      "Implemented a secure WebRTC KYC system with AES-256 encryption and stringent RBAC for a banking partner.",
      "Developed a centralized technical portfolio and developer hub using Next.js 16 and Tailwind CSS.",
      "Automated infrastructure deployments using Docker, Podman, and AWS Lightsail.",
    ],
  },
  {
    id: "software-engineer",
    role: "Software Engineer",
    company: "Confidential Startup",
    duration: "2021 - 2023",
    location: "Remote",
    description: "Core backend development focusing on API design, database optimization, and cloud infrastructure.",
    achievements: [
      "Built and maintained high-traffic REST APIs using Node.js and Express.",
      "Optimized PostgreSQL queries, reducing data retrieval times by 40%.",
      "Integrated third-party payment gateways (Stripe) and handled webhook processing securely.",
      "Migrated legacy applications to modern React-based frontends.",
    ],
  },
];
