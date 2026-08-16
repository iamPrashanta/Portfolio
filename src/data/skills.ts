export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Languages & Core",
    items: ["Python", "PHP", "TypeScript", "JavaScript", "Dart", "SQL", "Bash"],
  },
  {
    category: "Backend Engineering",
    items: ["Node.js", "Express", "Laravel", "FastAPI", "Django", "Flask", "ASP.NET", "Java"],
  },
  {
    category: "Frontend Engineering",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap", "Electron", "HTML5", "CSS3"],
  },
  {
    category: "Mobile Development",
    items: ["Flutter", "Dart", "Riverpod", "Firebase", "Local Auth"],
  },
  {
    category: "Databases & Data",
    items: ["PostgreSQL", "MySQL", "SQL Server", "SQLite", "Redis", "Supabase", "Prisma", "Drizzle ORM", "Power BI", "JSON/XML Validation"],
  },
  {
    category: "AI / LLM Engineering",
    items: ["LangChain", "LangGraph", "RAG", "Ollama", "HuggingFace", "Vector DBs (FAISS)"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS (EC2, S3, RDS, IAM)", "AWS CloudWatch", "AWS GuardDuty", "GCP", "DigitalOcean"],
  },
  {
    category: "DevOps & Automation",
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Nginx", "n8n", "CI/CD"],
  },
  {
    category: "Security & Authentication",
    items: ["AES-256", "JWT", "OAuth2", "SSL/TLS", "RBAC/ABAC", "API Rate Limiting"],
  },
  {
    category: "APIs & Integrations",
    items: ["Yes Bank API", "Axis Bank API", "Stripe", "Razorpay", "PayPal", "WebRTC", "WebSockets"],
  },
];
