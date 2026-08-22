import { HubData } from "@/types/knowledge";
import { mathNumberTheoryDeep } from "./math-number-theory-deep";
import { advancedDataStructuresDeep } from "./advanced-data-structures-deep";
import { stringAlgorithmsDeep } from "./string-algorithms-deep";
import { gameTheoryDeep } from "./game-theory-deep";

export const competitiveProgrammingHubData: HubData = {
  title: "Competitive Programming",
  description: "The extreme sport of computer science. Solving intractable problems under intense time constraints.",
  
  learningContext: {
    intro: "Competitive programming (CP) forces you to master the theoretical limits of computer science. It isn't just about writing code; it's about proving that your code will execute within exactly 1.000 seconds given worst-case inputs.",
    pillars: [
      { id: "math", title: "Number Theory", description: "Prime numbers, combinatorics, and modular arithmetic." },
      { id: "ds", title: "Advanced Data Structures", description: "Segment Trees, Fenwick Trees, and DSU." },
      { id: "strings", title: "String Algorithms", description: "KMP, Rabin-Karp, and Suffix Arrays." },
      { id: "logic", title: "Game Theory", description: "Mathematical proofs of winning states." }
    ]
  },

  knowledgeMap: "Dynamic component will process the categories and connections directly.",

  topicCategories: [
    {
      id: "math-number-theory",
      title: "Math & Number Theory",
      description: "The mathematical backbone of algorithmic optimization.",
      topics: mathNumberTheoryDeep
    },
    {
      id: "advanced-data-structures",
      title: "Advanced Data Structures",
      description: "Specialized structures for complex range queries.",
      topics: advancedDataStructuresDeep
    },
    {
      id: "string-algorithms",
      title: "String Algorithms",
      description: "Blazing fast text processing and matching.",
      topics: stringAlgorithmsDeep
    },
    {
      id: "game-theory",
      title: "Game Theory",
      description: "Mathematical reduction of state spaces.",
      topics: gameTheoryDeep
    }
  ],

  conceptConnections: [
    {
      title: "THE RANGE QUERY EVOLUTION",
      chain: ["Prefix Sums O(1)", "Fenwick Tree O(log N)", "Segment Tree O(log N)", "Lazy Segment Tree"]
    },
    {
      title: "THE STRING MATCHING PIPELINE",
      chain: ["Naive Search O(N*M)", "Rabin-Karp O(N+M)", "KMP Algorithm O(N+M)", "Suffix Automaton"]
    }
  ],

  systemMoments: [
    {
      title: "The Birth of the ICPC",
      whatHappened: "In 1970, Texas A&M hosted the first ever collegiate programming contest. It eventually grew into the International Collegiate Programming Contest (ICPC), the oldest, largest, and most prestigious algorithmic programming contest in the world.",
      principle: "Algorithmic Excellence",
      lesson: "Pushing students to solve edge-case-heavy problems under immense pressure produces software engineers who fundamentally understand machine limits.",
      usageToday: "Companies like Google and Meta actively recruit ICPC World Finalists."
    }
  ],

  whyItMatters: [
    {
      concept: "Segment Trees",
      practicalExamples: [
        "Financial systems aggregating stock trades over sliding time windows."
      ]
    },
    {
      concept: "Disjoint Set Union (DSU)",
      practicalExamples: [
        "Network routing algorithms verifying if two computers can communicate across a massive LAN."
      ]
    }
  ],

  misconceptions: [
    {
      myth: "CP makes you a better software engineer overall.",
      reality: "CP makes you brilliant at algorithms and problem-solving, but teaches terrible habits for system design (like using 1-letter variables and massive global arrays)."
    },
    {
      myth: "You must use C++ for competitive programming.",
      reality: "While C++ is the most popular due to speed and the STL, many top competitors use Java or Python. The algorithm matters more than the language."
    }
  ],

  learningPath: [
    {
      phase: "PHASE 01",
      title: "The Essentials",
      description: "Master Big O and standard library structures.",
      topics: ["Time Complexity", "STL / Collections"]
    },
    {
      phase: "PHASE 02",
      title: "The Core Algorithms",
      description: "The algorithms that solve 80% of problems.",
      topics: ["Graph Traversals", "Dynamic Programming", "Greedy Approaches"]
    },
    {
      phase: "PHASE 03",
      title: "Advanced Structures",
      description: "Tackling range queries and dynamic graphs.",
      topics: ["Segment Trees", "Disjoint Set Union"]
    },
    {
      phase: "PHASE 04",
      title: "Mathematical Mastery",
      description: "Combinatorics and Game Theory.",
      topics: ["Modular Arithmetic", "Sieve of Eratosthenes", "Nim"]
    }
  ]
};
