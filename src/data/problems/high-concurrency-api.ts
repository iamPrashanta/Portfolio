import { EngineeringProblem } from "@/types/problem";

export const highConcurrencyApi: EngineeringProblem = {
  slug: "high-concurrency-api",
  title: "High-Concurrency API Design",
  shortDescription: "Architecting a RESTful API capable of handling tens of thousands of requests per second without latency spikes.",
  category: "architecture",
  severity: "high",
  
  problemStatement: "As an application scales, a simple REST API backed by a relational database will eventually hit a throughput ceiling. Requests begin queuing, memory usage spikes, the database maxes out its connection pool, and users experience unacceptable latency or 503 Service Unavailable errors. Designing for high concurrency requires abandoning synchronous, thread-per-request models in favor of event-driven or highly optimized architectures.",
  
  symptoms: [
    "Database connection pool exhaustion ('Too many connections').",
    "API response times spiking during traffic surges (from <50ms to >2000ms).",
    "High CPU Context Switching overhead on the API servers.",
    "Occasional 502/503 Gateway Timeouts from the load balancer."
  ],
  
  whyItHappens: [
    {
      title: "Thread-Per-Request Exhaustion",
      content: "Traditional frameworks (like older Java Spring, Ruby on Rails, or Python WSGI) allocate an entire OS thread for each incoming request. When a request is waiting on the database (I/O bound), the thread is blocked. With 10,000 concurrent requests, spinning up 10,000 threads causes massive memory consumption and OS context-switching overhead."
    },
    {
      title: "The Database Bottleneck",
      content: "Scaling the API layer horizontally is easy (add more servers), but the database is usually a single point of contention. If 20 API servers each allow 100 connections, the database suddenly receives 2,000 concurrent connections. Most relational databases degrade in performance long before hitting 2,000 active connections due to lock contention and memory limits."
    }
  ],
  
  rootCauses: [
    {
      title: "Synchronous Blocking I/O",
      description: "API threads blocking while waiting for external services or database queries."
    },
    {
      title: "Lack of Caching",
      description: "Serving identical read-heavy data directly from the disk-backed database instead of memory."
    }
  ],
  
  architectureOptions: [
    {
      title: "Option A: Event-Driven Non-Blocking I/O",
      description: "Using runtimes like Node.js, Go, or Python's FastAPI (asyncio) which use an Event Loop or Goroutines. A single thread can handle thousands of connections because it does not block while waiting for I/O.",
      pros: ["Massively reduced memory footprint", "Eliminates OS context-switching overhead", "Perfect for I/O bound APIs"],
      cons: ["CPU-intensive tasks will block the entire event loop (in Node/Python)", "Callback/Promise complexity"]
    },
    {
      title: "Option B: Distributed Caching Layer",
      description: "Introduce a Redis or Memcached cluster between the API and the Database. Cache all read-heavy, infrequently changing endpoints.",
      pros: ["Dramatically reduces database load", "In-memory retrieval is sub-millisecond", "Allows database to focus on writes"],
      cons: ["Cache invalidation complexity", "Stale data risks"]
    }
  ],
  
  recommendedSolution: [
    {
      title: "The Hybrid Approach",
      content: "For a true high-concurrency API, migrate to a non-blocking runtime (Node.js/Go) to handle the connection scale at the compute layer. Simultaneously, implement Redis for read-heavy routes to protect the database. Finally, use a tool like PgBouncer to manage database connection pooling effectively."
    }
  ],
  
  implementationSteps: [
    {
      title: "1. Audit and Refactor I/O",
      content: "Ensure all database queries and external HTTP calls use asynchronous drivers. No synchronous sleep or blocking calls should remain in the request lifecycle."
    },
    {
      title: "2. Implement Connection Pooling",
      content: "Deploy PgBouncer (for Postgres) in front of the database. This allows the API to open thousands of connections to PgBouncer, while PgBouncer multiplexes them onto a small, efficient pool of actual database connections."
    }
  ],
  
  realWorldUseCases: [
    "Flash sale e-commerce platforms handling millions of users logging in at exactly 12:00 PM.",
    "Real-time bidding (AdTech) APIs requiring <10ms response times for 100k+ requests per second."
  ],
  
  prerequisites: ["cpu-architecture", "memory-management"],
  relatedTopics: ["hash-tables"], // Because of Redis
  relatedAlgorithms: [],
  relatedProblems: ["c10k", "slow-postgresql-queries"],
  relatedSkills: ["nodejs", "go", "redis", "postgresql"],
  relatedServices: ["backend-development", "cloud-architecture"],
  
  seo: {
    title: "High-Concurrency API Design and Architecture",
    description: "Learn how to architect high-concurrency REST APIs using event-driven I/O, Redis caching, and connection pooling to handle millions of requests.",
    keywords: ["High Concurrency", "API Design", "Event Loop", "Redis", "Connection Pooling", "System Architecture"]
  }
};
