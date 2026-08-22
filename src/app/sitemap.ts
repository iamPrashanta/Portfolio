import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { careers } from "@/data/careers";
import { skills } from "@/data/skills";
import { foundations } from "@/data/computer-science";
import { dataStructures } from "@/data/data-structures";
import { algorithms } from "@/data/algorithms";
import { competitiveProgramming } from "@/data/competitive-programming";
import { problems } from "@/data/problems";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;
  const fallbackDate = siteConfig.lastUpdated || new Date().toISOString();

  // Core Pages
  const coreRoutes = [
    { route: "", priority: 1.0 },
    { route: "/services", priority: 0.9 },
    { route: "/projects", priority: 0.9 },
    { route: "/about", priority: 0.9 },
    { route: "/contact", priority: 0.9 },
    { route: "/connect", priority: 0.9 },
    { route: "/careers", priority: 0.8 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: fallbackDate,
    changeFrequency: "weekly" as const,
    priority,
  }));

  // Supporting Pages
  const supportingRoutes = [
    { route: "/skills", priority: 0.7 },
    { route: "/insights", priority: 0.7 },
    { route: "/computer-science", priority: 0.8 },
    { route: "/data-structures", priority: 0.8 },
    { route: "/algorithms", priority: 0.8 },
    { route: "/competitive-programming", priority: 0.8 },
    { route: "/problems", priority: 0.8 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: fallbackDate,
    changeFrequency: "monthly" as const,
    priority,
  }));

  // Legal Pages
  const legalRoutes = [
    { route: "/privacy", priority: 0.4 },
    { route: "/terms", priority: 0.4 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: fallbackDate,
    changeFrequency: "yearly" as const,
    priority,
  }));

  // Dynamic Service Pages
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: fallbackDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic Project Pages
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: fallbackDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic Career Pages
  const careerRoutes = careers.map((career) => ({
    url: `${baseUrl}/careers/${career.slug}`,
    lastModified: fallbackDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic Skill Pages
  const skillRoutes = skills.map((skill) => ({
    url: `${baseUrl}/skills/${skill.slug}`,
    lastModified: fallbackDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic Knowledge Pages
  const foundationRoutes = foundations.map((topic) => ({
    url: `${baseUrl}/computer-science/foundations/${topic.slug}`,
    lastModified: fallbackDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const dataStructureRoutes = dataStructures.map((topic) => ({
    url: `${baseUrl}/data-structures/${topic.slug}`,
    lastModified: fallbackDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const algorithmRoutes = algorithms.map((topic) => ({
    url: `${baseUrl}/algorithms/${topic.slug}`,
    lastModified: fallbackDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const cpRoutes = competitiveProgramming.map((topic) => ({
    url: `${baseUrl}/competitive-programming/techniques/${topic.slug}`,
    lastModified: fallbackDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const problemRoutes = problems.map((problem) => ({
    url: `${baseUrl}/problems/${problem.slug}`,
    lastModified: fallbackDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...coreRoutes,
    ...supportingRoutes,
    ...legalRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...careerRoutes,
    ...skillRoutes,
    ...foundationRoutes,
    ...dataStructureRoutes,
    ...algorithmRoutes,
    ...cpRoutes,
    ...problemRoutes,
  ];
}
