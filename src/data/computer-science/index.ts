import { ComputerScienceTopic } from "@/types/knowledge";
import { foundations as oldFoundations } from './foundations';
import { memoryManagement } from "./memory-management";
import { cpuArchitecture } from "./cpu-architecture";

export const foundations: ComputerScienceTopic[] = [
  ...oldFoundations,
  memoryManagement,
  cpuArchitecture
];
