import { HubData } from "@/types/knowledge";
import { arraysAndStringsDeep } from "./arrays-strings-deep";
import { linkedListsHashTablesDeep } from "./linked-lists-hash-tables-deep";
import { treesDeep } from "./trees-deep";
import { graphsDeep } from "./graphs-deep";

export const dataStructuresHubData: HubData = {
  title: "Data Structures",
  description: "The architectural patterns of memory. How we organize data for maximum efficiency.",
  
  learningContext: {
    intro: "A program is just algorithms acting on data structures. If you choose the wrong data structure, even the most brilliant algorithm will fail at scale. Data structures are about trade-offs: trading memory for speed, or write-speed for read-speed.",
    pillars: [
      { id: "memory", title: "Memory Layout", description: "How is the data physically arranged in RAM?" },
      { id: "access", title: "Access Pattern", description: "Do we need random access or sequential access?" },
      { id: "modification", title: "Modification", description: "Are we inserting/deleting frequently?" },
      { id: "relationships", title: "Relationships", description: "Is the data linear, hierarchical, or networked?" }
    ]
  },

  knowledgeMap: "Dynamic component will process the categories and connections directly.",

  topicCategories: [
    {
      id: "arrays-and-strings",
      title: "Arrays & Strings",
      description: "Linear, contiguous blocks of memory.",
      topics: arraysAndStringsDeep
    },
    {
      id: "linked-lists-hash-tables",
      title: "Linked Lists & Hash Tables",
      description: "Dynamic memory allocation and key-value magic.",
      topics: linkedListsHashTablesDeep
    },
    {
      id: "trees",
      title: "Trees",
      description: "Hierarchical data organizations.",
      topics: treesDeep
    },
    {
      id: "graphs",
      title: "Graphs",
      description: "Complex networks and relationships.",
      topics: graphsDeep
    }
  ],

  conceptConnections: [
    {
      title: "THE SEARCH FOR SPEED",
      chain: ["Linear Search (Array)", "Binary Search (Sorted Array)", "O(log N) Search (BST)", "O(1) Search (Hash Table)"]
    },
    {
      title: "ABSTRACTION LAYERS",
      chain: ["RAM", "Array", "String", "Trie Node", "Autocomplete System"]
    }
  ],

  systemMoments: [
    {
      title: "The Hash Collision DDoS Attack",
      whatHappened: "In 2011, attackers realized they could send massive JSON payloads to web servers where every key was crafted to cause a Hash Collision. The server's hash table degraded into a Linked List, turning O(1) operations into O(N), maxing out the CPU.",
      principle: "Algorithmic Worst-Case Complexities",
      lesson: "You cannot assume the average-case performance of a data structure is guaranteed. Malicious users will trigger the worst-case.",
      usageToday: "Modern languages use randomized hashing seeds to prevent attackers from predicting collisions."
    },
    {
      title: "The Y2K Array Overflow Equivalent",
      whatHappened: "Many legacy systems use fixed-size Static Arrays because they pre-date modern dynamic memory. If a counter exceeds the array size, the system writes data into adjacent memory belonging to other programs, causing catastrophic crashes.",
      principle: "Buffer Overflow",
      lesson: "Memory boundaries must be strictly enforced.",
      usageToday: "Languages like Rust enforce strict bounds checking at compile time."
    }
  ],

  whyItMatters: [
    {
      concept: "Hash Tables",
      practicalExamples: [
        "Database indexing.",
        "Redis caching.",
        "Checking if a username is taken."
      ]
    },
    {
      concept: "Graphs",
      practicalExamples: [
        "Uber calculating the fastest route to your location.",
        "Amazon recommending products based on your purchase history."
      ]
    },
    {
      concept: "Trees (DOM)",
      practicalExamples: [
        "React rendering UI efficiently using a Virtual DOM tree."
      ]
    }
  ],

  misconceptions: [
    {
      myth: "Arrays and Linked Lists are basically the same.",
      reality: "They represent opposite memory strategies. Arrays are contiguous (cache-friendly, fast reads). Linked Lists are fragmented (cache-hostile, fast inserts)."
    },
    {
      myth: "Hash Tables solve everything.",
      reality: "Hash Tables are O(1) for exact matches. They are completely useless if you want to find all users whose age is > 18. That requires a Tree."
    }
  ],

  learningPath: [
    {
      phase: "PHASE 01",
      title: "Linear Data",
      description: "Understand how data is stored side-by-side in memory.",
      topics: ["Arrays", "Strings", "Two Pointers"]
    },
    {
      phase: "PHASE 02",
      title: "Dynamic Allocation",
      description: "Break free from fixed memory limits.",
      topics: ["Linked Lists", "Hash Tables", "LRU Cache"]
    },
    {
      phase: "PHASE 03",
      title: "Hierarchies",
      description: "Organize data for logarithmic search speeds.",
      topics: ["Binary Trees", "BST", "Heaps", "Tries"]
    },
    {
      phase: "PHASE 04",
      title: "Networks",
      description: "Map complex real-world relationships.",
      topics: ["Graphs", "Graph Representations"]
    }
  ]
};
