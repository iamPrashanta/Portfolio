import { DeepTopic } from "@/types/knowledge";

export const softwareSystemsDeep: DeepTopic[] = [
  {
    id: "compilers-and-interpreters",
    slug: "compilers-and-interpreters",
    title: "Compilers & Interpreters",
    difficulty: "Advanced",
    category: "software-systems",
    shortDescription: "The translators that bridge the gap between human logic and machine hardware.",
    overview: {
      question: "How does the computer understand my 'if' statement?",
      answer: "It doesn't. A compiler or interpreter reads your human-readable text and translates it into the microscopic binary instructions that the specific CPU architecture requires."
    },
    whyItExists: {
      problem: "Writing raw binary or assembly language for every specific CPU architecture is insanely slow, error-prone, and mathematically limiting.",
      solution: "Programs that write programs. We write a high-level language, and the compiler automatically generates the optimal machine code.",
      keyInsight: "A compiler is just a translator, but it is a translator capable of optimizing the logic before it translates it."
    },
    coreConcepts: [
      { title: "Compiler", explanation: "Translates the entire program into an executable file before it is run (e.g., C++, Go). Generally results in faster execution." },
      { title: "Interpreter", explanation: "Translates and executes the code line-by-line while the program is running (e.g., Python, Ruby). Faster to start up, slower to execute." },
      { title: "JIT (Just-In-Time)", explanation: "A hybrid approach. The code is compiled into an intermediate state, and then compiled into machine code on the fly exactly when it's needed (e.g., Java, JavaScript/V8)." }
    ],
    keyTerms: [
      { term: "Lexical Analysis", definition: "The first step of compiling, where text is broken down into meaningful 'tokens'." },
      { term: "Abstract Syntax Tree (AST)", definition: "A tree representation of the syntactic structure of the source code, used to verify grammar and apply optimizations." }
    ],
    connections: [
      { topicId: "abstraction", relationship: "The most important abstraction layer in programming" },
      { topicId: "instruction-cycle", relationship: "Generates the instructions that the cycle executes" }
    ],
    realWorldExamples: [
      { title: "Chrome V8 Engine", description: "V8 is a highly advanced JIT compiler that takes JavaScript (historically a slow, interpreted language) and compiles it directly into machine code so fast that it rivals compiled languages." }
    ],
    misconceptions: [
      { myth: "Language X is faster than Language Y.", reality: "Languages don't have speed; their implementations (compilers/interpreters) do. The V8 engine makes JS fast, not the syntax of JS." }
    ],
    keyTakeaways: [
      "Compilers spend massive amounts of time optimizing your code, often completely rewriting your logic to be faster while maintaining the same output.",
      "The choice between Ahead-of-Time compilation and JIT heavily influences the deployment and startup time of applications."
    ],
    prerequisites: ["instruction-cycle", "abstraction"],
    nextTopics: ["databases"]
  },
  {
    id: "databases",
    slug: "databases",
    title: "Databases",
    difficulty: "Beginner",
    category: "software-systems",
    shortDescription: "Specialized software designed for the safe, structured, and efficient storage of data.",
    overview: {
      question: "Why can't I just save all my app data in a JSON file?",
      answer: "You can, until you need to search it quickly, update it from two different servers at the same time, or survive a power outage without corrupting the file. Databases solve the hard problems of concurrency and reliability."
    },
    whyItExists: {
      problem: "As data grows, searching files becomes O(N) slow. When multiple threads edit a file, data corrupts. When the power fails during a write, data is lost.",
      solution: "A Database Management System (DBMS) that abstracts away the file system, providing strict guarantees about state, transaction safety, and highly optimized query engines.",
      keyInsight: "Databases shift the burden of data integrity from the application developer to a specialized system."
    },
    coreConcepts: [
      { title: "Relational (SQL)", explanation: "Data is strictly organized into tables with predefined schemas. Excellent for highly structured data where relationships matter (e.g., PostgreSQL)." },
      { title: "NoSQL", explanation: "Flexible data models (Documents, Key-Value, Graphs). Excellent for rapidly changing schemas or massive horizontal scale (e.g., MongoDB, DynamoDB)." },
      { title: "ACID", explanation: "Atomicity, Consistency, Isolation, Durability. The strict guarantees relational databases provide to ensure a transaction either completes perfectly or fails completely." }
    ],
    keyTerms: [
      { term: "Transaction", definition: "A sequence of database operations treated as a single unit of work." },
      { term: "Schema", definition: "The blueprint of how data is structured in a relational database." }
    ],
    connections: [
      { topicId: "file-systems", relationship: "Databases build complex structures on top of the OS file system" },
      { topicId: "indexes", relationship: "The mechanism databases use to achieve fast lookups" }
    ],
    realWorldExamples: [
      { title: "Financial Ledgers", description: "Banks use strict ACID-compliant relational databases. If money leaves Account A but the server crashes before it enters Account B, the transaction is perfectly rolled back." }
    ],
    keyTakeaways: [
      "Use SQL by default. Use NoSQL when you have a specific architectural reason to abandon relational constraints.",
      "The database is almost always the ultimate bottleneck in a scaled application."
    ],
    prerequisites: ["file-systems"],
    nextTopics: ["indexes", "caching"]
  },
  {
    id: "indexes",
    slug: "indexes",
    title: "Database Indexes",
    difficulty: "Intermediate",
    estimatedStudyTime: "15 min",
    category: "software-systems",
    shortDescription: "The data structures that make querying millions of rows instantaneous.",
    
    overview: {
      question: "How does a database find one user among 100 million in milliseconds?",
      answer: "By not looking at every user. It builds an Index (usually a B-Tree), a separate sorted data structure that acts exactly like the index at the back of a textbook."
    },

    mentalModel: "Imagine trying to find every mention of 'Galileo' in a 1,000-page history book. Without an index, you have to read all 1,000 pages (Full Table Scan). With an index, you look at the back, find 'Galileo: p42, p89', and flip directly there.",
    
    whyItExists: {
      problem: "Without an index, finding a record requires a 'Full Table Scan' (O(n)), meaning the database must literally read every single row from the slow hard drive into memory.",
      solution: "Maintain a specialized, sorted data structure (like a B-Tree) that stores a specific column's value and a direct pointer to the full row's location on disk.",
      keyInsight: "We willingly sacrifice Write Speed and Disk Space to gain massive Read Speed."
    },

    conceptLayers: [
      { layer: "LAYER 01 — THE TABLE", title: "Unordered Data", description: "Rows are inserted into a database table sequentially. They are not naturally sorted on the hard drive." },
      { layer: "LAYER 02 — THE INDEX", title: "Sorted Pointers", description: "When you index a column (like `email`), the database copies all emails into a B-Tree. The tree is kept perfectly sorted alphabetically." },
      { layer: "LAYER 03 — THE LOOKUP", title: "O(log n) Traversal", description: "When querying for an email, the database traverses the B-Tree in O(log n) time, finds the email, and uses the attached pointer to fetch the full row." }
    ],

    howItWorksDetailed: {
      explanation: "How a database utilizes an index during a basic SELECT query.",
      flow: [
        { label: "Query Parser", annotation: "The DB engine sees `WHERE email = 'x@y.com'`." },
        { label: "Query Planner", annotation: "Checks if an index exists on the `email` column." },
        { label: "Index Traversal", annotation: "Navigates the B-Tree nodes to find 'x@y.com'." },
        { label: "Heap Fetch", annotation: "Follows the disk pointer to grab the rest of the row." }
      ],
      codeExamples: [
        {
          title: "Creating an Index in SQL",
          language: "javascript",
          code: "-- Creating a basic index\nCREATE INDEX idx_users_email ON users(email);\n\n-- Creating a composite index (multiple columns)\nCREATE INDEX idx_users_last_first ON users(last_name, first_name);\n\n-- Checking if a query actually uses the index\nEXPLAIN SELECT * FROM users WHERE email = 'test@test.com';"
        }
      ]
    },

    coreConcepts: [
      { title: "B-Trees", explanation: "The most common index type. A self-balancing tree that keeps data sorted and allows searches, sequential access, and insertions in O(log n) time." },
      { title: "Primary vs Secondary", explanation: "The Primary Key index (Clustered Index) dictates how the data is physically sorted on disk. Secondary indexes are separate lookup trees pointing back to the primary key." },
      { title: "The Write Penalty", explanation: "Every time you Insert, Update, or Delete a row, the database must also update every single index attached to that table. Heavy indexing slows down writes." }
    ],
    
    keyTerms: [
      { term: "Full Table Scan", definition: "When the database cannot use an index and must read every row sequentially. This is disastrous for performance at scale." },
      { term: "Composite Index", definition: "An index built on multiple columns. Order matters! An index on (LastName, FirstName) cannot be used to quickly search just by FirstName." }
    ],

    whereItBreaks: [
      { scenario: "Over-Indexing", description: "If you index every column 'just in case', your INSERT queries will become incredibly slow because the DB must update 20 different B-Trees." },
      { scenario: "Low Cardinality", description: "Indexing a boolean column (e.g., `is_active`) is often useless. The DB query planner will realize the index doesn't narrow down the results enough and will just do a Full Table Scan anyway." },
      { scenario: "RAM Exhaustion", description: "Indexes only provide maximum performance if the entire B-Tree fits into RAM. If the index grows larger than available RAM, the DB must swap to disk, killing performance." }
    ],

    tradeoffs: [
      {
        advantage: "Massively Faster Reads",
        disadvantages: ["Slower Writes (Inserts/Updates/Deletes).", "Consumes extra RAM.", "Consumes extra Disk Space."],
        context: "Used on columns frequently appearing in WHERE clauses or JOIN conditions."
      }
    ],

    engineeringMoment: {
      year: "Current",
      title: "The Exploding Database",
      problem: "A startup's Postgres database suddenly hits 100% CPU usage and API requests start timing out. The app hasn't changed, but user data has grown.",
      response: "Engineers run `EXPLAIN ANALYZE` and discover a query doing a sequential scan over 5 million rows because a foreign key was missing an index.",
      tradeoff: "They add a `CREATE INDEX CONCURRENTLY`, and the query drops from taking 4 seconds to taking 2 milliseconds.",
      today: "Missing indexes are the #1 cause of sudden database outages in growing applications."
    },

    systemConnections: [
      {
        system: "Hash Indexes",
        description: "While B-Trees are great for range queries (`age > 18`), some databases offer Hash Indexes which use Hash Tables under the hood for true O(1) exact-match lookups.",
        layers: ["Data Structures", "Storage Engine"]
      }
    ],

    connections: [
      { topicId: "Databases", relationship: "The primary optimization technique in Relational DBs.", href: "/computer-science/software-systems/databases", status: "available" },
      { topicId: "Big O Notation", relationship: "Turns O(n) scans into O(log n) lookups.", href: "/computer-science/foundations/big-o-notation", status: "available" }
    ],

    exercises: {
      understand: { 
        question: "Why does indexing a `gender` or `is_deleted` column usually not improve query performance?",
        hint: "Think about how many rows you eliminate when you search an index with only 2 possible values."
      },
      predict: {
        scenario: "Your application logs every user click. This table receives 10,000 inserts per second, but is only queried once a month by data scientists.",
        question: "Should you add multiple indexes to the columns in this table to help the data scientists?"
      }
    },

    misconceptions: [
      { myth: "I should index every column just in case.", reality: "Indexes consume massive amounts of RAM and severely slow down write operations. Only index what you actually query against." },
      { myth: "If an index exists, the database will always use it.", reality: "The Query Planner is smart. If it estimates that fetching via the index will take more time than just scanning the table (e.g., if you are querying for 80% of the table), it will ignore the index." }
    ],

    keyTakeaways: [
      "Indexes are the bridge between theoretical Data Structures (Trees) and real-world performance.",
      "If a database query is suddenly slow, the first step is to check if it's using an index (via the EXPLAIN command)."
    ],
    prerequisites: ["databases", "big-o-notation"],
    nextTopics: ["caching"]
  },
  {
    id: "caching",
    slug: "caching",
    title: "Caching",
    difficulty: "Intermediate",
    category: "software-systems",
    shortDescription: "Storing expensive computational results in fast memory to serve future requests instantly.",
    overview: {
      question: "Why calculate something twice if the answer hasn't changed?",
      answer: "We shouldn't. Caching takes the result of a slow operation (like a complex database query or API call) and saves it in fast, temporary memory (like Redis or RAM)."
    },
    whyItExists: {
      problem: "Databases are slow. APIs have rate limits. If a million users request the front page of a news site, querying the database a million times will melt the server.",
      solution: "Query the database once. Save the rendered HTML in a Cache. Serve the next 999,999 users directly from the Cache in milliseconds.",
      keyInsight: "Read-heavy applications survive by serving stale, but 'fresh enough', data."
    },
    coreConcepts: [
      { title: "Cache Hit / Miss", explanation: "Hit: The data is found in the cache. Miss: The data isn't there, so the system must do the slow work, then save the result to the cache for next time." },
      { title: "Eviction Policies", explanation: "Caches have limited space. When they fill up, they must delete old data. LRU (Least Recently Used) is the most common algorithm." },
      { title: "Invalidation", explanation: "The hardest problem in computer science. How do you know when the underlying database has changed and the cache is now serving incorrect data?" }
    ],
    keyTerms: [
      { term: "TTL (Time to Live)", definition: "An expiration timer set on cached data. After X seconds, the cache automatically deletes the data." },
      { term: "Redis / Memcached", definition: "Popular in-memory data stores heavily used for distributed caching." }
    ],
    connections: [
      { topicId: "cpu-cache", relationship: "The exact same concept as hardware caches, applied to software" },
      { topicId: "distributed-systems", relationship: "Essential for scaling distributed architectures" }
    ],
    engineeringMoment: {
      title: "The Thundering Herd",
      story: "If a highly popular cached item (like a celebrity's viral tweet) suddenly expires, thousands of incoming requests will all experience a Cache Miss simultaneously. They will all hit the database at the exact same moment, causing a crash. This is the 'Thundering Herd' problem.",
      lesson: "Cache expiration must be managed carefully at scale."
    },
    realWorldExamples: [
      { title: "CDNs (Content Delivery Networks)", description: "Companies like Cloudflare place caching servers physically closer to users around the world to serve images and static assets without ever hitting the main server." }
    ],
    misconceptions: [
      { myth: "Caching fixes slow code.", reality: "Caching hides slow code. If the cache clears, your site will still crash. You must optimize the underlying bottlenecks as well." }
    ],
    keyTakeaways: [
      "Caching is trading memory capacity for CPU time and network latency.",
      "Never cache anything without a deliberate invalidation strategy (even if it's just a short TTL)."
    ],
    prerequisites: ["databases"],
    nextTopics: ["apis", "distributed-systems"]
  },
  {
    id: "apis",
    slug: "apis",
    title: "APIs (Application Programming Interfaces)",
    difficulty: "Beginner",
    category: "software-systems",
    shortDescription: "The contracts and communication protocols that allow different software systems to talk to each other.",
    overview: {
      question: "How does my weather app get data from the meteorological service?",
      answer: "The meteorological service exposes an API—a structured gateway that accepts specific requests and returns formatted data (usually JSON) that the app can understand."
    },
    whyItExists: {
      problem: "Software systems are built in different languages, on different servers, by different companies. They cannot directly read each other's code or databases.",
      solution: "A defined, strict interface. You don't need to know how the service works internally; you just need to know the correct URL to hit and the exact format to expect back.",
      keyInsight: "APIs are the ultimate abstraction boundary for distributed software."
    },
    coreConcepts: [
      { title: "REST (Representational State Transfer)", explanation: "An architectural style using standard HTTP verbs (GET, POST, PUT, DELETE) and URLs to represent resources (e.g., GET /users/123)." },
      { title: "GraphQL", explanation: "An alternative to REST where the client explicitly specifies exactly which fields it wants in the response, preventing over-fetching of data." },
      { title: "JSON", explanation: "The universally agreed-upon text format for sending structured data across the web." }
    ],
    keyTerms: [
      { term: "Endpoint", definition: "A specific URL exposed by the API (e.g., api.stripe.com/charges)." },
      { term: "Rate Limiting", definition: "Restricting how many API calls a single user can make in a minute to prevent abuse or server overload." }
    ],
    connections: [
      { topicId: "http-https", relationship: "Most APIs operate over HTTP" },
      { topicId: "abstraction", relationship: "The interface boundary" }
    ],
    realWorldExamples: [
      { title: "Stripe", description: "Stripe handles the immense complexity of banking regulations, fraud detection, and credit card networks, abstracting it all behind a simple `POST /charges` API call." }
    ],
    keyTakeaways: [
      "When you design an API, you are designing a contract. Breaking changes will break everyone relying on your system.",
      "APIs decouple the frontend (UI) from the backend (Business Logic)."
    ],
    prerequisites: ["http-https"],
    nextTopics: ["distributed-systems"]
  },
  {
    id: "distributed-systems",
    slug: "distributed-systems",
    title: "Distributed Systems",
    difficulty: "Advanced",
    category: "software-systems",
    shortDescription: "Designing networks of independent computers that appear to the user as a single coherent system.",
    overview: {
      question: "How does Netflix serve millions of users at once?",
      answer: "By splitting their application into hundreds of small, independent 'microservices' running across thousands of servers globally, all communicating over the network."
    },
    whyItExists: {
      problem: "A single monolith server becomes a bottleneck. It is a single point of failure, cannot scale infinitely, and forces the entire engineering team to deploy all code at once.",
      solution: "Break the system apart. The User Service, Payment Service, and Video Service all run on different machines and talk via APIs.",
      keyInsight: "Distributed systems provide infinite scale and fault tolerance, but introduce terrifying complexity regarding network reliability and state consistency."
    },
    coreConcepts: [
      { title: "Microservices", explanation: "An architecture where the application is composed of small, loosely coupled services, each owning its own specific database and logic." },
      { title: "Fallacies of Distributed Computing", explanation: "False assumptions engineers make, such as 'The network is reliable', 'Latency is zero', and 'Bandwidth is infinite'." },
      { title: "CAP Theorem", explanation: "A mathematical proof stating that a distributed data store can only guarantee two out of three: Consistency, Availability, and Partition Tolerance." }
    ],
    keyTerms: [
      { term: "Single Point of Failure (SPOF)", definition: "Any component that, if it fails, brings down the entire system." },
      { term: "Service Discovery", definition: "How microservices automatically find each other's IP addresses in a dynamic cloud environment." }
    ],
    connections: [
      { topicId: "load-balancing", relationship: "Essential for routing traffic between services" },
      { topicId: "consistency-and-reliability", relationship: "The core challenge of distributed data" }
    ],
    engineeringMoment: {
      title: "The Amazon Monolith Breakup",
      story: "In 2001, Amazon.com was a massive monolithic C/C++ application. Builds took 12 hours. Jeff Bezos issued an infamous mandate requiring all teams to expose their data only through service interfaces, completely banning direct database sharing. This brutal transition to a Service-Oriented Architecture paved the way for AWS.",
      lesson: "Organization structure and software architecture are deeply linked (Conway's Law)."
    },
    misconceptions: [
      { myth: "Microservices are always better than monoliths.", reality: "Microservices introduce massive operational overhead, latency, and debugging complexity. A well-structured monolith is often vastly superior for small to mid-sized applications." }
    ],
    keyTakeaways: [
      "In a distributed system, partial failure is guaranteed. You must design assuming that network calls will randomly fail.",
      "The hardest part of distributed systems is managing shared state."
    ],
    prerequisites: ["apis", "load-balancing"],
    nextTopics: ["message-queues", "consistency-and-reliability"]
  },
  {
    id: "message-queues",
    slug: "message-queues",
    title: "Message Queues",
    difficulty: "Advanced",
    category: "software-systems",
    shortDescription: "Asynchronous communication infrastructure that decouples services and absorbs massive traffic spikes.",
    overview: {
      question: "What happens if a service receives 10,000 requests per second but can only process 100?",
      answer: "If it's a direct API call, the service crashes. Instead, we put a Message Queue in the middle. The queue accepts all 10,000 requests instantly, and the service pulls them off the queue safely at its own pace."
    },
    whyItExists: {
      problem: "Synchronous API calls (Service A calls Service B and waits for a response) create tight coupling and cascading failures. If B is slow, A becomes slow. If B crashes, A crashes.",
      solution: "Asynchronous decoupling. Service A publishes a message to a Queue. Service A moves on immediately. Service B consumes the message whenever it is ready.",
      keyInsight: "Queues turn unpredictable, spiky traffic into a manageable, steady stream of work."
    },
    coreConcepts: [
      { title: "Pub/Sub (Publish-Subscribe)", explanation: "A pattern where a sender publishes a message to a 'Topic', and multiple different consumer services can independently receive a copy of that message." },
      { title: "Decoupling", explanation: "The sender doesn't need to know anything about the receiver, not even if it's currently online." },
      { title: "Eventual Processing", explanation: "The work will get done, but the system doesn't guarantee exactly when. The user might see an 'Order Processing' status instead of immediate confirmation." }
    ],
    keyTerms: [
      { term: "Kafka / RabbitMQ", definition: "Industry standard tools for high-throughput message queuing and event streaming." },
      { term: "Dead Letter Queue", definition: "A secondary queue where messages that fail to process multiple times are sent for manual human debugging." }
    ],
    connections: [
      { topicId: "distributed-systems", relationship: "The backbone of event-driven architectures" }
    ],
    realWorldExamples: [
      { title: "Video Upload Processing", description: "When you upload a video to YouTube, the server returns 'Upload Complete' instantly. A message is placed on a queue, and background workers spend the next 5 minutes converting the video into different resolutions." }
    ],
    keyTakeaways: [
      "Queues prevent cascading system failures by acting as shock absorbers.",
      "Using a queue forces you to rethink your UI, because the backend response is no longer immediate."
    ],
    prerequisites: ["distributed-systems"],
    nextTopics: ["consistency-and-reliability"]
  },
  {
    id: "consistency-and-reliability",
    slug: "consistency-and-reliability",
    title: "Consistency & Reliability",
    difficulty: "Advanced",
    category: "software-systems",
    shortDescription: "The engineering trade-offs required to keep data accurate when servers crash and networks partition.",
    overview: {
      question: "If data is copied across three servers, what happens if they disagree?",
      answer: "Dealing with disagreements (Consistency) while surviving crashes (Reliability) is the hardest problem in distributed data systems."
    },
    whyItExists: {
      problem: "If you only have one database, it's a single point of failure. So, you replicate data to multiple servers. But if a network link breaks, Server A might get an update that Server B doesn't see.",
      solution: "Consensus algorithms (like Paxos or Raft) and careful architectural choices based on the CAP Theorem.",
      keyInsight: "You must mathematically choose between giving the user an error, or giving the user potentially stale data."
    },
    coreConcepts: [
      { title: "Strong Consistency", explanation: "The system guarantees that after a write completes, every subsequent read will see that updated data, no matter which server they talk to. Very slow, but perfectly accurate." },
      { title: "Eventual Consistency", explanation: "The system allows servers to temporarily disagree. If you stop writing, eventually all servers will sync up. Very fast, highly available, but occasionally confusing for users." },
      { title: "Idempotency", explanation: "Designing operations so that doing them twice has the same effect as doing them once (e.g., 'Set status to Paid' vs 'Add $10'). Crucial for network retries." }
    ],
    keyTerms: [
      { term: "Two-Phase Commit", definition: "A protocol to ensure all databases in a distributed transaction either commit the data together or roll it back together." },
      { term: "Split-Brain", definition: "A catastrophic failure where a network partition causes two servers to both believe they are the 'Master' database, leading to diverging, corrupted data." }
    ],
    connections: [
      { topicId: "distributed-systems", relationship: "The core challenge defined by the CAP Theorem" },
      { topicId: "databases", relationship: "Dictates how distributed databases operate" }
    ],
    realWorldExamples: [
      { title: "Social Media Likes", description: "Instagram uses Eventual Consistency for likes. It is acceptable if Server A says 500 likes and Server B says 498 likes for a few seconds in exchange for massive speed." },
      { title: "Bank Balances", description: "Banks use Strong Consistency. You cannot have Server A think you have $100 while Server B thinks you have $0." }
    ],
    keyTakeaways: [
      "In a distributed system, a network timeout does not mean the operation failed. It means the state is unknown. You must retry safely using idempotency.",
      "True consistency requires coordination, and coordination is slow."
    ],
    prerequisites: ["distributed-systems"],
    nextTopics: []
  }
];
