import { DeepTopic } from "@/types/knowledge";

export const debuggingDeep: DeepTopic[] = [
  {
    id: "memory-leaks",
    slug: "memory-leaks",
    title: "Memory Leaks",
    difficulty: "Advanced",
    category: "debugging",
    shortDescription: "The silent killer of long-running applications.",
    overview: {
      question: "Why does our server run perfectly for 3 days, and then suddenly crash with an OutOfMemory error?",
      answer: "The application is allocating memory for temporary operations, but losing the reference to that memory before telling the OS to free it. Over 3 days, these tiny leaks accumulate until RAM is 100% full."
    },
    whyItExists: {
      problem: "In languages like C/C++, you must manually call `free()`. If you forget, the memory is leaked. In languages like JS or Java, the Garbage Collector handles this, but it cannot free memory if you accidentally leave it stored in a global array or closure.",
      solution: "Profiling tools (like heap snapshots). You take a snapshot of RAM, run the app for an hour, take another snapshot, and compare exactly which objects survived when they shouldn't have.",
      keyInsight: "Memory leaks in modern languages are almost always caused by unintentional persistent references (e.g., event listeners that were never removed)."
    },
    coreConcepts: [
      { title: "The Garbage Collector (GC)", explanation: "A background process that scans memory. If a piece of data cannot be reached from the main application root, it is destroyed." },
      { title: "Dangling Pointers", explanation: "The opposite of a memory leak. You free the memory, but keep trying to use it. Causes immediate, violent crashes (Segfaults)." }
    ],
    keyTerms: [
      { term: "Heap", definition: "The area of RAM where dynamically allocated memory lives." }
    ],
    connections: [
      { topicId: "memory-management", relationship: "Understanding leaks requires understanding how the OS assigns memory in the first place." }
    ],
    engineeringMoment: {
      title: "The Chrome Memory Hog",
      story: "Google Chrome is notoriously memory-hungry because of its multi-process architecture. However, many perceived 'browser memory leaks' are actually caused by massive Single Page Applications (like Gmail) storing gigabytes of DOM nodes in JavaScript arrays without clearing them.",
      lesson: "Just because you have a Garbage Collector doesn't mean you can ignore memory management."
    },
    keyTakeaways: [
      "If your server crashes at a highly predictable time interval, it is almost certainly a memory leak.",
      "Always deregister event listeners when a UI component unmounts."
    ],
    prerequisites: ["memory-management"],
    nextTopics: []
  }
];
