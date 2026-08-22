import { ComputerScienceTopic } from "@/types/knowledge";

export const memoryManagement: ComputerScienceTopic = {
  slug: "memory-management",
  title: "Memory Management",
  shortDescription: "How software allocates, uses, and frees memory in modern computing. Covers Stack vs Heap, Virtual Memory, and Garbage Collection.",
  category: "foundations",
  difficulty: "intermediate",
  
  introduction: "Memory management is the process of controlling and coordinating computer memory. It involves assigning portions of memory to programs at their request, and freeing it for reuse when no longer needed. A deep understanding of how memory works—specifically the distinction between the stack and the heap—is fundamental to writing performant, leak-free software.",
  whyItMatters: "Inefficient memory usage can lead to memory leaks, out-of-memory crashes (OOM), and excessive garbage collection pauses that destroy application performance. System designers must understand memory allocation to optimize for low latency and high throughput.",
  
  howItWorks: [
    {
      title: "Stack vs Heap",
      content: "The **Stack** is used for static memory allocation and execution threads. It is fast, automatically managed (via stack frames), and stores primitive types and pointers. The **Heap** is used for dynamic memory allocation. It is slower, requires explicit allocation/deallocation (or a Garbage Collector), and stores large data structures like objects and dynamic arrays."
    },
    {
      title: "Virtual Memory",
      content: "Modern operating systems use virtual memory to give each process the illusion of a continuous, isolated address space. The OS maps these virtual addresses to physical RAM using page tables. This allows systems to run processes that require more memory than physically available by swapping to disk."
    },
    {
      title: "Garbage Collection (GC)",
      content: "Languages like Java, Python, and JavaScript use a Garbage Collector to automatically free heap memory that is no longer reachable. GC algorithms (like Mark-and-Sweep or Generational GC) periodically scan memory to reclaim space, but this can introduce non-deterministic 'stop-the-world' pauses."
    }
  ],
  
  codeExamples: [
    {
      title: "Stack vs Heap Allocation",
      description: "How memory is allocated differently based on the data type in C.",
      implementations: [
        {
          language: "cpp",
          label: "C",
          code: `void memory_demo() {\n    // Allocated on the Stack (automatically freed when function exits)\n    int stack_var = 42;\n    \n    // Allocated on the Heap (must be explicitly freed)\n    int* heap_var = (int*)malloc(sizeof(int));\n    *heap_var = 42;\n    \n    // Free the heap memory to prevent a memory leak\n    free(heap_var);\n}`
        }
      ]
    }
  ],
  
  realWorldApplications: [
    "High-frequency trading platforms avoiding Garbage Collection languages to prevent latency spikes.",
    "Embedded systems using manual memory management due to strict hardware constraints.",
    "Game engines pre-allocating memory pools to avoid mid-frame heap allocations."
  ],
  
  prerequisites: ["big-o-notation"],
  relatedTopics: ["cpu-architecture"],
  relatedAlgorithms: [],
  relatedProblems: ["c10k", "high-concurrency-api"],
  relatedSkills: ["c", "rust", "cpp"],
  relatedServices: ["backend-development"],
  
  seo: {
    title: "Memory Management Explained: Stack vs Heap & Garbage Collection",
    description: "Understand computer memory management, the differences between stack and heap memory, virtual memory, and how garbage collection affects application performance.",
    keywords: ["Memory Management", "Stack vs Heap", "Garbage Collection", "Virtual Memory", "Computer Science"]
  }
};
