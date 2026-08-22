import { EngineeringProblem } from "@/types/problem";

export const websocketScaling: EngineeringProblem = {
  slug: "websocket-scaling",
  title: "WebSocket Scaling & State Management",
  shortDescription: "Challenges and architectures for scaling stateful, persistent WebSocket connections across multiple servers.",
  category: "distributed-systems",
  severity: "high",
  
  problemStatement: "WebSockets provide real-time, bi-directional communication, making them ideal for chat applications, live trading dashboards, and multiplayer games. However, unlike stateless HTTP requests which can be load-balanced easily to any server, WebSocket connections are persistent (stateful). If User A is connected to Server 1, and User B is connected to Server 2, how do they chat with each other? Furthermore, keeping 1 million active TCP connections open requires massive memory and file descriptor tuning.",
  
  symptoms: [
    "Users on different servers cannot see each other's live updates.",
    "Servers crashing due to OS file descriptor limits (Too many open files).",
    "Load balancers dropping persistent connections after a timeout.",
    "Massive memory consumption just to hold idle connections open."
  ],
  
  whyItHappens: [
    {
      title: "The Stateful Nature of WebSockets",
      content: "When a client opens a WebSocket, a dedicated TCP connection is held open with a specific server instance. That server holds the connection object in its memory. A standard round-robin load balancer is completely unaware of this internal application state."
    },
    {
      title: "The Broadcast Problem",
      content: "When a system event occurs (e.g., 'Bitcoin price updated'), that event needs to be broadcasted to all connected clients. If clients are spread across 10 servers, the event must somehow be dispatched to all 10 servers simultaneously so they can notify their respective connected clients."
    }
  ],
  
  rootCauses: [
    {
      title: "Lack of a Pub/Sub Backplane",
      description: "Servers are operating in isolation without a centralized message bus to share events."
    },
    {
      title: "OS Limits",
      description: "Linux limits the number of file descriptors (sockets) a single process can open. By default, this is often 1024."
    }
  ],
  
  architectureOptions: [
    {
      title: "Option A: Redis Pub/Sub Backplane",
      description: "All WebSocket servers connect to a central Redis instance using the Pub/Sub feature. When Server 1 needs to broadcast a message to a user on Server 2, it publishes the message to a Redis channel. Server 2 subscribes to that channel, receives the message, and pushes it to its connected WebSocket.",
      pros: ["Standardized, reliable architecture", "Redis Pub/Sub is extremely fast", "Supported by libraries like Socket.io-redis"],
      cons: ["Redis becomes a single point of failure (requires Redis Cluster for HA)", "High network traffic between Redis and API servers"]
    },
    {
      title: "Option B: Managed WebSocket API (AWS API Gateway / Pusher)",
      description: "Offload WebSocket connection management entirely to a managed service. The client connects to AWS API Gateway, which holds the connection. API Gateway then sends standard stateless HTTP webhooks to your backend when messages arrive.",
      pros: ["Zero infrastructure to manage", "Backend remains completely stateless", "Automatic scaling to millions of connections"],
      cons: ["High cost at scale", "Vendor lock-in", "Added latency layer"]
    }
  ],
  
  recommendedSolution: [
    {
      title: "Redis Pub/Sub with Epoll",
      content: "For a self-hosted architecture, use a highly optimized runtime (Node.js or Go) which utilizes `epoll`/`kqueue` to manage thousands of idle connections with minimal memory. Connect these instances using a Redis Pub/Sub backplane to route messages across the cluster."
    }
  ],
  
  implementationSteps: [
    {
      title: "1. Tune OS Limits",
      content: "Increase the `ulimit -n` (file descriptors) and `fs.file-max` in `sysctl.conf` on the Linux servers to allow hundreds of thousands of open sockets."
    },
    {
      title: "2. Implement the Backplane",
      content: "Integrate the Redis adapter into your WebSocket library. Ensure every API instance subscribes to the relevant channels upon startup."
    }
  ],
  
  realWorldUseCases: [
    "Cryptocurrency exchanges broadcasting live order book updates to millions of traders.",
    "Collaborative tools (like Figma or Google Docs) synchronizing mouse movements and text edits in real time."
  ],
  
  prerequisites: ["c10k"],
  relatedTopics: [],
  relatedAlgorithms: [],
  relatedProblems: ["high-concurrency-api", "c10k"],
  relatedSkills: ["redis", "nodejs", "aws"],
  relatedServices: ["cloud-architecture", "backend-development"],
  
  seo: {
    title: "Scaling WebSockets: State Management & Pub/Sub Architecture",
    description: "Learn how to scale WebSocket servers horizontally using Redis Pub/Sub backplanes, OS file descriptor tuning, and load balancer configurations.",
    keywords: ["WebSockets", "Scaling", "Pub/Sub", "Redis", "Distributed Systems", "Socket.io"]
  }
};
