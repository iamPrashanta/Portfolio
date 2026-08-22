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

export interface DeepTopic {
  id: string;
  title: string;
  slug: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedStudyTime?: string;
  shortDescription: string;
  category: string;
  
  overview: {
    question: string;
    answer: string;
  };
  
  whyItExists: {
    problem: string;
    solution: string;
    keyInsight: string;
  };
  
  coreConcepts: Array<{
    title: string;
    explanation: string;
  }>;
  
  howItWorks?: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  
  keyTerms: Array<{
    term: string;
    definition: string;
  }>;
  
  connections: Array<{
    topicId: string;
    relationship: string;
    strength?: "core" | "related" | "advanced";
  }>;
  
  realWorldExamples?: Array<{
    title: string;
    description: string;
    technologies?: string[];
  }>;
  
  engineeringMoment?: {
    year?: string;
    title: string;
    story: string;
    lesson: string;
  };
  
  misconceptions?: Array<{
    myth: string;
    reality: string;
  }>;
  
  keyTakeaways: string[];
  prerequisites: string[];
  nextTopics: string[];
  
  practiceIdeas?: Array<{
    title: string;
    difficulty: string;
    description: string;
  }>;

  seo?: {
    title: string;
    description: string;
    keywords?: string[];
  };
}

export interface HubData {
  title: string;
  description: string;
  learningContext: {
    intro: string;
    pillars: Array<{ title: string; description: string; id: string }>;
  };
  knowledgeMap: unknown; // Will refine as I build the component
  topicCategories: Array<{
    id: string;
    title: string;
    description?: string;
    topics: DeepTopic[];
  }>;
  conceptConnections: Array<{
    title: string;
    chain: string[]; // List of topic IDs or strings
  }>;
  systemMoments: Array<{
    title: string;
    whatHappened: string;
    principle: string;
    lesson: string;
    usageToday: string;
  }>;
  whyItMatters: Array<{
    concept: string;
    practicalExamples: string[];
  }>;
  misconceptions: Array<{
    myth: string;
    reality: string;
  }>;
  learningPath: Array<{
    phase: string;
    title: string;
    description: string;
    topics: string[];
  }>;
}
