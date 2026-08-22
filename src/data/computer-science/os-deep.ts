import { DeepTopic } from "@/types/knowledge";

export const osDeep: DeepTopic[] = [
  {
    id: "processes-vs-threads",
    slug: "processes-vs-threads",
    title: "Processes vs Threads",
    difficulty: "Beginner",
    estimatedStudyTime: "20 min",
    category: "operating-systems",
    shortDescription: "The fundamental units of execution managed by the operating system.",
    
    overview: {
      question: "How does my computer run Discord, Chrome, and Spotify all at the same time?",
      answer: "The OS wraps each application in an isolated container called a Process. Inside that process, smaller workers called Threads execute the actual code. Processes provide safety; threads provide speed."
    },
    
    mentalModel: "Think of a Process as a house. It has its own address, its own locks, and its own resources (plumbing, electricity). Program A cannot just walk into Program B's house. Think of a Thread as a person living inside the house. A house can have one person, or ten people. They all share the same kitchen and living room (shared memory), which means they can communicate easily, but they can also bump into each other and cause chaos if they aren't coordinated.",
    
    whyItExists: {
      problem: "Software needs to multitask, but if one program crashes, it shouldn't take down the entire system or overwrite another program's memory. However, creating complete isolation for every tiny concurrent task is far too slow.",
      solution: "Processes provide hardware-enforced memory isolation. Threads provide lightweight concurrency within that isolated memory.",
      keyInsight: "Processes are about isolation. Threads are about execution."
    },

    conceptLayers: [
      { layer: "LAYER 01 — THE PROCESS", title: "Heavyweight Isolation", description: "Contains its own Virtual Address Space, open file handles, and security context. If it crashes, the OS cleans it up without affecting others." },
      { layer: "LAYER 02 — THE THREAD", title: "Lightweight Execution", description: "Contains only an execution context: a Program Counter, CPU Registers, and a Stack. It shares the Heap and Code with all other threads in the process." },
      { layer: "LAYER 03 — MULTITHREADING", title: "Shared State", description: "Multiple threads executing in the same process at the same time. Fast communication, but massive risk of data corruption." }
    ],

    howItWorksDetailed: {
      explanation: "Comparing the structural differences between Processes and Threads.",
      flow: [
        { label: "Process Creation", annotation: "OS allocates new Virtual Memory, copies permissions, creates Main Thread. Takes milliseconds." },
        { label: "Thread Creation", annotation: "OS just allocates a new Stack in existing memory. Takes microseconds." },
        { label: "Process Communication", annotation: "Requires heavy OS pipes or network sockets (IPC)." },
        { label: "Thread Communication", annotation: "Just read/write to the same memory variable." }
      ],
      codeExamples: [
        {
          title: "The API Difference",
          language: "python",
          description: "APIs differ by OS and language, but the architectural intent is always the same. Processes for safety, threads for shared state.",
          code: "import multiprocessing\nimport threading\n\n# Safely isolated, but hard to share data\np = multiprocessing.Process(target=heavy_computation)\n\n# Shares memory perfectly, but can corrupt data\nt = threading.Thread(target=background_network_fetch)"
        }
      ]
    },
    
    coreConcepts: [
      { title: "Cost of Creation", explanation: "Creating a process requires asking the OS to build a new virtual memory map. Creating a thread just requires allocating a small block of memory for a stack." },
      { title: "Context Switching Cost", explanation: "Switching between processes is expensive because the CPU must flush its memory translation caches (TLB). Switching threads in the same process is much faster." },
      { title: "Resource Sharing", explanation: "Threads share the process's Heap memory, open files, and network sockets. They only have private Stacks." }
    ],
    
    keyTerms: [
      { term: "IPC (Inter-Process Communication)", definition: "Mechanisms like pipes, sockets, or shared memory files that allow isolated processes to talk to each other." },
      { term: "Thread-Safe", definition: "Code that can be executed by multiple threads simultaneously without causing bugs or data corruption." }
    ],

    whereItBreaks: [
      { scenario: "The Shared State Trap", description: "Because threads share memory, if Thread A and Thread B try to update the same user profile simultaneously without coordination, the data becomes corrupted (A Race Condition)." },
      { scenario: "Process Overhead", description: "If a web server spawns a full OS Process for every single incoming HTTP request, the OS will run out of memory and crash under heavy load." }
    ],

    tradeoffs: [
      {
        advantage: "Multiprocessing",
        disadvantages: ["High memory usage.", "Slow to start.", "Complex to share data between them."],
        context: "Used in Chrome (each tab is a process for security) and Node.js clusters (to utilize multiple CPU cores safely)."
      },
      {
        advantage: "Multithreading",
        disadvantages: ["A crash in one thread kills the entire process.", "Requires complex synchronization (Locks/Mutexes)."],
        context: "Used in Video Games and high-performance Web Servers (like Go/Java) to handle thousands of concurrent connections efficiently."
      }
    ],

    systemConnections: [
      {
        system: "Web Servers",
        description: "Apache historically used a Process-per-connection model. It was incredibly stable but consumed massive RAM. Nginx switched to an Event-Driven model (fewer threads), allowing it to handle 10,000+ concurrent connections on a fraction of the hardware.",
        layers: ["Operating Systems", "Networking", "Distributed Systems"]
      }
    ],

    connections: [
      { topicId: "Context Switching", relationship: "The mechanical cost of swapping between these execution units.", href: "/computer-science/os/context-switching", status: "available" },
      { topicId: "Virtual Memory", relationship: "What actually isolates processes from each other.", href: "/computer-science/architecture/virtual-memory", status: "available" }
    ],

    exercises: {
      understand: { 
        question: "If a web browser tab freezes, and it's running as a Thread, what happens? What if it's running as a Process?",
        hint: "Think about the isolation boundaries. Can the OS kill a thread without killing the process?"
      },
      predict: {
        scenario: "You are building a database engine that must guarantee data is never corrupted, even if a query handler crashes.",
        question: "Would you isolate query handlers using threads or processes?"
      }
    },

    misconceptions: [
      { myth: "Threads are always better because they are lighter.", reality: "Threads introduce severe security risks (one thread can read another's memory) and synchronization bugs. Modern architectures often prefer isolated processes (like Microservices) for stability, paying the performance cost for safety." }
    ],

    keyTakeaways: [
      "Processes are containers for resources. Threads are the actual things executing code.",
      "If isolation and crash-resilience are needed, use Processes.",
      "If shared state and high-performance concurrency are needed, use Threads."
    ],
    prerequisites: ["virtual-memory"],
    nextTopics: ["context-switching"]
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
    estimatedStudyTime: "15 min",
    category: "operating-systems",
    shortDescription: "The heavy mechanical cost of pausing one thread to run another.",
    
    overview: {
      question: "What actually happens when the OS pauses my program to run another one?",
      answer: "The OS must save the exact state of the CPU, flush certain caches, and load the saved state of the next thread before execution can resume. It is a necessary but expensive operation."
    },
    
    mentalModel: "Imagine you are doing complex algebra in your head. Someone suddenly asks you to stop and translate a document instead. You must write down all your partial math numbers (saving state), clear your brain (flushing cache), pull out your translation dictionary (loading new state), and begin. When you go back to the math, you have to reverse the entire process. This switching takes time away from actually doing the work.",
    
    whyItExists: {
      problem: "To achieve multitasking on limited hardware (e.g., 4 CPU cores but 1,000 running threads), the CPU must jump between different instruction streams without losing track of where it was.",
      solution: "The OS preemptively pauses a thread, saves its exact hardware state into RAM, and restores the state of a different thread.",
      keyInsight: "Multitasking is not free; the act of switching consumes CPU cycles that could have been used for your application."
    },
    
    conceptLayers: [
      { layer: "LAYER 01 — THE TRIGGER", title: "Interrupts", description: "A hardware timer or an I/O event fires, telling the OS Kernel to take control of the CPU." },
      { layer: "LAYER 02 — SAVING STATE", title: "Preserving Registers", description: "The OS saves the current Program Counter, Stack Pointer, and all CPU Registers into a data structure in RAM." },
      { layer: "LAYER 03 — SCHEDULING", title: "Picking the Next Thread", description: "The OS looks at its Ready Queue and decides which thread deserves to run next." },
      { layer: "LAYER 04 — RESTORING STATE", title: "Loading Registers", description: "The OS loads the saved Program Counter and Registers of the new thread back into the CPU." },
      { layer: "LAYER 05 — RESUME", title: "Execution Continues", description: "The CPU resumes executing instructions as if the new thread had never been paused." }
    ],

    howItWorksDetailed: {
      explanation: "What the OS must preserve and restore during a switch.",
      flow: [
        { label: "Execution", annotation: "Thread A is running." },
        { label: "Interrupt", annotation: "OS halts Thread A." },
        { label: "Save State", annotation: "OS copies Thread A's Registers, PC, and Stack Pointer to a Process Control Block (PCB)." },
        { label: "Restore State", annotation: "OS loads Thread B's saved state into the CPU hardware." },
        { label: "Cache Flush", annotation: "If switching Processes, the Virtual Memory TLB cache is flushed." },
        { label: "Execution", annotation: "Thread B is running." }
      ]
    },
    
    coreConcepts: [
      { title: "Process Control Block (PCB)", explanation: "The data structure the OS uses to store the state of a suspended process or thread in RAM." },
      { title: "The Cache Penalty", explanation: "Saving registers takes a few microseconds. The real cost of a context switch is that the new thread needs different data. It will experience massive Cache Misses as it pulls its data from RAM back into the L1/L2 caches." },
      { title: "Thread vs Process Switch", explanation: "Switching between threads in the same process is faster because they share the same virtual memory map. Switching between different processes requires flushing the TLB (Translation Lookaside Buffer), which cripples performance." }
    ],
    
    keyTerms: [
      { term: "TLB (Translation Lookaside Buffer)", definition: "A hardware cache in the CPU that speeds up Virtual Memory translation. Flushing it causes massive performance drops." },
      { term: "Preemption", definition: "When the OS forcibly halts a running thread to give another thread a turn." }
    ],

    whereItBreaks: [
      { scenario: "The C10K Problem", description: "Early web servers crashed at 10,000 connections because they spawned a new OS thread for each user. The CPU spent 90% of its time just context-switching between 10,000 threads, doing zero actual work (thrashing)." }
    ],

    tradeoffs: [
      {
        advantage: "Fairness and Multitasking",
        disadvantages: ["High CPU overhead.", "Destroys cache locality."],
        context: "The fundamental trade-off of modern operating systems. We trade raw throughput for the illusion of simultaneous execution."
      }
    ],

    systemConnections: [
      {
        system: "Asynchronous I/O (Node.js / Go)",
        description: "Modern languages solve the context switch problem by using a single OS thread (or a small pool) and managing thousands of lightweight 'virtual threads' or 'callbacks' in software, avoiding the OS Kernel's heavy context switch entirely.",
        layers: ["Application Frameworks", "Operating Systems"]
      }
    ],

    connections: [
      { topicId: "Processes vs Threads", relationship: "Explains why switching threads is cheaper than switching processes.", href: "/computer-science/os/processes-vs-threads", status: "available" },
      { topicId: "Synchronization", relationship: "Context switching mid-operation is what causes Race Conditions.", href: "/computer-science/os/synchronization-and-race-conditions", status: "coming-soon" }
    ],

    exercises: {
      understand: { 
        question: "If a CPU takes 1000 clock cycles to perform a context switch, what happens if the OS decides to switch threads every 500 clock cycles?",
        hint: "Think about the ratio of 'doing work' vs 'switching'."
      },
      predict: {
        scenario: "You have a web server handling 100,000 concurrent WebSockets.",
        question: "Why would assigning one OS thread per WebSocket immediately crash the server?"
      }
    },

    misconceptions: [
      { myth: "Multitasking is instant and free.", reality: "It is an illusion created by speed. At the hardware level, context switching is one of the most expensive operations an OS performs." }
    ],

    keyTakeaways: [
      "A Context Switch requires saving the exact state of the CPU hardware to RAM, and loading a new state.",
      "The hidden cost of context switching is destroying CPU Cache locality.",
      "Too many active threads = Too many context switches = Terrible performance."
    ],
    prerequisites: ["processes-vs-threads"],
    nextTopics: ["synchronization-and-race-conditions"]
  },
  {
    id: "synchronization-and-race-conditions",
    slug: "synchronization-and-race-conditions",
    title: "Synchronization & Race Conditions",
    difficulty: "Advanced",
    estimatedStudyTime: "30 min",
    category: "operating-systems",
    shortDescription: "The chaos of shared memory and how to prevent threads from destroying data.",
    
    overview: {
      question: "Why is multithreaded programming considered so hard?",
      answer: "Because threads share the same memory. If two threads try to modify the exact same variable at the exact same microsecond, the data becomes corrupted in ways that are nearly impossible to reproduce or debug. This is a Race Condition."
    },
    
    mentalModel: "Imagine two bank tellers (threads) serving two customers who both want to withdraw the last $100 from the same account (shared state). Teller A reads the balance: $100. Teller B reads the balance: $100. Teller A hands out $100 and writes balance = $0. Teller B hands out $100 and writes balance = $0. The bank just lost $100 because neither teller knew the other was acting at the same time.",
    
    whyItExists: {
      problem: "Operations like `balance = balance - 100` look like one atomic step in source code, but are actually three separate hardware steps: (1) Read balance from memory, (2) Subtract 100 in the ALU, (3) Write new balance back to memory. The OS can context-switch a thread between any of these steps.",
      solution: "Synchronization primitives — Locks, Mutexes, Semaphores, and Atomic Operations — that force threads to wait in line before entering a dangerous section of shared code.",
      keyInsight: "Shared mutable state is the root of all concurrency bugs."
    },

    conceptLayers: [
      { layer: "LAYER 01 — THE PROBLEM", title: "Multiple Execution Paths", description: "Two or more threads are executing at the same time, and the OS can pause/resume any of them at any point." },
      { layer: "LAYER 02 — SHARED STATE", title: "Common Memory", description: "The threads all read and write to the same variable, database row, file, or cache entry." },
      { layer: "LAYER 03 — UNCONTROLLED ACCESS", title: "No Coordination", description: "Without explicit synchronization, threads interleave their Read-Modify-Write operations in unpredictable orders." },
      { layer: "LAYER 04 — RACE CONDITION", title: "Corrupted Output", description: "The final result depends on which thread happened to run last, producing different (and wrong) results on every execution." }
    ],

    howItWorksDetailed: {
      explanation: "How a simple increment operation becomes dangerous with multiple threads.",
      flow: [
        { label: "Thread A", annotation: "Reads counter = 5 from RAM." },
        { label: "Context Switch", annotation: "OS pauses Thread A, starts Thread B." },
        { label: "Thread B", annotation: "Reads counter = 5 from RAM. Increments to 6. Writes counter = 6." },
        { label: "Context Switch", annotation: "OS resumes Thread A." },
        { label: "Thread A", annotation: "Still has the stale value 5. Increments to 6. Writes counter = 6." },
        { label: "Result", annotation: "Counter should be 7, but is 6. One increment was lost." }
      ],
      codeExamples: [
        {
          title: "Unsafe Shared Counter",
          language: "python",
          description: "This code will produce wrong results under high concurrency because the += operation is not atomic.",
          code: "import threading\n\ncounter = 0\n\ndef increment():\n    global counter\n    for _ in range(100000):\n        counter += 1  # READ, ADD, WRITE — not atomic!\n\nt1 = threading.Thread(target=increment)\nt2 = threading.Thread(target=increment)\nt1.start(); t2.start()\nt1.join(); t2.join()\nprint(counter)  # Expected: 200000. Actual: ~150000-190000"
        },
        {
          title: "Fixed with a Lock",
          language: "python",
          description: "A Mutex forces threads to take turns. Only the thread holding the lock can enter the critical section.",
          code: "import threading\n\ncounter = 0\nlock = threading.Lock()\n\ndef increment():\n    global counter\n    for _ in range(100000):\n        with lock:           # Acquire lock\n            counter += 1     # Critical section — safe\n                             # Lock released automatically\n\n# Now prints exactly 200000 every time."
        }
      ]
    },
    
    coreConcepts: [
      { title: "Critical Section", explanation: "The specific block of code where shared state is accessed and modified. The goal of synchronization is to ensure only one thread can be inside the critical section at a time." },
      { title: "Mutex (Mutual Exclusion Lock)", explanation: "A lock object. A thread must acquire the mutex before entering the critical section. All other threads must wait (block) until the mutex is released." },
      { title: "Deadlock", explanation: "Thread A holds Lock 1 and waits for Lock 2. Thread B holds Lock 2 and waits for Lock 1. Both threads wait forever, and the system freezes." },
      { title: "Atomic Operations", explanation: "Special CPU instructions (like Compare-And-Swap) that perform a Read-Modify-Write as a single, indivisible hardware step. No context switch can interrupt them." },
      { title: "Semaphore", explanation: "A generalized lock that allows N threads to enter a critical section simultaneously (e.g., limiting a database connection pool to 10 active connections)." }
    ],
    
    keyTerms: [
      { term: "Starvation", definition: "When a thread is perpetually denied access to the lock because other higher-priority threads always acquire it first." },
      { term: "Lock Contention", definition: "When many threads are blocked, all waiting for the same lock. This serializes execution and destroys parallelism." }
    ],

    whereItBreaks: [
      { scenario: "Deadlock", description: "Two threads each hold a resource the other needs. Both block forever. The only recovery is to kill one of them. Deadlocks are extremely difficult to detect in production because they happen silently — no error, no crash, just a frozen system." },
      { scenario: "Lock Granularity", description: "If you lock too broadly (one giant lock for the entire database), you eliminate concurrency and the system becomes single-threaded. If you lock too narrowly (one lock per field), the complexity of managing hundreds of locks introduces new deadlock risks." }
    ],

    tradeoffs: [
      {
        advantage: "Mutex Locks",
        disadvantages: ["Threads block and waste CPU time waiting.", "Risk of Deadlock.", "Risk of Priority Inversion."],
        context: "Simple, correct, and the default choice for most shared state problems."
      },
      {
        advantage: "Lock-Free (Atomic Operations)",
        disadvantages: ["Extremely difficult to implement correctly.", "Only works for simple operations (counters, flags)."],
        context: "Used in high-performance systems like database engines and OS kernels where lock contention is the bottleneck."
      }
    ],

    engineeringMoment: {
      year: "1985",
      title: "The Therac-25 Radiation Machine",
      problem: "A medical radiation therapy machine used software concurrency to manage its safety interlocks and beam configuration simultaneously.",
      response: "A race condition between the operator interface and the safety system allowed the machine to occasionally deliver massive, lethal radiation overdoses if the operator typed commands faster than the software expected.",
      tradeoff: "The software replaced hardware safety interlocks with software checks, removing the physical fail-safe.",
      today: "At least six patients were severely injured or killed. It remains the most cited example of why concurrency bugs in critical systems are not merely 'frustrating' — they can be fatal."
    },

    systemConnections: [
      {
        system: "Database Transactions",
        description: "Databases face exactly the same problem. Two concurrent SQL queries modifying the same row can corrupt data. Databases solve this with transactions (BEGIN/COMMIT), row-level locks, and MVCC (Multi-Version Concurrency Control).",
        layers: ["Databases", "Operating Systems", "Distributed Systems"]
      }
    ],

    connections: [
      { topicId: "Processes vs Threads", relationship: "Race conditions are a direct consequence of threads sharing memory.", href: "/computer-science/os/processes-vs-threads", status: "available" },
      { topicId: "Context Switching", relationship: "The OS switching threads mid-operation is exactly what causes the interleaving.", href: "/computer-science/os/context-switching", status: "available" },
      { topicId: "Parallelism & Concurrency", relationship: "Synchronization is the price we pay for concurrent and parallel execution.", href: "/computer-science/architecture/parallelism-and-concurrency", status: "available" }
    ],

    exercises: {
      understand: { 
        question: "If you wrap every single line of your program in a Mutex lock, is it still concurrent?",
        hint: "Think about what happens if only one thread can ever execute at a time."
      },
      predict: {
        scenario: "An e-commerce site processes 1,000 orders per second. Two users both try to buy the last item in stock at the same millisecond.",
        question: "Without synchronization on the inventory count, what happens?"
      }
    },

    misconceptions: [
      { myth: "Race conditions always cause crashes.", reality: "Race conditions are far more insidious. They silently corrupt data, produce wrong results intermittently, and are nearly impossible to reproduce in testing because they depend on exact OS timing." },
      { myth: "Using a language with a GIL (like Python) prevents race conditions.", reality: "The Global Interpreter Lock prevents parallel CPU execution but does NOT prevent logical race conditions. Context switches still happen between bytecode instructions." }
    ],

    keyTakeaways: [
      "Shared mutable state is the root cause. Eliminate the sharing, or eliminate the mutability, and the problem disappears.",
      "Locks solve race conditions but introduce deadlock risk and performance bottlenecks.",
      "The hardest part of concurrency is that bugs are non-deterministic — they may not appear in testing but will appear in production."
    ],
    prerequisites: ["processes-vs-threads", "context-switching"],
    nextTopics: ["memory-management-os"]
  },
  {
    id: "memory-management-os",
    slug: "memory-management-os",
    title: "Memory Management",
    difficulty: "Advanced",
    estimatedStudyTime: "25 min",
    category: "operating-systems",
    shortDescription: "How the OS and language runtimes allocate, track, and reclaim RAM for applications.",
    
    overview: {
      question: "When my code says `new Object()`, where does the memory actually come from?",
      answer: "The language runtime requests a block from the Heap. The Heap itself is managed by the OS, which maps virtual pages to physical RAM frames. When you're done, either you free it manually (C/C++) or a Garbage Collector reclaims it automatically (Java/JS/Go)."
    },
    
    mentalModel: "Think of your program's memory as a building. The Code section is the building's blueprint — fixed and read-only. The Stack is an elevator that goes up when you call a function and comes back down when the function returns — fast, automatic, and rigid. The Heap is a massive warehouse floor. You can request any amount of space, use it for as long as you want, but you are responsible for giving it back. If you forget, the warehouse fills up and eventually collapses.",
    
    whyItExists: {
      problem: "Programs start, allocate memory dynamically, free it at unpredictable times, and exit. Without active management, RAM becomes a fragmented mess of unusable tiny holes between used blocks.",
      solution: "A layered system: the OS manages physical pages, the language runtime manages the Heap within those pages, and optionally a Garbage Collector automates deallocation.",
      keyInsight: "Memory is a finite resource that must be actively managed and reclaimed, or it will inevitably run out."
    },

    conceptLayers: [
      { layer: "LAYER 01 — CODE SEGMENT", title: "Read-Only Instructions", description: "The compiled machine instructions of the program. Fixed at load time. Shared across threads." },
      { layer: "LAYER 02 — THE STACK", title: "Automatic, Fast, Limited", description: "Stores local variables and function call frames. Grows and shrinks automatically as functions are called and return. Has a fixed maximum size (usually 1-8MB)." },
      { layer: "LAYER 03 — THE HEAP", title: "Dynamic, Flexible, Dangerous", description: "A large pool of memory for objects whose size or lifetime isn't known at compile time. Must be explicitly managed." },
      { layer: "LAYER 04 — OS KERNEL", title: "Physical Page Allocation", description: "The OS kernel maps the program's virtual Heap pages to actual physical RAM frames, extending or shrinking the process's memory footprint." }
    ],

    howItWorksDetailed: {
      explanation: "The relationship between Stack and Heap memory in a running program.",
      flow: [
        { label: "Function Call", annotation: "A new Stack Frame is pushed. Local variables (int x = 5) live here." },
        { label: "Dynamic Allocation", annotation: "'new User()' requests space from the Heap allocator." },
        { label: "Heap Allocator", annotation: "Searches for a free block large enough. Returns a pointer." },
        { label: "Usage", annotation: "Program reads/writes through the pointer." },
        { label: "Function Returns", annotation: "Stack Frame is popped. Local variable (the pointer) is destroyed." },
        { label: "Danger", annotation: "If nothing else holds that pointer, the Heap block is now unreachable but still allocated — a Memory Leak." }
      ],
      codeExamples: [
        {
          title: "Stack vs Heap in C",
          language: "c",
          description: "In C, the difference between stack and heap allocation is explicit and visible.",
          code: "void example() {\n    int x = 42;              // Stack — automatic, fast\n    int* arr = malloc(1000); // Heap — manual, flexible\n    \n    // Use arr...\n    \n    free(arr);               // YOU must free it\n    // If you forget: memory leak\n    // If you free twice: crash (double-free)\n}   // x is automatically destroyed when function returns"
        },
        {
          title: "Garbage Collection in JavaScript",
          language: "javascript",
          description: "In GC languages, the runtime periodically scans the Heap and frees objects that are no longer reachable.",
          code: "function example() {\n  let user = { name: 'Alice' }; // Heap allocation\n  // ... use user ...\n  return; // 'user' goes out of scope\n}\n// GC will eventually find the orphaned object\n// and reclaim its memory automatically.\n// But WHEN it runs is unpredictable."
        }
      ]
    },
    
    coreConcepts: [
      { title: "Stack Memory", explanation: "Extremely fast (LIFO push/pop). Automatically managed. But limited in size. If recursion goes too deep, you get a Stack Overflow." },
      { title: "Heap Memory", explanation: "Flexible and vast. But slow to allocate (must search for free blocks), and the programmer or GC must explicitly manage its lifecycle." },
      { title: "Fragmentation", explanation: "After many allocations and deallocations, the Heap can become a Swiss cheese of tiny free blocks. You might have 1GB free total, but fail to allocate a contiguous 10MB array." },
      { title: "Garbage Collection", explanation: "A background process in languages like Java, JavaScript, Go, and Python that automatically finds and frees unreachable Heap objects. It eliminates manual errors but introduces unpredictable CPU pauses (GC Pauses)." },
      { title: "Ownership (Rust)", explanation: "Rust uses a compile-time ownership model that statically guarantees memory safety without needing a garbage collector or manual free calls. Memory is freed when the owning variable goes out of scope." }
    ],
    
    keyTerms: [
      { term: "Memory Leak", definition: "When a program allocates Heap memory but never frees it. The memory is consumed but inaccessible, slowly starving the system." },
      { term: "Segmentation Fault", definition: "A fatal OS error when a program tries to access memory that was never allocated to it, or has already been freed." },
      { term: "Double Free", definition: "Freeing the same Heap block twice. This corrupts the allocator's internal bookkeeping and can lead to security exploits." }
    ],

    whereItBreaks: [
      { scenario: "Memory Leaks in Long-Running Services", description: "A web server that leaks 1KB per request seems fine in testing. In production, after 10 million requests, it has leaked 10GB and the OS kills it (OOM Killer). This is one of the most common production failures." },
      { scenario: "GC Pauses", description: "In real-time systems (games, trading platforms), a Garbage Collector pausing the entire application for 200ms to scan the Heap causes visible freezes or missed trades." }
    ],

    tradeoffs: [
      {
        advantage: "Manual Memory Management (C/C++)",
        disadvantages: ["Use-after-free bugs.", "Double-free crashes.", "Memory leaks from human error."],
        context: "Used in OS kernels, game engines, and embedded systems where GC pauses are unacceptable."
      },
      {
        advantage: "Garbage Collection (Java/JS/Go)",
        disadvantages: ["Unpredictable GC pauses.", "Higher baseline memory usage.", "Still vulnerable to logical leaks."],
        context: "Used in web servers, business applications, and any system where developer productivity matters more than microsecond latency."
      },
      {
        advantage: "Ownership Model (Rust)",
        disadvantages: ["Steep learning curve.", "Slower to write code.", "Complex lifetime annotations."],
        context: "Used in safety-critical systems, WebAssembly, and new infrastructure where both safety and performance are required."
      }
    ],

    systemConnections: [
      {
        system: "Application Memory Layout",
        description: "Every running process has a structured memory layout: Code → Data → Heap (grows up) → ... free space ... → Stack (grows down). Understanding this layout is essential for debugging crashes, security exploits (buffer overflows), and performance tuning.",
        layers: ["Operating Systems", "Compilers", "Security"]
      }
    ],

    connections: [
      { topicId: "Virtual Memory", relationship: "The OS maps the Heap's virtual pages to physical RAM.", href: "/computer-science/architecture/virtual-memory", status: "available" },
      { topicId: "Recursion", relationship: "Deep recursion exhausts the Stack, causing Stack Overflow.", href: "/computer-science/foundations/recursion", status: "available" },
      { topicId: "Memory Hierarchy", relationship: "Heap allocations are scattered, leading to poor cache locality compared to Stack.", href: "/computer-science/architecture/memory-hierarchy", status: "available" }
    ],

    exercises: {
      understand: { 
        question: "Why does a local variable `int x = 5` disappear when a function returns, but an object created with `new` persists?",
        hint: "Think about where each one is stored — Stack vs Heap — and what happens to each when the function's Stack Frame is popped."
      },
      predict: {
        scenario: "A Node.js web server stores every user session in a global Map object. Sessions are added on login but never removed on logout.",
        question: "Will the Garbage Collector save you? What happens after 6 months of production traffic?"
      }
    },

    misconceptions: [
      { myth: "Languages with Garbage Collection don't have memory leaks.", reality: "If you keep adding items to a global Array, Map, or cache and never remove them, the GC considers them 'in use' because they are reachable. You will still run out of memory." },
      { myth: "The Stack is slower than the Heap.", reality: "The Stack is drastically faster. Allocation is a single pointer increment. Deallocation is automatic. The Heap requires complex searching and bookkeeping." }
    ],

    keyTakeaways: [
      "Stack = fast, automatic, limited. Heap = flexible, manual/GC, unlimited (until you run out).",
      "In C/C++, you manually call malloc/free. Forget to free = leak. Free twice = crash.",
      "In GC languages, the collector protects you from crashes but not from logical leaks or GC pauses.",
      "Rust's ownership model provides compile-time memory safety without runtime GC overhead."
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
