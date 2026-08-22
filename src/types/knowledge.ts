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
  
  // 02. The Core Question
  overview: {
    question: string;
    answer: string;
  };
  
  // 03. Mental Model — simplest correct intuition
  mentalModel?: string;
  
  // 04. Why It Exists
  whyItExists: {
    problem: string;
    solution: string;
    keyInsight: string;
  };
  
  // 05. Concept Layers — progressive depth
  conceptLayers?: Array<{
    layer: string;     // e.g. "LAYER 01 — INTUITION"
    title: string;
    description: string;
  }>;
  
  // 06. How It Works — supports steps, flows, and code
  howItWorks?: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  
  howItWorksDetailed?: {
    explanation?: string;
    steps?: Array<{ title: string; description: string }>;
    codeExamples?: Array<{ title: string; code: string; language: string; description?: string }>;
    flow?: Array<{ label: string; annotation?: string }>;
  };
  
  // 07. Key Concepts
  coreConcepts: Array<{
    title: string;
    explanation: string;
  }>;
  
  keyTerms: Array<{
    term: string;
    definition: string;
  }>;
  
  // 08. Where It Breaks — limitations, edge cases, failure modes
  whereItBreaks?: Array<{
    scenario: string;
    description: string;
  }>;
  
  // 09. Tradeoffs
  tradeoffs?: Array<{
    advantage: string;
    disadvantages: string[];
    context?: string;
  }>;
  
  // 10. Engineering Moment — deeper than history
  engineeringMoment?: {
    year?: string;
    title: string;
    problem?: string;
    response?: string;
    tradeoff?: string;
    today?: string;
    story?: string;    // kept for backward compat
    lesson?: string;   // kept for backward compat
  };
  
  // 11. System Connections — where it appears in larger systems
  systemConnections?: Array<{
    system: string;
    description: string;
    layers?: string[];
  }>;
  
  // Knowledge graph connections with safe link registry
  connections: Array<{
    topicId: string;
    relationship: string;
    strength?: "core" | "related" | "advanced";
    href?: string;
    status?: "available" | "coming-soon";
  }>;
  
  realWorldExamples?: Array<{
    title: string;
    description: string;
    technologies?: string[];
  }>;
  
  misconceptions?: Array<{
    myth: string;
    reality: string;
  }>;
  
  // 13. Try It Yourself — three tiers
  exercises?: {
    understand?: { question: string; hint?: string };
    predict?: { scenario: string; question: string };
    build?: { task: string; requirements?: string[] };
  };
  
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
