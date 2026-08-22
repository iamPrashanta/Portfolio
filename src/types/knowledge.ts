import { CodeExample } from "./code";

export interface ContentSection {
  title: string;
  content: string; // Markdown or HTML content
}

export interface Complexity {
  best?: string;
  average?: string;
  worst?: string;
  space?: string;
}

export interface Operation {
  name: string;
  description?: string;
  timeComplexity: string;
  spaceComplexity?: string;
}

export interface ComputerScienceTopic {
  slug: string;
  title: string;
  shortDescription: string;
  
  category: "foundations" | "data-structures" | "algorithms" | "competitive-programming";
  difficulty: "beginner" | "intermediate" | "advanced";
  
  introduction: string;
  problemItSolves?: string;
  whyItMatters?: string;
  
  howItWorks?: ContentSection[];
  
  complexity?: Complexity;
  operations?: Operation[];
  codeExamples?: CodeExample[];
  
  realWorldApplications?: string[];
  whenToUse?: string[];
  whenNotToUse?: string[];
  howToIdentify?: string;
  commonMistakes?: string[];
  
  advancedConcepts?: ContentSection[];
  competitiveProgramming?: ContentSection[];
  interviewPatterns?: ContentSection[];
  
  prerequisites?: string[]; // slugs
  relatedTopics?: string[]; // CS / Data Structures slugs
  relatedAlgorithms?: string[]; // slugs
  relatedProblems?: string[]; // slugs
  relatedSkills?: string[]; // slugs
  relatedServices?: string[]; // slugs
  
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
}
