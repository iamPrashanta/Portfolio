import { ComputerScienceTopic } from "@/types/knowledge";

export const arraysAndStrings: ComputerScienceTopic = {
  slug: "arrays-and-strings",
  title: "Arrays & Strings",
  shortDescription: "The most fundamental contiguous data structures. Learn memory layouts, string manipulation, and core array operations.",
  category: "data-structures",
  difficulty: "beginner",
  
  introduction: "Arrays are the most basic data structure, storing elements sequentially in memory. Because they occupy contiguous blocks of memory, arrays allow for O(1) random access if you know the index. Strings are essentially arrays of characters, often null-terminated in lower-level languages like C.",
  whyItMatters: "Arrays are the building blocks of almost all other complex data structures (like Hash Tables and Heaps). Misunderstanding array resizing or string immutability in languages like Java or Python can lead to O(n²) performance issues.",
  
  howItWorks: [
    {
      title: "Contiguous Memory",
      content: "When an array is allocated, the OS finds a continuous block of memory large enough to hold all elements. To find the element at index `i`, the computer simply calculates: `memory_address = start_address + (i * size_of_element)`."
    },
    {
      title: "Dynamic Arrays",
      content: "Since standard arrays have a fixed size, dynamic arrays (like `ArrayList` in Java or `list` in Python) automatically resize. When they get full, they typically allocate a new array double the size and copy the old elements over. This makes appending O(1) amortized, but occasionally O(n)."
    },
    {
      title: "String Immutability",
      content: "In many modern languages (Java, C#, Python, JavaScript), strings are immutable. This means modifying a string actually creates a brand new string in memory. Repeatedly concatenating strings in a loop causes O(n²) time complexity due to constant reallocation."
    }
  ],
  
  codeExamples: [
    {
      title: "String Concatenation Penalty",
      description: "Why you should use a StringBuilder or Array Join instead of a loop for large strings.",
      implementations: [
        {
          language: "java",
          label: "Java",
          code: `// SLOW: O(N^2) because a new string is created every iteration\nString result = "";\nfor (String s : words) {\n    result += s;\n}\n\n// FAST: O(N) using a StringBuilder\nStringBuilder sb = new StringBuilder();\nfor (String s : words) {\n    sb.append(s);\n}\nString result = sb.toString();`
        }
      ]
    }
  ],
  
  realWorldApplications: [
    "Database indexing using fixed-size arrays for B-Tree nodes.",
    "Image processing, where pixels are stored as massive 2D arrays.",
    "Text editors and compilers performing fast string manipulation and lexing."
  ],
  
  prerequisites: ["big-o-notation", "memory-management"],
  relatedTopics: ["hash-tables", "two-pointers"],
  relatedAlgorithms: ["binary-search", "sliding-window"],
  relatedProblems: [],
  relatedSkills: ["java", "python", "typescript"],
  relatedServices: [],
  
  seo: {
    title: "Arrays and Strings Data Structures",
    description: "Learn how Arrays and Strings work in memory, the concept of dynamic arrays, string immutability, and O(1) random access.",
    keywords: ["Arrays", "Strings", "Data Structures", "Dynamic Arrays", "String Immutability"]
  }
};
