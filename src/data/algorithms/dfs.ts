import { ComputerScienceTopic } from "@/types/knowledge";

export const dfs: ComputerScienceTopic = {
  slug: "dfs",
  title: "Depth-First Search (DFS)",
  shortDescription: "A graph/tree traversal algorithm that goes as deep as possible before backtracking.",
  category: "algorithms",
  difficulty: "intermediate",
  
  introduction: "Depth-First Search (DFS) is a core algorithm for traversing or searching tree and graph data structures. The algorithm starts at the root node and explores as far as possible along each branch before backtracking. It relies heavily on a Stack (either the implicit call stack via recursion, or an explicit stack data structure) to keep track of its path.",
  whyItMatters: "DFS is fundamental for solving maze problems, topological sorting, detecting cycles in graphs, and traversing the DOM in web browsers. Because it uses less memory than BFS for deep trees, it is often preferred when memory is constrained.",
  
  howItWorks: [
    {
      title: "Recursive Approach",
      content: "The most common implementation uses the programming language's call stack. A function visits a node, marks it as visited (for graphs), and then recursively calls itself for all unvisited neighbors. When a dead end is reached, the function simply returns, implicitly 'backtracking' up the tree."
    },
    {
      title: "Iterative Approach",
      content: "To avoid Stack Overflow errors on extremely deep trees or massive graphs, DFS can be implemented iteratively using an explicit Stack array. You push the starting node to the stack, and in a loop, pop a node, process it, and push all its unvisited neighbors to the stack."
    }
  ],
  
  codeExamples: [
    {
      title: "DFS on a Graph (Recursive)",
      description: "Using recursion and a Set to keep track of visited nodes to avoid infinite loops in cyclic graphs.",
      implementations: [
        {
          language: "python",
          label: "Python",
          code: `def dfs(graph, node, visited=None):\n    if visited is None:\n        visited = set()\n        \n    visited.add(node)\n    print(f"Visiting {node}")\n    \n    for neighbor in graph[node]:\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n            \n    return visited`
        }
      ]
    }
  ],
  
  realWorldApplications: [
    "Detecting deadlocks in operating systems by finding cycles in resource allocation graphs.",
    "Solving puzzles with a single solution, like Sudoku or a maze.",
    "Generating a Topological Sort to determine package dependency installation order (e.g. npm install)."
  ],
  
  prerequisites: ["graphs", "binary-search-trees"],
  relatedTopics: ["graphs"],
  relatedAlgorithms: ["bfs"],
  relatedProblems: [],
  relatedSkills: ["python", "java"],
  relatedServices: [],
  
  seo: {
    title: "Depth-First Search (DFS) Algorithm Explained",
    description: "Understand the Depth-First Search algorithm, recursive vs iterative implementations, and how it is used for topological sorting and cycle detection.",
    keywords: ["DFS", "Depth-First Search", "Graph Traversal", "Tree Traversal", "Algorithms"]
  }
};
