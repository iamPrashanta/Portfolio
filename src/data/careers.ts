export interface Career {
  slug: string;
  title: string;
  department: string;
  engagement: string;
  location: string;
  summary: string;
  image: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  technologies?: string[];
}

export const careers: Career[] = [
  {
    slug: "senior-product-designer",
    title: "Senior Product Designer",
    department: "Design & Product",
    engagement: "Project-based / Collaboration",
    location: "Remote / Flexible",
    image: "/images/team/person8.avif",
    summary: "From time to time, projects require additional specialist expertise in design. This role represents a trusted collaborator focusing on UX/UI, wireframing, and creating highly intuitive digital product experiences.",
    responsibilities: [
      "Collaborate on the end-to-end design process, from conceptualization to high-fidelity prototypes.",
      "Establish and maintain scalable design systems tailored to specific client needs.",
      "Conduct user research and usability testing to validate design decisions.",
      "Ensure designs gracefully translate into responsive frontend implementations.",
    ],
    requirements: [
      "Proven experience delivering premium, editorial, or highly functional SaaS interfaces.",
      "Deep expertise in modern design tools, especially Figma.",
      "Strong understanding of interaction design and micro-animations.",
      "Ability to communicate design decisions clearly to engineering teams.",
    ],
    niceToHave: [
      "Experience with Webflow or Framer.",
      "Basic understanding of React/Next.js frontend constraints.",
    ],
    technologies: ["Figma", "Framer", "Adobe Creative Suite"],
  },
  {
    slug: "frontend-engineer",
    title: "Frontend Engineer",
    department: "Engineering",
    engagement: "Project-based / Collaboration",
    location: "Remote / Flexible",
    image: "/images/team/person6.avif",
    summary: "From time to time, projects require additional specialist expertise in frontend development. This role focuses on building responsive, high-performance, and accessible web and mobile interfaces.",
    responsibilities: [
      "Develop highly responsive and accessible UI components.",
      "Integrate complex backend APIs and manage state efficiently.",
      "Implement sophisticated animations and fluid transitions.",
      "Optimize frontend performance and Core Web Vitals.",
    ],
    requirements: [
      "Expertise in modern JavaScript/TypeScript and React ecosystems.",
      "Experience with Next.js App Router and server components.",
      "Strong command of Tailwind CSS and modern CSS features.",
      "Dedication to accessibility (a11y) and responsive design principles.",
    ],
    niceToHave: [
      "Experience with Flutter or React Native for mobile applications.",
      "Familiarity with WebGL or Three.js for spatial systems.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Flutter"],
  },
  {
    slug: "data-engineer",
    title: "AI & Data Engineer",
    department: "Data & AI",
    engagement: "Project-based / Collaboration",
    location: "Remote / Flexible",
    image: "/images/team/person7.avif",
    summary: "From time to time, projects require additional specialist expertise in data and AI. This role focuses on LLM integrations, data pipelines, and intelligent automation systems.",
    responsibilities: [
      "Design and maintain scalable data pipelines and ETL processes.",
      "Integrate LLMs and build robust RAG (Retrieval-Augmented Generation) architectures.",
      "Optimize vector databases for high-speed, relevant search capabilities.",
      "Implement data validation and ensure data privacy compliance.",
    ],
    requirements: [
      "Strong proficiency in Python and SQL.",
      "Hands-on experience with modern AI orchestration frameworks (LangChain, LlamaIndex).",
      "Experience managing and tuning vector databases (Pinecone, FAISS, Postgres pgvector).",
      "Solid understanding of cloud data warehousing and real-time streaming.",
    ],
    niceToHave: [
      "Familiarity with geospatial data processing (PostGIS, H3).",
      "Experience fine-tuning open-source models.",
    ],
    technologies: ["Python", "PostgreSQL", "LangChain", "Vector DBs", "Airflow", "Kafka"],
  },
  {
    slug: "senior-backend-engineer",
    title: "Cloud & DevOps Engineer",
    department: "Infrastructure",
    engagement: "Project-based / Collaboration",
    location: "Remote / Flexible",
    image: "/images/team/person5.avif",
    summary: "From time to time, projects require additional specialist expertise in cloud infrastructure. This role ensures scalable, secure, and automated deployment architectures for complex systems.",
    responsibilities: [
      "Architect and provision scalable cloud infrastructure using Infrastructure as Code.",
      "Implement and maintain robust CI/CD pipelines for zero-downtime deployments.",
      "Monitor system health, establish alerting rules, and manage incident response.",
      "Harden system security, manage IAM policies, and enforce compliance standards.",
    ],
    requirements: [
      "Extensive experience with AWS (EC2, ECS, S3, RDS, IAM) or GCP.",
      "Strong background in containerization (Docker, Kubernetes/Podman).",
      "Expertise in writing reliable CI/CD workflows (GitHub Actions, Jenkins).",
      "Deep understanding of Linux systems and networking.",
    ],
    niceToHave: [
      "Experience with Terraform or AWS CDK.",
      "Background in fintech compliance or high-security environments.",
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Linux"],
  },
];
