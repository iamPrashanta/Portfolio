import { DeepTopic } from "@/types/knowledge";

export const treesDeep: DeepTopic[] = [
  {
    id: "binary-trees",
    slug: "binary-trees",
    title: "Binary Trees",
    difficulty: "Beginner",
    category: "trees",
    shortDescription: "A hierarchical data structure where each node has at most two children.",
    overview: {
      question: "How do we store data that naturally branches, like a family tree or a file system?",
      answer: "We use a Tree. It is a Linked List where instead of pointing to one 'next' node, a node can point to a 'Left Child' and a 'Right Child'."
    },
    whyItExists: {
      problem: "Arrays and Linked Lists are linear. Searching them requires checking items one by one (O(N)).",
      solution: "By structuring data hierarchically, we can theoretically ignore half the tree with every step we take down, massively speeding up searches.",
      keyInsight: "Trees combine the dynamic insertion of Linked Lists with the search speed of sorted Arrays."
    },
    coreConcepts: [
      { title: "Root", explanation: "The absolute top node of the tree. There is only one." },
      { title: "Leaf", explanation: "A node at the very bottom that has no children." },
      { title: "Depth and Height", explanation: "Depth is how many steps a node is from the Root. Height is how many steps the Root is from the deepest Leaf. A 'balanced' tree has the minimum possible height." }
    ],
    keyTerms: [
      { term: "Traversals", definition: "Since trees aren't linear, we need specific algorithms (In-order, Pre-order, Post-order) to visit every node exactly once." }
    ],
    connections: [
      { topicId: "binary-search-trees", relationship: "The mathematical restriction that makes binary trees incredibly fast." },
      { topicId: "recursion", relationship: "Trees are naturally recursive; every child node is the Root of its own sub-tree." }
    ],
    realWorldExamples: [
      { title: "DOM (Document Object Model)", description: "The HTML of this very webpage is loaded into the browser's memory as a massive Tree structure." }
    ],
    keyTakeaways: [
      "A Binary Tree is just a data structure. It only becomes magically fast when it is ordered (like a Binary Search Tree).",
      "Almost all algorithms written for Trees use Recursion."
    ],
    prerequisites: ["linked-lists", "recursion"],
    nextTopics: ["binary-search-trees"]
  },
  {
    id: "binary-search-trees",
    slug: "binary-search-trees",
    title: "Binary Search Trees (BST)",
    difficulty: "Intermediate",
    category: "trees",
    shortDescription: "A binary tree with a strict mathematical ordering rule for O(log N) operations.",
    overview: {
      question: "How do we find a specific number in a tree instantly?",
      answer: "We enforce a strict rule: Everything to the Left of a node must be smaller. Everything to the Right must be larger."
    },
    whyItExists: {
      problem: "A standard Binary Tree offers no search optimization. You still have to check every node.",
      solution: "The BST property. When searching for '50' at the Root node '100', we instantly know 50 is on the left. We can completely ignore the entire right half of the tree.",
      keyInsight: "Discarding half of the remaining data at every step yields logarithmic O(log N) time complexity."
    },
    coreConcepts: [
      { title: "The BST Property", explanation: "Left Child < Parent < Right Child." },
      { title: "In-Order Traversal", explanation: "If you traverse a BST by visiting Left, then Parent, then Right, it will print out all the numbers in perfect ascending sorted order." },
      { title: "The Imbalance Problem", explanation: "If you insert sorted data (1, 2, 3, 4, 5) into a naive BST, it just forms a straight line to the right. It degrades into a Linked List, ruining the O(log N) speed to O(N)." }
    ],
    keyTerms: [
      { term: "Self-Balancing Trees", definition: "Advanced BSTs (like AVL Trees or Red-Black Trees) that automatically rotate their nodes during insertion to guarantee the tree never becomes a straight line." }
    ],
    connections: [
      { topicId: "binary-trees", relationship: "The foundational structure." },
      { topicId: "big-o-notation", relationship: "The physical embodiment of O(log N)." }
    ],
    realWorldExamples: [
      { title: "Database Indexes", description: "While actual databases use B-Trees (which have more than 2 children), the core logic is identical to a BST." }
    ],
    misconceptions: [
      { myth: "BST operations are always O(log N).", reality: "Only if the tree is balanced. In the worst-case scenario (inserting sorted data), a BST is O(N)." }
    ],
    keyTakeaways: [
      "The BST is one of the most important concepts in computer science because it is the foundation of database indexing.",
      "Never use a standard BST in production; always use a self-balancing variant."
    ],
    prerequisites: ["binary-trees"],
    nextTopics: ["heaps", "tries"]
  },
  {
    id: "heaps",
    slug: "heaps",
    title: "Heaps & Priority Queues",
    difficulty: "Advanced",
    category: "trees",
    shortDescription: "A specialized tree that always keeps the minimum or maximum element at the absolute root.",
    overview: {
      question: "How do hospital emergency rooms know who to treat next?",
      answer: "They use a Priority Queue (powered by a Heap). A Heap guarantees that the item with the highest priority is always instantly accessible at the top of the tree."
    },
    whyItExists: {
      problem: "Arrays take O(N) to find the largest item. BSTs take O(log N) but are overkill if we *only* care about the largest/smallest item.",
      solution: "A Heap. It doesn't care about sorting the whole tree perfectly. It only guarantees that a Parent is always greater than its Children.",
      keyInsight: "Partial sorting is much faster to maintain than complete sorting."
    },
    coreConcepts: [
      { title: "Max-Heap vs Min-Heap", explanation: "In a Max-Heap, the largest number is always at the Root. In a Min-Heap, the smallest number is at the Root." },
      { title: "Array Implementation", explanation: "Because Heaps are 'complete' trees (filled strictly left-to-right), we don't actually use Node objects and Pointers. We just store it in a flat Array and use math (index * 2) to find children." },
      { title: "Heapify", explanation: "When you extract the Root, you move a leaf to the top, and it 'bubbles down' to its correct spot to restore the heap property. This takes exactly O(log N)." }
    ],
    keyTerms: [
      { term: "Priority Queue", definition: "An abstract concept (like a standard queue, but items jump the line based on priority). A Heap is the physical data structure used to build it." }
    ],
    connections: [
      { topicId: "arrays", relationship: "Heaps are usually implemented using Arrays, not Nodes." }
    ],
    realWorldExamples: [
      { title: "Dijkstra's Shortest Path", description: "GPS routing algorithms use a Min-Heap to constantly ask 'What is the closest unvisited city right now?'" },
      { title: "OS Task Scheduling", description: "The operating system uses a Priority Queue to ensure critical system tasks get CPU time before background apps." }
    ],
    keyTakeaways: [
      "If a problem asks for the 'Top K elements', 'Kth largest', or involves a 'Priority', immediately think of a Heap.",
      "Extracting the max element is O(log N). Just looking at it is O(1)."
    ],
    prerequisites: ["binary-trees"],
    nextTopics: ["graphs"]
  },
  {
    id: "tries",
    slug: "tries",
    title: "Tries (Prefix Trees)",
    difficulty: "Advanced",
    category: "trees",
    shortDescription: "A specialized tree used exclusively for fast string prefix matching.",
    overview: {
      question: "How does Google Autocomplete work so fast?",
      answer: "It uses a Trie (pronounced 'Try'). Instead of storing entire words, each node stores a single letter. Paths down the tree spell out words."
    },
    whyItExists: {
      problem: "Searching a massive Hash Table for every word that *starts with* 'appl' is impossible because Hash Tables only support exact matches.",
      solution: "Store words character by character in a tree. To find all words starting with 'appl', you just walk down the nodes A -> P -> P -> L, and whatever branches exist below that are your autocomplete suggestions.",
      keyInsight: "Trading memory overhead for blazing fast O(L) prefix searches, where L is the length of the word."
    },
    coreConcepts: [
      { title: "Node Structure", explanation: "A Trie node doesn't have a Left and Right child. It typically has a Hash Map or Array of 26 children (one for each letter of the alphabet)." },
      { title: "End of Word Marker", explanation: "Since 'app' and 'apple' are both words, the node for the second 'p' must contain a boolean flag indicating 'a valid word ends here'." }
    ],
    keyTerms: [
      { term: "Prefix", definition: "The beginning of a string. 'cat' is a prefix of 'caterpillar'." }
    ],
    connections: [
      { topicId: "strings", relationship: "Tries are exclusively used for string manipulation." },
      { topicId: "hash-tables", relationship: "Trie nodes often use Hash Tables to store their children." }
    ],
    realWorldExamples: [
      { title: "Search Autocomplete", description: "Typing into a search bar queries a highly optimized distributed Trie." },
      { title: "Spell Checkers", description: "Your phone's keyboard uses a Trie to instantly verify if the word you typed exists in the dictionary." }
    ],
    keyTakeaways: [
      "A Trie takes up significantly more memory than an array of strings, but it is the absolute fastest way to do prefix-matching.",
      "The time complexity is completely independent of how many words are in the dictionary. It only depends on the length of the word you are typing."
    ],
    prerequisites: ["trees", "strings"],
    nextTopics: []
  }
];
