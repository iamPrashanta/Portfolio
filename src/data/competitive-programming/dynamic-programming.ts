import { ComputerScienceTopic } from "@/types/knowledge";

export const dynamicProgramming: ComputerScienceTopic = {
  slug: "dynamic-programming",
  title: "Dynamic Programming (DP)",
  shortDescription: "An optimization method that solves complex problems by breaking them down into simpler overlapping subproblems.",
  category: "competitive-programming",
  difficulty: "advanced",
  
  introduction: "Dynamic Programming (DP) is both a mathematical optimization method and a computer programming method. It solves problems by breaking them down into smaller subproblems. However, unlike Divide and Conquer (e.g., Merge Sort), DP is used when the subproblems overlap—meaning the same subproblem is solved multiple times. DP saves the answer to each subproblem so it only needs to be computed once.",
  whyItMatters: "DP can reduce the time complexity of algorithms from exponential O(2^N) down to polynomial O(N² or N). It is the backbone of sequence alignment in bioinformatics, routing algorithms, and AI decision-making.",
  
  howItWorks: [
    {
      title: "Memoization (Top-Down)",
      content: "You write a standard recursive function to solve the problem, but before returning an answer, you cache it in a Hash Table or Array. The next time the function is called with those same arguments, it returns the cached result immediately instead of recalculating."
    },
    {
      title: "Tabulation (Bottom-Up)",
      content: "You avoid recursion entirely. You start by solving the smallest possible subproblems (the base cases) and store their answers in an array (a 'table'). You then use those stored answers to build up the solutions to larger problems iteratively."
    }
  ],
  
  codeExamples: [
    {
      title: "Fibonacci Sequence Optimization",
      description: "Reducing Fibonacci calculation from O(2^N) to O(N) using Memoization.",
      implementations: [
        {
          language: "python",
          label: "Python",
          code: `def fib_memo(n, memo=None):\n    if memo is None:\n        memo = {}\n        \n    # Base cases\n    if n <= 1:\n        return n\n        \n    # Check cache\n    if n in memo:\n        return memo[n]\n        \n    # Compute and store\n    memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)\n    return memo[n]`
        }
      ]
    }
  ],
  
  realWorldApplications: [
    "Diff utilities (like `git diff`) use the Longest Common Subsequence DP algorithm to determine inserted and deleted lines.",
    "Text editors use DP (Levenshtein Distance) to suggest spelling auto-corrections.",
    "Network routing protocols use the Bellman-Ford DP algorithm to find shortest paths."
  ],
  
  prerequisites: ["big-o-notation", "graphs"],
  relatedTopics: ["hash-tables"],
  relatedAlgorithms: ["dfs"],
  relatedProblems: [],
  relatedSkills: ["python"],
  relatedServices: [],
  
  seo: {
    title: "Dynamic Programming (DP) Concepts and Patterns",
    description: "Understand Dynamic Programming, Memoization vs Tabulation, and how to optimize exponential algorithms.",
    keywords: ["Dynamic Programming", "Memoization", "Tabulation", "Algorithms", "Competitive Programming"]
  }
};
