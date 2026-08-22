import { DeepTopic } from "@/types/knowledge";

export const dynamicProgrammingDeep: DeepTopic[] = [
  {
    id: "dp-intro",
    slug: "dp-intro",
    title: "Dynamic Programming (DP)",
    difficulty: "Advanced",
    category: "dynamic-programming",
    shortDescription: "An optimization technique that solves complex problems by breaking them down into simpler overlapping subproblems.",
    overview: {
      question: "If a function recalculates the exact same data a million times, how do we fix it?",
      answer: "We remember the answer. Dynamic Programming is just recursion with a notepad. We solve small pieces of the problem, write down the answer, and reuse it later."
    },
    whyItExists: {
      problem: "Naive recursion (like calculating Fibonacci numbers) branches exponentially. Calculating Fib(50) might require the CPU to do quadrillions of identical calculations, taking years.",
      solution: "Calculate Fib(3) once, save it. When the other branches ask for Fib(3), instantly return the saved answer. The runtime drops from years to milliseconds.",
      keyInsight: "Trading memory (storing the answers) for massive time optimization (avoiding recalculation)."
    },
    coreConcepts: [
      { title: "Overlapping Subproblems", explanation: "DP only works if the massive problem can be broken into smaller problems that repeat. If every subproblem is totally unique (like Merge Sort), DP does not help." },
      { title: "Optimal Substructure", explanation: "The optimal solution to the massive problem can be constructed directly from the optimal solutions of its subproblems." },
      { title: "Memoization (Top-Down)", explanation: "Start at the massive problem. Recursively break it down. When you solve a small piece, save it in a Hash Map. Fast to write, but uses heavy Call Stack memory." },
      { title: "Tabulation (Bottom-Up)", explanation: "Start at the smallest possible problem. Solve it. Use it to solve the next slightly bigger problem, filling up an Array. Uses no recursion, incredibly fast." }
    ],
    keyTerms: [
      { term: "Memoization", definition: "Not 'memorization'. The specific act of caching the results of expensive function calls based on their inputs." }
    ],
    connections: [
      { topicId: "recursion", relationship: "The foundation of Top-Down DP." },
      { topicId: "arrays", relationship: "The foundation of Bottom-Up DP (Tabulation)." }
    ],
    engineeringMoment: {
      title: "Sequence Alignment in Bioinformatics",
      story: "Comparing two massive DNA sequences to find mutations is an exponentially complex problem. The Needleman-Wunsch algorithm, a pure Dynamic Programming solution, reduces this to a fast 2D grid calculation, revolutionizing genetics.",
      lesson: "Optimization algorithms unlock new scientific frontiers."
    },
    misconceptions: [
      { myth: "Dynamic Programming is related to dynamic typing or dynamic memory.", reality: "The name was invented in the 1950s by Richard Bellman purely because it sounded impressive to government funders. It just means 'careful, multi-stage planning'." }
    ],
    keyTakeaways: [
      "If a problem asks for the 'minimum', 'maximum', or 'total number of ways' to do something, AND involves making choices at each step, it is likely DP.",
      "Always start by writing the slow, naive recursive solution. Then just add a Hash Map to cache the results."
    ],
    prerequisites: ["recursion", "hash-tables", "arrays"],
    nextTopics: ["knapsack"]
  },
  {
    id: "knapsack",
    slug: "knapsack",
    title: "0/1 Knapsack Problem",
    difficulty: "Advanced",
    category: "dynamic-programming",
    shortDescription: "The classic DP problem demonstrating how to maximize value with limited capacity.",
    overview: {
      question: "You are a thief with a backpack that holds 10kg. There are 5 items, each with a different weight and value. How do you maximize your profit?",
      answer: "For every single item, you mathematically evaluate two branching universes: One where you take the item, and one where you leave it. You recursively explore all options and cache the best combinations using Dynamic Programming."
    },
    whyItExists: {
      problem: "You cannot just take the most expensive item (it might be too heavy). You cannot just take the item with the best value-to-weight ratio (you might leave wasted empty space). A Greedy approach fails perfectly.",
      solution: "A 2D DP Array. The rows represent the items available. The columns represent every possible weight capacity from 0 to 10kg. We build the perfect answer from the bottom up.",
      keyInsight: "Sometimes you must mathematically evaluate every possible combination to guarantee the absolute maximum value."
    },
    coreConcepts: [
      { title: "The Choice", explanation: "At every item, the algorithm asks: 'Is the value of THIS item + the best combination of the REMAINING weight better than if I just ignored this item entirely?'" },
      { title: "2D Tabulation", explanation: "We build a grid `dp[item][weight]`. We fill it out row by row. The absolute bottom-right corner of the grid holds the final, optimal answer." },
      { title: "0/1 vs Unbounded", explanation: "0/1 means you either take the item (1) or you don't (0). You cannot cut an item in half, and you only have one of each. Unbounded means you have infinite copies of each item." }
    ],
    keyTerms: [
      { term: "State", definition: "In DP, the 'State' refers to the variables that define a specific subproblem. In Knapsack, the State is (Current Item Index, Remaining Capacity)." }
    ],
    connections: [
      { topicId: "dp-intro", relationship: "The canonical application of Tabulation." },
      { topicId: "greedy-algorithms", relationship: "The Knapsack problem proves why Greedy algorithms don't always work." }
    ],
    realWorldExamples: [
      { title: "Resource Allocation", description: "Cloud providers optimizing which virtual machines to pack onto which physical servers to maximize utilization without exceeding RAM (Bin Packing)." }
    ],
    keyTakeaways: [
      "The 0/1 Knapsack is the template. Once you understand its 2D grid, you can solve almost any 'maximize value under constraints' problem.",
      "The time complexity is O(N * W), where W is the weight capacity."
    ],
    prerequisites: ["dp-intro"],
    nextTopics: ["greedy-algorithms"]
  }
];
