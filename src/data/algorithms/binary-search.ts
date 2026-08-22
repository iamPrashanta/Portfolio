import { ComputerScienceTopic } from "@/types/knowledge";

export const binarySearch: ComputerScienceTopic = {
  slug: "binary-search",
  title: "Binary Search",
  shortDescription: "A fast search algorithm with O(log N) time complexity for finding an item in a sorted array.",
  category: "algorithms",
  difficulty: "beginner",
  
  introduction: "Binary Search is a foundational divide-and-conquer algorithm. Instead of checking every single element in an array one by one (Linear Search), Binary Search repeatedly divides the search interval in half. By taking advantage of the fact that the array is already sorted, it can discard half of the remaining elements with every step.",
  whyItMatters: "Searching a sorted database of 1 billion users takes up to 1 billion operations with a Linear Search. With Binary Search, it takes a maximum of 30 operations (since log₂(1,000,000,000) ≈ 30). This extreme reduction in time complexity is why databases use B-Trees and binary search heavily.",
  
  howItWorks: [
    {
      title: "The Three Pointers",
      content: "Binary search uses a `left` pointer at the start, a `right` pointer at the end, and calculates a `mid` pointer. If the target is equal to the element at `mid`, the search is over. If the target is smaller, the `right` pointer is moved to `mid - 1`. If the target is larger, the `left` pointer is moved to `mid + 1`."
    },
    {
      title: "Calculating Mid Safely",
      content: "A common bug in binary search is writing `mid = (left + right) / 2`. In strongly typed languages with fixed integer sizes (like Java or C++), if `left` and `right` are massive numbers, adding them can cause an integer overflow. The safe way is `mid = left + (right - left) / 2`."
    }
  ],
  
  codeExamples: [
    {
      title: "Iterative Binary Search",
      description: "An efficient implementation avoiding recursion overhead.",
      implementations: [
        {
          language: "typescript",
          label: "TypeScript",
          code: `function binarySearch(nums: number[], target: number): number {\n  let left = 0;\n  let right = nums.length - 1;\n\n  while (left <= right) {\n    // Safe mid calculation\n    const mid = left + Math.floor((right - left) / 2);\n\n    if (nums[mid] === target) return mid;\n    if (nums[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n\n  return -1;\n}`
        }
      ]
    }
  ],
  
  realWorldApplications: [
    "Database query engines using binary search on indexes to rapidly locate rows.",
    "Git bisect uses a binary search over commit history to find which commit introduced a bug.",
    "Version control systems computing diffs efficiently."
  ],
  
  prerequisites: ["big-o-notation", "arrays-and-strings"],
  relatedTopics: ["binary-search-trees"],
  relatedAlgorithms: ["merge-sort"],
  relatedProblems: [],
  relatedSkills: ["python", "java", "typescript"],
  relatedServices: [],
  
  seo: {
    title: "Binary Search Algorithm: Theory and Implementation",
    description: "Learn how the Binary Search algorithm works, time complexity analysis, and safe mid-point calculations to avoid integer overflow.",
    keywords: ["Binary Search", "Algorithms", "Divide and Conquer", "O(log N)", "Searching"]
  }
};
