import { DeepTopic } from "@/types/knowledge";

export const systemDesignDeep: DeepTopic[] = [
  {
    id: "c10k",
    slug: "c10k",
    title: "The C10K Problem",
    difficulty: "Advanced",
    category: "system-design",
    shortDescription: "The engineering challenge of optimizing network sockets to handle 10,000 concurrent connections.",
    overview: {
      question: "Why did early web servers crash when 10,000 people tried to load a page at the same time?",
      answer: "Because early servers spawned a completely new OS process or thread for every single user. 10,000 threads completely exhausted the CPU's ability to context-switch, destroying performance."
    },
    whyItExists: {
      problem: "Hardware in the late 90s was fast enough to handle 10,000 requests, but the Operating System's blocking I/O architecture was not.",
      solution: "Asynchronous, Event-Driven I/O (like epoll in Linux, or Node.js). A single thread monitors thousands of connections and only wakes up when a connection actually sends data.",
      keyInsight: "Most network connections spend 99% of their time idle waiting for data. Threads should not block while waiting."
    },
    coreConcepts: [
      { title: "Blocking I/O", explanation: "When you read from a socket, the thread halts completely until data arrives. This requires 1 thread per user." },
      { title: "Non-Blocking I/O", explanation: "When you read from a socket, it instantly returns 'no data yet' if empty, allowing the thread to check the next user." },
      { title: "Event Loops (epoll/kqueue)", explanation: "Instead of the server continuously checking 10,000 sockets (which is slow), the OS sends a single notification to the server exactly when a specific socket is ready." }
    ],
    keyTerms: [
      { term: "Context Switching", definition: "The expensive operation where the CPU saves the state of one thread and loads the state of another." }
    ],
    connections: [
      { topicId: "operating-systems", relationship: "C10K is fundamentally a kernel scheduling and I/O problem." }
    ],
    realWorldExamples: [
      { title: "Nginx vs Apache", description: "Apache used the one-thread-per-connection model. Nginx was built specifically to solve the C10K problem using an event-driven architecture, eventually dominating the internet." }
    ],
    keyTakeaways: [
      "We have long surpassed C10K. The modern equivalent is the C10M problem (10 million concurrent connections), which requires bypassing the OS kernel entirely.",
      "Node.js became massively popular precisely because it defaults to the exact non-blocking event-loop architecture required to solve C10K."
    ],
    prerequisites: ["operating-systems", "networking"],
    nextTopics: ["rate-limiting"]
  },
  {
    id: "rate-limiting",
    slug: "rate-limiting",
    title: "Rate Limiting",
    difficulty: "Intermediate",
    category: "system-design",
    shortDescription: "Techniques to control the rate of traffic sent or received on a network.",
    overview: {
      question: "How does Twitter prevent a single script from posting 1,000,000 tweets a second and crashing their database?",
      answer: "They use Rate Limiting algorithms (like Token Buckets) to mathematically restrict how many requests a specific IP or User ID can make within a given time window."
    },
    whyItExists: {
      problem: "APIs cost money to run. Malicious actors (DDoS) or poorly written scripts can overwhelm a server, starving legitimate users.",
      solution: "Track usage in a fast, in-memory cache (like Redis). If a user exceeds their quota, drop the request and return HTTP 429 Too Many Requests.",
      keyInsight: "Rate limiting is the shield that protects backend infrastructure from the chaos of the public internet."
    },
    coreConcepts: [
      { title: "Token Bucket", explanation: "Imagine a bucket that holds 10 tokens. Every second, 1 token is added. Every request costs 1 token. If the bucket is empty, the request is rejected. Allows for short bursts of traffic." },
      { title: "Leaky Bucket", explanation: "Requests enter a bucket and drip out at a strict, constant rate. Smooths out traffic spikes into a steady stream." },
      { title: "Fixed Window", explanation: "Users get 100 requests from 1:00 to 1:01. At 1:01, it resets. Flaw: A user can send 100 requests at 1:00:59 and 100 more at 1:01:00, causing a 200-request spike in 2 seconds." },
      { title: "Sliding Window", explanation: "Uses a queue or Hash Table to accurately track requests over a rolling time period, preventing the Fixed Window spike problem." }
    ],
    keyTerms: [
      { term: "Throttling", definition: "Intentionally slowing down a user's requests instead of outright rejecting them." }
    ],
    connections: [
      { topicId: "hash-tables", relationship: "Often used to store the user quotas in Redis." },
      { topicId: "sliding-window", relationship: "The exact algorithmic pattern used for advanced rate limiters." }
    ],
    realWorldExamples: [
      { title: "Stripe API", description: "Stripe uses advanced distributed rate limiting to ensure that a massive spike in payments on Black Friday doesn't crash their core ledger." }
    ],
    keyTakeaways: [
      "Rate limiting is mandatory for any public-facing API.",
      "The choice of algorithm depends heavily on whether you need to allow 'bursts' (Token Bucket) or enforce a strict, steady flow (Leaky Bucket)."
    ],
    prerequisites: ["networking"],
    nextTopics: []
  }
];
