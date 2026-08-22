import { DeepTopic } from "@/types/knowledge";

export const advancedDataStructuresDeep: DeepTopic[] = [
  {
    id: "segment-trees",
    slug: "segment-trees",
    title: "Segment Trees",
    difficulty: "Advanced",
    category: "advanced-data-structures",
    shortDescription: "A versatile tree used for answering range queries over an array in O(log N) time.",
    overview: {
      question: "If an array's values are constantly changing, how do you instantly find the sum of elements from index 100 to 5000?",
      answer: "You build a Segment Tree. Each node stores the sum of a specific 'segment' of the array. When you need the sum of a massive range, you just add up a few precalculated nodes instead of thousands of individual elements."
    },
    whyItExists: {
      problem: "Standard arrays take O(N) to calculate a range sum. Prefix Sum arrays take O(1) for sums, but O(N) if you update a single element. We need a structure that is fast at BOTH updates and queries.",
      solution: "A Binary Tree where the root represents the whole array, its children represent halves, and the leaves represent individual elements.",
      keyInsight: "Both point updates and range queries drop to O(log N) time, creating the perfect balance for dynamic data."
    },
    coreConcepts: [
      { title: "Building the Tree", explanation: "Takes O(N) time. The tree is usually stored as a flat array (like a Heap) of size 4N." },
      { title: "Range Queries", explanation: "If the queried range perfectly matches a node's segment, return the node's value. Otherwise, recursively split the query to its children." },
      { title: "Lazy Propagation", explanation: "An advanced optimization. If you need to add +5 to *every* element in a massive range, you don't update all the leaves. You just update the high-level node and flag it as 'lazy'. The update is pushed down only when explicitly needed later." }
    ],
    keyTerms: [
      { term: "Range Query", definition: "Asking a mathematical question (Sum, Min, Max, GCD) about a specific contiguous subsegment of an array." }
    ],
    connections: [
      { topicId: "trees", relationship: "The underlying theoretical structure." },
      { topicId: "fenwick-trees", relationship: "A simpler, less powerful alternative to Segment Trees." }
    ],
    realWorldExamples: [
      { title: "Computational Geometry", description: "Segment trees are heavily used in sweep-line algorithms to find intersecting rectangles on a 2D plane." }
    ],
    keyTakeaways: [
      "Segment Trees are the Swiss Army knife of Competitive Programming. They can solve almost any dynamic range query problem.",
      "Writing a Segment Tree from scratch takes about 50 lines of code. Practice it until it becomes muscle memory."
    ],
    prerequisites: ["trees", "recursion"],
    nextTopics: ["fenwick-trees"]
  },
  {
    id: "dsu",
    slug: "dsu",
    title: "Disjoint Set Union (DSU)",
    difficulty: "Advanced",
    category: "advanced-data-structures",
    shortDescription: "An incredibly elegant structure for tracking connected components in a graph.",
    overview: {
      question: "If we have 1,000,000 users and randomly declare that User A is friends with User B, how do we instantly know if User X is in the same friend group as User Y?",
      answer: "We use a Disjoint Set (also called Union-Find). It groups elements into sets and assigns one 'Representative' leader to each set."
    },
    whyItExists: {
      problem: "Using DFS/BFS to constantly check if two nodes are connected in a massive, dynamically changing graph is incredibly slow (O(V+E) every time).",
      solution: "Maintain an array where `parent[i]` points to the parent of node `i`. To check if X and Y are connected, just follow their parents to the absolute top. If they have the same supreme leader, they are connected.",
      keyInsight: "We don't care about the exact path between X and Y. We only care if they belong to the same set."
    },
    coreConcepts: [
      { title: "Find", explanation: "Climb the parent array to find the representative of the set." },
      { title: "Union", explanation: "To merge two sets, just make the representative of one set the parent of the representative of the other set." },
      { title: "Path Compression", explanation: "The magic optimization. When you do a 'Find', you take every node you visited on the way up and point them ALL directly to the supreme leader. Future searches become instant." }
    ],
    keyTerms: [
      { term: "Amortized O(α(N))", definition: "With Path Compression and Union by Rank, DSU operations take inverse Ackermann time, which is less than 5 for any number physically possible in the universe. It is practically O(1)." }
    ],
    connections: [
      { topicId: "graph-algorithms", relationship: "DSU is essentially a specialized graph algorithm." },
      { topicId: "minimum-spanning-tree", relationship: "Kruskal's Algorithm uses DSU to build minimum spanning trees." }
    ],
    realWorldExamples: [
      { title: "Image Processing", description: "Finding connected components (like identifying continuous blobs of color in an image) relies on DSU." }
    ],
    keyTakeaways: [
      "DSU is one of the most beautiful algorithms in CS. The code is less than 15 lines, yet it solves incredibly complex connectivity problems in O(1) time.",
      "Always use Path Compression. Without it, DSU degrades to O(N)."
    ],
    prerequisites: ["arrays", "recursion"],
    nextTopics: []
  }
];
