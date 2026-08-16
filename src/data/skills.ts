export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Dart", "SQL", "Go", "Bash"],
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Node.js", "Express", "NestJS", "REST", "GraphQL", "WebSockets", "WebRTC"],
  },
  {
    category: "Frontend & Mobile",
    items: ["React", "Next.js", "Flutter", "Tailwind CSS", "Redux", "Framer Motion"],
  },
  {
    category: "Databases & Cache",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Prisma"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, S3, RDS)", "Docker", "Podman", "Nginx", "GitHub Actions", "CI/CD", "Linux"],
  },
  {
    category: "Security",
    items: ["OAuth", "JWT", "AES-256", "SSL/TLS", "RBAC/ABAC", "Rate Limiting"],
  },
  {
    category: "AI & Tools",
    items: ["OpenAI API", "LangChain", "Vector DBs", "Git", "Postman", "Figma"],
  },
];
