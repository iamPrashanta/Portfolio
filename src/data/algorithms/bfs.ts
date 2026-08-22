import { ComputerScienceTopic } from "@/types/knowledge";

export const bfs: ComputerScienceTopic = {
  slug: "bfs",
  title: "Breadth-First Search (BFS)",
  shortDescription: "A traversal algorithm that explores all neighbor nodes at the present depth before moving deeper.",
  category: "algorithms",
  difficulty: "intermediate",
  
  introduction: "Breadth-First Search (BFS) explores a graph or tree layer by layer, moving horizontally before it moves vertically. Unlike DFS which uses a Stack, BFS uses a Queue to keep track of the next nodes to visit. This guarantees that when a node is visited, it has been reached via the shortest possible path from the starting node (in an unweighted graph).",
  whyItMatters: "BFS is the backbone of shortest-path algorithms. It is used in networking to find the shortest route between routers, in social networks to find 'friends of friends' (degrees of separation), and in web crawlers to index the web by depth.",
  
  howItWorks: [
    {
      title: "Queue-Based Execution",
      content: "The algorithm starts by pushing the root node into a Queue (FIFO structure) and marking it as visited. Then, it enters a loop: dequeue a node, process it, and enqueue all its unvisited neighbors. Because a Queue is First-In-First-Out, neighbors closer to the root are always processed before neighbors farther away."
    },
    {
      title: "Tracking Levels",
      content: "If you need to know exactly how far a node is from the root (e.g., shortest path length), you can process the queue in 'batches' by checking `queue.length` at the start of the loop and only popping that many items before incrementing a `depth` counter."
    }
  ],
  
  codeExamples: [
    {
      title: "Shortest Path in an Unweighted Graph",
      description: "Finding the shortest distance from a start node to a target node.",
      implementations: [
        {
          language: "typescript",
          label: "TypeScript",
          code: `function bfsShortestPath(graph: Record<string, string[]>, start: string, target: string): number {\n  const queue: { node: string; depth: number }[] = [{ node: start, depth: 0 }];\n  const visited = new Set<string>([start]);\n\n  while (queue.length > 0) {\n    const { node, depth } = queue.shift()!;\n\n    if (node === target) return depth;\n\n    for (const neighbor of graph[node] || []) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        queue.push({ node: neighbor, depth: depth + 1 });\n      }\n    }\n  }\n  return -1; // No path found\n}`
        }
      ]
    }
  ],
  
  realWorldApplications: [
    "GPS Navigation systems finding the shortest route between two locations.",
    "Peer-to-Peer networks (like BitTorrent) discovering neighboring nodes.",
    "Garbage Collection algorithms (Cheney's algorithm) copying live objects."
  ],
  
  prerequisites: ["graphs"],
  relatedTopics: ["graphs"],
  relatedAlgorithms: ["dfs"],
  relatedProblems: [],
  relatedSkills: ["typescript", "python"],
  relatedServices: [],
  
  seo: {
    title: "Breadth-First Search (BFS) Algorithm Explained",
    description: "Learn how the Breadth-First Search algorithm uses Queues to find the shortest path in unweighted graphs.",
    keywords: ["BFS", "Breadth-First Search", "Shortest Path", "Graph Traversal", "Queue"]
  }
};
