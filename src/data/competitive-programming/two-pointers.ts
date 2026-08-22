import { ComputerScienceTopic } from "@/types/knowledge";

export const twoPointers: ComputerScienceTopic = {
  slug: "two-pointers",
  title: "Two Pointers Pattern",
  shortDescription: "An algorithmic pattern that uses two pointers to iterate through an array, massively reducing time complexity from O(N²) to O(N).",
  category: "competitive-programming",
  difficulty: "beginner",
  
  introduction: "The Two Pointers pattern is a technique commonly used to solve array and string problems. Instead of using a nested loop (which takes O(N²) time) to find pairs of elements that satisfy a certain condition, you use two pointers (usually `left` and `right`) that move towards each other, or in the same direction, reducing the work to O(N) linear time.",
  whyItMatters: "Mastering the Two Pointers pattern is essential for passing coding interviews and optimizing backend processing tasks. It is incredibly efficient because it optimizes space complexity to O(1) and time complexity to O(N).",
  
  howItWorks: [
    {
      title: "Opposite Ends (Meet in the Middle)",
      content: "This approach is heavily used on sorted arrays. A `left` pointer starts at index 0, and a `right` pointer starts at `length - 1`. Depending on the sum or condition of the elements at these pointers, you move `left` forward or `right` backward until they meet."
    },
    {
      title: "Fast & Slow Pointers (Tortoise and Hare)",
      content: "Both pointers start at the beginning of a Linked List or array. The 'slow' pointer moves one step at a time, while the 'fast' pointer moves two steps. This is mathematically proven to detect cycles in linked lists (Floyd's Cycle Finding Algorithm) or find the middle of a list in a single pass."
    }
  ],
  
  codeExamples: [
    {
      title: "Two Sum II (Sorted Array)",
      description: "Finding two numbers that add up to a target in O(N) time and O(1) space.",
      implementations: [
        {
          language: "typescript",
          label: "TypeScript",
          code: `function twoSumSorted(numbers: number[], target: number): number[] {\n  let left = 0;\n  let right = numbers.length - 1;\n\n  while (left < right) {\n    const sum = numbers[left] + numbers[right];\n    \n    if (sum === target) return [left + 1, right + 1];\n    \n    // If sum is too small, we need a larger number\n    if (sum < target) left++;\n    // If sum is too large, we need a smaller number\n    else right--;\n  }\n  return [];\n}`
        }
      ]
    }
  ],
  
  realWorldApplications: [
    "Log file analysis: finding matching open/close events in a sorted chronological stream.",
    "String manipulation: efficiently reversing strings or checking for palindromes in-place.",
    "Memory-constrained environments where creating Hash Tables for O(1) lookups is not possible."
  ],
  
  prerequisites: ["arrays-and-strings", "big-o-notation"],
  relatedTopics: ["arrays-and-strings"],
  relatedAlgorithms: ["binary-search"],
  relatedProblems: [],
  relatedSkills: ["typescript", "python"],
  relatedServices: [],
  
  seo: {
    title: "Two Pointers Algorithm Pattern Explained",
    description: "Learn the Two Pointers algorithmic pattern, including meet-in-the-middle and fast/slow pointers to optimize O(N^2) loops into O(N).",
    keywords: ["Two Pointers", "Algorithms", "Competitive Programming", "Fast and Slow Pointers", "O(N)"]
  }
};
