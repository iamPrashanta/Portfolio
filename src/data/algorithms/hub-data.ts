import { HubData } from "@/types/knowledge";
import { sortingSearchingDeep } from "./sorting-searching-deep";
import { graphAlgorithmsDeep } from "./graph-algorithms-deep";
import { dynamicProgrammingDeep } from "./dynamic-programming-deep";
import { greedyAlgorithmsDeep } from "./greedy-algorithms-deep";

export const algorithmsHubData: HubData = {
  title: "Algorithms",
  description: "The mathematical procedures that bring data structures to life. How we search, sort, and optimize the world.",
  
  learningContext: {
    intro: "An algorithm is simply a set of instructions to solve a problem. But in computer science, we are obsessed with efficiency. An algorithm that takes O(N²) time might work for 10 items, but it will take centuries for 1 billion items. Algorithms are the art of minimizing time and maximizing scale.",
    pillars: [
      { id: "correctness", title: "Correctness", description: "Does it guarantee the right answer for every possible edge case?" },
      { id: "time", title: "Time Complexity", description: "How does the execution time grow as the dataset scales to infinity?" },
      { id: "space", title: "Space Complexity", description: "How much extra RAM does the algorithm consume while running?" },
      { id: "paradigms", title: "Paradigms", description: "Is it Divide & Conquer, Greedy, or Dynamic Programming?" }
    ]
  },

  knowledgeMap: "Dynamic component will process the categories and connections directly.",

  topicCategories: [
    {
      id: "sorting-searching",
      title: "Sorting & Searching",
      description: "The foundational operations of computing.",
      topics: sortingSearchingDeep
    },
    {
      id: "graph-algorithms",
      title: "Graph Algorithms",
      description: "Navigating complex networks.",
      topics: graphAlgorithmsDeep
    },
    {
      id: "dynamic-programming",
      title: "Dynamic Programming",
      description: "Optimization through intelligent memory.",
      topics: dynamicProgrammingDeep
    },
    {
      id: "greedy-algorithms",
      title: "Greedy Algorithms",
      description: "Fast, localized decision making.",
      topics: greedyAlgorithmsDeep
    }
  ],

  conceptConnections: [
    {
      title: "THE EVOLUTION OF SEARCH",
      chain: ["Linear Search O(N)", "Binary Search O(log N)", "Hash Table Lookup O(1)"]
    },
    {
      title: "THE SHORTEST PATH PIPELINE",
      chain: ["Graph Theory", "Breadth-First Search", "Dijkstra's Algorithm", "A* Search", "GPS Navigation"]
    }
  ],

  systemMoments: [
    {
      title: "The Timsort Revolution",
      whatHappened: "For decades, languages used Quick Sort or Merge Sort. In 2002, Tim Peters realized that real-world data is often partially sorted already. He created Timsort, a hybrid of Merge Sort and Insertion Sort that takes advantage of existing order.",
      principle: "Adaptive Algorithms",
      lesson: "Theoretical worst-case Big O isn't everything. Algorithms must be optimized for the statistical realities of the data they actually process.",
      usageToday: "Timsort is now the standard sorting algorithm in Python, Java, and Android."
    },
    {
      title: "The Traveling Salesman Intractability",
      whatHappened: "Computer scientists spent decades trying to write a fast algorithm to find the absolute shortest route connecting a set of cities (The Traveling Salesman Problem). They failed.",
      principle: "NP-Hard Problems",
      lesson: "Some problems mathematically cannot be solved perfectly in a reasonable amount of time. We must accept approximation algorithms.",
      usageToday: "Logistics companies like FedEx do not use perfect algorithms; they use highly optimized approximations to route trucks."
    }
  ],

  whyItMatters: [
    {
      concept: "Topological Sort",
      practicalExamples: [
        "Package managers (npm, pip) figuring out which library to download first.",
        "Spreadsheet software deciding which formula cells to recalculate first."
      ]
    },
    {
      concept: "Dynamic Programming",
      practicalExamples: [
        "DNA sequence alignment in bioinformatics.",
        "Speech recognition breaking down audio waveforms into likely word sequences."
      ]
    },
    {
      concept: "Binary Search",
      practicalExamples: [
        "Git Bisect: Instantly finding which specific commit out of 10,000 introduced a bug."
      ]
    }
  ],

  misconceptions: [
    {
      myth: "You should memorize every algorithm.",
      reality: "You should memorize algorithmic PARADIGMS (Divide & Conquer, DP, Greedy). If you understand the paradigm, you can derive the algorithm on the fly."
    },
    {
      myth: "Faster time complexity always means faster execution.",
      reality: "An O(N) algorithm might be slower than an O(N²) algorithm if the dataset is tiny, due to the massive overhead or memory allocations required by the 'faster' algorithm."
    }
  ],

  learningPath: [
    {
      phase: "PHASE 01",
      title: "The Basics",
      description: "Fundamental iteration and recursion.",
      topics: ["Binary Search", "Breadth-First Search", "Depth-First Search"]
    },
    {
      phase: "PHASE 02",
      title: "Divide and Conquer",
      description: "Splitting massive problems into tiny pieces.",
      topics: ["Merge Sort", "Quick Sort"]
    },
    {
      phase: "PHASE 03",
      title: "Graph Theory",
      description: "Finding paths through networks.",
      topics: ["Dijkstra's Algorithm", "Topological Sort"]
    },
    {
      phase: "PHASE 04",
      title: "Advanced Optimization",
      description: "Tackling mathematically intensive problems.",
      topics: ["Greedy Algorithms", "Dynamic Programming", "Knapsack Problem"]
    }
  ]
};
