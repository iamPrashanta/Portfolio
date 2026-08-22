import { ComputerScienceTopic } from "@/types/knowledge";
import { binarySearch } from "./binary-search";
import { dfs } from "./dfs";
import { bfs } from "./bfs";
import { mergeSort } from "./merge-sort";

export const algorithms: ComputerScienceTopic[] = [
  binarySearch,
  dfs,
  bfs,
  mergeSort
];
