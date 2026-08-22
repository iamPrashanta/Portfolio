import { DeepTopic } from "@/types/knowledge";

export const sortingSearchingDeep: DeepTopic[] = [
  {
    id: "binary-search",
    slug: "binary-search",
    title: "Binary Search",
    difficulty: "Beginner",
    category: "sorting-searching",
    shortDescription: "The fundamental algorithm for finding a target in a sorted collection in O(log N) time.",
    overview: {
      question: "How do you find a word in a dictionary with 10,000 pages?",
      answer: "You don't read page 1, then page 2. You open to the middle. If the word you want is alphabetically earlier, you tear the dictionary in half and throw away the back half. You repeat this until you find the word."
    },
    whyItExists: {
      problem: "Linear Search (checking every item one by one) takes O(N) time. For a billion items, that takes too long.",
      solution: "If the data is already sorted, we can mathematically discard half of the remaining possibilities with a single comparison.",
      keyInsight: "Sorted data unlocks logarithmic time complexity."
    },
    coreConcepts: [
      { title: "The Pointers", explanation: "Maintain a `Left` and `Right` pointer. Calculate `Mid = (Left + Right) / 2`. Compare the value at `Mid` to the Target." },
      { title: "Discarding Halves", explanation: "If `Target < Mid`, set `Right = Mid - 1`. If `Target > Mid`, set `Left = Mid + 1`." },
      { title: "The Overflow Bug", explanation: "In older languages like C, `(Left + Right) / 2` can cause an integer overflow if the array is massive. The safe way is `Left + (Right - Left) / 2`." }
    ],
    keyTerms: [
      { term: "Logarithmic Time O(log N)", definition: "Every time the data size doubles, the algorithm only takes 1 extra step. 1,000 items = 10 steps. 1,000,000 items = 20 steps." }
    ],
    connections: [
      { topicId: "arrays-and-strings", relationship: "Requires a contiguous, sorted array." },
      { topicId: "binary-search-trees", relationship: "The exact same logic, applied to a tree structure." }
    ],
    realWorldExamples: [
      { title: "Database Lookups", description: "When a database searches a B-Tree index, it is performing a form of Binary Search at every node." }
    ],
    misconceptions: [
      { myth: "Always sort data so you can binary search it.", reality: "Sorting takes O(N log N) time. If you are only going to search the data once, it is much faster to just do an O(N) linear search. Binary search is only useful if you search many times." }
    ],
    keyTakeaways: [
      "Binary Search is simple conceptually, but notoriously difficult to implement flawlessly without off-by-one errors.",
      "It can be used to search not just arrays, but mathematical answer spaces (e.g., 'Find the minimum capacity of a ship to deliver packages in D days')."
    ],
    prerequisites: ["arrays", "big-o-notation"],
    nextTopics: ["merge-sort"]
  },
  {
    id: "merge-sort",
    slug: "merge-sort",
    title: "Merge Sort",
    difficulty: "Intermediate",
    category: "sorting-searching",
    shortDescription: "A highly stable, O(N log N) divide-and-conquer sorting algorithm.",
    overview: {
      question: "How do you efficiently sort a million numbers?",
      answer: "You split the million numbers into two halves of 500k. Sort those. Then 'merge' the two sorted halves together. How do you sort the 500k? Split them again."
    },
    whyItExists: {
      problem: "Naive sorting algorithms (Bubble Sort, Insertion Sort) compare every item to every other item, resulting in O(N²) time. This is disastrous at scale.",
      solution: "Divide and Conquer. Recursively divide the array until you have single elements (which are technically sorted). Then, merge them back together in linear time.",
      keyInsight: "Merging two arrays that are *already sorted* is extremely fast (O(N))."
    },
    coreConcepts: [
      { title: "Divide", explanation: "Split the array strictly in half until you reach base cases of length 1." },
      { title: "Conquer (Merge)", explanation: "Look at the first element of both sorted halves. Take the smaller one. Repeat until both halves are empty." },
      { title: "Space Complexity", explanation: "Unlike Quick Sort, Merge Sort requires O(N) extra memory because you cannot easily merge two arrays in place without massive shifting overhead." }
    ],
    keyTerms: [
      { term: "Stable Sort", definition: "If two items have the same value, they retain their original relative order. Merge Sort is inherently stable." }
    ],
    connections: [
      { topicId: "recursion", relationship: "The quintessential recursive algorithm." }
    ],
    realWorldExamples: [
      { title: "External Sorting", description: "When a database needs to sort a 100GB table but only has 4GB of RAM, it uses a variation of Merge Sort to sort chunks on disk." }
    ],
    keyTakeaways: [
      "Merge Sort guarantees O(N log N) performance, even in the absolute worst case.",
      "The heavy O(N) memory requirement makes it less popular than Quick Sort for standard arrays, but it is the algorithm of choice for sorting Linked Lists."
    ],
    prerequisites: ["recursion"],
    nextTopics: ["quick-sort"]
  },
  {
    id: "quick-sort",
    slug: "quick-sort",
    title: "Quick Sort",
    difficulty: "Advanced",
    category: "sorting-searching",
    shortDescription: "The most widely used sorting algorithm in practice, utilizing a 'pivot' to partition data.",
    overview: {
      question: "Why does almost every programming language use Quick Sort under the hood?",
      answer: "Because while it theoretically has a worse worst-case scenario than Merge Sort, its memory efficiency and cache-friendliness make it drastically faster in the real world."
    },
    whyItExists: {
      problem: "Merge Sort requires massive amounts of extra RAM to hold the duplicated arrays during the merge step.",
      solution: "Pick a 'Pivot' number. Move everything smaller than the pivot to the left, and everything larger to the right (Partitioning). This can be done 'in-place', requiring no extra RAM.",
      keyInsight: "Once you partition an array around a pivot, that pivot is in its absolute final, perfectly sorted position."
    },
    coreConcepts: [
      { title: "The Pivot", explanation: "Choosing a good pivot is critical. If you choose the absolute largest or smallest number every time, Quick Sort degrades to O(N²). Modern implementations pick random or median pivots." },
      { title: "In-Place Partitioning", explanation: "Using Two Pointers, we swap elements on opposite sides of the pivot without needing a second array." },
      { title: "Unstable", explanation: "Because we swap elements across large distances, Quick Sort is naturally unstable (identical elements might flip order)." }
    ],
    keyTerms: [
      { term: "In-Place", definition: "An algorithm that uses only a tiny O(1) or O(log N) amount of extra memory." }
    ],
    connections: [
      { topicId: "merge-sort", relationship: "The other half of the Divide and Conquer duo." },
      { topicId: "two-pointers", relationship: "Used heavily during the partition step." }
    ],
    realWorldExamples: [
      { title: "Language Standard Libraries", description: "C++'s `std::sort` and many others use Introsort—a hybrid that starts with Quick Sort for speed, but switches to Heap Sort if the recursion goes too deep." }
    ],
    keyTakeaways: [
      "Quick Sort is average-case O(N log N) but worst-case O(N²). We use it anyway because the constant factors in its execution are so incredibly small.",
      "It is the ultimate demonstration of how theoretical Big O doesn't always reflect real-world hardware performance."
    ],
    prerequisites: ["recursion", "two-pointers"],
    nextTopics: []
  },
  {
    id: "bfs",
    slug: "bfs",
    title: "Breadth-First Search (BFS)",
    difficulty: "Intermediate",
    category: "sorting-searching",
    shortDescription: "Exploring a tree or graph level by level, radiating outward like a ripple in water.",
    overview: {
      question: "How do you find the absolutely shortest path out of a maze?",
      answer: "You take 1 step in every possible direction. Then you take 2 steps in every possible direction. The first path that hits the exit is mathematically guaranteed to be the shortest."
    },
    whyItExists: {
      problem: "If you just pick a path and run until you hit a dead end (DFS), you might find the exit, but it might be a massive, winding detour.",
      solution: "BFS explores equally in all directions. It processes all nodes at distance 1 before moving to distance 2.",
      keyInsight: "BFS guarantees finding the shortest path in an unweighted graph."
    },
    coreConcepts: [
      { title: "The Queue", explanation: "BFS relies entirely on a First-In-First-Out (FIFO) Queue. You process a node, and immediately push all its neighbors to the back of the queue." },
      { title: "Visited Set", explanation: "In graphs (unlike trees), you must track which nodes you've visited, or you will get stuck in an infinite cycle." },
      { title: "Memory Intensive", explanation: "If a tree is very wide, the Queue will have to hold millions of nodes simultaneously. BFS uses significantly more RAM than DFS." }
    ],
    keyTerms: [
      { term: "Unweighted Graph", definition: "A graph where every edge has the exact same distance or cost." }
    ],
    connections: [
      { topicId: "graphs-intro", relationship: "The primary way to traverse a graph." },
      { topicId: "dfs", relationship: "The opposing strategy (Queue vs Stack)." }
    ],
    realWorldExamples: [
      { title: "Social Networks", description: "Finding out how you are connected to Kevin Bacon (Degrees of Separation) is purely a BFS algorithm." }
    ],
    keyTakeaways: [
      "Use BFS when you want the shortest path on an unweighted graph.",
      "If the graph is massive and highly connected, BFS might run out of memory before it finishes."
    ],
    prerequisites: ["trees", "graphs-intro"],
    nextTopics: ["dfs"]
  },
  {
    id: "dfs",
    slug: "dfs",
    title: "Depth-First Search (DFS)",
    difficulty: "Intermediate",
    category: "sorting-searching",
    shortDescription: "Exploring a tree or graph by diving as deep as possible before backtracking.",
    overview: {
      question: "How do you solve a Sudoku puzzle programmatically?",
      answer: "You pick a number and keep going. If you hit a dead end, you backtrack exactly one step, try a different number, and dive deep again. This is DFS."
    },
    whyItExists: {
      problem: "BFS requires massive memory to remember all the broad, shallow options. Sometimes we just want to know if a path exists, or we want to visit every node with minimal memory overhead.",
      solution: "Go deep. Follow a single path to its absolute end. Then step back and try the next path.",
      keyInsight: "DFS is naturally expressed via Recursion (using the Call Stack) or iteratively using a manual Stack data structure."
    },
    coreConcepts: [
      { title: "The Stack", explanation: "DFS relies entirely on a Last-In-First-Out (LIFO) structure. The most recently discovered node is the next one explored." },
      { title: "Backtracking", explanation: "When you hit a leaf or a dead end, the recursive function returns, effectively 'backing up' to the previous intersection to try a different route." },
      { title: "Memory Efficient", explanation: "DFS only needs to remember the single path it is currently on, meaning its space complexity is O(Height of Tree), not O(Width)." }
    ],
    keyTerms: [
      { term: "Call Stack", definition: "The memory the operating system uses to keep track of active functions. Heavy recursion can cause a 'Stack Overflow'." }
    ],
    connections: [
      { topicId: "bfs", relationship: "The opposing traversal strategy." },
      { topicId: "graph-algorithms", relationship: "Crucial for advanced algorithms like Topological Sort." }
    ],
    realWorldExamples: [
      { title: "Maze Generation & Solving", description: "Most algorithms that generate random mazes or solve complex puzzles rely heavily on DFS and backtracking." }
    ],
    misconceptions: [
      { myth: "DFS can find the shortest path.", reality: "DFS will find *a* path. It has absolutely no guarantee of finding the shortest path unless it checks every single path and compares them." }
    ],
    keyTakeaways: [
      "Use DFS when you want to visit every node, detect cycles, or solve puzzles via backtracking.",
      "In a graph, you MUST maintain a 'visited' set, or DFS will loop infinitely."
    ],
    prerequisites: ["recursion", "trees"],
    nextTopics: ["graph-algorithms"]
  }
];
