import { HubData } from "@/types/knowledge";
import { systemDesignDeep } from "./system-design-deep";
import { algorithmicChallengesDeep } from "./algorithmic-challenges-deep";
import { debuggingDeep } from "./debugging-deep";

export const problemsHubData: HubData = {
  title: "Problems & Solutions",
  description: "The application of theoretical computer science to devastating real-world engineering failures.",
  
  learningContext: {
    intro: "Algorithms in a textbook are clean. Engineering in the real world is messy. This hub bridges the gap between the beautiful theories of Computer Science and the terrifying realities of production systems under extreme load.",
    pillars: [
      { id: "scale", title: "System Design", description: "C10K, Rate Limiting, Load Balancing, and Distributed Locking." },
      { id: "algo", title: "Algorithmic Challenges", description: "NP-Hard problems, TSP, and Graph Coloring." },
      { id: "debug", title: "Debugging", description: "Memory Leaks, Deadlocks, and Race Conditions." }
    ]
  },

  knowledgeMap: "Dynamic component will process the categories and connections directly.",

  topicCategories: [
    {
      id: "system-design",
      title: "System Design at Scale",
      description: "How to prevent your servers from melting.",
      topics: systemDesignDeep
    },
    {
      id: "algorithmic-challenges",
      title: "Algorithmic Nightmares",
      description: "Problems that fundamentally cannot be solved perfectly.",
      topics: algorithmicChallengesDeep
    },
    {
      id: "debugging",
      title: "Debugging & Forensics",
      description: "Hunting ghosts in the machine.",
      topics: debuggingDeep
    }
  ],

  conceptConnections: [
    {
      title: "THE SCALING PIPELINE",
      chain: ["Single Server", "Database Bottleneck", "Read Replicas", "Cache (Redis)", "Sharding"]
    }
  ],

  systemMoments: [
    {
      title: "The Knight Capital Glitch",
      whatHappened: "In 2012, a high-frequency trading firm deployed a flawed algorithm that accidentally bought and sold massive amounts of shares at a loss. It lost $440 million in exactly 45 minutes.",
      principle: "Algorithmic Trading Risk",
      lesson: "When code controls money at the speed of light, a simple logic error can bankrupt a multinational corporation before a human even realizes what is happening.",
      usageToday: "Led to massive regulatory overhauls regarding automated kill-switches in trading systems."
    }
  ],

  whyItMatters: [
    {
      concept: "Rate Limiting",
      practicalExamples: [
        "Preventing credential stuffing attacks on login pages.",
        "Ensuring free-tier API users don't consume enterprise-tier resources."
      ]
    },
    {
      concept: "Memory Leaks",
      practicalExamples: [
        "Keeping a video game running at 60FPS for hours without crashing back to the desktop."
      ]
    }
  ],

  misconceptions: [
    {
      myth: "More servers will fix a slow database.",
      reality: "Adding more web servers just lets you send queries to the slow database faster, ultimately crashing it even quicker. You must optimize the database (indexes, caching) first."
    },
    {
      myth: "Microservices solve all scaling problems.",
      reality: "Microservices solve organizational scaling problems (teams stepping on each other's toes). They actively introduce massive latency, tracing, and distributed state problems."
    }
  ],

  learningPath: [
    {
      phase: "PHASE 01",
      title: "The Single Node",
      description: "Understand CPU, Memory, and I/O bottlenecks.",
      topics: ["C10K", "Memory Leaks"]
    },
    {
      phase: "PHASE 02",
      title: "The Network",
      description: "Handling traffic spikes and malicious users.",
      topics: ["Rate Limiting"]
    },
    {
      phase: "PHASE 03",
      title: "The Impossible",
      description: "When perfection is mathematically impossible.",
      topics: ["Traveling Salesman"]
    }
  ]
};
