import { ComputerScienceTopic } from "@/types/knowledge";

export const cpuArchitecture: ComputerScienceTopic = {
  slug: "cpu-architecture",
  title: "CPU Architecture",
  shortDescription: "Core understanding of how a Central Processing Unit executes instructions, caching strategies, and concurrency.",
  category: "foundations",
  difficulty: "intermediate",
  
  introduction: "CPU Architecture is the blueprint of how a computer processor is designed. It dictates how the CPU retrieves instructions, processes data, and interacts with memory. Understanding CPU caches (L1, L2, L3), instruction pipelines, and context switching allows engineers to write code that perfectly aligns with modern hardware.",
  whyItMatters: "Writing 'mechanically sympathetic' code—code that cooperates with the underlying hardware—is the key to extreme performance. A cache miss can be 100x slower than a cache hit. Modern backend systems rely on CPU architectural awareness to achieve high throughput.",
  
  howItWorks: [
    {
      title: "CPU Caching (L1, L2, L3)",
      content: "Main memory (RAM) is extremely slow compared to the CPU. CPUs combat this by using small, ultra-fast memory caches embedded directly on the chip. The L1 cache is the smallest and fastest, followed by L2 and L3. When the CPU needs data, it checks the caches first. A cache hit is instant; a cache miss stalls the CPU."
    },
    {
      title: "Context Switching",
      content: "A context switch occurs when the OS pauses one executing process (or thread) to run another. The OS must save the current state (registers, program counter) and load the state of the new process. This operation is computationally expensive and blows away the CPU caches, which is why architectures like event-driven asynchronous I/O (e.g., Node.js) are often preferred for massive concurrency over a thread-per-connection model."
    },
    {
      title: "Instruction Pipelining & Branch Prediction",
      content: "Modern CPUs don't just execute one instruction at a time; they pipeline them in stages (Fetch, Decode, Execute, Write-back). To keep the pipeline full, the CPU tries to guess the outcome of `if` statements before they are evaluated (Branch Prediction). If it guesses wrong, it flushes the pipeline, causing a massive performance penalty."
    }
  ],
  
  codeExamples: [
    {
      title: "CPU Cache Spatial Locality",
      description: "Iterating through an array in row-major vs column-major order dramatically affects performance due to cache misses.",
      implementations: [
        {
          language: "cpp",
          label: "C++",
          code: `// FAST: Accessing memory sequentially (Cache friendly)\nfor (int i = 0; i < N; i++) {\n    for (int j = 0; j < N; j++) {\n        matrix[i][j] = 0;\n    }\n}\n\n// SLOW: Jumping through memory (Constant cache misses)\nfor (int j = 0; j < N; j++) {\n    for (int i = 0; i < N; i++) {\n        matrix[i][j] = 0;\n    }\n}`
        }
      ]
    }
  ],
  
  realWorldApplications: [
    "High-performance databases storing records in columnar formats to maximize CPU cache locality.",
    "Web servers using async I/O to avoid context-switching overhead under heavy load.",
    "Optimizing array processing by sorting data first to assist CPU branch prediction."
  ],
  
  prerequisites: ["memory-management"],
  relatedTopics: ["memory-management"],
  relatedAlgorithms: [],
  relatedProblems: ["c10k"],
  relatedSkills: ["rust", "cpp"],
  relatedServices: ["backend-development"],
  
  seo: {
    title: "CPU Architecture for Software Engineers",
    description: "Learn how CPU caches, context switching, and branch prediction affect software performance and how to write hardware-sympathetic code.",
    keywords: ["CPU Architecture", "Cache Miss", "Context Switching", "Branch Prediction", "Mechanical Sympathy"]
  }
};
