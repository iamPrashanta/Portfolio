import { ComputerScienceTopic } from "@/types/knowledge";

export const graphs: ComputerScienceTopic = {
  slug: "graphs",
  title: "Graphs",
  shortDescription: "A non-linear data structure modeling pairwise relationships between objects using nodes and edges.",
  category: "data-structures",
  difficulty: "advanced",
  
  introduction: "A Graph is a versatile data structure composed of Nodes (or Vertices) and Edges that connect them. Unlike trees, graphs do not have a strict hierarchy or a root node; any node can be connected to any other node. Graphs can be Directed (one-way edges) or Undirected (two-way edges), and edges can hold Weights (representing distance or cost).",
  whyItMatters: "Graphs model real-world networks better than any other data structure. From social networks to GPS routing, internet topologies, and state machines, mastering graphs is essential for solving complex engineering constraints involving connectivity and shortest paths.",
  
  howItWorks: [
    {
      title: "Adjacency Matrix",
      content: "A 2D array where `matrix[i][j]` is 1 (or the weight) if there is an edge between node `i` and node `j`. This representation is extremely fast for edge lookups O(1) but consumes O(V²) space, making it impractical for sparse graphs (graphs with few edges)."
    },
    {
      title: "Adjacency List",
      content: "An array or hash map where each node points to a list of its neighbors. This uses O(V + E) space, which is highly efficient for most real-world sparse networks. However, checking if a specific edge exists takes O(degree(V)) time."
    }
  ],
  
  codeExamples: [
    {
      title: "Graph Representation",
      description: "Building an Adjacency List using an object/dictionary.",
      implementations: [
        {
          language: "typescript",
          label: "TypeScript",
          code: `class Graph {\n  private adjacencyList: Record<string, string[]> = {};\n\n  addVertex(vertex: string) {\n    if (!this.adjacencyList[vertex]) {\n      this.adjacencyList[vertex] = [];\n    }\n  }\n\n  addEdge(v1: string, v2: string) {\n    // Undirected graph\n    this.adjacencyList[v1].push(v2);\n    this.adjacencyList[v2].push(v1);\n  }\n}`
        }
      ]
    }
  ],
  
  realWorldApplications: [
    "Routing algorithms (like Google Maps) using Dijkstra's or A* on weighted graphs to find the shortest path.",
    "Social networks (Facebook, LinkedIn) analyzing connections to suggest friends using graph traversal.",
    "Garbage collectors using directed graphs to track object references and find unreachable memory."
  ],
  
  prerequisites: ["arrays-and-strings", "hash-tables"],
  relatedTopics: ["binary-search-trees"],
  relatedAlgorithms: ["bfs", "dfs"],
  relatedProblems: [],
  relatedSkills: ["python"],
  relatedServices: ["api-integration"],
  
  seo: {
    title: "Graph Data Structures: Theory and Implementation",
    description: "Understand graph data structures, directed vs undirected graphs, adjacency matrices, and adjacency lists.",
    keywords: ["Graphs", "Data Structures", "Adjacency List", "Adjacency Matrix", "Graph Theory"]
  }
};
