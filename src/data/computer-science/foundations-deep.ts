import { DeepTopic } from "@/types/knowledge";

export const foundationsDeep: DeepTopic[] = [
  {
    id: "binary-and-number-systems",
    slug: "binary-and-number-systems",
    title: "Binary & Number Systems",
    difficulty: "Beginner",
    category: "foundations",
    shortDescription: "How computers represent information using only two states: on and off.",
    overview: {
      question: "Why do computers use 1s and 0s?",
      answer: "Because computers are built from microscopic electronic switches (transistors). It is much more reliable to detect two distinct states (high voltage/low voltage) than to measure precise intermediate voltages."
    },
    whyItExists: {
      problem: "We need a reliable physical mechanism to represent, store, and process complex human data (text, numbers, images).",
      solution: "Representing everything as a combination of independent Boolean states (bits).",
      keyInsight: "Any finite information can be encoded as a sequence of bits."
    },
    coreConcepts: [
      { title: "Base-2 Number System", explanation: "A positional numeral system using only 0 and 1, where each position represents a power of 2." },
      { title: "Hexadecimal (Base-16)", explanation: "Used as a human-friendly shorthand for binary because one hex digit perfectly maps to four binary digits (a nibble)." },
      { title: "Two's Complement", explanation: "The clever mathematical encoding used by modern CPUs to represent negative numbers so that addition and subtraction can use the same hardware." }
    ],
    keyTerms: [
      { term: "Bit", definition: "Binary Digit. The fundamental unit of information." },
      { term: "Byte", definition: "A sequence of 8 bits, typically the smallest addressable unit of memory." }
    ],
    connections: [
      { topicId: "logic-gates", relationship: "Binary values are processed by logic gates" },
      { topicId: "cpu-architecture", relationship: "CPU registers store binary values" }
    ],
    realWorldExamples: [
      { title: "IP Addresses", description: "IPv4 addresses are just 32-bit binary numbers, conventionally displayed in 4-part decimal." },
      { title: "Color Codes", description: "Web colors like #FF0000 are just 24-bit binary values represented in hexadecimal." }
    ],
    keyTakeaways: [
      "Everything in a computer, from floating point math to high-definition video, ultimately breaks down to binary representations.",
      "Hexadecimal is not a special data type; it's just a notation for humans to read binary more easily."
    ],
    prerequisites: [],
    nextTopics: ["logic-and-boolean-algebra"]
  },
  {
    id: "logic-and-boolean-algebra",
    slug: "logic-and-boolean-algebra",
    title: "Logic & Boolean Algebra",
    difficulty: "Beginner",
    category: "foundations",
    shortDescription: "The mathematical foundation of digital circuits and control flow in software.",
    overview: {
      question: "How do simple switches do math?",
      answer: "By combining basic logical operations (AND, OR, NOT), we can build complex circuits capable of addition, memory storage, and instruction decoding."
    },
    whyItExists: {
      problem: "We need a mathematical framework to manipulate binary variables and design predictable hardware.",
      solution: "Boolean algebra, developed by George Boole long before digital computers existed, provided the exact logic system needed.",
      keyInsight: "True/False logic maps perfectly to On/Off circuits."
    },
    coreConcepts: [
      { title: "Basic Operators", explanation: "AND (both true), OR (either true), NOT (invert)." },
      { title: "Universal Gates", explanation: "NAND and NOR gates are 'universal', meaning every other logic gate can be constructed using only NAND or only NOR gates." },
      { title: "De Morgan's Laws", explanation: "Rules that allow transformation of AND operations into OR operations and vice versa, heavily used in optimizing both hardware circuits and software conditionals." }
    ],
    keyTerms: [
      { term: "Truth Table", definition: "A mathematical table used in logic to compute the functional values of logical expressions." },
      { term: "Short-circuit Evaluation", definition: "In software, evaluating a Boolean expression only as far as necessary (e.g., if A is false in 'A AND B', B is never evaluated)." }
    ],
    connections: [
      { topicId: "binary-and-number-systems", relationship: "Operates on binary values" },
      { topicId: "cpu-architecture", relationship: "Forms the Arithmetic Logic Unit (ALU)" }
    ],
    realWorldExamples: [
      { title: "Database Queries", description: "SQL WHERE clauses rely entirely on Boolean logic evaluation to filter rows." },
      { title: "Search Engines", description: "Complex search filters use Boolean operators to narrow down millions of results." }
    ],
    keyTakeaways: [
      "Hardware and software both rely on the exact same principles of Boolean logic.",
      "Complex decision trees can often be simplified using algebraic rules like De Morgan's Laws."
    ],
    prerequisites: ["binary-and-number-systems"],
    nextTopics: ["cpu-architecture"]
  },
  {
    id: "big-o-notation",
    slug: "big-o-notation",
    title: "Big O Notation",
    difficulty: "Beginner",
    category: "foundations",
    shortDescription: "The mathematical language for describing how algorithmic performance scales.",
    overview: {
      question: "How does this program behave when the input becomes extremely large?",
      answer: "Big O describes the upper bound of growth. It tells us how the runtime (or memory usage) increases as the number of elements (N) approaches infinity."
    },
    whyItExists: {
      problem: "Execution time varies by hardware, language, and background processes. We can't compare algorithms just by running them with a stopwatch.",
      solution: "A mathematical abstraction that drops constants and focuses only on the dominant growth rate.",
      keyInsight: "At scale, the shape of the growth curve matters far more than the speed of a single operation."
    },
    coreConcepts: [
      { title: "Asymptotic Analysis", explanation: "Evaluating the performance of an algorithm purely in terms of input size, ignoring hardware constants." },
      { title: "Common Complexities", explanation: "O(1) constant, O(log N) logarithmic, O(N) linear, O(N log N) linearithmic, O(N²) quadratic." },
      { title: "Space vs Time", explanation: "Big O applies to both the execution time and the auxiliary memory an algorithm requires." }
    ],
    keyTerms: [
      { term: "Worst-case", definition: "The maximum amount of time an algorithm can take for an input of size N (what Big O typically represents)." },
      { term: "Amortized Time", definition: "The average time taken per operation, if you average it out over a sequence of operations (e.g., dynamic array resizing)." }
    ],
    connections: [
      { topicId: "algorithms-vs-data-structures", relationship: "Used to evaluate algorithmic efficiency" },
      { topicId: "databases", relationship: "Explains why full table scans fail at scale" }
    ],
    realWorldExamples: [
      { title: "Database Indexing", description: "Looking up a record without an index is O(N) (Full Table Scan). With a B-Tree index, it becomes O(log N), allowing instant lookup among billions of rows." },
      { title: "Sorting Feeds", description: "Sorting 1 million tweets with an O(N²) algorithm requires 1 trillion operations. With O(N log N), it requires only ~20 million." }
    ],
    misconceptions: [
      { myth: "Big O tells you exactly how fast a program runs.", reality: "It describes growth behavior, not exact execution time. A small O(N²) algorithm might be faster than a complex O(N) algorithm for very small inputs." },
      { myth: "O(1) means the operation is instantly fast.", reality: "O(1) means the time does not change as N grows. It could still take 5 full seconds every time, which is constant but slow." }
    ],
    keyTakeaways: [
      "Drop constants and non-dominant terms. O(2N + 5) is simply O(N).",
      "Big O is about understanding scalability limitations before building."
    ],
    prerequisites: ["logic-and-boolean-algebra"],
    nextTopics: ["algorithms-vs-data-structures"]
  },
  {
    id: "algorithms-vs-data-structures",
    slug: "algorithms-vs-data-structures",
    title: "Algorithms vs Data Structures",
    difficulty: "Beginner",
    category: "foundations",
    shortDescription: "The fundamental partnership between organizing information and processing it.",
    overview: {
      question: "Are algorithms and data structures the same thing?",
      answer: "No. A Data Structure is how you organize and store data. An Algorithm is the step-by-step procedure for processing it. They are inextricably linked."
    },
    whyItExists: {
      problem: "You cannot write an efficient procedure without knowing how the data is arranged, and there's no point arranging data if you have no procedure to query it.",
      solution: "Pairing specific organizations (e.g., sorted arrays) with specific procedures (e.g., binary search).",
      keyInsight: "Algorithms + Data Structures = Programs."
    },
    coreConcepts: [
      { title: "The Trade-off", explanation: "You often trade space for time (e.g., caching, hash tables) or time for space (e.g., compression, recalculation)." },
      { title: "Symbiosis", explanation: "Algorithms dictate data structures. If you need to frequently search, you might choose a Tree. If you need to maintain insertion order, you choose a List." }
    ],
    keyTerms: [
      { term: "Algorithm", definition: "A finite sequence of well-defined instructions to solve a class of problems." },
      { term: "Data Structure", definition: "A specialized format for organizing, processing, retrieving and storing data." }
    ],
    connections: [
      { topicId: "big-o-notation", relationship: "Used to measure the partnership's efficiency" }
    ],
    realWorldExamples: [
      { title: "Routing Apps", description: "Google Maps uses Graph data structures paired with pathfinding algorithms like A*." },
      { title: "Text Editors", description: "VS Code uses Piece Tables (data structure) to quickly apply text edits (algorithms) without rewriting the whole file." }
    ],
    keyTakeaways: [
      "You rarely learn one without the other.",
      "The choice of data structure is often the most important architectural decision in a system."
    ],
    prerequisites: ["big-o-notation"],
    nextTopics: ["recursion"]
  },
  {
    id: "recursion",
    slug: "recursion",
    title: "Recursion",
    difficulty: "Intermediate",
    category: "foundations",
    shortDescription: "Solving problems by solving smaller instances of the exact same problem.",
    overview: {
      question: "How can a function call itself without looping forever?",
      answer: "By reducing the problem's scope on every call and ensuring there is a strict 'base case' where the function stops calling itself and returns a value."
    },
    whyItExists: {
      problem: "Some problems (like traversing a filesystem or rendering a nested UI) have an unknown depth and self-similar structure, making iterative (while-loop) solutions complex to write and maintain.",
      solution: "A function that solves the current layer, and calls itself to handle the deeper layers.",
      keyInsight: "If you can define a problem in terms of itself, you can solve it with recursion."
    },
    coreConcepts: [
      { title: "Base Case", explanation: "The condition under which the recursive function stops calling itself. Without this, you get a Stack Overflow." },
      { title: "Call Stack", explanation: "The OS mechanism that tracks where the program is. Every recursive call pushes a new frame onto the stack, consuming memory." },
      { title: "Tail Recursion", explanation: "An optimization where the recursive call is the very last operation, allowing compilers to reuse the stack frame and prevent memory exhaustion." }
    ],
    keyTerms: [
      { term: "Stack Overflow", definition: "A fatal error occurring when a program runs out of memory in the call stack, usually due to infinite recursion." },
      { term: "Divide and Conquer", definition: "An algorithmic paradigm that recursively breaks a problem into two or more sub-problems." }
    ],
    connections: [
      { topicId: "memory-management", relationship: "Relies heavily on the Call Stack" }
    ],
    realWorldExamples: [
      { title: "File Explorers", description: "Calculating the total size of a folder recursively sums the files in that folder, plus the sizes of all sub-folders." },
      { title: "React Virtual DOM", description: "Traversing the component tree to render UI elements or compute differences." }
    ],
    misconceptions: [
      { myth: "Recursion is always better/faster than iteration.", reality: "Recursion is often slower and consumes more memory due to stack frames. It is chosen for clarity, not performance, unless optimized." }
    ],
    keyTakeaways: [
      "Every recursive algorithm can be written iteratively using an explicit Stack data structure.",
      "Always define the base case before writing the recursive logic."
    ],
    prerequisites: ["algorithms-vs-data-structures"],
    nextTopics: ["abstraction"]
  },
  {
    id: "abstraction",
    slug: "abstraction",
    title: "Abstraction",
    difficulty: "Intermediate",
    category: "foundations",
    shortDescription: "Hiding complexity behind clean interfaces to build scalable systems.",
    overview: {
      question: "How do humans build systems with billions of parts?",
      answer: "By creating boundaries. We hide the messy internal details of a system behind a simple, predictable interface, allowing higher layers to use it without understanding it."
    },
    whyItExists: {
      problem: "Human working memory is limited. No single engineer can understand every electron, transistor, instruction, and line of code in a modern web request simultaneously.",
      solution: "Layering. We build a reliable component, define how to use it, and then treat it as a 'black box' when building the next layer up.",
      keyInsight: "Complexity must be managed through deliberate ignorance of lower-level details."
    },
    coreConcepts: [
      { title: "Black Box", explanation: "A system whose internal workings are hidden, known only by its inputs and outputs." },
      { title: "Leaky Abstraction", explanation: "When the hidden details of a lower layer 'leak' through the interface, forcing the higher layer to deal with them (e.g., network latency leaking into a remote procedure call)." },
      { title: "Interfaces", explanation: "The strict contract defining how two abstract layers communicate." }
    ],
    keyTerms: [
      { term: "Encapsulation", definition: "Bundling data with the methods that operate on it, restricting direct access to the internals." }
    ],
    connections: [
      { topicId: "cpu-architecture", relationship: "The Instruction Set Architecture (ISA) is an abstraction over hardware" },
      { topicId: "apis", relationship: "APIs are the ultimate software abstraction boundary" }
    ],
    engineeringMoment: {
      title: "The Creation of High-Level Languages",
      story: "Early programmers wrote raw machine code or assembly, managing registers manually. Grace Hopper and others championed the idea that code should be written in an abstract, human-readable language (like COBOL) and translated by a compiler.",
      lesson: "Compilers introduced one of the most important abstractions in history, decoupling software logic from physical hardware execution."
    },
    realWorldExamples: [
      { title: "Cloud Computing", description: "AWS EC2 abstracts away physical data centers, power supplies, and hardware racks into a simple 'Start Instance' API call." },
      { title: "File Systems", description: "You write to a 'file', completely abstracted from the complex mechanics of spinning magnetic platters or SSD flash translation layers." }
    ],
    keyTakeaways: [
      "All software engineering is the practice of drawing appropriate abstraction boundaries.",
      "All non-trivial abstractions, to some degree, are leaky."
    ],
    prerequisites: ["algorithms-vs-data-structures"],
    nextTopics: ["cpu-architecture"]
  }
];
