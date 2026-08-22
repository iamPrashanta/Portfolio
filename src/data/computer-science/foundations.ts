import { ComputerScienceTopic } from "@/types/knowledge";

export const foundations: ComputerScienceTopic[] = [
  {
    slug: "big-o-notation",
    title: "Big O Notation",
    shortDescription: "The mathematical notation used to describe the asymptotic behavior of functions, specifically analyzing the time and space complexity of algorithms.",
    category: "foundations",
    difficulty: "beginner",
    introduction: "Big O notation is a mathematical tool used in computer science to analyze and describe the performance or complexity of an algorithm. It specifically characterizes functions according to their growth rates: different functions with the same growth rate may be represented using the same O notation. In software engineering, Big O helps us predict how a piece of code will scale as the size of the input (n) increases.",
    whyItMatters: "Understanding Big O notation is critical because algorithms that work perfectly well for 10 items might bring down a production server when processing 10,000,000 items. It provides a standardized vocabulary to discuss performance trade-offs during system design.",
    codeExamples: [
      {
        title: "O(1) - Constant Time",
        description: "The execution time remains the same regardless of the input size.",
        implementations: [
          {
            language: "typescript",
            label: "TypeScript",
            code: `function getFirstElement(arr: number[]): number | undefined {\n  // Returns immediately, regardless of array size\n  return arr[0];\n}`,
          },
          {
            language: "python",
            label: "Python",
            code: `def get_first_element(arr: list):\n    # Returns immediately\n    return arr[0] if arr else None`,
          }
        ]
      },
      {
        title: "O(n) - Linear Time",
        description: "The execution time scales linearly with the input size.",
        implementations: [
          {
            language: "typescript",
            label: "TypeScript",
            code: `function findItem(arr: number[], target: number): boolean {\n  // May have to check every single item in the worst case\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === target) return true;\n  }\n  return false;\n}`,
          }
        ]
      }
    ],
    seo: {
      title: "Big O Notation Explained",
      description: "Learn Big O Notation, time complexity, and space complexity with practical code examples. Master algorithmic performance analysis.",
      keywords: ["Big O Notation", "Time Complexity", "Space Complexity", "Algorithm Analysis"],
    }
  }
];
