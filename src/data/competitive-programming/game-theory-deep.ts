import { DeepTopic } from "@/types/knowledge";

export const gameTheoryDeep: DeepTopic[] = [
  {
    id: "nim",
    slug: "nim",
    title: "Game of Nim",
    difficulty: "Advanced",
    category: "game-theory",
    shortDescription: "The mathematical foundation for solving perfect-information impartial games.",
    overview: {
      question: "In a game where two players take turns removing stones from piles, how can you know who will win before the first move is even made?",
      answer: "You XOR the sizes of all the piles together. If the result is 0, the second player is mathematically guaranteed to win. If it is anything else, the first player wins."
    },
    whyItExists: {
      problem: "Simulating every possible move in a game tree (using Minimax) takes exponential time O(B^D). This is far too slow for CP.",
      solution: "Use Bouton's Theorem. Convert the game state into binary and evaluate it using XOR logic.",
      keyInsight: "Game theory problems in CP are rarely about simulation; they are about finding the mathematical invariant."
    },
    coreConcepts: [
      { title: "Nim-Sum", explanation: "The cumulative XOR sum of all pile sizes. `3 ^ 4 ^ 5 = 2`." },
      { title: "Winning State", explanation: "A state with a Nim-Sum > 0. The current player can ALWAYS make a move that leaves the opponent with a Nim-Sum of 0." },
      { title: "Losing State", explanation: "A state with a Nim-Sum == 0. No matter what the current player does, they will leave the opponent with a Nim-Sum > 0." }
    ],
    keyTerms: [
      { term: "Impartial Game", definition: "A game where the available moves depend ONLY on the state of the board, not on whose turn it is (unlike Chess, where you can only move your own pieces)." },
      { term: "XOR (Exclusive OR)", definition: "A bitwise operation that returns 1 if bits are different, and 0 if they are the same." }
    ],
    connections: [
      { topicId: "dynamic-programming", relationship: "If a game cannot be reduced to Nim, it usually requires DP/Memoization to solve." }
    ],
    realWorldExamples: [
      { title: "Combinatorial Mathematics", description: "The Sprague-Grundy theorem proves that ANY impartial game can be mathematically reduced to an equivalent game of Nim." }
    ],
    keyTakeaways: [
      "If you see a 2-player game in CP with optimal play, immediately check if it can be solved using XOR.",
      "The time complexity drops from O(B^D) simulation down to O(N) evaluation."
    ],
    prerequisites: ["bit-manipulation"],
    nextTopics: []
  }
];
