import { ComputerScienceTopic } from "@/types/knowledge";

export const mergeSort: ComputerScienceTopic = {
  slug: "merge-sort",
  title: "Merge Sort",
  shortDescription: "A highly efficient, stable, divide-and-conquer sorting algorithm with a guaranteed O(N log N) time complexity.",
  category: "algorithms",
  difficulty: "intermediate",
  
  introduction: "Merge Sort is a classic Divide and Conquer algorithm. It divides an input array into two halves, recursively sorts the two halves, and then merges the sorted halves back together. Because it constantly cuts the problem size in half and then merges the results in linear time, it strictly guarantees O(N log N) performance regardless of the initial order of the data.",
  whyItMatters: "Unlike Quick Sort, which can degrade to O(N²) in the worst case, Merge Sort guarantees O(N log N). Furthermore, Merge Sort is a 'stable' sort, meaning equal elements retain their original relative order. It is often the algorithm of choice for sorting Linked Lists and large datasets that don't fit entirely into memory (External Sorting).",
  
  howItWorks: [
    {
      title: "Divide Phase",
      content: "The algorithm recursively splits the array into two halves until it reaches arrays of size 1. An array of size 1 is trivially sorted."
    },
    {
      title: "Conquer (Merge) Phase",
      content: "The core logic lies in the `merge` function. It takes two sorted sub-arrays, uses two pointers (one for each sub-array), compares the elements at the pointers, and places the smaller element into a new temporary array. This step takes O(N) time and requires O(N) auxiliary space."
    }
  ],
  
  codeExamples: [
    {
      title: "Merge Sort Implementation",
      description: "A standard recursive implementation in Python.",
      implementations: [
        {
          language: "python",
          label: "Python",
          code: `def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n\n    return merge(left, right)\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    \n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i])\n            i += 1\n        else:\n            result.append(right[j])\n            j += 1\n            \n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result`
        }
      ]
    }
  ],
  
  realWorldApplications: [
    "External sorting algorithms in databases (e.g. Postgres) when data exceeds RAM capacity.",
    "Sorting Linked Lists, where Merge Sort operates efficiently without needing random access.",
    "Used natively in standard libraries of many languages (e.g. Java's Collections.sort for objects, Python's Timsort which is derived from Merge Sort)."
  ],
  
  prerequisites: ["big-o-notation", "arrays-and-strings"],
  relatedTopics: [],
  relatedAlgorithms: ["binary-search"],
  relatedProblems: [],
  relatedSkills: ["python", "java"],
  relatedServices: [],
  
  seo: {
    title: "Merge Sort Algorithm: Divide and Conquer Sorting",
    description: "Learn how the Merge Sort algorithm achieves guaranteed O(N log N) time complexity, making it ideal for stable sorting and large datasets.",
    keywords: ["Merge Sort", "Sorting Algorithms", "Divide and Conquer", "O(N log N)", "Stable Sort"]
  }
};
