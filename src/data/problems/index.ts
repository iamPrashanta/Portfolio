import { EngineeringProblem } from "@/types/problem";
import { c10k } from "./c10k";
import { highConcurrencyApi } from "./high-concurrency-api";
import { websocketScaling } from "./websocket-scaling";
import { slowPostgresqlQueries } from "./slow-postgresql-queries";

export const problems: EngineeringProblem[] = [
  c10k,
  highConcurrencyApi,
  websocketScaling,
  slowPostgresqlQueries
];
export { c10k, highConcurrencyApi, websocketScaling, slowPostgresqlQueries };
