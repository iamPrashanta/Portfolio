import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "genlabs-admin",
    slug: "genlabs-admin",
    title: "Genlabs Admin Platform",
    description:
      "A comprehensive e-commerce administration and synchronization platform built to manage complex business operations. Integrates real-time syncing between WooCommerce and PostgreSQL via background workers.",
    image: "/images/projects/project1.png",
    logo: "/images/clients/logo1.svg",
    client: "Genlabs",
    year: "2024",
    services: ["Backend Development", "API Integration", "Database Architecture"],
    techStack: ["FastAPI", "PostgreSQL", "Redis", "Flutter", "WooCommerce API", "Python"],
    featured: true,
  },
  {
    id: "financial-dashboard",
    slug: "financial-dashboard",
    title: "Enterprise Financial Dashboard",
    description:
      "Secure, scalable financial analytics dashboard with role-based access control, real-time metrics caching, and complex data visualizations for enterprise clients.",
    image: "/images/projects/project2.png",
    logo: "/images/clients/logo2.svg",
    client: "Confidential FinTech",
    year: "2023",
    services: ["Full Stack Development", "Security Architecture", "Cloud & DevOps"],
    techStack: ["React", "Node.js", "AWS", "Docker", "REST API", "Redis"],
    featured: true,
  },
  {
    id: "ai-automation-agent",
    slug: "ai-automation-agent",
    title: "Autonomous Workflow Agent",
    description:
      "Intelligent automation system utilizing LLMs to parse unstructured data, make routing decisions, and execute multi-step business workflows automatically.",
    image: "/images/projects/project3.png",
    logo: "/images/clients/logo3.svg",
    client: "SaaS Startup",
    year: "2024",
    services: ["AI & Automation", "Backend Development"],
    techStack: ["Python", "OpenAI API", "LangChain", "Vector DB", "FastAPI"],
    featured: true,
  },
  {
    id: "kyc-verification-system",
    slug: "kyc-verification-system",
    title: "WebRTC KYC System",
    description:
      "High-security identity verification system featuring live video streams, document scanning, and AES-256 encrypted data storage for banking compliance.",
    image: "/images/projects/project4.png",
    logo: "/images/clients/logo4.svg",
    client: "Banking Partner",
    year: "2023",
    services: ["Security Architecture", "Full Stack Development"],
    techStack: ["WebRTC", "Socket.io", "React", "Node.js", "PostgreSQL"],
    featured: false,
  },
];
