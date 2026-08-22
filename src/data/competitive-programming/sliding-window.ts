import { ComputerScienceTopic } from "@/types/knowledge";

export const slidingWindow: ComputerScienceTopic = {
  slug: "sliding-window",
  title: "Sliding Window Pattern",
  shortDescription: "A powerful technique to solve sub-array or sub-string problems in O(N) time without redundant recalculations.",
  category: "competitive-programming",
  difficulty: "intermediate",
  
  introduction: "The Sliding Window pattern is an extension of the Two Pointers technique. It is used to maintain a dynamic or fixed-size 'window' (a sub-array) that satisfies certain conditions. Instead of re-evaluating the entire window every time it shifts, the algorithm only calculates the difference between the new element entering the window and the old element leaving it.",
  whyItMatters: "Any time you see an interview question asking for the 'longest sub-array', 'shortest sub-string', or 'maximum sum of K contiguous elements', the naive O(N²) solution can almost always be optimized to O(N) using a Sliding Window.",
  
  howItWorks: [
    {
      title: "Fixed-Size Window",
      content: "Used when the problem specifies the size of the window (e.g., 'max sum of 3 consecutive elements'). The window starts at index 0 and grows to size `K`. Then, as the window slides forward, you subtract the element that fell off the back and add the new element at the front. This turns an O(N*K) problem into an O(N) problem."
    },
    {
      title: "Dynamic-Size Window",
      content: "Used when searching for an optimal window size (e.g., 'smallest sub-array with sum >= S'). The `right` pointer expands the window to satisfy the condition. Once satisfied, the `left` pointer shrinks the window as much as possible while still satisfying the condition, keeping track of the minimum size seen."
    }
  ],
  
  codeExamples: [
    {
      title: "Maximum Sum Subarray of Size K",
      description: "Finding the maximum sum of K consecutive elements in O(N) time.",
      implementations: [
        {
          language: "python",
          label: "Python",
          code: `def max_sub_array_of_size_k(k, arr):\n    max_sum = 0\n    window_sum = 0\n    window_start = 0\n\n    for window_end in range(len(arr)):\n        window_sum += arr[window_end]  # add the next element\n        \n        # slide the window if we've hit the size limit\n        if window_end >= k - 1:\n            max_sum = max(max_sum, window_sum)\n            window_sum -= arr[window_start]  # subtract the element going out\n            window_start += 1  # slide the window ahead\n            \n    return max_sum`
        }
      ]
    }
  ],
  
  realWorldApplications: [
    "Rate Limiting APIs: A sliding window log algorithm is often used to ensure a user hasn't exceeded N requests in the last M seconds.",
    "Network Packet Analysis: Tracking average packet sizes or identifying bursty traffic over a sliding time frame.",
    "Stock Market Analysis: Computing Moving Averages efficiently."
  ],
  
  prerequisites: ["two-pointers", "arrays-and-strings"],
  relatedTopics: ["arrays-and-strings", "hash-tables"],
  relatedAlgorithms: [],
  relatedProblems: ["high-concurrency-api"],
  relatedSkills: ["python"],
  relatedServices: ["backend-development"],
  
  seo: {
    title: "Sliding Window Algorithm Pattern",
    description: "Master the Sliding Window pattern for solving sub-array and sub-string problems in linear O(N) time.",
    keywords: ["Sliding Window", "Algorithms", "Competitive Programming", "Sub-arrays", "Rate Limiting"]
  }
};
