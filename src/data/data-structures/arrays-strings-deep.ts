import { DeepTopic } from "@/types/knowledge";

export const arraysAndStringsDeep: DeepTopic[] = [
  {
    id: "arrays",
    slug: "arrays",
    title: "Arrays",
    difficulty: "Beginner",
    category: "arrays-and-strings",
    shortDescription: "The most fundamental data structure. A contiguous block of memory.",
    overview: {
      question: "What is an array under the hood?",
      answer: "It is simply a single, continuous block of memory divided into equally sized chunks. Because it is contiguous, the CPU can instantly calculate the exact memory address of any element."
    },
    whyItExists: {
      problem: "We need to store multiple items of the same type and access them instantly without searching through the entire collection.",
      solution: "Reserve a continuous line of bytes in RAM. To find the 5th item, the CPU just takes the memory address of the 1st item and adds (4 * size_of_item).",
      keyInsight: "Contiguous memory is the secret to O(1) random access."
    },
    coreConcepts: [
      { title: "Static Arrays", explanation: "Fixed size upon creation. If you need to add an element but the array is full, you are out of luck." },
      { title: "Dynamic Arrays (Vectors/Lists)", explanation: "When the array fills up, the system automatically allocates a new, larger block of memory (usually double the size), copies everything over, and deletes the old block." },
      { title: "Zero-Indexing", explanation: "The index is an offset. The 1st element is 0 items away from the start. The 2nd element is 1 item away." }
    ],
    keyTerms: [
      { term: "Contiguous", definition: "Sharing a common border; touching. In memory, it means bytes are laid out sequentially with no gaps." },
      { term: "Amortized O(1)", definition: "Dynamic array insertions are usually O(1), but occasionally trigger an O(N) resize. On average across many operations, it averages out to O(1)." }
    ],
    connections: [
      { topicId: "strings", relationship: "Strings are just arrays of characters under the hood." },
      { topicId: "hash-tables", relationship: "Hash Tables use arrays as their underlying storage mechanism." }
    ],
    realWorldExamples: [
      { title: "Image Processing", description: "A digital image is represented in memory as a massive 1D or 2D array of pixel color values." }
    ],
    misconceptions: [
      { myth: "Arrays are slow for insertions.", reality: "They are slow O(N) if you insert into the *middle* (because every subsequent element must be shifted). They are blazing fast O(1) if you append to the *end*." }
    ],
    keyTakeaways: [
      "Arrays are highly cache-friendly. The CPU loads memory in chunks, so iterating through an array is the fastest operation in computer science.",
      "In languages like Python or JS, 'Arrays' are actually dynamic arrays that hide the complexity of memory management."
    ],
    prerequisites: ["memory-management"],
    nextTopics: ["strings", "two-pointers"]
  },
  {
    id: "strings",
    slug: "strings",
    title: "Strings",
    difficulty: "Beginner",
    category: "arrays-and-strings",
    shortDescription: "Sequences of characters, inherently linked to arrays and encoding.",
    overview: {
      question: "How does a computer store text?",
      answer: "Computers only understand numbers. A string is an array of numbers, where each number maps to a specific character based on an encoding standard like ASCII or UTF-8."
    },
    whyItExists: {
      problem: "We need a standardized way to represent human language, punctuation, and symbols in binary.",
      solution: "Create mapping tables (Character Encodings). Store text as an array of these mapped integers.",
      keyInsight: "Text manipulation is just array manipulation applied to numbers representing characters."
    },
    coreConcepts: [
      { title: "Immutability", explanation: "In many languages (Java, Python, JS), strings cannot be changed after creation. If you modify a string, the system actually creates a brand new string and destroys the old one." },
      { title: "ASCII vs Unicode", explanation: "ASCII uses 8 bits (256 characters) and covers English. Unicode (UTF-8) uses variable-length bytes to cover every language and emoji on Earth." },
      { title: "String Builder", explanation: "A pattern used to construct strings dynamically without the massive performance penalty of creating a new immutable string object in every loop iteration." }
    ],
    keyTerms: [
      { term: "Concatenation", definition: "The operation of joining two strings end-to-end." },
      { term: "Null-Terminated", definition: "In C, strings don't track their own length. They just end with a special '0' byte (null terminator)." }
    ],
    connections: [
      { topicId: "arrays", relationship: "Strings are implemented as arrays." },
      { topicId: "tries", relationship: "Tries are the optimal data structure for storing dictionaries of strings." }
    ],
    engineeringMoment: {
      title: "The Emoji Crash",
      story: "Older systems assumed every character was exactly 1 byte (ASCII) or 2 bytes (UTF-16). When 4-byte Emojis became popular, naive string parsing code would split the 4 bytes in half, resulting in corrupted data or system crashes.",
      lesson: "Never assume string length equals byte length in a globalized internet."
    },
    keyTakeaways: [
      "Because strings are often immutable, repeatedly concatenating them in a loop turns an O(N) algorithm into an O(N²) memory disaster.",
      "Any algorithm that works on an array usually works on a string."
    ],
    prerequisites: ["arrays"],
    nextTopics: ["sliding-window", "tries"]
  },
  {
    id: "two-pointers",
    slug: "two-pointers",
    title: "Two Pointers Technique",
    difficulty: "Intermediate",
    category: "arrays-and-strings",
    shortDescription: "An algorithmic pattern for iterating through an array from multiple positions simultaneously.",
    overview: {
      question: "How can I find a pair of numbers in an array without checking every single combination?",
      answer: "If the array is sorted, you can place one pointer at the start and one at the end. By moving them toward the center based on conditions, you find the answer in O(N) instead of O(N²)."
    },
    whyItExists: {
      problem: "Nested loops (checking every item against every other item) are O(N²) time complexity. This is too slow for large datasets.",
      solution: "Use two index variables (pointers) traversing the array intelligently to eliminate redundant checks.",
      keyInsight: "Exploiting the sorted nature of an array allows you to mathematically discard entire sections of combinations."
    },
    coreConcepts: [
      { title: "Opposite Ends", explanation: "One pointer starts at 0, the other at N-1. They move inward. Excellent for finding pairs, reversing arrays, or checking palindromes." },
      { title: "Fast and Slow (Tortoise and Hare)", explanation: "Both pointers start at 0. One moves 1 step at a time, the other moves 2 steps. Used primarily in Linked Lists to find cycles or midpoints." },
      { title: "Sorting Requirement", explanation: "The 'Opposite Ends' technique almost always requires the array to be sorted first to guarantee logic." }
    ],
    keyTerms: [
      { term: "Pointer", definition: "In this context, it is usually just an integer representing an array index, not a physical memory address." }
    ],
    connections: [
      { topicId: "arrays", relationship: "The primary data structure for this technique." },
      { topicId: "sliding-window", relationship: "A specialized, more complex variation of the Two Pointers concept." }
    ],
    realWorldExamples: [
      { title: "Video Playback Buffer", description: "One pointer tracks the user's current watching position, and another pointer tracks how far ahead the video has buffered." }
    ],
    misconceptions: [
      { myth: "Two Pointers only applies to C/C++.", reality: "It has nothing to do with C memory pointers. It is an index-tracking logic pattern applicable in Python, JS, Java, etc." }
    ],
    keyTakeaways: [
      "If a problem asks for 'pairs', 'triplets', or 'reversing', immediately think of Two Pointers.",
      "Sorting an array takes O(N log N). Doing Two Pointers takes O(N). The total time is O(N log N), which is drastically better than O(N²)."
    ],
    prerequisites: ["arrays"],
    nextTopics: ["sliding-window"]
  },
  {
    id: "sliding-window",
    slug: "sliding-window",
    title: "Sliding Window",
    difficulty: "Advanced",
    category: "arrays-and-strings",
    shortDescription: "A powerful optimization technique for tracking contiguous subarrays.",
    overview: {
      question: "How do you find the maximum sum of any 5 consecutive elements in a massive array?",
      answer: "Instead of recalculating the sum of 5 elements over and over, you create a 'window' of 5 elements. As the window slides right, you just add the new element and subtract the old element."
    },
    whyItExists: {
      problem: "Evaluating every possible contiguous subarray requires overlapping, repetitive work, leading to O(N * K) or O(N²) complexity.",
      solution: "Maintain the state of a 'window' defined by a Left and Right pointer. Update the state mathematically as the window shifts.",
      keyInsight: "You don't need to recalculate the entire window; you only need to calculate what changed at the edges."
    },
    coreConcepts: [
      { title: "Fixed Window", explanation: "The distance between Left and Right pointers never changes (e.g., 'Find the max sum of exactly 3 elements')." },
      { title: "Dynamic Window", explanation: "The Right pointer expands to absorb data, and the Left pointer contracts to enforce constraints (e.g., 'Find the longest subarray that sums to less than X')." },
      { title: "State Tracking", explanation: "You must maintain a variable (sum, hash map of frequencies, etc.) that accurately represents the data currently *inside* the window." }
    ],
    keyTerms: [
      { term: "Contiguous Subarray", definition: "A slice of an array where all elements are side-by-side. [1,2,3] is contiguous. [1,3,5] is a subsequence, not a subarray." }
    ],
    connections: [
      { topicId: "two-pointers", relationship: "Sliding Window is a specialized implementation of Two Pointers." },
      { topicId: "hash-tables", relationship: "Often used together to track character frequencies within the window." }
    ],
    realWorldExamples: [
      { title: "Network Rate Limiting", description: "APIs use sliding time windows (e.g., '100 requests in the last 60 seconds') to prevent DDoS attacks and manage traffic." }
    ],
    keyTakeaways: [
      "If a problem asks for the 'longest', 'shortest', or 'maximum' of a *contiguous* subarray or substring, Sliding Window is almost always the answer.",
      "It transforms O(N²) nested loops into a single O(N) pass."
    ],
    prerequisites: ["two-pointers"],
    nextTopics: []
  }
];
