import { DeepTopic } from "@/types/knowledge";

export const graphAlgorithmsDeep: DeepTopic[] = [
  {
    id: "dijkstra",
    slug: "dijkstra",
    title: "Dijkstra's Algorithm",
    difficulty: "Advanced",
    category: "graph-algorithms",
    shortDescription: "The legendary algorithm for finding the absolute shortest path in a weighted graph.",
    overview: {
      question: "BFS finds the shortest path by counting steps. But what if one step is a 5-mile highway and another is a 20-mile dirt road?",
      answer: "We need an algorithm that accounts for the 'Weight' (cost/distance) of the edges. Dijkstra systematically calculates the minimum total cost to reach every node from a starting point."
    },
    whyItExists: {
      problem: "In real life, connections have costs (distance, time, money, latency). Standard BFS assumes all costs are equal.",
      solution: "Maintain a running total of the cheapest way to reach every node. Always explore the absolute cheapest available path next.",
      keyInsight: "By always choosing the path of least resistance (Greedy approach), we guarantee we find the optimal route before wasting time on expensive routes."
    },
    coreConcepts: [
      { title: "The Priority Queue (Min-Heap)", explanation: "The core engine of Dijkstra. Instead of a normal Queue, we push available paths into a Min-Heap based on their total cost. The Heap instantly gives us the cheapest next move." },
      { title: "Relaxation", explanation: "If we find a path to Node B that costs 10, but later find a different path to Node B that costs 8, we 'relax' (update) the cost to 8." },
      { title: "No Negative Weights", explanation: "Dijkstra blindly assumes that taking more steps will only increase the cost. If a graph has negative edges (like a road that pays you to drive on it), Dijkstra breaks." }
    ],
    keyTerms: [
      { term: "Weighted Graph", definition: "A graph where edges carry numerical values representing cost or distance." }
    ],
    connections: [
      { topicId: "heaps", relationship: "Dijkstra requires a Min-Heap to be fast (O((V+E) log V))." },
      { topicId: "greedy-algorithms", relationship: "Dijkstra is fundamentally a Greedy Algorithm." }
    ],
    engineeringMoment: {
      title: "Routing the Internet",
      story: "Early internet routing protocols (OSPF) are essentially massive, distributed implementations of Dijkstra's algorithm. Every router calculates the shortest path to every other subnet based on link speeds.",
      lesson: "Theoretical graph algorithms form the literal backbone of global communication."
    },
    realWorldExamples: [
      { title: "Google Maps", description: "While modern GPS uses A* (a heavily optimized variant of Dijkstra), the foundational logic is identical." }
    ],
    keyTakeaways: [
      "Dijkstra is just BFS upgraded with a Priority Queue.",
      "If you ever see a problem asking for the 'cheapest', 'fastest', or 'shortest' path on a graph with varying costs, it is Dijkstra."
    ],
    prerequisites: ["bfs", "heaps", "graphs-intro"],
    nextTopics: ["topological-sort"]
  },
  {
    id: "topological-sort",
    slug: "topological-sort",
    title: "Topological Sort",
    difficulty: "Advanced",
    category: "graph-algorithms",
    shortDescription: "Ordering a directed graph so that every dependency is processed before the items that depend on it.",
    overview: {
      question: "If I have 50 college courses with complex prerequisite chains, what valid order can I take them in?",
      answer: "You represent the courses as a Directed Graph. Topological Sort flattens that graph into a straight line, guaranteeing that Course A always comes before Course B if B requires A."
    },
    whyItExists: {
      problem: "Systems need to resolve complex, branching dependency trees (build systems, package managers, task schedulers).",
      solution: "An algorithm that identifies nodes with zero dependencies, processes them, removes them from the graph, and repeats.",
      keyInsight: "Topological Sort only works if there are NO cycles. If Course A requires B, and B requires A, the algorithm correctly identifies the impossible loop."
    },
    coreConcepts: [
      { title: "In-Degree", explanation: "The number of arrows pointing AT a node. If In-Degree is 0, the task has no prerequisites and can be executed immediately." },
      { title: "Kahn's Algorithm (BFS based)", explanation: "Find all nodes with 0 In-Degree. Put them in a queue. Pop them, process them, and decrement the In-Degree of all their neighbors. If a neighbor hits 0, add it to the queue." },
      { title: "DFS Approach", explanation: "Run a standard DFS. When a node completely finishes exploring all its neighbors (hits a dead end), push it onto a stack. Popping the stack at the end gives the sorted order." }
    ],
    keyTerms: [
      { term: "DAG (Directed Acyclic Graph)", definition: "A graph with one-way arrows and absolutely no loops. Topological sort ONLY works on DAGs." }
    ],
    connections: [
      { topicId: "graphs-intro", relationship: "The primary use case for Directed Graphs." },
      { topicId: "dfs", relationship: "One of the standard ways to implement the sort." }
    ],
    realWorldExamples: [
      { title: "NPM and Build Tools", description: "When you run `npm install` or `make`, the tool builds a massive DAG of dependencies and runs a Topological Sort to figure out what to download or compile first." }
    ],
    keyTakeaways: [
      "If a problem asks for an 'order', a 'schedule', or mentions 'prerequisites' or 'dependencies', it is asking for Topological Sort.",
      "It is the standard algorithm for Cycle Detection in directed graphs."
    ],
    prerequisites: ["dfs", "bfs", "graphs-intro"],
    nextTopics: ["minimum-spanning-tree"]
  }
];
