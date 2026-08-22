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
    estimatedStudyTime: "20 min",
    category: "linked-lists-hash-tables",
    shortDescription: "The magic data structure providing O(1) lookups using key-value pairs.",
    overview: {
      question: "How can we look up an item in a massive dataset instantly, without sorting or searching?",
      answer: "We use a mathematical Hash Function that converts the lookup 'Key' directly into an array index. The data is stored exactly at that index."
    },
    mentalModel: "Think of a massive library where the librarian is a mathematical formula. You tell her the title of the book, and she instantly calculates the exact aisle and shelf number, bypassing the card catalog entirely.",
    whyItExists: {
      problem: "Arrays are O(n) to search if you don't know the index. Trees are O(log n) to search. As datasets grow to millions of items, even O(log n) can become a bottleneck when executing millions of lookups per second.",
      solution: "A Hash Table maps string keys (like 'username') to integer indexes (like 5) using a hash function, storing the value at array[5].",
      keyInsight: "Math can turn a string directly into a memory address offset in constant O(1) time."
    },
    conceptLayers: [
      { layer: "LAYER 01 — THE HASH", title: "Key to Integer", description: "You pass a string like 'apple' into a hash function. The function runs a deterministic math operation on the ASCII values of the characters and returns an integer." },
      { layer: "LAYER 02 — THE MODULO", title: "Fitting the Array", description: "The hash integer might be 8,493,102. But our array only has 10 slots. We use the modulo operator (8493102 % 10 = 2) to safely map it into the array bounds." },
      { layer: "LAYER 03 — THE BUCKET", title: "Storage", description: "The value is stored at array[2]. When we need 'apple' again, the math guarantees it will point us directly back to array[2]." }
    ],
    howItWorksDetailed: {
      explanation: "This is the step-by-step lifecycle of inserting a key-value pair into a Hash Table.",
      steps: [
        { title: "Hash the Key", description: "The string key is passed into the hash function to generate a large integer." },
        { title: "Compress the Hash", description: "The large integer is compressed using the modulo operator to fit within the physical bounds of the underlying array." },
        { title: "Check for Collisions", description: "The algorithm checks if the target array index is already occupied by a different key." },
        { title: "Store the Value", description: "If empty, store the key-value pair. If occupied, handle the collision (usually via a Linked List)." }
      ],
      codeExamples: [
        {
          title: "A Minimal Hash Table",
          language: "javascript",
          code: "class HashTable {\n  constructor(size = 50) {\n    this.buckets = new Array(size);\n  }\n\n  _hash(key) {\n    let hash = 0;\n    for (let i = 0; i < key.length; i++) {\n      hash += key.charCodeAt(i);\n    }\n    return hash % this.buckets.length;\n  }\n\n  set(key, value) {\n    const index = this._hash(key);\n    if (!this.buckets[index]) {\n      this.buckets[index] = [];\n    }\n    this.buckets[index].push([key, value]);\n  }\n}"
        }
      ]
    },
    coreConcepts: [
      { title: "Hash Function", explanation: "An algorithm that takes an input (Key) and predictably returns an integer. It must be fast, deterministic, and distribute numbers evenly to prevent grouping." },
      { title: "Collisions", explanation: "Because the array is finite and keys are infinite, two different keys will eventually produce the exact same array index. This is a mathematical certainty (The Pigeonhole Principle)." },
      { title: "Chaining (Collision Resolution)", explanation: "When a collision happens, we don't overwrite the data. Instead, that array index becomes a Linked List, holding both values. Lookups become O(k) where k is the list length." }
    ],
    keyTerms: [
      { term: "Load Factor", definition: "The ratio of items in the table to the size of the array. When the load factor gets too high (e.g., 0.75), the table must expensively resize itself." },
      { term: "Deterministic", definition: "If you hash 'apple', it must return the exact same integer every single time, otherwise you could never find the data again." }
    ],
    whereItBreaks: [
      { scenario: "Hash Collisions", description: "If the hash function distributes poorly, all keys might hash to index 0. The O(1) table degrades into an O(n) Linked List." },
      { scenario: "Resizing Spikes", description: "When the load factor is exceeded, the table must create a larger array and mathematically re-hash every single item. This causes a sudden latency spike." },
      { scenario: "Memory Overhead", description: "Hash tables pre-allocate large blocks of memory (the underlying array) to maintain a low load factor, wasting RAM compared to tightly packed arrays." }
    ],
    tradeoffs: [
      {
        advantage: "O(1) Instant Lookups",
        disadvantages: ["Consumes significantly more memory than Arrays.", "Unpredictable latency spikes during resizing.", "Data is stored in random order (unordered)."],
        context: "When lookups heavily outnumber insertions, and memory is abundant."
      }
    ],
    engineeringMoment: {
      year: "2011",
      title: "Hash Collision DDoS Attacks",
      problem: "Web frameworks parsed JSON payloads and shoved the keys into Hash Tables (Dictionaries).",
      response: "Attackers discovered they could send a massive JSON payload where every single key was mathematically crafted to cause a Hash Collision.",
      tradeoff: "The server's hash table degraded into a massive Linked List, turning O(1) operations into O(n) operations.",
      today: "This maxed out CPUs and crashed servers globally. Today, modern languages randomize hash seeds on startup to prevent predictable collisions."
    },
    systemConnections: [
      {
        system: "Redis Cache",
        description: "Redis is essentially an internet-scale Hash Table. It provides microsecond lookup speeds by mapping string keys directly to values in RAM.",
        layers: ["In-Memory Datastore", "Session Management", "Rate Limiting"]
      },
      {
        system: "Database Indexes (Hash Index)",
        description: "While B-Trees are used for range queries (x > 5), Hash Indexes are used in databases for instantaneous exact-match lookups (id = 123).",
        layers: ["PostgreSQL Storage Engine", "Query Execution"]
      }
    ],
    connections: [
      { topicId: "Arrays", relationship: "The underlying continuous memory storage.", href: "/data-structures/arrays-and-strings", status: "available" },
      { topicId: "Linked Lists", relationship: "The collision resolution mechanism (Chaining).", href: "/data-structures/linked-lists", status: "available" },
      { topicId: "Big O Notation", relationship: "Why we tolerate memory overhead for O(1) speed.", href: "/computer-science/foundations/big-o-notation", status: "available" }
    ],
    exercises: {
      understand: { 
        question: "If a Hash Table array has 10 slots and currently holds 7 items, what is its Load Factor?",
        hint: "Load Factor = Items / Slots."
      },
      predict: {
        scenario: "You are building a leaderboard that needs to frequently output the Top 10 users in sorted order.",
        question: "Is a Hash Table the right data structure for this? Why or why not?"
      },
      build: {
        task: "Implement a simple Hash Table class in your preferred language using an underlying array and a modulo-based hash function.",
        requirements: ["Implement set(key, value).", "Implement get(key).", "Do not use built-in Map or Dict primitives."]
      }
    },
    misconceptions: [
      { myth: "Hash Tables have perfect O(1) time.", reality: "They have amortized O(1) average time. A badly designed table or a resize event triggers O(n) worst-case behavior." },
      { myth: "You can iterate through a Hash Table in order.", reality: "Standard Hash Tables do not guarantee insertion order. (Languages like Python 3.7+ implemented special dual-structure dicts to fix this)." }
    ],
    keyTakeaways: [
      "Hash Tables are the most frequently used data structure in software engineering (Python Dicts, JS Objects, Java HashMaps).",
      "They trade heavy memory usage for unparalleled lookup speed."
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
