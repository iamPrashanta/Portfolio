import { DeepTopic } from "@/types/knowledge";

export const linkedListsHashTablesDeep: DeepTopic[] = [
  {
    id: "linked-lists",
    slug: "linked-lists",
    title: "Linked Lists",
    difficulty: "Intermediate",
    category: "linked-lists-hash-tables",
    shortDescription: "A linear collection of data elements whose order is not given by their physical placement in memory.",
    overview: {
      question: "If an array requires contiguous memory, what happens if RAM is heavily fragmented?",
      answer: "You use a Linked List. Each piece of data (Node) is stored randomly wherever there is space, and it contains a pointer (memory address) to the exact location of the next Node."
    },
    whyItExists: {
      problem: "Arrays are rigid. If you want to insert a value at the beginning of an array, you must expensively shift every other element to the right.",
      solution: "A chain of independent nodes. To insert a value, you just update the pointer of the previous node to point to the new node.",
      keyInsight: "Trading O(1) read access for O(1) insertion/deletion capabilities."
    },
    coreConcepts: [
      { title: "Singly Linked List", explanation: "Each node only knows about the next node. You can only traverse forward." },
      { title: "Doubly Linked List", explanation: "Each node holds a pointer to the next node AND the previous node. Uses more memory but allows traversing backwards." },
      { title: "Traversal Penalty", explanation: "Unlike an array, you cannot jump instantly to the 5th element. You must start at the Head and follow the pointers sequentially (O(N))." }
    ],
    keyTerms: [
      { term: "Head", definition: "The very first node in the list. Losing the reference to the Head means losing the entire list." },
      { term: "Tail", definition: "The last node in the list. Its 'next' pointer points to Null." }
    ],
    connections: [
      { topicId: "arrays", relationship: "The direct opposite approach to storing linear data." },
      { topicId: "trees", relationship: "A Tree is just a specialized Linked List where a node can point to multiple children." }
    ],
    realWorldExamples: [
      { title: "Browser History", description: "The Back and Forward buttons operate on a Doubly Linked List of visited URLs." },
      { title: "Operating System Schedulers", description: "OS task queues are often implemented as circular linked lists." }
    ],
    misconceptions: [
      { myth: "Linked Lists are always faster for insertion.", reality: "Insertion is O(1), but *finding* the correct spot to insert is O(N). Also, because they aren't contiguous, they suffer massive CPU Cache misses, making them practically slower than arrays in many modern systems." }
    ],
    keyTakeaways: [
      "In modern high-performance computing, Linked Lists are heavily avoided because they destroy CPU cache locality.",
      "Never lose track of your Head pointer."
    ],
    prerequisites: ["arrays"],
    nextTopics: ["hash-tables"]
  },
  {
    id: "hash-tables",
    slug: "hash-tables",
    title: "Hash Tables (Dictionaries)",
    difficulty: "Advanced",
    category: "linked-lists-hash-tables",
    shortDescription: "The magic data structure providing O(1) lookups using key-value pairs.",
    overview: {
      question: "How can we look up an item in a massive dataset instantly, without sorting or searching?",
      answer: "We use a mathematical Hash Function that converts the lookup 'Key' directly into an array index. The data is stored exactly at that index."
    },
    whyItExists: {
      problem: "Arrays are O(N) to search if you don't know the index. Trees are O(log N) to search. We want O(1) instantaneous lookups.",
      solution: "A Hash Table maps string keys (like 'username') to integer indexes (like 5) using a hash function, storing the value at array[5].",
      keyInsight: "Math can turn a string directly into a memory address offset."
    },
    coreConcepts: [
      { title: "Hash Function", explanation: "An algorithm that takes an input (Key) and predictably returns an integer. It must be fast, deterministic, and distribute numbers evenly." },
      { title: "Collisions", explanation: "No hash function is perfect. Eventually, two different keys will produce the exact same integer index. This is called a collision." },
      { title: "Chaining (Collision Resolution)", explanation: "When a collision happens, we don't overwrite the data. Instead, that array index becomes a Linked List, holding both values." }
    ],
    keyTerms: [
      { term: "Load Factor", definition: "The ratio of items in the table to the size of the array. When the load factor gets too high (e.g., 0.75), the table must expensively resize itself." },
      { term: "Deterministic", definition: "If you hash 'apple', it must return the exact same integer every single time." }
    ],
    connections: [
      { topicId: "arrays", relationship: "The underlying storage of a hash table." },
      { topicId: "linked-lists", relationship: "Used to handle collisions in open hashing." }
    ],
    engineeringMoment: {
      title: "Hash Collision DDoS Attacks",
      story: "In 2011, attackers realized they could send a massive JSON payload to web servers where every single key was mathematically crafted to cause a Hash Collision. The server's hash table degraded into a massive Linked List, turning O(1) operations into O(N) operations, completely maxing out the CPU and crashing the servers.",
      lesson: "Algorithmic worst-case complexities are attack vectors."
    },
    realWorldExamples: [
      { title: "Databases & Caching", description: "Redis is essentially an internet-scale Hash Table. Database indexes heavily utilize hashing for instantaneous exact-match lookups." }
    ],
    keyTakeaways: [
      "Hash Tables are the most frequently used data structure in software engineering (Python Dicts, JS Objects, Java HashMaps).",
      "They provide O(1) average time, but O(N) worst-case time if the hash function is poor and causes massive collisions."
    ],
    prerequisites: ["arrays", "linked-lists"],
    nextTopics: ["lru-cache"]
  },
  {
    id: "lru-cache",
    slug: "lru-cache",
    title: "LRU Cache Design",
    difficulty: "Advanced",
    category: "linked-lists-hash-tables",
    shortDescription: "A sophisticated structure combining Hash Tables and Doubly Linked Lists.",
    overview: {
      question: "How do you build a cache that deletes the oldest unused items when it gets full, while keeping all operations at O(1) speed?",
      answer: "You combine a Hash Table (for O(1) lookups) with a Doubly Linked List (for O(1) tracking of what was used most recently)."
    },
    whyItExists: {
      problem: "A cache has limited memory. When it fills up, we must Evict an item. The smartest item to evict is the Least Recently Used (LRU) one. But finding the oldest item takes O(N) time.",
      solution: "Every time an item is accessed, we move it to the front of a Doubly Linked List. The item at the very end of the list is always the LRU.",
      keyInsight: "No single data structure can do everything. Combining structures yields their combined superpowers."
    },
    coreConcepts: [
      { title: "The Hash Table", explanation: "Stores the Key (e.g., a URL) and the Value is a memory pointer directly to a specific Node inside the Linked List." },
      { title: "The Doubly Linked List", explanation: "Stores the actual data. The 'Head' is the most recently used data. The 'Tail' is the oldest data." },
      { title: "The Operation", explanation: "When you read data, the Hash Table instantly finds the Node. You read the data, then snip the Node out of its current place and move it to the Head of the list. All O(1)." }
    ],
    keyTerms: [
      { term: "Eviction Policy", definition: "The rule determining which data gets deleted when storage is full." }
    ],
    connections: [
      { topicId: "hash-tables", relationship: "Provides the O(1) lookup." },
      { topicId: "linked-lists", relationship: "Provides the O(1) ordering and deletion." }
    ],
    realWorldExamples: [
      { title: "Memcached / Redis", description: "In-memory distributed caches use variations of LRU to decide which data to delete when RAM fills up." }
    ],
    keyTakeaways: [
      "LRU Cache is the ultimate proof that mastering basic data structures allows you to architect complex systems.",
      "It is one of the most common Senior Engineering interview questions."
    ],
    prerequisites: ["hash-tables", "linked-lists"],
    nextTopics: []
  }
];
