import { DeepTopic } from "@/types/knowledge";

export const mathNumberTheoryDeep: DeepTopic[] = [
  {
    id: "sieve-of-eratosthenes",
    slug: "sieve-of-eratosthenes",
    title: "Sieve of Eratosthenes",
    difficulty: "Beginner",
    category: "math-number-theory",
    shortDescription: "An ancient, highly efficient algorithm for finding all prime numbers up to a given limit.",
    overview: {
      question: "How do you quickly find every prime number between 1 and 1,000,000?",
      answer: "Instead of checking if every single number is prime, you assume they all are. Then you start at 2, and cross out every multiple of 2. Move to the next uncrossed number (3), cross out its multiples. Repeat. What is left are the primes."
    },
    whyItExists: {
      problem: "Checking if a number N is prime takes O(√N). Doing this for every number from 1 to M takes O(M√M). This is too slow for competitive programming.",
      solution: "Precompute the primes using an array of booleans. Crossing out multiples is drastically faster than running division checks on every number.",
      keyInsight: "Multiplication (generating multiples) is faster than Division (checking for factors)."
    },
    coreConcepts: [
      { title: "The Boolean Array", explanation: "Create an array `isPrime[N+1]` initialized to `true`. `isPrime[0]` and `isPrime[1]` are `false`." },
      { title: "The Optimization", explanation: "You only need to run the outer loop up to √N. If a number is composite, its smallest prime factor is guaranteed to be ≤ √N." },
      { title: "Time Complexity", explanation: "O(N log(log N)). For all practical purposes in competitive programming, this is essentially O(N)." }
    ],
    keyTerms: [
      { term: "Composite Number", definition: "A positive integer that can be formed by multiplying two smaller positive integers. The opposite of a prime." }
    ],
    connections: [
      { topicId: "modular-arithmetic", relationship: "Often used together in cryptography problems." },
      { topicId: "arrays", relationship: "The underlying data structure for the Sieve." }
    ],
    realWorldExamples: [
      { title: "Cryptography", description: "RSA encryption relies heavily on prime numbers. While the Sieve is too slow for massive 2048-bit primes, it is used to quickly rule out small prime factors." }
    ],
    keyTakeaways: [
      "If a problem asks about primes up to ~10^7, you almost certainly need to precompute them using the Sieve.",
      "The space complexity is O(N), which is usually the limiting factor (an array of 10^8 booleans takes about 100MB of RAM)."
    ],
    prerequisites: ["arrays", "big-o-notation"],
    nextTopics: ["modular-arithmetic"]
  },
  {
    id: "modular-arithmetic",
    slug: "modular-arithmetic",
    title: "Modular Arithmetic",
    difficulty: "Intermediate",
    category: "math-number-theory",
    shortDescription: "The mathematics of 'wrapping around', crucial for handling massive numbers in CP.",
    overview: {
      question: "Why do so many CP problems say 'Output the answer modulo 10^9 + 7'?",
      answer: "Because the actual answer is a number so astronomically large it would crash the CPU or cause integer overflow. Modular arithmetic keeps the numbers safely within a 64-bit integer while preserving mathematical truths."
    },
    whyItExists: {
      problem: "A standard 64-bit integer can only hold values up to ~18 quintillion. Combinatorics problems easily exceed this.",
      solution: "Perform the modulo operation (`%`) at every single step of your calculation, not just at the end.",
      keyInsight: "`(A + B) % M = ((A % M) + (B % M)) % M`. The modulo operator distributes perfectly over addition and multiplication."
    },
    coreConcepts: [
      { title: "Addition and Multiplication", explanation: "You can freely apply `% M` at any point during addition or multiplication chains to prevent overflow." },
      { title: "The Division Problem", explanation: "You CANNOT do `(A / B) % M`. Division does not distribute. Instead, you must multiply by the Modular Multiplicative Inverse of B." },
      { title: "Fermat's Little Theorem", explanation: "If M is prime, `A^(M-1) ≡ 1 (mod M)`. This is the magic formula used to calculate the Modular Multiplicative Inverse." }
    ],
    keyTerms: [
      { term: "Modulo", definition: "The remainder after division. 10 % 3 = 1." }
    ],
    connections: [
      { topicId: "dynamic-programming", relationship: "DP problems with massive state spaces almost always require modular arithmetic." }
    ],
    misconceptions: [
      { myth: "You only need to apply the modulo at the very end of your function.", reality: "If you wait until the end, your variables will have already overflowed into negative numbers. Apply it constantly." }
    ],
    keyTakeaways: [
      "10^9 + 7 is chosen because it is a large prime, fits in a 32-bit integer, and multiplying two such numbers fits safely in a 64-bit integer without overflowing.",
      "Never use the `/` operator when dealing with modulo arithmetic."
    ],
    prerequisites: [],
    nextTopics: []
  }
];
