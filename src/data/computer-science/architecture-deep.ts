import { DeepTopic } from "@/types/knowledge";

export const architectureDeep: DeepTopic[] = [
  {
    id: "cpu-architecture",
    slug: "cpu-architecture",
    title: "CPU Architecture",
    difficulty: "Beginner",
    category: "computer-architecture",
    shortDescription: "The physical design and components of the central processing unit.",
    overview: {
      question: "What actually executes my code?",
      answer: "The CPU is a highly orchestrated collection of microscopic logic gates that decode binary instructions and perform arithmetic or memory operations at billions of cycles per second."
    },
    whyItExists: {
      problem: "We need a programmable, general-purpose machine capable of executing arbitrary mathematical and logical instructions.",
      solution: "The Von Neumann architecture: combining an Arithmetic Logic Unit (ALU), a Control Unit, and Registers into a single processing chip.",
      keyInsight: "Both data and instructions can be stored in the same memory and processed sequentially."
    },
    coreConcepts: [
      { title: "ALU (Arithmetic Logic Unit)", explanation: "The part of the CPU that actually performs the math (addition, subtraction) and logic (AND, OR)." },
      { title: "Control Unit", explanation: "The director. It reads the instructions from memory and coordinates the other components to execute them." },
      { title: "Registers", explanation: "The smallest, fastest memory locations located directly inside the CPU core. The CPU can only perform operations on data currently loaded into registers." }
    ],
    keyTerms: [
      { term: "Clock Speed", definition: "The frequency (measured in GHz) at which the CPU's internal clock ticks, determining how many cycles occur per second." },
      { term: "ISA (Instruction Set Architecture)", definition: "The agreed-upon vocabulary of instructions (like x86 or ARM) that the CPU understands." }
    ],
    connections: [
      { topicId: "instruction-cycle", relationship: "Executes instructions through the cycle" },
      { topicId: "logic-and-boolean-algebra", relationship: "Built entirely out of boolean logic gates" }
    ],
    engineeringMoment: {
      title: "The Shift to RISC",
      story: "Historically, CPUs were designed with complex instructions (CISC) to minimize memory usage, which was expensive. As memory became cheaper and compilers got smarter, architectures shifted toward Reduced Instruction Set Computing (RISC), using simpler instructions that could be executed much faster through pipelining (e.g., modern ARM chips).",
      lesson: "Hardware design is heavily influenced by the economic trade-offs of the era."
    },
    realWorldExamples: [
      { title: "Apple Silicon (M1/M2/M3)", description: "These chips utilize ARM architecture, which allows for highly efficient power usage compared to traditional x86 Intel chips." }
    ],
    keyTakeaways: [
      "CPUs don't understand Python or Java; they only understand their specific ISA.",
      "The CPU can only compute data if it is moved into a register first."
    ],
    prerequisites: ["logic-and-boolean-algebra", "abstraction"],
    nextTopics: ["instruction-cycle"]
  },
  {
    id: "instruction-cycle",
    slug: "instruction-cycle",
    title: "The Instruction Cycle",
    difficulty: "Intermediate",
    category: "computer-architecture",
    shortDescription: "The fundamental Fetch-Decode-Execute loop that powers all computation.",
    overview: {
      question: "How does a CPU actually run a program?",
      answer: "By continuously repeating a simple cycle: fetching the next instruction from memory, decoding what it means, and executing it."
    },
    whyItExists: {
      problem: "Programs are complex logic structures, but hardware can only perform one simple operation at a time.",
      solution: "Breaking down complex programs into a linear sequence of fundamental instructions, executed in a strict loop.",
      keyInsight: "Any complex software behavior can be reduced to a sequence of simple atomic steps."
    },
    coreConcepts: [
      { title: "Fetch", explanation: "The CPU reads the Program Counter register to find the memory address of the next instruction, then brings that instruction from RAM into the CPU." },
      { title: "Decode", explanation: "The Control Unit translates the binary instruction into electrical signals that activate the correct circuits in the ALU or memory controllers." },
      { title: "Execute", explanation: "The actual calculation or memory move is performed, and the result is written back to a register or memory." }
    ],
    keyTerms: [
      { term: "Program Counter (PC)", definition: "A special register that holds the memory address of the next instruction to be executed." },
      { term: "Pipelining", definition: "An optimization where the CPU fetches the next instruction while decoding the current one, similar to an assembly line." }
    ],
    connections: [
      { topicId: "cpu-architecture", relationship: "The cycle runs on the CPU architecture" },
      { topicId: "memory-hierarchy", relationship: "Fetch stage relies heavily on memory speed" }
    ],
    realWorldExamples: [
      { title: "Branch Prediction", description: "Modern CPUs try to guess which way an 'if' statement will go so they can keep the instruction pipeline full. If they guess wrong, they have to throw away the work." }
    ],
    misconceptions: [
      { myth: "A 3GHz CPU runs exactly 3 billion instructions per second.", reality: "A single instruction may take multiple clock cycles to complete. However, due to pipelining, modern CPUs can sometimes complete multiple instructions per cycle." }
    ],
    keyTakeaways: [
      "If the CPU is waiting on RAM during the Fetch stage, it is stalled and wasting time.",
      "Pipelining is crucial for modern CPU performance."
    ],
    prerequisites: ["cpu-architecture"],
    nextTopics: ["memory-hierarchy"]
  },
  {
    id: "memory-hierarchy",
    slug: "memory-hierarchy",
    title: "Memory Hierarchy",
    difficulty: "Beginner",
    category: "computer-architecture",
    shortDescription: "The structural trade-off between speed, capacity, and cost in computer memory.",
    overview: {
      question: "Why do computers have different types of memory (RAM, SSD, Cache)?",
      answer: "Because fast memory is extremely expensive and small, while cheap memory is extremely slow. We layer them to get the illusion of memory that is both fast and vast."
    },
    whyItExists: {
      problem: "CPUs became much faster than main memory (RAM). If a CPU has to wait 100 clock cycles for data to arrive from RAM, 99% of its potential performance is wasted.",
      solution: "A pyramid structure: Registers at the top, followed by small fast caches (L1, L2, L3), then RAM, then persistent storage (SSD/HDD).",
      keyInsight: "Programs tend to access the same data multiple times (locality). We keep frequently used data near the top."
    },
    coreConcepts: [
      { title: "Registers", explanation: "Inside the CPU. Fastest possible access (1 cycle). Tiny capacity (bytes)." },
      { title: "RAM (Main Memory)", explanation: "Large capacity (Gigabytes). Slower access (~100 cycles). Volatile (loses data on power off)." },
      { title: "Secondary Storage", explanation: "Massive capacity (Terabytes). Very slow access (Millions of cycles). Non-volatile." }
    ],
    keyTerms: [
      { term: "Latency", definition: "The delay before a transfer of data begins following an instruction." },
      { term: "Volatile Memory", definition: "Memory that requires power to maintain the stored information." }
    ],
    connections: [
      { topicId: "cpu-cache", relationship: "Caches sit between Registers and RAM" },
      { topicId: "virtual-memory", relationship: "Virtual memory maps RAM to Storage" }
    ],
    engineeringMoment: {
      title: "The Memory Wall",
      story: "Between 1986 and 2000, CPU speeds increased by 55% per year, while memory speeds only improved by 10% per year. The CPU was 'hitting the memory wall', starving for data.",
      lesson: "System performance is often determined by the slowest bottleneck, not the fastest component."
    },
    realWorldExamples: [
      { title: "Database Architecture", description: "Databases use memory hierarchy conceptually: Redis (in-memory) acts as an L1 cache, while PostgreSQL (on disk) acts as main storage." }
    ],
    keyTakeaways: [
      "The closer memory is to the CPU, the faster and more expensive it is.",
      "Most software optimization fundamentally revolves around moving data higher up the pyramid."
    ],
    prerequisites: ["instruction-cycle"],
    nextTopics: ["cpu-cache"]
  },
  {
    id: "cpu-cache",
    slug: "cpu-cache",
    title: "CPU Cache",
    difficulty: "Intermediate",
    category: "computer-architecture",
    shortDescription: "Ultra-fast memory built directly onto the CPU to hide RAM latency.",
    overview: {
      question: "How does the CPU avoid waiting for slow RAM?",
      answer: "It uses hardware caches (L1, L2, L3) to keep copies of recently used data as close to the computation engine as possible."
    },
    whyItExists: {
      problem: "Fetching data from RAM takes ~100 clock cycles. The CPU would sit idle most of the time.",
      solution: "A small piece of Static RAM (SRAM) is placed on the processor die. When data is requested, entire blocks (cache lines) are pulled in at once.",
      keyInsight: "If you access memory address X, you are statistically very likely to access address X+1 next (Spatial Locality)."
    },
    coreConcepts: [
      { title: "Spatial Locality", explanation: "Data stored closely together in memory is often accessed together (e.g., iterating over an Array)." },
      { title: "Temporal Locality", explanation: "Data accessed recently will likely be accessed again soon (e.g., a loop counter)." },
      { title: "Cache Miss", explanation: "When the CPU looks for data in the cache and doesn't find it, forcing a slow fetch from main memory." }
    ],
    keyTerms: [
      { term: "Cache Line", definition: "The unit of data transfer between RAM and Cache (usually 64 bytes). The CPU never pulls just one byte." }
    ],
    connections: [
      { topicId: "memory-hierarchy", relationship: "Sits at the top of the hierarchy" },
      { topicId: "arrays-vs-linked-lists", relationship: "Arrays benefit massively from Spatial Locality" }
    ],
    realWorldExamples: [
      { title: "Data-Oriented Design", description: "Modern game engines structure data sequentially in memory specifically to avoid cache misses, leading to massive performance gains over traditional Object-Oriented layouts." }
    ],
    misconceptions: [
      { myth: "More cache always makes a CPU faster.", reality: "Searching a larger cache takes more time. L1 cache is kept intentionally tiny so it can be searched in 1 clock cycle." }
    ],
    keyTakeaways: [
      "An array is faster to iterate than a linked list because arrays load perfectly into CPU cache lines.",
      "Cache misses are one of the primary performance killers in modern compiled software."
    ],
    prerequisites: ["memory-hierarchy"],
    nextTopics: ["virtual-memory"]
  },
  {
    id: "virtual-memory",
    slug: "virtual-memory",
    title: "Virtual Memory",
    difficulty: "Intermediate",
    category: "computer-architecture",
    shortDescription: "How the OS tricks programs into thinking they have infinite, private RAM.",
    overview: {
      question: "What happens if a program uses more RAM than the computer physically has?",
      answer: "The operating system uses Virtual Memory to temporarily swap inactive data from RAM to the much larger (but slower) hard drive."
    },
    whyItExists: {
      problem: "Historically, programs accessed physical RAM directly. If one program crashed, it could corrupt another program's memory. Also, multiple programs couldn't safely share limited RAM.",
      solution: "The OS gives every program its own isolated, fake 'Virtual' memory address space. The CPU's Memory Management Unit (MMU) translates these fake addresses into real physical ones on the fly.",
      keyInsight: "Indirection. Adding a mapping layer solves memory safety and capacity limits."
    },
    coreConcepts: [
      { title: "Paging", explanation: "Memory is divided into fixed-size chunks called 'pages' (usually 4KB). The OS tracks which physical frame each virtual page maps to." },
      { title: "Swapping / Page Fault", explanation: "When a program asks for a page that isn't in RAM, a 'Page Fault' occurs. The OS halts the program, loads the data from the SSD into RAM, and resumes." },
      { title: "Isolation", explanation: "Program A cannot read Program B's memory because Program A's virtual addresses literally cannot be mapped to B's physical memory." }
    ],
    keyTerms: [
      { term: "MMU (Memory Management Unit)", definition: "Hardware inside the CPU that translates virtual addresses to physical addresses." },
      { term: "Thrashing", definition: "When the system is so low on RAM that it spends all its time constantly swapping pages to disk instead of computing." }
    ],
    connections: [
      { topicId: "processes-vs-threads", relationship: "Each process gets its own virtual memory space" }
    ],
    realWorldExamples: [
      { title: "Running 100 Chrome Tabs", description: "You don't have enough RAM for 100 tabs, but Virtual Memory swaps the inactive tabs to your SSD, keeping the active tab in RAM." }
    ],
    keyTakeaways: [
      "When your program requests memory, it is asking for a virtual address, not a physical wire on the RAM stick.",
      "Virtual Memory is what prevents a bug in your code from crashing the entire operating system."
    ],
    prerequisites: ["memory-hierarchy"],
    nextTopics: ["parallelism-and-concurrency"]
  },
  {
    id: "parallelism-and-concurrency",
    slug: "parallelism-and-concurrency",
    title: "Parallelism & Concurrency",
    difficulty: "Intermediate",
    category: "computer-architecture",
    shortDescription: "The difference between doing things at the same time vs managing multiple things at once.",
    overview: {
      question: "How does a computer do multiple things at once?",
      answer: "Concurrency is managing multiple tasks by quickly switching between them. Parallelism is actually executing multiple tasks simultaneously on different CPU cores."
    },
    whyItExists: {
      problem: "CPU clock speeds stopped getting faster around 2005 due to heat and physics limitations (Dennard Scaling ended).",
      solution: "Instead of making one fast core, manufacturers put multiple cores on a single chip, forcing software to be written to run in parallel.",
      keyInsight: "You can write concurrent software that runs on a single core (via task switching), but parallelism requires multi-core hardware."
    },
    coreConcepts: [
      { title: "Concurrency", explanation: "About structure. Dealing with a lot of things at once. (e.g., a waiter taking orders from multiple tables)." },
      { title: "Parallelism", explanation: "About execution. Doing a lot of things at once. (e.g., multiple waiters bringing out food at the same time)." },
      { title: "Amdahl's Law", explanation: "A formula showing that the maximum speedup of a parallel program is limited by the portion of the program that must be executed sequentially." }
    ],
    keyTerms: [
      { term: "Multicore", definition: "A single physical CPU chip that contains multiple independent processing units (cores)." },
      { term: "Race Condition", definition: "A bug that occurs when the timing of parallel execution causes unintended behavior." }
    ],
    connections: [
      { topicId: "processes-vs-threads", relationship: "Threads are the software mechanism for achieving parallelism" },
      { topicId: "synchronization", relationship: "Required to safely manage parallel data access" }
    ],
    engineeringMoment: {
      title: "The Free Lunch is Over",
      story: "In 2005, Herb Sutter published a famous article stating that developers could no longer rely on faster CPUs to make sloppy code run faster. Software engineering fundamentally shifted toward multi-threading.",
      lesson: "Hardware limitations dictate software architecture paradigms."
    },
    realWorldExamples: [
      { title: "Node.js vs Go", description: "Node.js is highly concurrent (event loop on a single thread). Go is heavily parallel (goroutines spread across multiple CPU cores)." }
    ],
    misconceptions: [
      { myth: "Throwing more threads at a problem always speeds it up.", reality: "Due to Amdahl's law and context-switching overhead, adding threads often slows down computation if the task isn't highly parallelizable." }
    ],
    keyTakeaways: [
      "Concurrency is a software design choice. Parallelism is a hardware capability.",
      "Parallelism introduces massive complexity regarding shared state."
    ],
    prerequisites: ["cpu-architecture"],
    nextTopics: ["processes-vs-threads"]
  }
];
