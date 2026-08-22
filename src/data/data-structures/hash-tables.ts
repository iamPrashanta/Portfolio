import { ComputerScienceTopic } from "@/types/knowledge";

export const hashTables: ComputerScienceTopic = {
  slug: "hash-tables",
  title: "Hash Tables",
  shortDescription: "A structure that maps keys to values for highly efficient lookups, insertions, and deletions using hash functions.",
  category: "data-structures",
  difficulty: "intermediate",
  
  introduction: "A Hash Table (or Hash Map) is a data structure that provides incredibly fast (O(1) average time) data retrieval. It achieves this by using a 'hash function' to convert a given key (like a string or object) into an integer, which then acts as an index to store the value in an underlying array.",
  whyItMatters: "Hash tables are arguably the most commonly used data structure in software engineering. They are used for database indexing, caching (like Redis), maintaining state in web applications, and solving complex algorithmic problems by trading space for time.",
  
  howItWorks: [
    {
      title: "The Hash Function",
      content: "The hash function takes an arbitrary key and deterministically converts it into an integer. A good hash function must be fast to compute and uniformly distribute the keys across the available array to minimize collisions."
    },
    {
      title: "Collision Resolution",
      content: "Because the underlying array has a finite size, two different keys will eventually hash to the same index. This is a collision. Common resolution strategies include **Chaining** (storing a Linked List at that index) or **Open Addressing** (finding the next empty slot in the array)."
    },
    {
      title: "Load Factor and Resizing",
      content: "The Load Factor is the ratio of stored items to the array's capacity. When the load factor exceeds a certain threshold (often 0.75), the hash table resizes itself (typically doubling in size) and re-hashes all existing keys. This resizing operation is O(N)."
    }
  ],
  
  codeExamples: [
    {
      title: "Trading Space for Time",
      description: "Using a Hash Map to solve the classic Two Sum problem in O(N) time instead of O(N²).",
      implementations: [
        {
          language: "typescript",
          label: "TypeScript",
          code: `function twoSum(nums: number[], target: number): number[] {\n  const map = new Map<number, number>();\n  \n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    \n    // O(1) lookup time\n    if (map.has(complement)) {\n      return [map.get(complement)!, i];\n    }\n    \n    map.set(nums[i], i);\n  }\n  \n  return [];\n}`
        }
      ]
    }
  ],
  
  realWorldApplications: [
    "In-memory caches like Redis and Memcached use massive distributed hash tables.",
    "Language runtimes use hash tables to store object properties and variables.",
    "Routers use hash tables for fast IP address lookups."
  ],
  
  prerequisites: ["arrays-and-strings"],
  relatedTopics: ["binary-search-trees"],
  relatedAlgorithms: [],
  relatedProblems: ["high-concurrency-api"],
  relatedSkills: ["redis", "typescript", "python"],
  relatedServices: ["backend-development"],
  
  seo: {
    title: "Hash Tables Explained: Hashing & Collision Resolution",
    description: "Understand Hash Tables, hash functions, collision resolution via chaining and open addressing, and how to achieve O(1) lookups.",
    keywords: ["Hash Tables", "Hash Maps", "Hashing", "Collision Resolution", "Data Structures"]
  }
};
