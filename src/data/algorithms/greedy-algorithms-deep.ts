import { DeepTopic } from "@/types/knowledge";

export const greedyAlgorithmsDeep: DeepTopic[] = [
  {
    id: "greedy-algorithms",
    slug: "greedy-algorithms",
    title: "Greedy Algorithms",
    difficulty: "Intermediate",
    category: "greedy-algorithms",
    shortDescription: "Making the locally optimal choice at each step with the hope of finding a global optimum.",
    overview: {
      question: "If you want to give someone $0.99 in change using the fewest coins possible, how do you do it?",
      answer: "You are greedy. You take the biggest coin possible (a quarter). Then you take the biggest coin possible from what's left. You don't overthink it, and in the US coin system, this mathematically guarantees the best answer."
    },
    whyItExists: {
      problem: "Dynamic Programming is perfect, but exploring every possible combination takes significant memory and time.",
      solution: "If the problem structure allows it, just make the best immediate choice at every single step and never look back.",
      keyInsight: "Greedy algorithms are blazing fast (often O(N log N) for an initial sort, then O(N)), but they only work if the problem has the 'Greedy Choice Property'."
    },
    coreConcepts: [
      { title: "Greedy Choice Property", explanation: "A mathematical proof that making a locally optimal choice will NEVER prevent you from reaching the globally optimal solution." },
      { title: "No Backtracking", explanation: "Unlike DFS or DP, a Greedy algorithm makes a decision and never reverses it." },
      { title: "The Danger", explanation: "If you use a Greedy algorithm on a problem that requires DP (like the 0/1 Knapsack), you will get an incorrect, sub-optimal answer quickly." }
    ],
    keyTerms: [
      { term: "Locally Optimal", definition: "The best possible choice looking ONLY at the immediate next step, ignoring all future consequences." }
    ],
    connections: [
      { topicId: "dp-intro", relationship: "The fast, rigid alternative to the slow, flexible DP approach." },
      { topicId: "dijkstra", relationship: "Dijkstra's Shortest Path is the most famous Greedy algorithm." }
    ],
    realWorldExamples: [
      { title: "Data Compression (Huffman Coding)", description: "ZIP files use a Greedy algorithm to assign the shortest binary codes to the most frequently used characters, drastically shrinking file sizes." }
    ],
    misconceptions: [
      { myth: "Greedy algorithms are just heuristics or 'good guesses'.", reality: "A true greedy algorithm mathematically guarantees the absolute optimal solution. If it only gives a 'good guess', it's an approximation algorithm, not a greedy one." }
    ],
    keyTakeaways: [
      "Always try to prove a Greedy approach first. If you can prove it works, you save yourself the nightmare of writing a DP solution.",
      "Most Greedy algorithms require sorting the input data first, which defines their O(N log N) time complexity."
    ],
    prerequisites: ["sorting-searching"],
    nextTopics: []
  }
];
