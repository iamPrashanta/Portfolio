import { CodeExample } from "./code";
import { ContentSection } from "./knowledge";

export interface RootCause {
  title: string;
  description: string;
}

export interface ArchitectureOption {
  title: string;
  description: string;
  pros: string[];
  cons: string[];
}

export interface Tradeoff {
  approach: string;
  strength: string;
  limitation: string;
}

export interface EngineeringProblem {
  slug: string;
  title: string;
  shortDescription: string;
  
  category: "scalability" | "performance" | "database" | "architecture" | "security" | "distributed-systems" | "reliability";
  severity?: "low" | "medium" | "high" | "critical";
  
  symptoms: string[];
  problemStatement: string;
  
  whyItHappens: ContentSection[];
  rootCauses: RootCause[];
  
  architectureOptions: ArchitectureOption[];
  recommendedSolution: ContentSection[];
  implementationSteps: ContentSection[];
  
  codeExamples?: CodeExample[];
  
  tradeoffs?: Tradeoff[];
  monitoring?: ContentSection[];
  prevention?: ContentSection[];
  commonMistakes?: string[];
  
  realWorldUseCases?: string[];
  
  prerequisites?: string[];
  relatedTopics?: string[]; // CS / Data Structures slugs
  relatedAlgorithms?: string[]; // slugs
  relatedProblems?: string[]; // slugs
  relatedSkills?: string[];
  relatedServices?: string[];
  
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
}
