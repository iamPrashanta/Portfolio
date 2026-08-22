import { HubData } from "@/types/knowledge";
import { foundationsDeep } from "./foundations-deep";
import { architectureDeep } from "./architecture-deep";
import { osDeep } from "./os-deep";
import { networkingDeep } from "./networking-deep";
import { softwareSystemsDeep } from "./software-systems-deep";

export const computerScienceHubData: HubData = {
  title: "Computer Science",
  description: "The study of computation, information, and the systems we build to process them at scale.",
  
  learningContext: {
    intro: "Computer Science is not just programming. It is the study of how to map human logic onto physical hardware, and how to scale that hardware to solve globally complex problems.",
    pillars: [
      { id: "computation", title: "Computation", description: "What problems can theoretically be solved by a machine?" },
      { id: "algorithms", title: "Algorithms", description: "How efficiently can those problems be solved in practice?" },
      { id: "data", title: "Data", description: "How should information be represented and organized for fast retrieval?" },
      { id: "memory", title: "Memory", description: "Where does data live and how quickly can the CPU access it?" },
      { id: "hardware", title: "Hardware", description: "How do physical logic gates execute mathematical instructions?" },
      { id: "os", title: "Operating Systems", description: "How are limited hardware resources managed and shared safely?" },
      { id: "networks", title: "Networks", description: "How do independent, distant machines communicate reliably?" },
      { id: "systems", title: "Systems", description: "How do we build robust, fault-tolerant software at massive scale?" }
    ]
  },

  knowledgeMap: "Dynamic component will process the categories and connections directly.",

  topicCategories: [
    {
      id: "foundations",
      title: "Foundations",
      description: "The mathematical and logical bedrock of computation.",
      topics: foundationsDeep
    },
    {
      id: "architecture",
      title: "Computer Architecture",
      description: "How physical silicon executes abstract code.",
      topics: architectureDeep
    },
    {
      id: "os",
      title: "Operating Systems",
      description: "The software that manages the hardware.",
      topics: osDeep
    },
    {
      id: "networking",
      title: "Networking",
      description: "How computers talk to the world.",
      topics: networkingDeep
    },
    {
      id: "software-systems",
      title: "Software Systems",
      description: "Building scalable, reliable applications.",
      topics: softwareSystemsDeep
    }
  ],

  conceptConnections: [
    {
      title: "FROM CODE TO CPU",
      chain: ["Source Code", "Compiler", "Machine Instructions", "CPU Instruction Cycle", "Registers", "Cache", "RAM"]
    },
    {
      title: "FROM CLICK TO SERVER",
      chain: ["Browser", "DNS Lookup", "TCP/TLS", "HTTP Request", "Load Balancer", "Application Server", "Database", "Response"]
    },
    {
      title: "FROM ARRAY TO DATABASE",
      chain: ["Array", "Hash Table", "Tree", "Database Index", "Query Optimization"]
    }
  ],

  systemMoments: [
    {
      title: "The Ariane 5 Failure",
      whatHappened: "In 1996, a European rocket exploded 40 seconds after launch. The navigation software, reused from the slower Ariane 4, attempted to convert a 64-bit floating-point number into a 16-bit integer. The number was too large, causing an overflow crash.",
      principle: "Integer Overflow and Type Conversion",
      lesson: "Software assumptions cannot be blindly reused in new physical contexts without strict boundary testing.",
      usageToday: "Modern aerospace systems require mathematically proven bounds-checking for all sensor telemetry."
    },
    {
      title: "The Therac-25 Tragedies",
      whatHappened: "In the 1980s, a software-controlled radiation machine delivered massive overdoses to patients. The software contained a race condition. If an operator typed commands faster than the physical machine could adjust its shields, the software became misaligned with the hardware state.",
      principle: "Race Conditions and Hardware Interlocks",
      lesson: "Software bugs in concurrent systems can be lethal. Critical safety systems must always have physical hardware overrides.",
      usageToday: "Strict synchronization protocols and formal verification in medical and automotive (self-driving) software."
    },
    {
      title: "The Pentium FDIV Bug",
      whatHappened: "In 1994, Intel's new Pentium processor had a flaw in its floating-point unit (FPU) that caused rare, but reproducible, calculation errors in long division. It cost Intel $475 million to recall the chips.",
      principle: "Floating-Point Math Implementation",
      lesson: "Hardware algorithms are essentially software burned into silicon. Bugs at the lowest level of abstraction compromise the entire computing stack.",
      usageToday: "Extreme formal verification of microprocessor designs before they enter silicon fabrication."
    }
  ],

  whyItMatters: [
    {
      concept: "Big O Notation",
      practicalExamples: [
        "Determining if a database query will succeed or time out when scanning 10 million rows.",
        "Choosing between an Array or a Hash Map for autocomplete suggestions."
      ]
    },
    {
      concept: "Caching",
      practicalExamples: [
        "Cloudflare serving static images from a server in your city instead of routing to the origin server in another country.",
        "Your web browser storing the CSS of this website so it doesn't have to download it on every page load."
      ]
    },
    {
      concept: "TCP",
      practicalExamples: [
        "Downloading a PDF securely over HTTPS without a single byte going missing or arriving out of order.",
        "Connecting to a PostgreSQL database."
      ]
    },
    {
      concept: "Virtual Memory",
      practicalExamples: [
        "Running Docker containers with strict memory limits without affecting the host OS.",
        "Keeping 50 Chrome tabs open without the computer crashing immediately."
      ]
    }
  ],

  misconceptions: [
    {
      myth: "Big O tells you exactly how fast a program runs.",
      reality: "It describes growth behavior, not exact execution time. A small O(N²) algorithm might be faster than a complex O(N) algorithm for very small inputs."
    },
    {
      myth: "Threads always make programs faster.",
      reality: "Due to synchronization costs, context-switching overhead, and Amdahl's Law, adding threads to a non-parallelizable task often slows it down significantly."
    },
    {
      myth: "TCP is always better than UDP.",
      reality: "The correct protocol depends on requirements. For real-time multiplayer games or Zoom calls, TCP's 'reliability' causes massive latency spikes."
    },
    {
      myth: "RAM and storage are basically the same thing.",
      reality: "They have fundamentally different roles and performance characteristics. RAM is volatile and fast; storage is persistent and orders of magnitude slower."
    }
  ],

  learningPath: [
    {
      phase: "PHASE 01",
      title: "How Computers Think",
      description: "Understand the fundamental rules of information encoding and logic.",
      topics: ["Binary", "Logic", "Programming Fundamentals", "Abstraction"]
    },
    {
      phase: "PHASE 02",
      title: "How Programs Scale",
      description: "Learn to organize data and write efficient procedures.",
      topics: ["Algorithms", "Big O", "Data Structures", "Recursion"]
    },
    {
      phase: "PHASE 03",
      title: "How Computers Execute Code",
      description: "Peel back the software abstraction and look at the silicon.",
      topics: ["CPU Architecture", "Instruction Cycle", "Memory Hierarchy", "Virtual Memory"]
    },
    {
      phase: "PHASE 04",
      title: "How Systems Run Programs",
      description: "Understand how the OS safely manages chaos.",
      topics: ["Processes", "Threads", "Scheduling", "Synchronization"]
    },
    {
      phase: "PHASE 05",
      title: "How Computers Communicate",
      description: "Learn how packets travel the globe reliably.",
      topics: ["Networking", "TCP/IP", "DNS", "HTTP"]
    },
    {
      phase: "PHASE 06",
      title: "How Modern Software is Built",
      description: "Combine everything to build massive, reliable internet services.",
      topics: ["Databases", "APIs", "Caching", "Distributed Systems"]
    }
  ]
};
