import { ComputerScienceTopic } from "@/types/knowledge";

export const binarySearchTrees: ComputerScienceTopic = {
  slug: "binary-search-trees",
  title: "Binary Search Trees",
  shortDescription: "A hierarchical data structure that allows for fast search, insertion, and deletion while maintaining sorted order.",
  category: "data-structures",
  difficulty: "intermediate",
  
  introduction: "A Binary Search Tree (BST) is a node-based binary tree data structure. It possesses a strict structural property: for every node, all elements in its left subtree are smaller, and all elements in its right subtree are larger. This inherent ordering allows operations like search, minimum, and maximum to bypass large portions of the tree, similar to how binary search works on an array.",
  whyItMatters: "While Hash Tables provide O(1) lookups, they destroy the natural order of the data. BSTs provide O(log N) lookups while maintaining sorted order, allowing for efficient range queries (e.g., 'find all users with age between 20 and 30') and fast retrieval of the next largest or smallest element.",
  
  howItWorks: [
    {
      title: "Tree Traversal",
      content: "Data in a BST is usually accessed via depth-first traversals. An **In-Order** traversal (Left, Root, Right) will miraculously visit every node in perfectly sorted ascending order. Pre-Order and Post-Order traversals are useful for copying or deleting the tree."
    },
    {
      title: "The Imbalance Problem",
      content: "If you insert data into a standard BST in sorted order (e.g., 1, 2, 3, 4, 5), the tree degrades into a Linked List, making operations O(N). For a BST to be efficient, it must remain balanced. This is where advanced variations like AVL Trees and Red-Black Trees come in, which automatically restructure themselves on insertion to guarantee O(log N) depth."
    }
  ],
  
  codeExamples: [
    {
      title: "BST Search Implementation",
      description: "A recursive implementation to find a value in a Binary Search Tree.",
      implementations: [
        {
          language: "python",
          label: "Python",
          code: `class TreeNode:\n    def __init__(self, val=0):\n        self.val = val\n        self.left = None\n        self.right = None\n\ndef search_bst(root, target):\n    if not root or root.val == target:\n        return root\n        \n    # If target is smaller, search left subtree\n    if target < root.val:\n        return search_bst(root.left, target)\n        \n    # If target is larger, search right subtree\n    return search_bst(root.right, target)`
        }
      ]
    }
  ],
  
  realWorldApplications: [
    "Database indexing: Databases use B-Trees (a generalization of BSTs) to maintain sorted indexes on disk.",
    "File systems, such as NTFS and ext4, use balanced trees for fast file retrieval.",
    "Auto-completion systems and dictionaries often use Tries, a specialized form of tree."
  ],
  
  prerequisites: ["arrays-and-strings"],
  relatedTopics: ["graphs"],
  relatedAlgorithms: ["dfs", "bfs", "binary-search"],
  relatedProblems: [],
  relatedSkills: ["postgresql"],
  relatedServices: ["backend-development"],
  
  seo: {
    title: "Binary Search Trees (BST) Explained",
    description: "Learn how Binary Search Trees work, their time complexities, balancing problems, and how they power database indexing.",
    keywords: ["Binary Search Tree", "BST", "Tree Traversal", "B-Tree", "Data Structures"]
  }
};
