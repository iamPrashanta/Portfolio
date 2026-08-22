import { DeepTopic } from "@/types/knowledge";

export const graphsDeep: DeepTopic[] = [
  {
    id: "graphs-intro",
    slug: "graphs-intro",
    title: "Introduction to Graphs",
    difficulty: "Advanced",
    category: "graphs",
    shortDescription: "The ultimate data structure for representing relationships and networks.",
    overview: {
      question: "How do we represent social networks, flight paths, or the Internet itself?",
      answer: "With a Graph. It is simply a collection of Nodes (Vertices) and the connections between them (Edges)."
    },
    whyItExists: {
      problem: "Trees are strictly hierarchical (Parent -> Child). In reality, relationships are often messy webs without a clear 'Root'. You can be friends with someone who is friends with someone else.",
      solution: "A mathematical Graph. Any node can connect to any other node, creating complex, non-linear networks.",
      keyInsight: "A Tree is just a very specific, restricted type of Graph."
    },
    coreConcepts: [
      { title: "Directed vs Undirected", explanation: "On Facebook (Undirected), if I am your friend, you are my friend. On Twitter (Directed), I can follow you without you following me." },
      { title: "Weighted vs Unweighted", explanation: "In a flight map, the connection between New York and London has a 'Weight' (cost or distance). In a friend network, a connection is just 1 (Unweighted)." },
      { title: "Cyclic vs Acyclic", explanation: "If you can follow a path and end up exactly where you started, the graph has a Cycle. Cycles create infinite loops if algorithms aren't careful." }
    ],
    keyTerms: [
      { term: "Vertex (Node)", definition: "An entity in the graph (e.g., a person, a city)." },
      { term: "Edge", definition: "The line connecting two Vertices." }
    ],
    connections: [
      { topicId: "trees", relationship: "A Tree is a Directed Acyclic Graph (DAG)." },
      { topicId: "hash-tables", relationship: "Often used to build Adjacency Lists." }
    ],
    realWorldExamples: [
      { title: "Google Maps", description: "Intersections are Vertices. Roads are Edges. Traffic is the Weight. The GPS algorithm runs on this graph." }
    ],
    keyTakeaways: [
      "Graphs are the most powerful abstraction in computer science. Almost any complex problem can be mapped onto a graph.",
      "The hard part of graphs isn't the concept; it's deciding how to store them in memory (Adjacency Matrix vs List)."
    ],
    prerequisites: ["trees", "hash-tables"],
    nextTopics: ["graph-representations"]
  },
  {
    id: "graph-representations",
    slug: "graph-representations",
    title: "Graph Representations",
    difficulty: "Advanced",
    category: "graphs",
    shortDescription: "How we actually store complex webs in computer memory.",
    overview: {
      question: "We draw graphs as circles and lines, but how does the computer store them?",
      answer: "We usually map them into Arrays or Hash Tables, typically using an Adjacency List or an Adjacency Matrix."
    },
    whyItExists: {
      problem: "A graph is highly dynamic. Node A might connect to 1 node, while Node B connects to 500 nodes. Standard rigid structures fail here.",
      solution: "Two primary methods: A giant 2D grid (Matrix) or a dictionary where every node lists its neighbors (List).",
      keyInsight: "The choice of representation completely dictates the speed and memory usage of the algorithms running on the graph."
    },
    coreConcepts: [
      { title: "Adjacency Matrix", explanation: "A 2D array of size V x V. If Node 2 connects to Node 5, `matrix[2][5] = 1`. Blazing fast to check a specific connection (O(1)), but wastes massive memory (O(V²)) if the graph is sparse." },
      { title: "Adjacency List", explanation: "A Hash Map where the Key is the Node, and the Value is an Array of all its neighbors. Highly memory efficient for most real-world networks." },
      { title: "Sparse vs Dense", explanation: "A dense graph has almost every node connected to every other node. A sparse graph (like a road map) has very few connections per node." }
    ],
    keyTerms: [
      { term: "Degree", definition: "The number of edges connected to a specific vertex." }
    ],
    connections: [
      { topicId: "arrays", relationship: "Used to build Matrices." },
      { topicId: "hash-tables", relationship: "Used to build Lists." }
    ],
    realWorldExamples: [
      { title: "Facebook's Social Graph", description: "With billions of users, an Adjacency Matrix would require millions of terabytes just to store zeroes. They use highly distributed Adjacency Lists." }
    ],
    misconceptions: [
      { myth: "Always use an Adjacency List.", reality: "If the graph is extremely dense, or if V is very small (like a chessboard), a Matrix is faster and cleaner." }
    ],
    keyTakeaways: [
      "In 95% of software engineering interviews and practical applications, use an Adjacency List.",
      "The space complexity of an Adjacency List is O(V + E)."
    ],
    prerequisites: ["graphs-intro"],
    nextTopics: []
  }
];
