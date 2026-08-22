import { ComputerScienceTopic } from "@/types/knowledge";

export const prefixSums: ComputerScienceTopic = {
  slug: "prefix-sums",
  title: "Prefix Sums",
  shortDescription: "A preprocessing technique that allows for O(1) range sum queries by computing cumulative sums in advance.",
  category: "competitive-programming",
  difficulty: "intermediate",
  
  introduction: "The Prefix Sum (or Cumulative Sum) pattern is a powerful preprocessing technique. If you need to repeatedly find the sum of elements between two indices `i` and `j` in an array, doing it naively takes O(N) time for every query. By precomputing a 'prefix sums' array, you can answer any range query in O(1) time.",
  whyItMatters: "When dealing with massive datasets where read-heavy range queries are common (e.g., financial data analysis, rendering bounding boxes in 2D grids), Prefix Sums transform O(N * Q) complexity into O(N + Q), preventing timeouts.",
  
  howItWorks: [
    {
      title: "Building the Prefix Array",
      content: "You create a new array `P` of the same length as the original array `A` (often offset by 1 to handle 0-indexing gracefully). Each element `P[k]` contains the sum of all elements in `A` from index 0 up to `k`. Building this array takes O(N) time."
    },
    {
      title: "O(1) Range Queries",
      content: "To find the sum of elements from index `L` to `R` in the original array, you simply calculate `P[R] - P[L - 1]`. By subtracting the sum of everything *before* `L` from the sum of everything up to `R`, you are left with exactly the sum of the range `[L, R]`."
    }
  ],
  
  codeExamples: [
    {
      title: "Range Sum Query",
      description: "Preprocessing the array once to answer multiple queries instantly.",
      implementations: [
        {
          language: "java",
          label: "Java",
          code: `class RangeQuery {\n    private int[] prefix;\n\n    public RangeQuery(int[] nums) {\n        // Offset by 1 for easier calculation\n        prefix = new int[nums.length + 1];\n        for (int i = 0; i < nums.length; i++) {\n            prefix[i + 1] = prefix[i] + nums[i];\n        }\n    }\n\n    // Returns sum from index left to right (inclusive)\n    public int query(int left, int right) {\n        return prefix[right + 1] - prefix[left];\n    }\n}`
        }
      ]
    }
  ],
  
  realWorldApplications: [
    "Image Processing: 2D Prefix Sums (Summed-Area Tables) are heavily used in computer vision to quickly calculate the average pixel intensity in any rectangular area.",
    "Financial systems calculating the total volume of trades over arbitrary rolling time windows.",
    "Gaming: Quickly determining the number of entities within a specific sector of a grid."
  ],
  
  prerequisites: ["arrays-and-strings", "big-o-notation"],
  relatedTopics: ["arrays-and-strings"],
  relatedAlgorithms: [],
  relatedProblems: [],
  relatedSkills: ["java", "python"],
  relatedServices: [],
  
  seo: {
    title: "Prefix Sum Algorithm Pattern",
    description: "Learn the Prefix Sum pattern to optimize array range queries from O(N) to O(1) time.",
    keywords: ["Prefix Sums", "Cumulative Sums", "Algorithms", "Competitive Programming", "Range Query"]
  }
};
