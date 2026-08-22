import { DeepTopic } from "@/types/knowledge";

export const stringAlgorithmsDeep: DeepTopic[] = [
  {
    id: "kmp",
    slug: "kmp",
    title: "KMP Algorithm",
    difficulty: "Advanced",
    category: "string-algorithms",
    shortDescription: "A string searching algorithm that never evaluates the same character twice.",
    overview: {
      question: "If you search for the word 'ababc' in a massive document and mismatch on the 'c', do you have to start the search all over again?",
      answer: "No. The Knuth-Morris-Pratt (KMP) algorithm precalculates the patterns within the search word itself. When a mismatch occurs, it knows exactly how far back to shift without ever moving backward in the main document."
    },
    whyItExists: {
      problem: "Naive string matching is O(N * M). If you search for 'AAAAAB' in a document of 'AAAAAAAAAB', the naive approach checks the 'A's over and over again.",
      solution: "Precompute a Longest Prefix Suffix (LPS) array for the search word. This array tells the algorithm where to resume searching after a failure.",
      keyInsight: "Your search pattern contains information about its own structure. Exploit it."
    },
    coreConcepts: [
      { title: "The LPS Array", explanation: "For every index in the search string, the LPS array stores the length of the longest proper prefix that is also a suffix." },
      { title: "The Matching Phase", explanation: "When characters match, move both pointers forward. When they mismatch, use the LPS array to slide the search word forward intelligently." }
    ],
    keyTerms: [
      { term: "Prefix", definition: "The beginning of a string." },
      { term: "Suffix", definition: "The end of a string." }
    ],
    connections: [
      { topicId: "arrays-and-strings", relationship: "The fundamental data structures involved." }
    ],
    realWorldExamples: [
      { title: "Text Editors", description: "Ctrl+F functionality in text editors relies on algorithms like KMP or Boyer-Moore to search massive logs instantly." }
    ],
    keyTakeaways: [
      "KMP guarantees O(N + M) time complexity for string searching.",
      "The hardest part of KMP is not the search itself, but understanding how to build the LPS array."
    ],
    prerequisites: ["strings", "two-pointers"],
    nextTopics: ["rabin-karp"]
  }
];
