import { DeepTopic } from "@/types/knowledge";

export const osDeep: DeepTopic[] = [
  {
    id: "processes-vs-threads",
    slug: "processes-vs-threads",
    title: "Processes vs Threads",
    difficulty: "Beginner",
    category: "operating-systems",
    shortDescription: "The fundamental units of execution managed by the operating system.",
    overview: {
      question: "How does my computer run Discord, Chrome, and Spotify all at the same time?",
      answer: "The OS wraps each application in an isolated container called a Process. Inside that process, smaller workers called Threads execute the actual code."
    },
    whyItExists: {
      problem: "Software needs to multitask, but if one program crashes, it shouldn't take down the entire system or overwrite another program's memory.",
      solution: "Processes provide hardware-enforced memory isolation. Threads provide lightweight concurrency within that isolated memory.",
      keyInsight: "Processes are about isolation. Threads are about execution."
    },
    coreConcepts: [
      { title: "Process", explanation: "A program in execution. It has its own dedicated memory space, file handles, and security context. Heavy to create, heavy to switch between." },
      { title: "Thread", explanation: "A single sequence of instructions living inside a process. All threads in a process share the same memory, making them lightweight and fast to communicate, but dangerous if uncoordinated." },
      { title: "Multithreading", explanation: "Using multiple threads within a single process to perform tasks concurrently (e.g., one thread handles the UI, another fetches data)." }
    ],
    keyTerms: [
      { term: "IPC (Inter-Process Communication)", definition: "Since processes don't share memory, they must use complex OS mechanisms like sockets or pipes to talk to each other." },
      { term: "Thread-Safe", definition: "Code that can be executed by multiple threads simultaneously without causing bugs or data corruption." }
    ],
    connections: [
      { topicId: "virtual-memory", relationship: "Every process gets its own virtual memory space" },
      { topicId: "context-switching", relationship: "The OS must switch the CPU between active threads" }
    ],
    realWorldExamples: [
      { title: "Chrome Browser Architecture", description: "Chrome runs every tab as a separate Process. If one tab crashes, the others survive. However, this uses vastly more memory than sharing threads." }
    ],
    misconceptions: [
      { myth: "Threads are always better than processes because they are lighter.", reality: "Because threads share memory, they introduce severe security risks and synchronization bugs. Modern architectures often prefer isolated processes (like Microservices or Node cluster workers) for stability." }
    ],
    keyTakeaways: [
      "If isolation and crash-resilience are needed, use Processes.",
      "If shared state and high performance concurrency are needed, use Threads."
    ],
    prerequisites: ["virtual-memory"],
    nextTopics: ["cpu-scheduling", "synchronization-and-race-conditions"]
  },
  {
    id: "cpu-scheduling",
    slug: "cpu-scheduling",
    title: "CPU Scheduling",
    difficulty: "Intermediate",
    category: "operating-systems",
    shortDescription: "How the OS decides which thread gets to use the CPU at any given microsecond.",
    overview: {
      question: "If I only have 4 CPU cores but 1,000 running threads, who gets to run?",
      answer: "The OS Scheduler rapidly rotates the CPU cores among the ready threads, creating the illusion that everything is running simultaneously."
    },
    whyItExists: {
      problem: "Threads frequently block (e.g., waiting for network or disk). If a CPU core waits for the disk, it wastes billions of potential computations.",
      solution: "A piece of the OS kernel that preemptively pauses threads, saves their state, and gives the CPU to another thread that is ready to compute.",
      keyInsight: "Don't let the CPU sit idle while a thread waits for I/O."
    },
    coreConcepts: [
      { title: "Preemptive Scheduling", explanation: "The OS forcefully pauses a thread after a specific time slice (quantum) to ensure fairness, rather than trusting the thread to yield voluntarily." },
      { title: "Ready Queue", explanation: "The data structure holding all threads that are currently waiting for their turn on the CPU." },
      { title: "I/O Bound vs CPU Bound", explanation: "I/O bound threads wait a lot (e.g., web servers). CPU bound threads calculate a lot (e.g., video encoding). Schedulers prioritize I/O bound threads to keep responsiveness high." }
    ],
    keyTerms: [
      { term: "Scheduler", definition: "The OS kernel component responsible for deciding which thread runs next." },
      { term: "Starvation", definition: "When a low-priority thread is constantly bypassed by higher-priority threads and never gets to run." }
    ],
    connections: [
      { topicId: "context-switching", relationship: "The physical mechanism used by the scheduler to swap threads" }
    ],
    realWorldExamples: [
      { title: "Mouse Movement", description: "When you move your mouse, a hardware interrupt fires, and the scheduler immediately preempts whatever is running to update the cursor on screen, ensuring it feels perfectly responsive." }
    ],
    keyTakeaways: [
      "Your code doesn't run continuously. It runs in tiny bursts, paused and resumed invisibly by the OS.",
      "A great scheduler balances fairness with responsiveness."
    ],
    prerequisites: ["processes-vs-threads"],
    nextTopics: ["context-switching"]
  },
  {
    id: "context-switching",
    slug: "context-switching",
    title: "Context Switching",
    difficulty: "Intermediate",
    category: "operating-systems",
    shortDescription: "The heavy mechanical cost of pausing one thread to run another.",
    overview: {
      question: "What actually happens when the OS pauses my program?",
      answer: "The OS must save the exact state of the CPU (all registers, program counter), flush certain caches, and load the saved state of the next thread before execution can resume."
    },
    whyItExists: {
      problem: "To achieve multitasking, the CPU must jump between different instruction streams without losing track of where it was.",
      solution: "Saving the CPU state into a data structure (PCB/TCB) in RAM, and restoring it later.",
      keyInsight: "Multitasking is not free; the act of switching consumes CPU cycles that could have been used for your application."
    },
    coreConcepts: [
      { title: "Process Control Block (PCB)", explanation: "The data structure the OS uses to store the state of a suspended process." },
      { title: "Overhead", explanation: "A context switch takes thousands of clock cycles. Doing it too often cripples performance." },
      { title: "Thread vs Process Switch", explanation: "Switching between threads in the same process is faster because they share the same virtual memory map (no need to flush the TLB cache). Switching processes is much heavier." }
    ],
    keyTerms: [
      { term: "TLB (Translation Lookaside Buffer)", definition: "A hardware cache in the CPU for virtual-to-physical memory mappings. A process switch usually flushes this, causing massive performance drops." }
    ],
    connections: [
      { topicId: "cpu-scheduling", relationship: "Triggered by the scheduler" },
      { topicId: "virtual-memory", relationship: "Requires updating virtual memory mappings" }
    ],
    realWorldExamples: [
      { title: "The C10K Problem", description: "Early web servers crashed at 10,000 connections because they spawned a new thread for each user. The CPU spent all its time just context-switching between 10,000 threads, doing zero actual work." }
    ],
    misconceptions: [
      { myth: "Multitasking is instant.", reality: "It is an illusion created by speed, but at the hardware level, context switching is one of the most expensive operations an OS performs." }
    ],
    keyTakeaways: [
      "Too many threads = Too many context switches = Terrible performance.",
      "This is why asynchronous, event-driven programming (like Node.js) became so popular: it handles thousands of users on one thread, avoiding OS context switches entirely."
    ],
    prerequisites: ["cpu-scheduling"],
    nextTopics: ["synchronization-and-race-conditions"]
  },
  {
    id: "synchronization-and-race-conditions",
    slug: "synchronization-and-race-conditions",
    title: "Synchronization & Race Conditions",
    difficulty: "Advanced",
    category: "operating-systems",
    shortDescription: "The chaos of shared memory and how to prevent threads from destroying data.",
    overview: {
      question: "Why is multithreaded programming considered so hard?",
      answer: "Because threads share the same memory. If two threads try to modify the exact same variable at the exact same microsecond, the data becomes corrupted. This is a Race Condition."
    },
    whyItExists: {
      problem: "Operations like 'x = x + 1' look like one step in code, but are three steps in hardware (Read, Add, Write). Threads can interrupt each other mid-step.",
      solution: "Synchronization primitives (Locks, Mutexes, Semaphores) that force threads to wait in line to access shared data.",
      keyInsight: "Shared mutable state is the root of all concurrency bugs."
    },
    coreConcepts: [
      { title: "Race Condition", explanation: "When the output of a program depends on the unpredictable timing of thread execution." },
      { title: "Mutex (Mutual Exclusion)", explanation: "A lock. A thread must acquire the lock before touching shared data, and release it after. Other threads must wait." },
      { title: "Deadlock", explanation: "Thread A holds Lock 1 and waits for Lock 2. Thread B holds Lock 2 and waits for Lock 1. Both wait forever." }
    ],
    keyTerms: [
      { term: "Critical Section", definition: "The specific block of code where shared memory is accessed and modified." },
      { term: "Atomic Operation", definition: "An operation that completes entirely in a single, indivisible hardware step, immune to interruption." }
    ],
    connections: [
      { topicId: "processes-vs-threads", relationship: "A direct consequence of threads sharing memory" }
    ],
    engineeringMoment: {
      title: "The Therac-25 Radiation Machine",
      story: "In the 1980s, a software race condition in a medical radiation device caused the system to occasionally deliver massive, fatal overdoses if the operator typed commands too quickly, overriding the safety checks before they completed.",
      lesson: "Race conditions aren't just frustrating bugs; in critical systems, uncoordinated state changes can be lethal."
    },
    realWorldExamples: [
      { title: "Bank Transfers", description: "If User A and User B both try to withdraw the last $100 from an account simultaneously, lack of synchronization could result in the bank dispensing $200." }
    ],
    keyTakeaways: [
      "Never share mutable data between threads without strict synchronization.",
      "Locks solve race conditions but introduce the risk of deadlocks and performance bottlenecks."
    ],
    prerequisites: ["processes-vs-threads"],
    nextTopics: ["memory-management-os"]
  },
  {
    id: "memory-management-os",
    slug: "memory-management-os",
    title: "OS Memory Management",
    difficulty: "Advanced",
    category: "operating-systems",
    shortDescription: "How the OS safely allocates, tracks, and cleans up RAM for applications.",
    overview: {
      question: "When my code says 'new Object()', where does the memory come from?",
      answer: "The language runtime asks the OS. The OS finds a free chunk of physical RAM, updates the virtual memory tables, and gives your program permission to use it."
    },
    whyItExists: {
      problem: "Programs start, allocate memory, free it, and exit unpredictably. If the OS isn't careful, RAM becomes a fragmented mess of unusable tiny holes.",
      solution: "Complex allocation algorithms and Garbage Collection mechanisms (either in the OS or the language runtime).",
      keyInsight: "Memory is a finite resource that must be actively managed and reclaimed."
    },
    coreConcepts: [
      { title: "The Heap", explanation: "A large pool of memory used for dynamic allocation (e.g., objects whose size isn't known until runtime)." },
      { title: "Fragmentation", explanation: "When free memory is broken into tiny, separated blocks. You might have 1GB free, but fail to allocate a 10MB array because there isn't a contiguous block available." },
      { title: "Garbage Collection (GC)", explanation: "In languages like Java or JS, a background process that automatically scans the Heap, finds memory your program no longer references, and gives it back to the OS." }
    ],
    keyTerms: [
      { term: "Memory Leak", definition: "When a program allocates memory but forgets to release it, slowly consuming all available RAM until the system crashes." },
      { term: "Segmentation Fault", definition: "A fatal error caused by a program trying to read or write memory that the OS didn't allocate to it." }
    ],
    connections: [
      { topicId: "virtual-memory", relationship: "Provides the underlying address space for allocation" }
    ],
    realWorldExamples: [
      { title: "Google Chrome", description: "Chrome historically suffered from severe memory leaks because complex DOM nodes and JavaScript closures created cyclic references that the garbage collector couldn't safely clean up." }
    ],
    misconceptions: [
      { myth: "Languages with Garbage Collection don't have memory leaks.", reality: "If you keep adding items to a global Array and never clear it, the GC considers them 'in use'. You will still run out of memory." }
    ],
    keyTakeaways: [
      "In C/C++, you must manually call malloc/free. Forget to free, you leak. Free twice, you crash.",
      "In modern languages, GC protects you, but at the cost of unpredictable CPU pauses when the collector runs."
    ],
    prerequisites: ["virtual-memory"],
    nextTopics: ["file-systems"]
  },
  {
    id: "file-systems",
    slug: "file-systems",
    title: "File Systems",
    difficulty: "Intermediate",
    category: "operating-systems",
    shortDescription: "The abstraction layer that turns spinning magnets and silicon chips into folders and files.",
    overview: {
      question: "What actually is a 'file'?",
      answer: "A file is a human-friendly illusion. Hard drives only understand continuous blocks of raw data. The File System is the complex software structure that organizes those blocks into named files, directories, and permissions."
    },
    whyItExists: {
      problem: "When you save a 1GB video, the hard drive might not have a 1GB contiguous empty space. It has to scatter the video across thousands of tiny gaps.",
      solution: "A directory structure (like an index) that keeps track of a file's name and exactly which physical blocks on the disk belong to it.",
      keyInsight: "A file system is essentially a highly specialized database for managing disk blocks."
    },
    coreConcepts: [
      { title: "Inodes / Metadata", explanation: "A data structure that stores everything about a file (permissions, size, block locations) except the actual name and data." },
      { title: "Journaling", explanation: "A crash-protection mechanism. The FS writes a 'note' about what it is going to do, does it, then deletes the note. If power fails mid-write, it uses the journal to recover." },
      { title: "Fragmentation", explanation: "When a single file is scattered across the disk. On mechanical HDDs, this causes severe slowdowns. On SSDs, it matters much less." }
    ],
    keyTerms: [
      { term: "Block / Sector", definition: "The smallest unit of data that a hard drive can read or write (usually 4KB or 512 bytes)." }
    ],
    connections: [
      { topicId: "databases", relationship: "Databases build their own complex structures on top of the OS file system" }
    ],
    realWorldExamples: [
      { title: "Deleting a File", description: "When you 'delete' a file, the OS doesn't erase the 1GB of data. It simply deletes the pointer in the directory index, marking those blocks as 'free to overwrite'. This is why deleted files can often be recovered." }
    ],
    keyTakeaways: [
      "Everything is an abstraction. A folder doesn't 'contain' files; it is just a list of pointers to Inodes.",
      "I/O operations (reading/writing files) are thousands of times slower than memory operations."
    ],
    prerequisites: ["memory-management-os"],
    nextTopics: []
  }
];
