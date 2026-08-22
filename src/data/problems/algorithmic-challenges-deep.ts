import { DeepTopic } from "@/types/knowledge";

export const algorithmicChallengesDeep: DeepTopic[] = [
  {
    id: "traveling-salesman",
    slug: "traveling-salesman",
    title: "Traveling Salesman Problem (TSP)",
    difficulty: "Advanced",
    category: "algorithmic-challenges",
    shortDescription: "The most famous NP-Hard problem: finding the absolute shortest route connecting a set of cities.",
    overview: {
      question: "If you need to deliver 50 packages across the city and return home, what is the absolute shortest possible route?",
      answer: "No one knows how to calculate it quickly. To find the *perfect* answer, you mathematically must check almost every possible combination. For 50 packages, there are 3 x 10^64 combinations."
    },
    whyItExists: {
      problem: "We want to perfectly optimize logistics, chip manufacturing, and DNA sequencing.",
      solution: "We accept that perfection is impossible in polynomial time. We use 'Heuristics' (smart guessing algorithms) like Simulated Annealing or Genetic Algorithms to find an answer that is 'good enough'.",
      keyInsight: "Some problems fundamentally scale worse than the computational capacity of the universe. Perfection must be abandoned for approximation."
    },
    coreConcepts: [
      { title: "Factorial Growth (O(N!))", explanation: "Adding just one more city to a TSP route multiplies the total number of possible paths by the new number of cities. It explodes instantly." },
      { title: "NP-Hard", explanation: "A class of problems where verifying a given solution is easy, but finding the optimal solution from scratch is believed to be impossible to do quickly." },
      { title: "Dynamic Programming Approach", explanation: "The Held-Karp algorithm uses DP to reduce the time from O(N!) down to O(N² * 2^N). Still terrible, but allows solving for ~20 cities instead of ~10." }
    ],
    keyTerms: [
      { term: "Heuristic", definition: "A technique designed for solving a problem more quickly when classic methods are too slow. It trades accuracy for speed." }
    ],
    connections: [
      { topicId: "graphs", relationship: "TSP is fundamentally a Hamiltonian Cycle problem on a weighted graph." },
      { topicId: "dynamic-programming", relationship: "Used for the optimal (but still exponentially slow) exact solver." }
    ],
    engineeringMoment: {
      title: "The Million Dollar Prize",
      story: "The Clay Mathematics Institute offers $1,000,000 to anyone who can prove P = NP (essentially, proving whether or not a fast algorithm for TSP can actually exist). It remains one of the most profound unsolved questions in mathematics.",
      lesson: "Computer Science is still a developing field with massive theoretical unknowns."
    },
    realWorldExamples: [
      { title: "FedEx and UPS Route Optimization", description: "They do not use exact TSP solvers. They use highly proprietary approximation algorithms that guarantee a route that is within ~2% of the optimal distance." }
    ],
    keyTakeaways: [
      "TSP is the ultimate reality check for software engineers. It proves that raw computing power cannot solve bad mathematics.",
      "If you identify a problem at work as TSP, stop trying to write a perfect algorithm and start writing an approximation."
    ],
    prerequisites: ["graphs", "big-o-notation"],
    nextTopics: []
  }
];
