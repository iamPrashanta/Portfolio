import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { careers } from "@/data/careers";

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

  return [
    ...coreRoutes,
    ...supportingRoutes,
    ...legalRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...careerRoutes,
  ];
}
