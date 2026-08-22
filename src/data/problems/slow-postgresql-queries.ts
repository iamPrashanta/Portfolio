import { EngineeringProblem } from "@/types/problem";

export const slowPostgresqlQueries: EngineeringProblem = {
  slug: "slow-postgresql-queries",
  title: "Slow PostgreSQL Queries",
  shortDescription: "Diagnosing, analyzing, and resolving slow query performance in relational databases under load.",
  category: "database",
  severity: "high",
  
  problemStatement: "A web application feels snappy during development, but grinds to a halt in production. Users experience spinning loading indicators, and the API throws timeout errors. When investigating, the application server CPU is low, but the database CPU is at 100%. The application is sending inefficient SQL queries to PostgreSQL, forcing the database to scan millions of rows sequentially for every single request.",
  
  symptoms: [
    "High CPU utilization on the database server.",
    "API timeouts specifically on endpoints fetching large datasets.",
    "Database monitoring tools (like AWS RDS Performance Insights) showing high 'Sequential Scan' metrics.",
    "The application throws 'Statement Timeout' errors."
  ],
  
  whyItHappens: [
    {
      title: "Missing Indexes",
      content: "When you execute `SELECT * FROM users WHERE email = 'test@test.com'`, and the `email` column does not have an index, PostgreSQL must perform a Sequential Scan. It literally checks every single row in the table, one by one. If the table has 10 million rows, this takes seconds instead of milliseconds."
    },
    {
      title: "The N+1 Problem",
      content: "Commonly caused by Object-Relational Mappers (ORMs) like Prisma or TypeORM. The application fetches a list of 100 posts (1 query), and then loops through those posts to fetch the author for each one (100 additional queries). This results in 101 total queries instead of a single SQL `JOIN`."
    },
    {
      title: "Inefficient JOINs & Unnecessary Data",
      content: "Using `SELECT *` across multiple joined tables transfers massive amounts of unused data across the network. Joining on unindexed foreign keys also causes massive performance degradation."
    }
  ],
  
  rootCauses: [
    {
      title: "ORM Misconfiguration",
      description: "Developers relying blindly on ORMs without inspecting the underlying SQL being generated."
    },
    {
      title: "Lack of Database Maintenance",
      description: "Failing to run `VACUUM ANALYZE`, causing PostgreSQL's query planner to use outdated statistics."
    }
  ],
  
  architectureOptions: [
    {
      title: "Option A: B-Tree Indexing",
      description: "Add B-Tree indexes to columns frequently used in `WHERE`, `JOIN`, and `ORDER BY` clauses. This turns O(N) sequential scans into O(log N) index lookups.",
      pros: ["Dramatically speeds up read queries", "Native to PostgreSQL", "Easy to implement"],
      cons: ["Slows down write operations (INSERT/UPDATE)", "Increases database storage size"]
    },
    {
      title: "Option B: Query Redesign & Aggregation",
      description: "Rewrite complex queries using Common Table Expressions (CTEs), proper JOINs, or Materialized Views to pre-compute expensive aggregations.",
      pros: ["Reduces runtime computation", "Solves N+1 problems at the SQL level"],
      cons: ["Requires strong SQL knowledge", "Materialized views can serve slightly stale data"]
    }
  ],
  
  recommendedSolution: [
    {
      title: "The Explain Analyze Workflow",
      content: "Never guess why a query is slow. Always run `EXPLAIN ANALYZE <your query>` in PostgreSQL. Look for `Seq Scan`, `Hash Join`, and `Nested Loop`. Add indexes to eliminate Sequential Scans on large tables. If using an ORM, enable query logging to catch N+1 problems in development."
    }
  ],
  
  implementationSteps: [
    {
      title: "1. Enable pg_stat_statements",
      content: "Enable the `pg_stat_statements` extension in PostgreSQL to automatically track and rank the slowest queries running in production."
    },
    {
      title: "2. Add Concurrent Indexes",
      content: "When adding indexes to large production tables, always use `CREATE INDEX CONCURRENTLY`. Standard index creation locks the table for writes, which will cause immediate downtime."
    }
  ],
  
  realWorldUseCases: [
    "E-commerce product filtering (color, size, price) requiring complex composite indexes.",
    "SaaS dashboards aggregating analytics data across millions of tenant records."
  ],
  
  prerequisites: ["big-o-notation", "binary-search-trees"],
  relatedTopics: ["binary-search-trees"], // Because B-Tree indexes
  relatedAlgorithms: [],
  relatedProblems: ["high-concurrency-api"],
  relatedSkills: ["postgresql"],
  relatedServices: ["database-optimization", "backend-development"],
  
  seo: {
    title: "Fixing Slow PostgreSQL Queries: Indexes and N+1 Problems",
    description: "Diagnose and resolve slow PostgreSQL queries using EXPLAIN ANALYZE, B-Tree indexes, and eliminating ORM N+1 problems.",
    keywords: ["PostgreSQL", "Slow Queries", "Database Optimization", "EXPLAIN ANALYZE", "N+1 Problem", "SQL Indexing"]
  }
};
