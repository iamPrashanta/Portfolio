export type SkillStatus = "documented" | "coming-soon";

export interface SkillTimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface SkillEcosystemItem {
  name: string;
  description: string;
  website?: string;
  logo?: string;
}

export interface SkillContent {
  overview: string;
  officialWebsite?: string;
  creator?: string;
  initialRelease?: string;
  history?: SkillTimelineItem[];
  problemSolved?: {
    title: string;
    description: string;
    problems: string[];
  };
  frameworks?: SkillEcosystemItem[];
  libraries?: SkillEcosystemItem[];
  tools?: SkillEcosystemItem[];
  officialResources?: SkillEcosystemItem[];
  learningPath?: {
    step: string;
    title: string;
    description: string;
  }[];
  underTheHood?: {
    title: string;
    description: string;
  }[];
  concurrency?: {
    title: string;
    description: string;
  };
  advancedConcepts?: string[];
  codingStyles?: {
    procedural?: string;
    oop?: string;
    functional?: string;
    whenToUseWhat?: string;
  };
  security?: {
    overview: string;
    practices: string[];
    platformSpecific?: string;
  };
  relatedSkills?: string[];
}

export interface Skill {
  name: string;
  slug: string;
  category: string;
  description: string;
  logo?: string;
  status: SkillStatus;
  content?: SkillContent;
}

export const skills: Skill[] = [
  // ==========================================
  // LANGUAGES & CORE
  // ==========================================
  {
    name: "Python",
    slug: "python",
    category: "Languages & Core",
    description: "High-level programming language for general-purpose programming, data science, and AI.",
    status: "documented",
    content: {
      overview: "Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected.",
      officialWebsite: "https://www.python.org/",
      creator: "Guido van Rossum",
      initialRelease: "1991",
      history: [
        { year: "1989", title: "Conception", description: "Guido van Rossum begins working on Python at CWI in the Netherlands." },
        { year: "1991", title: "Python 0.9.0", description: "First public release with classes, exceptions, and core data types." },
        { year: "2000", title: "Python 2.0", description: "Introduced list comprehensions, garbage collection, and a shift to community-driven development." },
        { year: "2008", title: "Python 3.0", description: "Major backwards-incompatible release fixing foundational design flaws." },
        { year: "2020", title: "Python 2 EOL", description: "Official end-of-life for Python 2, cementing Python 3 as the standard." },
        { year: "Today", title: "Modern Era", description: "Python dominates AI, machine learning, data science, and backend development." },
      ],
      problemSolved: {
        title: "Readable, High-Level Scripting",
        description: "Python was created to succeed the ABC programming language, aiming to provide a readable, concise syntax that bridges the gap between shell scripting and C.",
        problems: [
          "C and C++ required too much boilerplate for simple tasks.",
          "Shell scripts were unmaintainable for complex logic.",
          "Lack of a simple, readable syntax in existing high-level languages.",
        ],
      },
      frameworks: [
        { name: "Django", description: "A high-level Python web framework that encourages rapid development.", website: "https://www.djangoproject.com/" },
        { name: "Flask", description: "A lightweight WSGI web application framework.", website: "https://flask.palletsprojects.com/" },
        { name: "FastAPI", description: "A modern, fast web framework for building APIs with Python 3.8+.", website: "https://fastapi.tiangolo.com/" },
      ],
      libraries: [
        { name: "NumPy", description: "Fundamental package for array computing in Python.", website: "https://numpy.org/" },
        { name: "Pandas", description: "Fast, powerful, flexible data analysis and manipulation tool.", website: "https://pandas.pydata.org/" },
        { name: "Requests", description: "A simple, yet elegant, HTTP library.", website: "https://requests.readthedocs.io/" },
        { name: "SQLAlchemy", description: "The Python SQL Toolkit and Object Relational Mapper.", website: "https://www.sqlalchemy.org/" },
        { name: "PyTorch", description: "An open source machine learning framework that accelerates the path from research prototyping to production deployment.", website: "https://pytorch.org/" },
      ],
      learningPath: [
        { step: "01", title: "Fundamentals", description: "Variables, data types, control flow, functions, and list comprehensions." },
        { step: "02", title: "Object-Oriented Python", description: "Classes, inheritance, magic methods, and duck typing." },
        { step: "03", title: "Ecosystem & Tooling", description: "Pip, virtual environments, PyPI, and basic package management." },
        { step: "04", title: "Web or Data Specialization", description: "Learn FastAPI/Django for web, or Pandas/NumPy for data." },
        { step: "05", title: "Advanced Python", description: "Generators, decorators, asyncio, memory management, and C extensions." },
      ],
      underTheHood: [
        { title: "Execution Model", description: "Python Source (.py) is parsed into an AST, compiled into Bytecode (.pyc), and executed by the Python Virtual Machine (PVM)." },
        { title: "Memory Management", description: "Python uses reference counting and a generational garbage collector to manage memory automatically." },
        { title: "Global Interpreter Lock (GIL)", description: "A mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once." },
      ],
      concurrency: {
        title: "Concurrency vs Parallelism",
        description: "Python supports concurrency via threading and asyncio (ideal for I/O-bound tasks). Due to the GIL, true parallelism for CPU-bound tasks requires the multiprocessing module.",
      },
      codingStyles: {
        procedural: "Used for simple scripts, automations, and data processing pipelines.",
        oop: "Used for domain modeling, complex state management, and large applications.",
        functional: "Used for data transformations (map, filter, reduce) and pipeline processing.",
        whenToUseWhat: "Start procedural for scripts, use OOP for systems and APIs, and functional patterns for data manipulation.",
      },
      security: {
        overview: "Python security focuses heavily on safe dependency management and preventing injection attacks.",
        practices: [
          "Use virtual environments (venv) to isolate dependencies.",
          "Audit packages using safety or pip-audit.",
          "Use parameterized queries (SQLAlchemy/psycopg) to prevent SQL injection.",
          "Store secrets in environment variables (python-dotenv), never in code.",
          "Use defusedxml instead of standard xml to prevent XML vulnerabilities.",
        ],
      },
      relatedSkills: ["django", "fastapi", "postgresql", "docker", "pandas"],
    },
  },
  {
    name: "PHP",
    slug: "php",
    category: "Languages & Core",
    description: "Server-side scripting language designed for web development.",
    status: "documented",
    content: {
      overview: "PHP is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible, and pragmatic, PHP powers everything from blogs to the most popular websites in the world.",
      officialWebsite: "https://www.php.net/",
      creator: "Rasmus Lerdorf",
      initialRelease: "1995",
      history: [
        { year: "1994", title: "Conception", description: "Rasmus Lerdorf writes a set of CGI binaries in C, calling it Personal Home Page Tools (PHP Tools)." },
        { year: "1997", title: "PHP/FI 2.0", description: "The second iteration gains traction, parsed by a custom C interpreter." },
        { year: "1998", title: "PHP 3", description: "Rewritten by Andi Gutmans and Zeev Suraski, establishing modern PHP architecture." },
        { year: "2000", title: "PHP 4", description: "Introduces the Zend Engine, significantly improving performance." },
        { year: "2004", title: "PHP 5", description: "Brings a robust Object-Oriented Programming (OOP) model and the PDO extension." },
        { year: "2015", title: "PHP 7", description: "Delivers massive performance improvements and strict type declarations." },
        { year: "2020", title: "PHP 8", description: "Introduces the JIT compiler, attributes, union types, and named arguments." },
      ],
      problemSolved: {
        title: "Dynamic Web Pages",
        description: "Before PHP, building dynamic websites required writing complex C or Perl CGI scripts. PHP allowed embedding logic directly within HTML.",
        problems: [
          "CGI scripts were slow and consumed too many server resources.",
          "C and Perl were overly complex for simple web templates.",
          "No native database connectivity in early web technologies.",
        ],
      },
      frameworks: [
        { name: "Laravel", description: "The PHP Framework for Web Artisans.", website: "https://laravel.com/" },
        { name: "Symfony", description: "A set of reusable PHP components and a web framework.", website: "https://symfony.com/" },
        { name: "CodeIgniter", description: "A powerful PHP framework with a very small footprint.", website: "https://codeigniter.com/" },
        { name: "Yii", description: "A fast, secure, and efficient PHP framework.", website: "https://www.yiiframework.com/" },
      ],
      libraries: [
        { name: "Composer", description: "Dependency Manager for PHP.", website: "https://getcomposer.org/" },
        { name: "PHPUnit", description: "The PHP testing framework.", website: "https://phpunit.de/" },
        { name: "Guzzle", description: "PHP HTTP client.", website: "https://docs.guzzlephp.org/" },
        { name: "Doctrine", description: "Object-Relational Mapping (ORM) and Database Abstraction Layer.", website: "https://www.doctrine-project.org/" },
      ],
      learningPath: [
        { step: "01", title: "Syntax & HTTP", description: "Basic syntax, variables, forms, GET/POST requests, and sessions." },
        { step: "02", title: "Object-Oriented PHP", description: "Classes, interfaces, traits, and namespaces." },
        { step: "03", title: "Composer & Ecosystem", description: "Managing dependencies and using modern autoloading (PSR-4)." },
        { step: "04", title: "Frameworks (Laravel)", description: "Routing, MVC architecture, Eloquent ORM, and middleware." },
        { step: "05", title: "Architecture & Security", description: "Dependency injection, solid principles, caching, and hardening." },
      ],
      underTheHood: [
        { title: "Execution Model", description: "PHP Source ↓ Tokenizer ↓ Parser ↓ AST ↓ Compiler ↓ Opcodes ↓ Zend Engine Execution." },
        { title: "Opcache", description: "PHP compiles scripts to opcodes. Opcache stores these opcodes in shared memory, skipping compilation on subsequent requests." },
        { title: "Process Isolation", description: "Using PHP-FPM, each request runs in an isolated process, meaning memory leaks in one request do not crash the entire server." },
      ],
      concurrency: {
        title: "Shared-Nothing Architecture",
        description: "PHP traditionally uses a synchronous, blocking model where each request is isolated. Asynchronous execution is possible via Swoole, RoadRunner, or AMPHP.",
      },
      codingStyles: {
        procedural: "Historically used for simple templates and legacy WordPress code.",
        oop: "The standard for modern PHP development, heavily utilized by Laravel and Symfony.",
        whenToUseWhat: "Always use modern OOP with strong typing and strict types (`declare(strict_types=1);`) for backend systems.",
      },
      security: {
        overview: "PHP security involves securing the application layer and configuring the web server correctly.",
        practices: [
          "Use PDO with prepared statements to prevent SQL Injection.",
          "Use `htmlspecialchars()` or a template engine like Blade/Twig to prevent XSS.",
          "Generate and validate CSRF tokens on all state-changing requests.",
          "Use `password_hash()` (bcrypt/argon2) for password storage.",
          "Disable dangerous functions (`exec`, `shell_exec`) in `php.ini`.",
        ],
        platformSpecific: "When using Apache, configure `.htaccess` to deny directory listing (`Options -Indexes`), force HTTPS, and route all requests to `index.php` (Front Controller pattern). Nginx does not use `.htaccess` and must be secured via `nginx.conf`.",
      },
      relatedSkills: ["laravel", "mysql", "nginx", "docker", "redis"],
    },
  },
  {
    name: "Java",
    slug: "java",
    category: "Languages & Core",
    description: "Class-based, object-oriented programming language designed to have as few implementation dependencies as possible.",
    status: "documented",
    content: {
      overview: "Java is a high-level, class-based, object-oriented programming language. It is designed to let application developers 'write once, run anywhere' (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.",
      officialWebsite: "https://dev.java/",
      creator: "James Gosling (Sun Microsystems)",
      initialRelease: "1995",
      history: [
        { year: "1991", title: "Project Green", description: "James Gosling initiates the Java language project." },
        { year: "1995", title: "Java 1.0", description: "First public release, promising 'Write Once, Run Anywhere'." },
        { year: "2004", title: "Java 5", description: "Introduces Generics, Annotations, and Enums." },
        { year: "2010", title: "Oracle Acquisition", description: "Oracle Corporation acquires Sun Microsystems." },
        { year: "2014", title: "Java 8", description: "Brings functional programming features like Lambdas and the Streams API." },
        { year: "2023", title: "Java 21", description: "Introduces Virtual Threads (Project Loom) for massive concurrency." },
      ],
      problemSolved: {
        title: "Platform Independence",
        description: "Before Java, C/C++ applications had to be recompiled for every target architecture and OS.",
        problems: [
          "Platform lock-in and cross-compilation complexity.",
          "Manual memory management in C/C++ causing severe security and stability bugs.",
          "Lack of standard libraries for networking and UI.",
        ],
      },
      frameworks: [
        { name: "Spring Boot", description: "Creates stand-alone, production-grade Spring based Applications.", website: "https://spring.io/projects/spring-boot" },
        { name: "Jakarta EE", description: "Enterprise Java standard (formerly Java EE).", website: "https://jakarta.ee/" },
        { name: "Micronaut", description: "A modern, full-stack framework for building modular, easily testable microservices.", website: "https://micronaut.io/" },
      ],
      libraries: [
        { name: "Hibernate", description: "Object-relational mapping (ORM) library.", website: "https://hibernate.org/" },
        { name: "Maven", description: "Software project management and comprehension tool.", website: "https://maven.apache.org/" },
        { name: "Gradle", description: "Build automation system.", website: "https://gradle.org/" },
      ],
      learningPath: [
        { step: "01", title: "Core Java", description: "Syntax, JVM architecture, primitive types, and basic OOP." },
        { step: "02", title: "Advanced OOP & Collections", description: "Interfaces, abstract classes, Generics, and the Collections framework." },
        { step: "03", title: "Modern Features", description: "Lambdas, Streams API, and Optional." },
        { step: "04", title: "Concurrency", description: "Threads, synchronized blocks, ExecutorService, and Virtual Threads." },
        { step: "05", title: "Ecosystem", description: "Spring Boot, Maven/Gradle, Hibernate, and REST API development." },
      ],
      underTheHood: [
        { title: "Execution Model", description: "Java Source (.java) ↓ javac ↓ Bytecode (.class) ↓ JVM ↓ JIT Compiler ↓ Machine Code." },
        { title: "The JVM", description: "The Java Virtual Machine interprets bytecode and utilizes a Just-In-Time (JIT) compiler to optimize hot code paths into native machine instructions at runtime." },
        { title: "Garbage Collection", description: "Java handles memory automatically using sophisticated algorithms like G1GC and ZGC, pausing execution minimally to clear unused objects." },
      ],
      concurrency: {
        title: "Native Threading and Virtual Threads",
        description: "Java traditionally maps a Java Thread 1:1 to an OS thread. With Java 21 (Project Loom), Virtual Threads allow millions of lightweight threads mapped to a small number of OS threads, revolutionizing asynchronous programming.",
      },
      codingStyles: {
        oop: "Java is fundamentally object-oriented. Everything exists within a class.",
        functional: "Modern Java (8+) encourages declarative data transformations using Streams and Lambdas.",
        whenToUseWhat: "Use OOP for architecture and state management, and functional paradigms for data processing pipelines.",
      },
      security: {
        overview: "Java provides a robust security architecture but requires vigilance against dependency vulnerabilities.",
        practices: [
          "Validate and sanitize all external input to prevent injection.",
          "Use prepared statements for all SQL database access.",
          "Be highly cautious with object deserialization to prevent Remote Code Execution (RCE).",
          "Use Spring Security for comprehensive authentication and authorization (RBAC).",
          "Regularly audit dependencies using tools like OWASP Dependency-Check.",
        ],
      },
      relatedSkills: ["spring-boot", "postgresql", "docker", "redis"],
    },
  },
  {
    name: "Go",
    slug: "go",
    category: "Languages & Core",
    description: "Open-source programming language supported by Google that makes it easy to build simple, reliable, and efficient software.",
    status: "documented",
    content: {
      overview: "Go (Golang) is a statically typed, compiled programming language designed at Google. It focuses on simplicity, high performance, and built-in concurrency, making it ideal for scalable backend systems, microservices, and DevOps tooling.",
      officialWebsite: "https://go.dev/",
      creator: "Robert Griesemer, Rob Pike, Ken Thompson",
      initialRelease: "2009",
      history: [
        { year: "2007", title: "Conception", description: "Designed at Google to resolve issues with C++ complexity and build times." },
        { year: "2009", title: "Public Announcement", description: "Go is officially announced as an open-source project." },
        { year: "2012", title: "Go 1.0", description: "First stable release with a strong backwards compatibility guarantee." },
        { year: "2022", title: "Go 1.18", description: "Introduced Generics, fundamentally expanding the language's capabilities." },
      ],
      problemSolved: {
        title: "Scale and Simplicity",
        description: "Google's codebases were massive, and C++ build times were taking hours. Go was designed to compile instantly while providing memory safety, garbage collection, and native concurrency.",
        problems: [
          "C++ compilation speeds were bottlenecking developer velocity.",
          "Threading and concurrency in C++/Java were verbose and error-prone.",
          "Deployment required managing complex dependency environments.",
        ],
      },
      frameworks: [
        { name: "Gin", description: "A high-performance HTTP web framework.", website: "https://gin-gonic.com/" },
        { name: "Echo", description: "High performance, extensible, minimalist Go web framework.", website: "https://echo.labstack.com/" },
        { name: "Fiber", description: "An Express-inspired web framework built on top of Fasthttp.", website: "https://gofiber.io/" },
      ],
      libraries: [
        { name: "GORM", description: "The fantastic ORM library for Golang.", website: "https://gorm.io/" },
        { name: "Cobra", description: "A library for creating powerful modern CLI applications.", website: "https://github.com/spf13/cobra" },
      ],
      learningPath: [
        { step: "01", title: "Basics", description: "Syntax, variables, structs, and error handling (returning error as a value)." },
        { step: "02", title: "Interfaces", description: "Implicit interfaces and composition over inheritance." },
        { step: "03", title: "Concurrency", description: "Goroutines, channels, WaitGroups, and the select statement." },
        { step: "04", title: "Web Services", description: "Standard library `net/http`, JSON marshaling, and middleware." },
        { step: "05", title: "Production Go", description: "Context cancellation, profiling (pprof), testing, and deployment." },
      ],
      underTheHood: [
        { title: "Execution Model", description: "Go Source ↓ Compiler ↓ Native Machine Code. Go compiles down to a single, statically linked executable containing its own runtime." },
        { title: "Garbage Collection", description: "Go features a highly optimized concurrent, tri-color mark-and-sweep garbage collector designed for ultra-low latency." },
        { title: "Scheduler", description: "The Go runtime includes an M:N scheduler that multiplexes thousands of lightweight goroutines onto a few OS threads." },
      ],
      concurrency: {
        title: "Do not communicate by sharing memory; instead, share memory by communicating.",
        description: "Go's concurrency is built on CSP (Communicating Sequential Processes). Goroutines are spawned cheaply, and they communicate via Channels, avoiding traditional lock-based state mutation.",
      },
      codingStyles: {
        procedural: "Go favors a procedural, imperative style with a focus on simplicity.",
        oop: "Go supports OOP through Structs and Interfaces, but strictly forbids inheritance in favor of Composition.",
        whenToUseWhat: "Keep logic flat. Handle errors immediately. Use interfaces only when behavior must be abstracted.",
      },
      security: {
        overview: "Go is inherently safer than C/C++ due to memory safety, but requires standard web security practices.",
        practices: [
          "Use the built-in `html/template` package which automatically escapes input to prevent XSS.",
          "Use parameterized queries via `database/sql` to prevent SQL Injection.",
          "Handle all errors explicitly; never ignore a returned error.",
          "Use `crypto/rand` for secure random numbers, not `math/rand`.",
          "Run static analysis using `govulncheck` to detect vulnerable dependencies.",
        ],
      },
      relatedSkills: ["docker", "kubernetes", "postgresql", "redis"],
    },
  },
  {
    name: "Rust",
    slug: "rust",
    category: "Languages & Core",
    description: "A language empowering everyone to build reliable and efficient software.",
    status: "documented",
    content: {
      overview: "Rust is a blazing fast and memory-efficient systems programming language with no runtime or garbage collector. It can power performance-critical services, run on embedded devices, and easily integrate with other languages.",
      officialWebsite: "https://www.rust-lang.org/",
      creator: "Graydon Hoare (Mozilla)",
      initialRelease: "2015",
      history: [
        { year: "2006", title: "Conception", description: "Graydon Hoare starts Rust as a personal project." },
        { year: "2009", title: "Mozilla Sponsorship", description: "Mozilla begins sponsoring the project to improve the Firefox browser." },
        { year: "2015", title: "Rust 1.0", description: "First stable release, establishing its core ownership model." },
        { year: "2021", title: "Rust Foundation", description: "Major tech companies form a foundation to secure Rust's future." },
      ],
      problemSolved: {
        title: "Memory Safety Without Garbage Collection",
        description: "C and C++ are fast but plagued by memory bugs (segfaults, use-after-free). Java/C# are safe but rely on unpredictable garbage collection. Rust solves both via compile-time memory checks.",
        problems: [
          "70% of security vulnerabilities in major codebases are memory safety issues.",
          "Garbage collection pauses are unacceptable for high-frequency trading or OS kernels.",
          "Data races in concurrent programming were notoriously hard to debug.",
        ],
      },
      frameworks: [
        { name: "Actix Web", description: "A powerful, pragmatic, and extremely fast web framework.", website: "https://actix.rs/" },
        { name: "Axum", description: "Web framework that focuses on ergonomics and modularity, built by the Tokio team.", website: "https://github.com/tokio-rs/axum" },
      ],
      libraries: [
        { name: "Tokio", description: "An asynchronous runtime for the Rust programming language.", website: "https://tokio.rs/" },
        { name: "Serde", description: "A framework for serializing and deserializing Rust data structures efficiently.", website: "https://serde.rs/" },
        { name: "Diesel", description: "A safe, extensible ORM and Query Builder.", website: "https://diesel.rs/" },
      ],
      learningPath: [
        { step: "01", title: "Syntax & Cargo", description: "Variables, mutability, functions, and the Cargo build system." },
        { step: "02", title: "Ownership & Borrowing", description: "The core mechanic of Rust. Understanding the borrow checker, references, and slices." },
        { step: "03", title: "Structs & Enums", description: "Pattern matching with `match`, `Option`, and `Result` types." },
        { step: "04", title: "Lifetimes & Traits", description: "Ensuring reference validity and defining shared behavior." },
        { step: "05", title: "Async & Ecosystem", description: "Using `async/await` with the Tokio runtime for web servers." },
      ],
      underTheHood: [
        { title: "Execution Model", description: "Rust Source ↓ rustc (Frontend) ↓ LLVM IR ↓ LLVM Optimizer ↓ Native Machine Code." },
        { title: "Zero-Cost Abstractions", description: "High-level features like iterators and generics compile down to machine code that is as fast as hand-written C." },
        { title: "No Garbage Collector", description: "Memory is automatically freed the exact moment a variable goes out of scope, tracked at compile-time." },
      ],
      concurrency: {
        title: "Fearless Concurrency",
        description: "The same ownership and typing rules that guarantee memory safety also prevent data races. If a Rust program compiles, it is free of data races.",
      },
      codingStyles: {
        functional: "Rust makes heavy use of functional patterns like iterators, closures, and pattern matching.",
        oop: "Rust lacks inheritance, relying instead on Composition and Traits (similar to interfaces).",
        whenToUseWhat: "Use structs for data, traits for behavior, and enums/pattern matching for state machines.",
      },
      security: {
        overview: "Rust is inherently secure against the most common vulnerabilities (buffer overflows, dangling pointers) by design.",
        practices: [
          "Avoid the `unsafe` keyword unless absolutely necessary (e.g., FFI).",
          "Use `cargo audit` to scan dependencies for known security vulnerabilities.",
          "Leverage strong typing (`Option`, `Result`) to handle errors explicitly, never crashing unexpectedly.",
          "Validate all external data boundaries using libraries like `validator`.",
        ],
      },
      relatedSkills: ["webassembly", "docker", "c++", "linux"],
    },
  },
  
  // ==========================================
  // BACKEND ENGINEERING
  // ==========================================
  {
    name: "Node.js",
    slug: "nodejs",
    category: "Backend Engineering",
    description: "An asynchronous event-driven JavaScript runtime designed to build scalable network applications.",
    status: "documented",
    content: {
      overview: "Node.js is a cross-platform JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. It revolutionized full-stack development by unifying the language used on the client and server.",
      officialWebsite: "https://nodejs.org/",
      creator: "Ryan Dahl",
      initialRelease: "2009",
      history: [
        { year: "2009", title: "Creation", description: "Ryan Dahl creates Node.js, combining V8, an event loop, and a low-level I/O API." },
        { year: "2010", title: "npm", description: "The Node Package Manager (npm) is introduced." },
        { year: "2015", title: "Node.js Foundation", description: "The io.js fork merges back into Node.js under a new foundation." },
        { year: "Today", title: "Enterprise Standard", description: "Node.js is heavily used by Netflix, Uber, PayPal, and more." },
      ],
      problemSolved: {
        title: "The C10K Problem",
        description: "Traditional web servers (like Apache) spawned a new thread for every request, which consumed too much RAM when handling 10,000+ concurrent connections. Node.js solved this using an asynchronous, single-threaded event loop.",
        problems: [
          "Thread-based networking was heavy and resource-intensive.",
          "Frontend and Backend teams had to use different languages.",
          "Real-time applications (WebSockets) were difficult to scale."
        ],
      },
      frameworks: [
        { name: "Express", description: "Fast, unopinionated, minimalist web framework.", website: "https://expressjs.com/" },
        { name: "NestJS", description: "A progressive Node.js framework for building efficient, scalable enterprise apps.", website: "https://nestjs.com/" },
        { name: "Fastify", description: "Fast and low overhead web framework.", website: "https://fastify.io/" },
        { name: "Koa", description: "Next generation web framework for Node.js.", website: "https://koajs.com/" },
      ],
      libraries: [
        { name: "Socket.IO", description: "Bidirectional and low-latency communication.", website: "https://socket.io/" },
        { name: "Prisma", description: "Next-generation Node.js and TypeScript ORM.", website: "https://www.prisma.io/" },
      ],
      learningPath: [
        { step: "01", title: "JavaScript Core", description: "Master ES6+, closures, callbacks, promises, and async/await." },
        { step: "02", title: "Node.js Core APIs", description: "Understand fs, path, http, and events modules." },
        { step: "03", title: "Express & APIs", description: "Build RESTful APIs, handle routing, and use middleware." },
        { step: "04", title: "Databases", description: "Connect to MongoDB or PostgreSQL using ORMs like Prisma." },
        { step: "05", title: "Architecture", description: "Learn NestJS for scalable, testable enterprise architecture." },
      ],
      underTheHood: [
        { title: "Execution Model", description: "JavaScript Source ↓ V8 Engine Compilation ↓ Event Loop Execution ↓ libuv (OS I/O)." },
        { title: "The Event Loop", description: "A continuously running loop that checks the call stack and task queues, executing callbacks when I/O operations complete. Understanding microtasks vs macrotasks is critical." },
        { title: "libuv", description: "A C library that provides multi-platform support for asynchronous I/O based on an internal thread pool for file system operations." },
      ],
      concurrency: {
        title: "Single-Threaded Asynchronous I/O",
        description: "Node.js runs JavaScript on a single thread. It achieves concurrency by offloading I/O operations (database queries, network requests) to the OS, which notifies the Event Loop upon completion. For CPU-bound tasks, `worker_threads` or clustering must be used.",
      },
      codingStyles: {
        functional: "Heavily relies on callbacks and promises for asynchronous flow.",
        oop: "Used heavily in frameworks like NestJS (which uses classes and decorators).",
        whenToUseWhat: "Use simple procedural/functional routes in Express. Use OOP/DI architecture in NestJS for large teams.",
      },
      security: {
        overview: "Node.js applications must carefully validate inputs and protect the single thread from blocking operations.",
        practices: [
          "Never block the event loop with heavy synchronous processing (e.g., massive JSON parsing or crypto).",
          "Use `helmet` to set secure HTTP headers.",
          "Prevent Prototype Pollution by freezing objects or avoiding deep merge libraries.",
          "Audit dependencies frequently using `npm audit`.",
          "Never use `eval()` or pass unsanitized input to `child_process.exec()`.",
        ],
      },
      relatedSkills: ["javascript", "typescript", "express", "mongodb", "docker"],
    },
  },
  {
    name: "Express.js",
    slug: "express",
    category: "Backend Engineering",
    description: "Fast, unopinionated, minimalist web framework for Node.js.",
    status: "documented",
    content: {
      overview: "Express is the most popular web framework for Node.js. It provides a thin layer of fundamental web application features, without obscuring Node.js features.",
      officialWebsite: "https://expressjs.com/",
      creator: "TJ Holowaychuk",
      initialRelease: "2010",
      history: [
        { year: "2010", title: "Creation", description: "Created by TJ Holowaychuk as a Sinatra-inspired framework for Node." },
        { year: "2014", title: "Express 4.0", description: "Removed bundled middleware to make the framework lighter and modular." },
        { year: "2024", title: "Express 5.0", description: "Brings native Promise support and modern routing features." },
      ],
      problemSolved: {
        title: "Routing and Middleware",
        description: "Using raw Node.js `http` modules required manually parsing URLs, handling headers, and writing massive switch statements. Express abstracted this into elegant routing and a powerful middleware chain.",
        problems: [
          "Raw Node.js HTTP servers were verbose and hard to maintain.",
          "No standard way to handle requests, responses, and errors.",
        ],
      },
      frameworks: [],
      libraries: [
        { name: "Cors", description: "Middleware for enabling CORS.", website: "https://github.com/expressjs/cors" },
        { name: "Helmet", description: "Helps secure apps by setting HTTP headers.", website: "https://helmetjs.github.io/" },
        { name: "Morgan", description: "HTTP request logger middleware.", website: "https://github.com/expressjs/morgan" },
      ],
      learningPath: [
        { step: "01", title: "Routing", description: "Defining GET, POST, PUT, DELETE endpoints." },
        { step: "02", title: "Middleware", description: "Understanding the `(req, res, next)` function chain." },
        { step: "03", title: "Error Handling", description: "Writing custom error handling middleware." },
        { step: "04", title: "Architecture", description: "Structuring routes, controllers, and services in a modular way." },
      ],
      underTheHood: [
        { title: "Execution Model", description: "HTTP Request ↓ Node HTTP Server ↓ Express Middleware Chain ↓ Route Match ↓ Controller ↓ Response." },
        { title: "Middleware Chain", description: "Every request passes through a stack of functions. Each function can modify the request/response, end the request, or pass control to the `next()` function." },
      ],
      concurrency: {
        title: "Inherited from Node.js",
        description: "Express is synchronous by nature but handles asynchronous controllers. It inherits Node's single-threaded event loop.",
      },
      codingStyles: {
        procedural: "Standard Express apps use simple functions for controllers.",
        whenToUseWhat: "Use Express for lightweight APIs and microservices. For massive enterprise apps requiring strict structure, consider NestJS.",
      },
      security: {
        overview: "Express is unopinionated, meaning security must be manually configured.",
        practices: [
          "Use `helmet` middleware.",
          "Implement strict CORS policies.",
          "Use rate limiting (`express-rate-limit`) to prevent DDoS.",
          "Validate all input bodies using Zod or Joi.",
          "Ensure global error handlers catch exceptions to prevent server crashes.",
        ],
      },
      relatedSkills: ["nodejs", "typescript", "mongodb", "postgresql"],
    },
  },
  
  // ==========================================
  // FRONTEND ENGINEERING
  // ==========================================
  {
    name: "Next.js",
    slug: "nextjs",
    category: "Frontend Engineering",
    description: "The React Framework for the Web.",
    status: "documented",
    content: {
      overview: "Next.js is a full-stack React framework created by Vercel. It enables you to create high-quality web applications with features like Server-Side Rendering (SSR), Static Site Generation (SSG), and Server Components.",
      officialWebsite: "https://nextjs.org/",
      creator: "Guillermo Rauch / Vercel",
      initialRelease: "2016",
      history: [
        { year: "2016", title: "Launch", description: "Released as a minimalist framework for server-rendered React applications." },
        { year: "2020", title: "Next.js 10", description: "Introduced Image Optimization and Next.js Analytics." },
        { year: "2022", title: "Next.js 13", description: "Introduced the revolutionary App Router and React Server Components." },
        { year: "2024", title: "Next.js 15", description: "Stable Turbopack, enhanced caching controls, and React 19 support." },
      ],
      problemSolved: {
        title: "SEO and Initial Load Performance",
        description: "Standard React (Client-Side Rendering) sends an empty HTML file to the browser, leading to poor SEO and slow perceived loading times. Next.js solved this by rendering HTML on the server before sending it to the client.",
        problems: [
          "React SPAs had terrible SEO because crawlers saw empty `<div id='root'>`.",
          "Users stared at blank screens while massive JS bundles downloaded.",
          "Routing in React required complex third-party libraries.",
        ],
      },
      frameworks: [
        { name: "React", description: "The underlying library for building UI.", website: "https://react.dev/" },
        { name: "Vercel Ecosystem", description: "The optimal hosting platform for Next.js, including Edge Functions and KV.", website: "https://vercel.com/" },
      ],
      libraries: [
        { name: "Tailwind CSS", description: "Utility-first CSS framework.", website: "https://tailwindcss.com/" },
        { name: "Zustand", description: "Small, fast and scalable bearbones state-management solution.", website: "https://zustand-demo.pmnd.rs/" },
      ],
      learningPath: [
        { step: "01", title: "React Fundamentals", description: "Must master React hooks, state, and props first." },
        { step: "02", title: "App Router & Navigation", description: "File-system routing, Layouts, and the `<Link>` component." },
        { step: "03", title: "Data Fetching", description: "Server Components vs Client Components, `fetch` caching, and Server Actions." },
        { step: "04", title: "Optimization", description: "Using `next/image`, `next/font`, and dynamic imports." },
        { step: "05", title: "Deployment", description: "Deploying to Vercel, managing environment variables, and edge functions." },
      ],
      underTheHood: [
        { title: "React Server Components (RSC)", description: "Components that render entirely on the server and send static HTML and a lightweight JSON representation to the client, shipping zero JavaScript for the UI logic." },
        { title: "Hydration", description: "The process where React attaches event listeners to the server-rendered HTML on the client, making it interactive." },
        { title: "Turbopack", description: "An incremental bundler optimized for Next.js development, replacing Webpack for significantly faster startup times." },
      ],
      concurrency: {
        title: "React Concurrent Features",
        description: "Next.js leverages React's concurrent rendering features (like Transitions and Suspense) to keep the UI responsive during expensive renders or data fetches.",
      },
      codingStyles: {
        functional: "Strictly relies on functional components and React Hooks.",
        whenToUseWhat: "Use Server Components (default) for fetching data and rendering static UI. Use Client Components (`'use client'`) only when you need interactivity (onClick, useState, useEffect).",
      },
      security: {
        overview: "Next.js requires understanding the boundary between Server and Client to prevent leaking secrets.",
        practices: [
          "Never expose database URIs or API keys to the client. Keep them in Server Components.",
          "Use the `server-only` package to aggressively prevent server-side code from importing into client bundles.",
          "Validate inputs in Server Actions using libraries like Zod.",
          "Use proper CORS and CSRF protections on custom API routes.",
        ],
      },
      relatedSkills: ["react", "typescript", "tailwind-css", "nodejs"],
    },
  },
  
  // ==========================================
  // LANGUAGES & CORE (additional)
  // ==========================================
  {
    slug: "typescript",
    name: "TypeScript",
    status: "documented",
    description: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    category: "Languages & Core",
    content: {
        overview: "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.",
        officialWebsite: "https://www.typescriptlang.org/",
        creator: "Anders Hejlsberg (Microsoft)",
        initialRelease: "2012",
        history: [
            {
                year: "2012",
                title: "Initial Release",
                description: "Microsoft released TypeScript 0.8 to the public."
            },
            {
                year: "2014",
                title: "TypeScript 1.0",
                description: "Released at Build developer conference."
            },
            {
                year: "2016",
                title: "TypeScript 2.0",
                description: "Introduced strict null checks, significantly improving type safety."
            },
            {
                year: "2020",
                title: "TypeScript 4.0",
                description: "Variadic tuple types and improved inference."
            }
        ],
        problemSolved: {
            title: "Scale and Maintainability in JavaScript",
            description: "As JavaScript applications grew in complexity, the lack of static typing made refactoring and large-scale development difficult and error-prone.",
            problems: [
                "Runtime errors due to type mismatches.",
                "Poor IDE support and autocompletion for vanilla JavaScript.",
                "Difficult refactoring in large codebases."
            ]
        },
        underTheHood: [
            {
                title: "Compiler (tsc)",
                description: "Parses TypeScript code, performs type checking, and emits standard JavaScript code."
            },
            {
                title: "Structural Typing",
                description: "Type compatibility is based on the shape (structure) of the data, rather than explicit declarations (nominal typing)."
            },
            {
                title: "Type Erasure",
                description: "Type annotations are completely removed during compilation; they do not exist at runtime."
            }
        ],
        learningPath: [
            {
                step: "1",
                title: "Basic Types",
                description: "Primitives, arrays, tuples, and enums."
            },
            {
                step: "2",
                title: "Interfaces & Types",
                description: "Defining object shapes, type aliases, and differences between them."
            },
            {
                step: "3",
                title: "Generics",
                description: "Creating reusable components that work with a variety of types."
            },
            {
                step: "4",
                title: "Advanced Types",
                description: "Utility types, mapped types, conditional types, and template literal types."
            }
        ],
        advancedConcepts: [
            "Type Inference & Type Guards",
            "Discriminated Unions",
            "Declaration Merging",
            "Module Resolution Strategies"
        ],
        codingStyles: {
            oop: "Excellent support for classes, interfaces, access modifiers (public, private, protected).",
            functional: "Enhances functional JS with precise typing for higher-order functions.",
            whenToUseWhat: "Use strict typing ('strict: true') in all projects. Prefer interfaces for object shapes and type aliases for unions/intersections."
        },
        security: {
            overview: "TypeScript improves security by preventing entire classes of runtime errors, but it does not run in the browser.",
            practices: [
                "Use 'strictNullChecks' to prevent null reference exceptions.",
                "Remember that TypeScript cannot validate external data (e.g., API responses) at runtime; use validation libraries like Zod.",
                "Avoid using 'any'; use 'unknown' for untyped values."
            ]
        },
        relatedSkills: [
            "javascript",
            "react",
            "next-js",
            "node-js"
        ]
    }
},
  {
    slug: "javascript",
    name: "JavaScript",
    status: "documented",
    description: "The core programming language of the Web, enabling dynamic and interactive web applications.",
    category: "Languages & Core",
    content: {
        overview: "JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js.",
        officialWebsite: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        creator: "Brendan Eich",
        initialRelease: "1995",
        history: [
            {
                year: "1995",
                title: "Mocha to JavaScript",
                description: "Created by Brendan Eich at Netscape in 10 days, originally named Mocha, then LiveScript, and finally JavaScript."
            },
            {
                year: "1997",
                title: "ECMAScript 1",
                description: "First edition of the ECMAScript standard was released."
            },
            {
                year: "2009",
                title: "ES5 and Node.js",
                description: "ES5 brought significant improvements, and Ryan Dahl introduced Node.js, allowing JS outside the browser."
            },
            {
                year: "2015",
                title: "ES6 (ECMAScript 2015)",
                description: "The biggest update in JS history, introducing let/const, arrow functions, classes, and modules."
            }
        ],
        problemSolved: {
            title: "Dynamic Interactivity on the Web",
            description: "Before JavaScript, the web consisted of static HTML documents. JavaScript was created to allow developers to manipulate the DOM, validate forms, and create dynamic interactions.",
            problems: [
                "Static, unresponsive web pages.",
                "Server round-trips required for basic form validation.",
                "Lack of a lightweight scripting language native to the browser."
            ]
        },
        underTheHood: [
            {
                title: "Execution Context",
                description: "Environment where JS code is evaluated and executed (Global, Function, Eval)."
            },
            {
                title: "Call Stack",
                description: "LIFO structure that stores execution contexts during code execution."
            },
            {
                title: "Event Loop",
                description: "Mechanism that handles asynchronous operations by moving callbacks from the task queue to the call stack when it's empty."
            }
        ],
        concurrency: {
            title: "Single-Threaded Non-Blocking I/O",
            description: "JavaScript runs on a single main thread. It achieves concurrency through an event loop and callback queues (microtasks and macrotasks), delegating I/O operations to the runtime environment (like Web APIs or libuv)."
        },
        learningPath: [
            {
                step: "1",
                title: "Fundamentals",
                description: "Variables, data types, operators, and control structures."
            },
            {
                step: "2",
                title: "Functions & Objects",
                description: "Scope, closures, prototypes, and 'this' keyword."
            },
            {
                step: "3",
                title: "Asynchronous JS",
                description: "Callbacks, Promises, and async/await."
            },
            {
                step: "4",
                title: "DOM Manipulation",
                description: "Selecting elements, handling events, and modifying the DOM."
            }
        ],
        advancedConcepts: [
            "Prototypal Inheritance",
            "Closures and Lexical Scoping",
            "Event Loop (Microtasks vs Macrotasks)",
            "Memory Management & Garbage Collection",
            "Generators and Iterators"
        ],
        codingStyles: {
            procedural: "Used for simple scripts and DOM manipulation.",
            oop: "Used with ES6 classes or prototype-based inheritance for modeling complex entities.",
            functional: "Highly encouraged; utilizes first-class functions, higher-order functions (map, filter, reduce), and pure functions.",
            whenToUseWhat: "Use functional programming for data transformations and UI rendering (like in React). Use OOP for structured stateful models."
        },
        security: {
            overview: "Client-side JavaScript is inherently exposed to the user. Defensive practices are critical to prevent malicious code execution and data theft.",
            practices: [
                "Prevent Cross-Site Scripting (XSS) by sanitizing user input and encoding output.",
                "Avoid using 'eval()' and 'Function()' constructors.",
                "Use strict mode ('use strict') to catch common errors.",
                "Implement Content Security Policy (CSP) headers."
            ]
        },
        relatedSkills: [
            "typescript",
            "react",
            "node-js"
        ]
    }
},
  { name: "C", slug: "c", category: "Languages & Core", status: "coming-soon", description: "General-purpose procedural programming language supporting structured programming." },
  { name: "C++", slug: "cpp", category: "Languages & Core", status: "coming-soon", description: "General-purpose programming language with object-oriented, generic, and functional features." },
  { name: "C#", slug: "csharp", category: "Languages & Core", status: "coming-soon", description: "Modern, object-oriented programming language developed by Microsoft." },
  { name: "Dart", slug: "dart", category: "Languages & Core", status: "coming-soon", description: "Client-optimized language for fast apps on any platform." },
  { name: "SQL", slug: "sql", category: "Languages & Core", status: "coming-soon", description: "Domain-specific language for managing data held in relational database management systems." },
  { name: "Bash", slug: "bash", category: "Languages & Core", status: "coming-soon", description: "Unix shell and command language for scripting and automation." },

  // ==========================================
  // BACKEND ENGINEERING (additional)
  // ==========================================
  {
    slug: "laravel",
    name: "Laravel",
    status: "documented",
    description: "A PHP web application framework with expressive, elegant syntax for modern full-stack development.",
    category: "Backend Engineering",
    content: {
        overview: "Laravel is a free, open-source PHP web framework created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern.",
        officialWebsite: "https://laravel.com/",
        creator: "Taylor Otwell",
        initialRelease: "2011",
        history: [
            {
                year: "2011",
                title: "Laravel 1",
                description: "Created as a more advanced alternative to CodeIgniter, lacking built-in support for user authentication."
            },
            {
                year: "2012",
                title: "Laravel 3",
                description: "Introduced the Artisan CLI and better database migrations."
            },
            {
                year: "2015",
                title: "Laravel 5",
                description: "Major structural changes, introducing the current directory structure and middleware."
            },
            {
                year: "2024",
                title: "Laravel 11",
                description: "Introduced a much slimmer application skeleton and configuration."
            }
        ],
        problemSolved: {
            title: "Developer Happiness and Rapid Development",
            description: "Laravel was created to make PHP development enjoyable, providing elegant tools for routing, sessions, caching, and authentication out of the box.",
            problems: [
                "Repetitive boilerplate code for standard web features.",
                "Inconsistent directory structures across PHP projects.",
                "Lack of expressive database ORMs."
            ]
        },
        underTheHood: [
            {
                title: "Service Container",
                description: "A powerful tool for managing class dependencies and performing dependency injection (IoC)."
            },
            {
                title: "Eloquent ORM",
                description: "An Active Record implementation for working with the database effortlessly."
            },
            {
                title: "Artisan CLI",
                description: "A command-line interface that provides helpful commands for building applications."
            }
        ],
        learningPath: [
            {
                step: "1",
                title: "Routing & Controllers",
                description: "Handling HTTP requests and mapping them to logic."
            },
            {
                step: "2",
                title: "Views & Blade",
                description: "Creating dynamic HTML templates using the Blade engine."
            },
            {
                step: "3",
                title: "Database & Eloquent",
                description: "Migrations, models, relationships, and querying data."
            },
            {
                step: "4",
                title: "Authentication & Authorization",
                description: "Securing routes, registering users, and managing permissions (Gates/Policies)."
            }
        ],
        advancedConcepts: [
            "Service Providers & Container Binding",
            "Queues & Job Processing",
            "Event Broadcasting",
            "Middleware Pipelines",
            "Task Scheduling"
        ],
        codingStyles: {
            oop: "Laravel heavily relies on OOP principles, Interfaces, and Traits.",
            procedural: "Provides global helper functions for quick access to core services.",
            whenToUseWhat: "Use the Service Container and Dependency Injection for testability and clean architecture. Keep controllers thin and move business logic to Action classes or Services."
        },
        security: {
            overview: "Laravel provides robust built-in security features, but they must be configured correctly.",
            practices: [
                "Uses PDO for Eloquent to prevent SQL injection.",
                "Built-in CSRF token protection for all POST/PUT/DELETE requests.",
                "Blade templates automatically escape output to prevent XSS.",
                "Use Gates and Policies to enforce strict authorization rules."
            ]
        },
        tools: [
            {
                name: "Livewire",
                description: "Full-stack framework for Laravel that makes building dynamic interfaces simple.",
                website: "https://livewire.laravel.com/"
            },
            {
                name: "Inertia.js",
                description: "Build single-page apps without building an API.",
                website: "https://inertiajs.com/"
            },
            {
                name: "Laravel Forge",
                description: "Server management and deployment platform.",
                website: "https://forge.laravel.com/"
            }
        ],
        relatedSkills: [
            "php",
            "mysql",
            "postgresql",
            "redis"
        ]
    }
},
  { name: "Django", slug: "django", category: "Backend Engineering", status: "coming-soon", description: "High-level Python web framework that encourages rapid development and clean, pragmatic design." },
  { name: "Flask", slug: "flask", category: "Backend Engineering", status: "coming-soon", description: "A lightweight WSGI web application framework for Python." },
  { name: "FastAPI", slug: "fastapi", category: "Backend Engineering", status: "coming-soon", description: "Modern, high-performance web framework for building APIs with Python 3.8+ based on standard type hints." },
  { name: "ASP.NET", slug: "asp-net", category: "Backend Engineering", status: "coming-soon", description: "Open-source server-side web application framework by Microsoft." },
  { name: "Spring Boot", slug: "spring-boot", category: "Backend Engineering", status: "coming-soon", description: "Framework for creating stand-alone, production-grade Spring-based Applications." },
  { name: "REST API", slug: "rest-api", category: "Backend Engineering", status: "coming-soon", description: "Architectural style for designing networked applications using stateless HTTP operations." },
  { name: "GraphQL", slug: "graphql", category: "Backend Engineering", status: "coming-soon", description: "Query language for APIs and a runtime for fulfilling those queries with existing data." },

  // ==========================================
  // FRONTEND ENGINEERING (additional)
  // ==========================================
  {
    slug: "react",
    name: "React",
    status: "documented",
    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    category: "Frontend Engineering",
    content: {
        overview: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
        officialWebsite: "https://react.dev/",
        creator: "Jordan Walke (Facebook)",
        initialRelease: "2013",
        history: [
            {
                year: "2011",
                title: "Internal Use",
                description: "First deployed on Facebook's newsfeed."
            },
            {
                year: "2013",
                title: "Open Source",
                description: "React was open-sourced at JSConf US."
            },
            {
                year: "2015",
                title: "React Native",
                description: "Facebook announced React Native for building mobile apps."
            },
            {
                year: "2019",
                title: "React Hooks",
                description: "Introduced in React 16.8, revolutionizing how state and side effects are managed in functional components."
            },
            {
                year: "2022",
                title: "React 18",
                description: "Introduced concurrent rendering and Server Components."
            }
        ],
        problemSolved: {
            title: "Complex UI State Management",
            description: "Before React, managing complex, frequently updating UI state with jQuery or manual DOM manipulation was buggy and slow.",
            problems: [
                "Direct DOM manipulation is slow and inefficient.",
                "Keeping UI in sync with underlying state was difficult.",
                "Lack of reusable, encapsulated UI components."
            ]
        },
        underTheHood: [
            {
                title: "Virtual DOM",
                description: "An in-memory representation of the real DOM. React updates the Virtual DOM first, then calculates the diff."
            },
            {
                title: "Reconciliation",
                description: "The algorithmic process (Fiber) of comparing the new Virtual DOM with the old one and updating only the changed nodes in the real DOM."
            },
            {
                title: "Fiber Architecture",
                description: "A reimplementation of React's core algorithm to enable incremental rendering and concurrency."
            }
        ],
        learningPath: [
            {
                step: "1",
                title: "JSX & Components",
                description: "Understanding the syntax and how to break UI into reusable pieces."
            },
            {
                step: "2",
                title: "State & Props",
                description: "Managing local component state (useState) and passing data down (props)."
            },
            {
                step: "3",
                title: "Effects & Lifecycle",
                description: "Handling side effects (useEffect) and understanding component mounts/updates."
            },
            {
                step: "4",
                title: "Context & State Management",
                description: "Avoiding prop drilling with Context API, and learning external tools like Zustand or Redux."
            }
        ],
        advancedConcepts: [
            "Concurrent Rendering",
            "React Server Components (RSC)",
            "Custom Hooks",
            "Memoization (useMemo, useCallback)",
            "Portals and Refs"
        ],
        codingStyles: {
            functional: "Modern React is entirely functional, using Hooks for state and lifecycle.",
            oop: "Legacy React used Class components, which are now discouraged for new development.",
            whenToUseWhat: "Use functional components with hooks. Extract complex logic into custom hooks for reusability."
        },
        security: {
            overview: "React naturally protects against some attacks but requires developer diligence for others.",
            practices: [
                "React escapes string variables in JSX, preventing basic XSS.",
                "Avoid using 'dangerouslySetInnerHTML' unless absolutely necessary and sanitized.",
                "Do not include sensitive keys or secrets in the client-side React bundle."
            ]
        },
        tools: [
            {
                name: "Next.js",
                description: "The React Framework for the Web.",
                website: "https://nextjs.org/"
            },
            {
                name: "React Router",
                description: "Standard routing library for React.",
                website: "https://reactrouter.com/"
            },
            {
                name: "Zustand",
                description: "A small, fast and scalable bearbones state-management solution.",
                website: "https://zustand-demo.pmnd.rs/"
            }
        ],
        relatedSkills: [
            "javascript",
            "typescript",
            "next-js"
        ]
    }
},
  { name: "Vue.js", slug: "vue-js", category: "Frontend Engineering", status: "coming-soon", description: "The Progressive JavaScript Framework." },
  { name: "Angular", slug: "angular", category: "Frontend Engineering", status: "coming-soon", description: "Platform for building mobile and desktop web applications." },
  { name: "Tailwind CSS", slug: "tailwind-css", category: "Frontend Engineering", status: "coming-soon", description: "A utility-first CSS framework for rapid UI development." },
  { name: "Bootstrap", slug: "bootstrap", category: "Frontend Engineering", status: "coming-soon", description: "Powerful, extensible, and feature-packed frontend toolkit." },
  { name: "HTML5", slug: "html5", category: "Frontend Engineering", status: "coming-soon", description: "The latest evolution of the standard that defines HTML." },
  { name: "CSS3", slug: "css3", category: "Frontend Engineering", status: "coming-soon", description: "The latest evolution of the Cascading Style Sheets language." },
  { name: "Electron", slug: "electron", category: "Frontend Engineering", status: "coming-soon", description: "Build cross-platform desktop apps with JavaScript, HTML, and CSS." },

  // ==========================================
  // MOBILE DEVELOPMENT
  // ==========================================
  { name: "Flutter", slug: "flutter", category: "Mobile Development", status: "coming-soon", description: "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase." },
  { name: "React Native", slug: "react-native", category: "Mobile Development", status: "coming-soon", description: "Create native apps for Android and iOS using React." },

  // ==========================================
  // DATABASES & STORAGE
  // ==========================================
  {
    slug: "postgresql",
    name: "PostgreSQL",
    status: "documented",
    description: "A powerful, open-source object-relational database system with over 35 years of active development.",
    category: "Databases & Storage",
    content: {
        overview: "PostgreSQL is a highly stable, open-source relational database management system (RDBMS) known for its reliability, feature robustness, and performance. It strongly supports SQL standards and offers advanced data types.",
        officialWebsite: "https://www.postgresql.org/",
        creator: "Michael Stonebraker (University of California, Berkeley)",
        initialRelease: "1996",
        history: [
            {
                year: "1986",
                title: "POSTGRES Project",
                description: "Started at UC Berkeley by Michael Stonebraker as a successor to INGRES."
            },
            {
                year: "1995",
                title: "Postgres95",
                description: "Andrew Yu and Jolly Chen replaced the POSTQUEL query language with an extended subset of SQL."
            },
            {
                year: "1996",
                title: "PostgreSQL",
                description: "Renamed to PostgreSQL to reflect its support for SQL."
            },
            {
                year: "2010",
                title: "Streaming Replication",
                description: "PostgreSQL 9.0 introduced built-in streaming replication."
            },
            {
                year: "2014",
                title: "JSONB Support",
                description: "PostgreSQL 9.4 introduced the JSONB data type, making it a powerful hybrid SQL/NoSQL database."
            }
        ],
        problemSolved: {
            title: "ACID Compliance and Complex Data Integrity",
            description: "PostgreSQL was designed to handle complex data workloads and ensure strict ACID compliance (Atomicity, Consistency, Isolation, Durability) without sacrificing performance.",
            problems: [
                "Data corruption or loss during concurrent transactions.",
                "Limitations of strict tabular schemas for semi-structured data.",
                "Lack of extensibility in standard relational databases."
            ]
        },
        underTheHood: [
            {
                title: "MVCC (Multi-Version Concurrency Control)",
                description: "PostgreSQL avoids read/write locks by keeping multiple versions of a row. Readers do not block writers, and writers do not block readers."
            },
            {
                title: "WAL (Write-Ahead Logging)",
                description: "Changes are written to a log file before they are applied to the database, ensuring data integrity in case of a crash."
            },
            {
                title: "Shared Buffers",
                description: "Memory area where PostgreSQL caches data blocks to reduce disk I/O operations."
            }
        ],
        concurrency: {
            title: "Process-based Architecture with MVCC",
            description: "Instead of threads, PostgreSQL forks a new OS process for each client connection. It manages concurrent access to data using MVCC, ensuring isolation without locking the entire table."
        },
        learningPath: [
            {
                step: "1",
                title: "SQL Fundamentals",
                description: "SELECT, JOIN, GROUP BY, WHERE, and indexing basics."
            },
            {
                step: "2",
                title: "Data Modeling",
                description: "Normalization, primary/foreign keys, and constraints."
            },
            {
                step: "3",
                title: "Advanced Types",
                description: "JSONB, Arrays, UUIDs, and Full-Text Search."
            },
            {
                step: "4",
                title: "Performance & Administration",
                description: "EXPLAIN ANALYZE, vacuuming, backups, and replication."
            }
        ],
        advancedConcepts: [
            "Table Partitioning",
            "Connection Pooling (PgBouncer)",
            "Logical and Physical Replication",
            "Window Functions & CTEs (Common Table Expressions)",
            "Custom Extensions (e.g., PostGIS, pgvector)"
        ],
        security: {
            overview: "PostgreSQL is highly secure by default, providing granular role-based access control.",
            practices: [
                "Use the Principle of Least Privilege: Do not use the superuser account for application connections.",
                "Use Row-Level Security (RLS) to restrict data access based on user context.",
                "Enforce SSL/TLS for all connections in 'pg_hba.conf'.",
                "Regularly perform and test pg_dump / WAL archiving backups."
            ]
        },
        tools: [
            {
                name: "pgvector",
                description: "Open-source vector similarity search for Postgres.",
                website: "https://github.com/pgvector/pgvector"
            },
            {
                name: "PostGIS",
                description: "Spatial database extender for PostgreSQL geometry.",
                website: "https://postgis.net/"
            },
            {
                name: "PgBouncer",
                description: "Lightweight connection pooler for PostgreSQL.",
                website: "https://www.pgbouncer.org/"
            }
        ],
        relatedSkills: [
            "sql",
            "docker",
            "redis"
        ]
    }
},
  { name: "MySQL", slug: "mysql", category: "Databases & Storage", status: "coming-soon", description: "The world's most popular open source database." },
  { name: "MongoDB", slug: "mongodb", category: "Databases & Storage", status: "coming-soon", description: "Document-oriented NoSQL database for modern application development." },
  {
    slug: "redis",
    name: "Redis",
    status: "documented",
    description: "An open-source, in-memory data structure store, used as a database, cache, and message broker.",
    category: "Databases & Storage",
    content: {
        overview: "Redis (Remote Dictionary Server) is an in-memory key-value database known for sub-millisecond latency. It supports abstract data structures like strings, lists, maps, sets, sorted sets, HyperLogLogs, and streams.",
        officialWebsite: "https://redis.io/",
        creator: "Salvatore Sanfilippo",
        initialRelease: "2009",
        history: [
            {
                year: "2009",
                title: "Initial Release",
                description: "Created by Salvatore Sanfilippo (antirez) to improve the performance of his web analytics startup, LLOOGG."
            },
            {
                year: "2013",
                title: "Redis Sentinel",
                description: "Introduced high availability, monitoring, and automatic failover."
            },
            {
                year: "2015",
                title: "Redis Cluster",
                description: "Added native support for horizontal scaling and data sharding."
            },
            {
                year: "2024",
                title: "License Change",
                description: "Redis transitioned from BSD to dual RSALv2 and SSPLv1 licenses."
            }
        ],
        problemSolved: {
            title: "Microsecond Latency and Caching",
            description: "Disk-based databases (like PostgreSQL/MySQL) are too slow for operations that require extreme speed, such as session management, real-time leaderboards, or heavy read caching.",
            problems: [
                "High latency resulting from disk I/O.",
                "Difficulty implementing fast distributed counters or rate limiters in standard SQL.",
                "Lack of simple pub/sub mechanisms in traditional RDBMS."
            ]
        },
        underTheHood: [
            {
                title: "In-Memory Architecture",
                description: "All data resides in RAM, bypassing the disk entirely for read/write operations, resulting in extreme throughput."
            },
            {
                title: "Single-Threaded Event Loop",
                description: "Redis processes commands sequentially in a single thread, utilizing multiplexing. This eliminates the need for complex locking mechanisms and guarantees atomicity of commands."
            },
            {
                title: "Persistence (RDB & AOF)",
                description: "While in-memory, Redis can periodically snapshot data to disk (RDB) or append every command to a log (AOF) to survive restarts."
            }
        ],
        concurrency: {
            title: "Single-Threaded Atomicity",
            description: "Because the core execution engine is single-threaded, every command (or Lua script) executes atomically. Race conditions are naturally avoided without locks."
        },
        learningPath: [
            {
                step: "1",
                title: "Data Structures",
                description: "Strings, Hashes, Lists, Sets, and Sorted Sets."
            },
            {
                step: "2",
                title: "Caching Strategies",
                description: "Cache-Aside, Write-Through, TTLs, and Eviction Policies (e.g., LRU)."
            },
            {
                step: "3",
                title: "Advanced Features",
                description: "Pub/Sub, Transactions (MULTI/EXEC), and Lua Scripting."
            },
            {
                step: "4",
                title: "Architecture",
                description: "Persistence, Sentinel (High Availability), and Redis Cluster (Scaling)."
            }
        ],
        advancedConcepts: [
            "Redis Streams (Event Sourcing)",
            "HyperLogLog (Probabilistic cardinality counting)",
            "Bloom Filters (Probabilistic set membership)",
            "Geo-Spatial Indexing"
        ],
        security: {
            overview: "Redis is designed for maximum performance in trusted environments, not for direct exposure to the internet.",
            practices: [
                "Never expose Redis to the public internet. Bind it only to localhost or trusted private subnets (bind 127.0.0.1).",
                "Require a strong password using the 'requirepass' directive (or ACLs in Redis 6+).",
                "Disable or rename dangerous commands like FLUSHALL, FLUSHDB, and CONFIG using 'rename-command'."
            ]
        },
        tools: [
            {
                name: "ioredis",
                description: "A robust, performance-focused Redis client for Node.js.",
                website: "https://github.com/redis/ioredis"
            },
            {
                name: "Sidekiq / Bull",
                description: "Background job processors for Ruby and Node.js built heavily on Redis."
            }
        ],
        relatedSkills: [
            "postgresql",
            "node-js",
            "docker"
        ]
    }
},
  { name: "SQLite", slug: "sqlite", category: "Databases & Storage", status: "coming-soon", description: "Self-contained, serverless, zero-configuration SQL database engine." },
  { name: "Elasticsearch", slug: "elasticsearch", category: "Databases & Storage", status: "coming-soon", description: "Distributed, RESTful search and analytics engine." },
  { name: "Neo4j", slug: "neo4j", category: "Databases & Storage", status: "coming-soon", description: "Graph database management system for connected data." },
  { name: "Prisma", slug: "prisma", category: "Databases & Storage", status: "coming-soon", description: "Next-generation Node.js and TypeScript ORM." },
  { name: "Drizzle ORM", slug: "drizzle-orm", category: "Databases & Storage", status: "coming-soon", description: "TypeScript ORM that is both lightweight and serverless-ready." },

  // ==========================================
  // CLOUD & INFRASTRUCTURE
  // ==========================================
  {
    slug: "aws",
    name: "AWS",
    status: "documented",
    description: "Amazon Web Services is the world's most comprehensive and broadly adopted cloud platform.",
    category: "Cloud & Infrastructure",
    content: {
        overview: "Amazon Web Services (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
        officialWebsite: "https://aws.amazon.com/",
        creator: "Amazon",
        initialRelease: "2006",
        history: [
            {
                year: "2004",
                title: "SQS Launched",
                description: "Simple Queue Service (SQS) became the first publicly available AWS service."
            },
            {
                year: "2006",
                title: "EC2 & S3",
                description: "AWS officially re-launched with Amazon S3 and Amazon EC2, beginning the modern cloud era."
            },
            {
                year: "2012",
                title: "Re:Invent",
                description: "The first AWS re:Invent conference, showcasing the massive ecosystem of services."
            },
            {
                year: "2014",
                title: "AWS Lambda",
                description: "Introduced Serverless computing, allowing code execution without provisioning servers."
            }
        ],
        problemSolved: {
            title: "Elastic, On-Demand Infrastructure",
            description: "AWS solved the problem of upfront capital expenditure for hardware (CapEx) by shifting it to variable operational expenditure (OpEx).",
            problems: [
                "Buying physical servers takes weeks/months of lead time.",
                "Over-provisioning hardware for peak loads results in wasted money.",
                "Data centers require massive physical security, power, and cooling management."
            ]
        },
        underTheHood: [
            {
                title: "Regions and Availability Zones (AZs)",
                description: "AWS spans the globe in physical Regions. Each Region has multiple isolated AZs with independent power and cooling to ensure high availability."
            },
            {
                title: "Virtualization (Nitro System)",
                description: "AWS uses custom hardware (Nitro) to offload virtualization overhead, giving customers nearly 100% of the underlying server's performance."
            },
            {
                title: "Control Plane vs Data Plane",
                description: "AWS separates the API/management layer (Control Plane) from the actual traffic-serving layer (Data Plane) for resilience."
            }
        ],
        learningPath: [
            {
                step: "1",
                title: "Core Concepts & IAM",
                description: "Regions, AZs, Users, Roles, Policies, and permissions."
            },
            {
                step: "2",
                title: "Compute & Storage",
                description: "EC2 (Virtual Servers) and S3 (Object Storage)."
            },
            {
                step: "3",
                title: "Networking (VPC)",
                description: "Subnets, Route Tables, Internet Gateways, and Security Groups."
            },
            {
                step: "4",
                title: "Databases & Serverless",
                description: "RDS, DynamoDB, Lambda, and API Gateway."
            }
        ],
        advancedConcepts: [
            "Infrastructure as Code (Terraform / CloudFormation)",
            "Auto Scaling and Load Balancing (ALB/NLB)",
            "Multi-Region Active-Active Architectures",
            "Cost Optimization and Reserved Instances"
        ],
        security: {
            overview: "AWS operates on a Shared Responsibility Model. AWS secures the infrastructure; the customer secures what they put IN the cloud.",
            practices: [
                "Enable MFA (Multi-Factor Authentication) on the Root account and never use it for daily tasks.",
                "Apply the Principle of Least Privilege in IAM Policies.",
                "Never commit AWS Access Keys to GitHub. Use IAM Roles for EC2/ECS/Lambda instead.",
                "Ensure S3 buckets are not inadvertently set to public access."
            ]
        },
        tools: [
            {
                name: "Terraform",
                description: "HashiCorp tool for defining AWS infrastructure as code.",
                website: "https://www.terraform.io/"
            },
            {
                name: "AWS CLI",
                description: "Unified tool to manage AWS services from the terminal.",
                website: "https://aws.amazon.com/cli/"
            }
        ],
        relatedSkills: [
            "linux",
            "docker",
            "terraform"
        ]
    }
},
  { name: "Google Cloud Platform", slug: "gcp", category: "Cloud & Infrastructure", status: "coming-soon", description: "Suite of cloud computing services by Google running on the same infrastructure as Google's products." },
  { name: "Microsoft Azure", slug: "azure", category: "Cloud & Infrastructure", status: "coming-soon", description: "Cloud computing platform and infrastructure by Microsoft." },
  {
    slug: "linux",
    name: "Linux",
    status: "documented",
    description: "The ubiquitous open-source Unix-like operating system kernel powering the modern internet and cloud.",
    category: "Cloud & Infrastructure",
    content: {
        overview: "Linux is a family of open-source Unix-like operating systems based on the Linux kernel. It is the dominant OS for servers, supercomputers, cloud infrastructure, and embedded systems.",
        officialWebsite: "https://www.kernel.org/",
        creator: "Linus Torvalds",
        initialRelease: "1991",
        history: [
            {
                year: "1991",
                title: "Initial Announcement",
                description: "Linus Torvalds announces a 'free operating system' project on comp.os.minix."
            },
            {
                year: "1992",
                title: "GPL License",
                description: "Linux is relicensed under the GNU General Public License (GPL), accelerating adoption."
            },
            {
                year: "1996",
                title: "Tux",
                description: "The penguin mascot, Tux, is adopted."
            },
            {
                year: "Today",
                title: "Cloud Dominance",
                description: "Linux powers essentially 100% of the world's top 500 supercomputers and the vast majority of public cloud workloads."
            }
        ],
        problemSolved: {
            title: "Free and Open Server Infrastructure",
            description: "Before Linux, enterprise UNIX systems were highly fragmented, expensive, and proprietary.",
            problems: [
                "High cost of proprietary UNIX licenses (Solaris, HP-UX).",
                "Vendor lock-in for server hardware.",
                "Lack of a customizable, performant OS kernel that developers could modify freely."
            ]
        },
        underTheHood: [
            {
                title: "The Kernel",
                description: "The core interface between a computer's hardware and its processes. It manages memory, CPU time, and hardware devices."
            },
            {
                title: "Everything is a File",
                description: "In Linux, hardware devices, sockets, and even processes are represented as files (e.g., /dev, /sys, /proc)."
            },
            {
                title: "User Space vs Kernel Space",
                description: "Strict separation of memory to ensure that a crashing application does not crash the entire operating system."
            }
        ],
        learningPath: [
            {
                step: "1",
                title: "CLI Navigation",
                description: "cd, ls, pwd, mkdir, rm, and navigating the filesystem."
            },
            {
                step: "2",
                title: "Permissions & Ownership",
                description: "chmod, chown, user and group management."
            },
            {
                step: "3",
                title: "Process & Package Management",
                description: "ps, top, systemctl, apt/yum, and running background jobs."
            },
            {
                step: "4",
                title: "Networking & Shell Scripting",
                description: "ssh, curl, grep, awk, and automating tasks with Bash."
            }
        ],
        advancedConcepts: [
            "Systemd Services and Daemons",
            "Kernel Modules and Sysctl Tuning",
            "iptables and UFW Configuration",
            "cgroups and Namespaces (The foundation of Docker)"
        ],
        security: {
            overview: "Linux security relies on strict file permissions, user isolation, and network firewalls.",
            practices: [
                "Disable root SSH login and enforce public key authentication.",
                "Use 'sudo' to grant temporary elevated privileges.",
                "Keep the system updated using the package manager.",
                "Configure UFW or iptables to block all incoming ports except those explicitly required (e.g., 80, 443, 22)."
            ]
        },
        tools: [
            {
                name: "Ubuntu",
                description: "The most popular Linux distribution for servers and desktops.",
                website: "https://ubuntu.com/"
            },
            {
                name: "Bash",
                description: "The GNU Project's shell, the default command-line interpreter.",
                website: "https://www.gnu.org/software/bash/"
            },
            {
                name: "systemd",
                description: "System and Service Manager for Linux.",
                website: "https://systemd.io/"
            }
        ],
        relatedSkills: [
            "docker",
            "aws",
            "bash"
        ]
    }
},
  {
    slug: "docker",
    name: "Docker",
    status: "documented",
    description: "An open platform for developing, shipping, and running applications in isolated containers.",
    category: "Cloud & Infrastructure",
    content: {
        overview: "Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries, and configuration files.",
        officialWebsite: "https://www.docker.com/",
        creator: "Solomon Hykes (dotCloud)",
        initialRelease: "2013",
        history: [
            {
                year: "2013",
                title: "Initial Release",
                description: "Open-sourced at PyCon in Santa Clara."
            },
            {
                year: "2014",
                title: "Docker 1.0",
                description: "Production-ready release. Docker Hub officially launched."
            },
            {
                year: "2015",
                title: "OCI Formed",
                description: "The Open Container Initiative was formed to establish industry standards for container formats and runtimes."
            },
            {
                year: "2016",
                title: "Docker Swarm",
                description: "Native clustering for Docker (later largely superseded by Kubernetes)."
            }
        ],
        problemSolved: {
            title: "The 'It Works on My Machine' Problem",
            description: "Before Docker, deploying software was plagued by environment mismatches between development, testing, and production servers.",
            problems: [
                "Dependency conflicts between different applications on the same host.",
                "Virtual Machines (VMs) are too resource-heavy and slow to boot.",
                "Inconsistent deployment processes."
            ]
        },
        underTheHood: [
            {
                title: "Namespaces",
                description: "Linux kernel feature that provides isolation (PID, NET, IPC, MNT, UTS). It makes a process think it has its own isolated OS instance."
            },
            {
                title: "Control Groups (cgroups)",
                description: "Linux kernel feature that limits, accounts for, and isolates the resource usage (CPU, memory, disk I/O, network) of a collection of processes."
            },
            {
                title: "Union File System (UnionFS)",
                description: "Allows files and directories of separate file systems to be transparently overlaid, forming a single file system. This is how Docker Image layers work."
            }
        ],
        learningPath: [
            {
                step: "1",
                title: "Containers & Images",
                description: "Understanding the difference between an image (blueprint) and a container (running instance)."
            },
            {
                step: "2",
                title: "Dockerfile",
                description: "Writing instructions to build custom images."
            },
            {
                step: "3",
                title: "Volumes & Networking",
                description: "Persisting data and communicating between containers."
            },
            {
                step: "4",
                title: "Docker Compose",
                description: "Orchestrating multi-container applications locally."
            }
        ],
        advancedConcepts: [
            "Multi-stage Builds",
            "Layer Caching Optimization",
            "Container Registries (ECR, Docker Hub)",
            "Orchestration (Kubernetes)"
        ],
        security: {
            overview: "Containers share the host kernel, meaning security requires isolating the container process from the host.",
            practices: [
                "Never run containers as root (USER instruction in Dockerfile).",
                "Keep images minimal (e.g., Alpine Linux or Distroless) to reduce the attack surface.",
                "Scan images for known CVEs using tools like Trivy or Docker Scout.",
                "Do not mount sensitive host directories (like /var/run/docker.sock) into a container."
            ]
        },
        tools: [
            {
                name: "Docker Compose",
                description: "Tool for defining and running multi-container Docker applications.",
                website: "https://docs.docker.com/compose/"
            },
            {
                name: "Kubernetes",
                description: "Production-grade container orchestration.",
                website: "https://kubernetes.io/"
            }
        ],
        relatedSkills: [
            "linux",
            "aws",
            "kubernetes"
        ]
    }
},
  { name: "Kubernetes", slug: "kubernetes", category: "Cloud & Infrastructure", status: "coming-soon", description: "Production-grade container orchestration for automating deployment, scaling, and management." },
  { name: "Terraform", slug: "terraform", category: "Cloud & Infrastructure", status: "coming-soon", description: "Infrastructure as Code tool for building, changing, and versioning infrastructure safely and efficiently." },
  { name: "Ansible", slug: "ansible", category: "Cloud & Infrastructure", status: "coming-soon", description: "Agentless automation platform for IT infrastructure, configuration management, and application deployment." },
  { name: "Nginx", slug: "nginx", category: "Cloud & Infrastructure", status: "coming-soon", description: "High-performance HTTP server, reverse proxy, and load balancer." },
  { name: "Apache HTTP Server", slug: "apache", category: "Cloud & Infrastructure", status: "coming-soon", description: "Cross-platform open-source web server software." },
  { name: "Cloudflare", slug: "cloudflare", category: "Cloud & Infrastructure", status: "coming-soon", description: "Web infrastructure and security company providing CDN, DNS, DDoS protection, and edge computing." },
  { name: "GitHub Actions", slug: "github-actions", category: "Cloud & Infrastructure", status: "coming-soon", description: "CI/CD platform for automating build, test, and deployment pipelines directly from GitHub." },
  { name: "CI/CD", slug: "ci-cd", category: "Cloud & Infrastructure", status: "coming-soon", description: "Continuous Integration and Continuous Deployment pipelines." },

  // ==========================================
  // AWS SERVICES
  // ==========================================
  { name: "Amazon EC2", slug: "amazon-ec2", category: "AWS Services", status: "coming-soon", description: "Scalable virtual server instances in the cloud." },
  { name: "Amazon S3", slug: "amazon-s3", category: "AWS Services", status: "coming-soon", description: "Object storage built to retrieve any amount of data from anywhere." },
  { name: "Amazon RDS", slug: "amazon-rds", category: "AWS Services", status: "coming-soon", description: "Managed relational database service supporting multiple database engines." },
  { name: "AWS Lambda", slug: "aws-lambda", category: "AWS Services", status: "coming-soon", description: "Serverless compute service that runs code in response to events." },
  { name: "Amazon ECS", slug: "amazon-ecs", category: "AWS Services", status: "coming-soon", description: "Fully managed container orchestration service." },
  { name: "Amazon EKS", slug: "amazon-eks", category: "AWS Services", status: "coming-soon", description: "Managed Kubernetes service for running containerized applications." },
  { name: "AWS IAM", slug: "aws-iam", category: "AWS Services", status: "coming-soon", description: "Identity and Access Management for securely controlling access to AWS resources." },
  { name: "Amazon CloudFront", slug: "amazon-cloudfront", category: "AWS Services", status: "coming-soon", description: "Fast content delivery network (CDN) service for secure data, video, and API delivery." },
  { name: "Amazon Route 53", slug: "amazon-route-53", category: "AWS Services", status: "coming-soon", description: "Highly available and scalable Domain Name System (DNS) web service." },
  { name: "Amazon API Gateway", slug: "amazon-api-gateway", category: "AWS Services", status: "coming-soon", description: "Fully managed service for creating, publishing, and managing APIs at any scale." },
  { name: "Amazon SQS", slug: "amazon-sqs", category: "AWS Services", status: "coming-soon", description: "Fully managed message queuing service for decoupling and scaling microservices." },
  { name: "Amazon SNS", slug: "amazon-sns", category: "AWS Services", status: "coming-soon", description: "Fully managed pub/sub messaging service for application-to-application and application-to-person communication." },
  { name: "Amazon CloudWatch", slug: "amazon-cloudwatch", category: "AWS Services", status: "coming-soon", description: "Monitoring and observability service for AWS resources and applications." },
  { name: "Amazon DynamoDB", slug: "amazon-dynamodb", category: "AWS Services", status: "coming-soon", description: "Serverless, fully managed NoSQL database service delivering single-digit millisecond performance." },
  { name: "Amazon ElastiCache", slug: "amazon-elasticache", category: "AWS Services", status: "coming-soon", description: "Fully managed in-memory caching service supporting Redis and Memcached." },

  // ==========================================
  // GCP SERVICES
  // ==========================================
  { name: "Google Compute Engine", slug: "google-compute-engine", category: "GCP Services", status: "coming-soon", description: "Scalable, high-performance virtual machines running in Google's data centers." },
  { name: "Google Cloud Run", slug: "google-cloud-run", category: "GCP Services", status: "coming-soon", description: "Fully managed serverless platform for containerized applications." },
  { name: "Google Cloud Functions", slug: "google-cloud-functions", category: "GCP Services", status: "coming-soon", description: "Lightweight, event-driven serverless compute platform." },
  { name: "Google Kubernetes Engine", slug: "google-kubernetes-engine", category: "GCP Services", status: "coming-soon", description: "Managed Kubernetes service for deploying and managing containerized applications." },
  { name: "Google Cloud Storage", slug: "google-cloud-storage", category: "GCP Services", status: "coming-soon", description: "Unified object storage for developers and enterprises." },
  { name: "Google Cloud SQL", slug: "google-cloud-sql", category: "GCP Services", status: "coming-soon", description: "Fully managed relational database service for MySQL, PostgreSQL, and SQL Server." },
  { name: "Google Firestore", slug: "google-firestore", category: "GCP Services", status: "coming-soon", description: "Flexible, scalable NoSQL cloud database for mobile, web, and server development." },
  { name: "Google BigQuery", slug: "google-bigquery", category: "GCP Services", status: "coming-soon", description: "Serverless, highly scalable, multi-cloud data warehouse." },
  { name: "Google Pub/Sub", slug: "google-pub-sub", category: "GCP Services", status: "coming-soon", description: "Real-time messaging service for event-driven architectures." },
  { name: "Vertex AI", slug: "vertex-ai", category: "GCP Services", status: "coming-soon", description: "Unified AI platform for building, deploying, and scaling ML models." },

  // ==========================================
  // DATA ENGINEERING & STREAMING
  // ==========================================
  {
    slug: "apache-kafka",
    name: "Apache Kafka",
    status: "documented",
    description: "An open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, and data integration.",
    category: "Data Engineering",
    content: {
        overview: "Apache Kafka is a distributed event store and stream-processing platform. It is highly scalable, fault-tolerant, and handles trillions of events a day, serving as the central nervous system for modern microservice architectures.",
        officialWebsite: "https://kafka.apache.org/",
        creator: "LinkedIn (Jay Kreps, Neha Narkhede, Jun Rao)",
        initialRelease: "2011",
        history: [
            {
                year: "2010",
                title: "Created at LinkedIn",
                description: "Developed to handle LinkedIn's massive activity stream data."
            },
            {
                year: "2011",
                title: "Open Sourced",
                description: "Open-sourced and incubated at the Apache Software Foundation."
            },
            {
                year: "2012",
                title: "Apache Top-Level Project",
                description: "Graduated to a top-level Apache project."
            },
            {
                year: "2022",
                title: "KRaft (Kafka Raft)",
                description: "Started phasing out ZooKeeper dependency in favor of its own consensus protocol (KRaft)."
            }
        ],
        problemSolved: {
            title: "Massive Scale Pub/Sub and Event Streaming",
            description: "Traditional message queues (like RabbitMQ) struggled with scale, persistence, and allowing multiple independent consumers to read the same stream of data at different speeds.",
            problems: [
                "Point-to-point integrations creating a tangled mess of data pipelines.",
                "Standard message brokers deleting messages after consumption, preventing replay.",
                "Inability to horizontally scale single queues to millions of messages per second."
            ]
        },
        underTheHood: [
            {
                title: "Topics and Partitions",
                description: "Data is categorized into topics, which are split into partitions. Partitions are distributed across multiple servers (brokers) for extreme horizontal scalability."
            },
            {
                title: "Immutable Append-Only Logs",
                description: "Kafka stores events on disk as an immutable sequence of records. Consumers read sequentially, making disk I/O incredibly fast due to sequential reads/writes."
            },
            {
                title: "Consumer Groups & Offsets",
                description: "Consumers form groups to read from a topic in parallel. Kafka tracks what they have read using 'offsets', allowing consumers to safely crash and resume, or even rewind history."
            }
        ],
        learningPath: [
            {
                step: "1",
                title: "Architecture",
                description: "Brokers, Topics, Partitions, Producers, and Consumers."
            },
            {
                step: "2",
                title: "The Log",
                description: "Understanding the append-only log, replication, and offsets."
            },
            {
                step: "3",
                title: "Producer/Consumer APIs",
                description: "Writing code to produce events and consume them in groups."
            },
            {
                step: "4",
                title: "Delivery Guarantees",
                description: "At-most-once, At-least-once, and Exactly-once semantics."
            }
        ],
        advancedConcepts: [
            "Partition Rebalancing",
            "Log Compaction",
            "In-Sync Replicas (ISR) and Leader Election",
            "Kafka Streams (Real-time stream processing API)",
            "Kafka Connect (Integration with external DBs)"
        ],
        security: {
            overview: "Kafka secures distributed streams through encryption, authentication, and authorization.",
            practices: [
                "Encrypt data in transit using TLS/SSL between clients and brokers.",
                "Authenticate clients using SASL (Kerberos, SCRAM, or OAuth) or mTLS.",
                "Use Kafka ACLs (Access Control Lists) to restrict which users/apps can read/write to specific topics.",
                "Isolate brokers on a private network."
            ]
        },
        tools: [
            {
                name: "Kafka Streams",
                description: "Client library for building applications and microservices, where input and output are stored in Kafka.",
                website: "https://kafka.apache.org/documentation/streams/"
            },
            {
                name: "Kafka Connect",
                description: "Tool for scalably and reliably streaming data between Kafka and other systems (like PostgreSQL/Debezium).",
                website: "https://kafka.apache.org/documentation/#connect"
            },
            {
                name: "Confluent",
                description: "Enterprise managed Kafka platform founded by Kafka's original creators.",
                website: "https://www.confluent.io/"
            }
        ],
        relatedSkills: [
            "java",
            "postgresql",
            "redis"
        ]
    }
},
  { name: "Apache Spark", slug: "apache-spark", category: "Data Engineering", status: "coming-soon", description: "Unified analytics engine for large-scale data processing." },
  { name: "Apache Flink", slug: "apache-flink", category: "Data Engineering", status: "coming-soon", description: "Framework and distributed processing engine for stateful computations over data streams." },
  { name: "Apache Airflow", slug: "apache-airflow", category: "Data Engineering", status: "coming-soon", description: "Platform to programmatically author, schedule, and monitor workflows." },
  { name: "dbt", slug: "dbt", category: "Data Engineering", status: "coming-soon", description: "Data transformation tool that enables analytics engineers to transform data using SQL." },
  { name: "ETL", slug: "etl", category: "Data Engineering", status: "coming-soon", description: "Extract, Transform, Load — traditional data integration pattern for data warehousing." },
  { name: "ELT", slug: "elt", category: "Data Engineering", status: "coming-soon", description: "Extract, Load, Transform — modern data integration pattern leveraging destination compute." },
  { name: "Data Pipelines", slug: "data-pipelines", category: "Data Engineering", status: "coming-soon", description: "Automated workflows that move and transform data between systems." },
  { name: "Data Warehousing", slug: "data-warehousing", category: "Data Engineering", status: "coming-soon", description: "Central repository of integrated data from one or more disparate sources for analytical reporting." },
  { name: "RabbitMQ", slug: "rabbitmq", category: "Data Engineering", status: "coming-soon", description: "Open-source message broker supporting multiple messaging protocols." },
  { name: "Apache Pulsar", slug: "apache-pulsar", category: "Data Engineering", status: "coming-soon", description: "Cloud-native distributed messaging and streaming platform." },

  // ==========================================
  // AI & MACHINE LEARNING
  // ==========================================
  { name: "Artificial Intelligence", slug: "artificial-intelligence", category: "AI & Machine Learning", status: "coming-soon", description: "The simulation of human intelligence processes by computer systems." },
  { name: "Machine Learning", slug: "machine-learning", category: "AI & Machine Learning", status: "coming-soon", description: "Subset of AI that provides systems the ability to learn and improve from experience without being explicitly programmed." },
  { name: "Deep Learning", slug: "deep-learning", category: "AI & Machine Learning", status: "coming-soon", description: "Subset of machine learning based on artificial neural networks with multiple layers." },
  { name: "Neural Networks", slug: "neural-networks", category: "AI & Machine Learning", status: "coming-soon", description: "Computing systems inspired by biological neural networks that constitute animal brains." },
  { name: "Generative AI", slug: "generative-ai", category: "AI & Machine Learning", status: "coming-soon", description: "AI systems capable of generating text, images, code, and other content." },
  { name: "Natural Language Processing", slug: "nlp", category: "AI & Machine Learning", status: "coming-soon", description: "Branch of AI that helps computers understand, interpret, and manipulate human language." },
  { name: "Computer Vision", slug: "computer-vision", category: "AI & Machine Learning", status: "coming-soon", description: "Field of AI that trains computers to interpret and understand visual information from the world." },
  { name: "PyTorch", slug: "pytorch", category: "AI & Machine Learning", status: "coming-soon", description: "Open-source machine learning framework that accelerates the path from research to production." },
  { name: "TensorFlow", slug: "tensorflow", category: "AI & Machine Learning", status: "coming-soon", description: "End-to-end open source machine learning platform." },
  { name: "scikit-learn", slug: "scikit-learn", category: "AI & Machine Learning", status: "coming-soon", description: "Simple and efficient tools for predictive data analysis, built on NumPy, SciPy, and matplotlib." },
  { name: "Keras", slug: "keras", category: "AI & Machine Learning", status: "coming-soon", description: "High-level neural networks API, written in Python and capable of running on top of TensorFlow." },
  { name: "NumPy", slug: "numpy", category: "AI & Machine Learning", status: "coming-soon", description: "Fundamental package for scientific computing with Python." },
  { name: "Pandas", slug: "pandas", category: "AI & Machine Learning", status: "coming-soon", description: "Fast, powerful, flexible data analysis and manipulation tool for Python." },
  { name: "SciPy", slug: "scipy", category: "AI & Machine Learning", status: "coming-soon", description: "Open-source software for mathematics, science, and engineering." },
  { name: "Matplotlib", slug: "matplotlib", category: "AI & Machine Learning", status: "coming-soon", description: "Comprehensive library for creating static, animated, and interactive visualizations in Python." },
  { name: "Jupyter", slug: "jupyter", category: "AI & Machine Learning", status: "coming-soon", description: "Open-source interactive computing environments for data science and scientific computing." },

  // ==========================================
  // LLM & AI ENGINEERING
  // ==========================================
  { name: "Large Language Models", slug: "large-language-models", category: "LLM & AI Engineering", status: "coming-soon", description: "Foundation models trained on massive text corpora capable of understanding and generating human language." },
  { name: "Prompt Engineering", slug: "prompt-engineering", category: "LLM & AI Engineering", status: "coming-soon", description: "The practice of designing and optimizing inputs to guide AI models toward desired outputs." },
  { name: "Context Engineering", slug: "context-engineering", category: "LLM & AI Engineering", status: "coming-soon", description: "Designing the information environment around an AI model to maximize relevance, accuracy, and performance." },
  { name: "Agent Engineering", slug: "agent-engineering", category: "LLM & AI Engineering", status: "coming-soon", description: "Designing autonomous AI systems that can plan, reason, and execute multi-step tasks." },
  { name: "Retrieval-Augmented Generation", slug: "retrieval-augmented-generation", category: "LLM & AI Engineering", status: "coming-soon", description: "Architecture that enhances LLM responses by retrieving relevant documents from external knowledge bases." },
  { name: "Fine-tuning", slug: "fine-tuning", category: "LLM & AI Engineering", status: "coming-soon", description: "The process of adapting a pre-trained model to a specific task or domain with additional training." },
  { name: "Model Distillation", slug: "model-distillation", category: "LLM & AI Engineering", status: "coming-soon", description: "Technique for transferring knowledge from a large teacher model to a smaller, efficient student model." },
  { name: "AI Agents", slug: "ai-agents", category: "LLM & AI Engineering", status: "coming-soon", description: "Autonomous AI systems that perceive their environment and take actions to achieve goals." },
  { name: "Tool Calling", slug: "tool-calling", category: "LLM & AI Engineering", status: "coming-soon", description: "Enabling LLMs to interact with external tools, APIs, and functions during generation." },
  { name: "Function Calling", slug: "function-calling", category: "LLM & AI Engineering", status: "coming-soon", description: "Structured output from LLMs that maps to executable function signatures." },
  { name: "Model Context Protocol", slug: "model-context-protocol", category: "LLM & AI Engineering", status: "coming-soon", description: "Open protocol for connecting AI models to external data sources and tools." },
  { name: "Hugging Face", slug: "hugging-face", category: "LLM & AI Engineering", status: "coming-soon", description: "The AI community building the future — platform for sharing models, datasets, and ML applications." },
  { name: "Transformers", slug: "transformers", category: "LLM & AI Engineering", status: "coming-soon", description: "State-of-the-art machine learning library for NLP, vision, and audio tasks." },
  { name: "LangChain", slug: "langchain", category: "LLM & AI Engineering", status: "coming-soon", description: "Framework for developing applications powered by language models." },
  { name: "LangGraph", slug: "langgraph", category: "LLM & AI Engineering", status: "coming-soon", description: "Library for building stateful, multi-actor applications with LLMs as controllable agent graphs." },
  { name: "LlamaIndex", slug: "llamaindex", category: "LLM & AI Engineering", status: "coming-soon", description: "Data framework for LLM applications, connecting custom data sources to large language models." },
  { name: "OpenRouter", slug: "openrouter", category: "LLM & AI Engineering", status: "coming-soon", description: "Unified API gateway for accessing multiple LLM providers through a single interface." },
  { name: "Ollama", slug: "ollama", category: "LLM & AI Engineering", status: "coming-soon", description: "Run and manage large language models locally on your machine." },
  { name: "LM Studio", slug: "lm-studio", category: "LLM & AI Engineering", status: "coming-soon", description: "Desktop application for discovering, downloading, and running local LLMs." },
  { name: "v0", slug: "v0", category: "LLM & AI Engineering", status: "coming-soon", description: "AI-powered generative UI development tool by Vercel." },

  // ==========================================
  // VECTOR & AI DATABASES
  // ==========================================
  { name: "FAISS", slug: "faiss", category: "Vector & AI Databases", status: "coming-soon", description: "Library for efficient similarity search and clustering of dense vectors, developed by Meta AI." },
  { name: "pgvector", slug: "pgvector", category: "Vector & AI Databases", status: "coming-soon", description: "Open-source vector similarity search extension for PostgreSQL." },
  { name: "Pinecone", slug: "pinecone", category: "Vector & AI Databases", status: "coming-soon", description: "Fully managed vector database for high-performance AI applications." },
  { name: "Qdrant", slug: "qdrant", category: "Vector & AI Databases", status: "coming-soon", description: "High-performance vector similarity search engine and database." },
  { name: "Weaviate", slug: "weaviate", category: "Vector & AI Databases", status: "coming-soon", description: "Open-source vector database for AI-native applications with built-in ML models." },
  { name: "Chroma", slug: "chroma", category: "Vector & AI Databases", status: "coming-soon", description: "Open-source embedding database for AI applications." },
  { name: "Milvus", slug: "milvus", category: "Vector & AI Databases", status: "coming-soon", description: "Open-source vector database built for scalable similarity search." },
  { name: "OpenSearch", slug: "opensearch", category: "Vector & AI Databases", status: "coming-soon", description: "Community-driven, open-source search and analytics suite derived from Elasticsearch." },

  // ==========================================
  // AI INFRASTRUCTURE & PERFORMANCE
  // ==========================================
  { name: "GPU Computing", slug: "gpu-computing", category: "AI Infrastructure & Performance", status: "coming-soon", description: "Using graphics processing units for general-purpose computing, particularly parallel workloads in AI and scientific computing." },
  { name: "CUDA", slug: "cuda", category: "AI Infrastructure & Performance", status: "coming-soon", description: "Parallel computing platform and API model created by NVIDIA for general computing on GPUs." },
  { name: "NVIDIA GPU Architecture", slug: "nvidia-gpu-architecture", category: "AI Infrastructure & Performance", status: "coming-soon", description: "Hardware architecture powering modern AI training and inference workloads." },
  { name: "VRAM", slug: "vram", category: "AI Infrastructure & Performance", status: "coming-soon", description: "Video RAM — dedicated GPU memory critical for model size and batch processing in AI workloads." },
  { name: "KV Cache", slug: "kv-cache", category: "AI Infrastructure & Performance", status: "coming-soon", description: "Key-Value cache mechanism used in transformer inference to avoid redundant computation of past tokens." },
  { name: "Attention Mechanism", slug: "attention-mechanism", category: "AI Infrastructure & Performance", status: "coming-soon", description: "Neural network mechanism that allows models to focus on relevant parts of the input when producing output." },
  { name: "Multi-Head Attention", slug: "multi-head-attention", category: "AI Infrastructure & Performance", status: "coming-soon", description: "Parallel attention layers that allow the model to jointly attend to information from different representation subspaces." },
  { name: "PagedAttention", slug: "paged-attention", category: "AI Infrastructure & Performance", status: "coming-soon", description: "Memory management technique for KV cache inspired by OS virtual memory paging, enabling efficient LLM serving." },
  { name: "FlashAttention", slug: "flash-attention", category: "AI Infrastructure & Performance", status: "coming-soon", description: "IO-aware exact attention algorithm that reduces memory reads/writes for faster transformer training and inference." },
  { name: "Quantization", slug: "quantization", category: "AI Infrastructure & Performance", status: "coming-soon", description: "Technique for reducing model size and inference cost by lowering the precision of model weights." },
  { name: "GGUF", slug: "gguf", category: "AI Infrastructure & Performance", status: "coming-soon", description: "File format for storing quantized large language models optimized for CPU and GPU inference." },
  { name: "ONNX", slug: "onnx", category: "AI Infrastructure & Performance", status: "coming-soon", description: "Open Neural Network Exchange — open format for representing machine learning models across frameworks." },
  { name: "TensorRT", slug: "tensorrt", category: "AI Infrastructure & Performance", status: "coming-soon", description: "NVIDIA's SDK for high-performance deep learning inference, optimizing trained models for deployment." },
  { name: "vLLM", slug: "vllm", category: "AI Infrastructure & Performance", status: "coming-soon", description: "High-throughput and memory-efficient inference and serving engine for LLMs using PagedAttention." },
  { name: "Model Serving", slug: "model-serving", category: "AI Infrastructure & Performance", status: "coming-soon", description: "Deploying trained machine learning models to production for real-time or batch inference." },
  { name: "Batch Inference", slug: "batch-inference", category: "AI Infrastructure & Performance", status: "coming-soon", description: "Processing multiple inference requests simultaneously to maximize GPU utilization and throughput." },
  { name: "Distributed Training", slug: "distributed-training", category: "AI Infrastructure & Performance", status: "coming-soon", description: "Training machine learning models across multiple GPUs or machines to handle large models and datasets." },

  // ==========================================
  // DATA VISUALIZATION & ANALYTICS
  // ==========================================
  { name: "Power BI", slug: "power-bi", category: "Data Visualization & Analytics", status: "coming-soon", description: "Business intelligence and interactive data visualization platform by Microsoft." },
  { name: "Tableau", slug: "tableau", category: "Data Visualization & Analytics", status: "coming-soon", description: "Visual analytics platform transforming the way we use data to solve problems." },
  { name: "Excel", slug: "excel", category: "Data Visualization & Analytics", status: "coming-soon", description: "Spreadsheet software by Microsoft for data analysis, calculation, and visualization." },

  // ==========================================
  // SPATIAL & GIS
  // ==========================================
  { name: "PostGIS", slug: "postgis", category: "Spatial & GIS", status: "coming-soon", description: "Spatial database extender for PostgreSQL object-relational database." },
  { name: "H3", slug: "h3", category: "Spatial & GIS", status: "coming-soon", description: "Hexagonal hierarchical geospatial indexing system by Uber." },
  { name: "MapLibre", slug: "maplibre", category: "Spatial & GIS", status: "coming-soon", description: "Open-source mapping libraries for web and mobile." },
  { name: "Deck.gl", slug: "deck-gl", category: "Spatial & GIS", status: "coming-soon", description: "WebGL-powered framework for visual exploratory data analysis of large datasets." },

  // ==========================================
  // DESIGN & PRODUCT
  // ==========================================
  { name: "Figma", slug: "figma", category: "Design & Product", status: "coming-soon", description: "Collaborative interface design tool for building products together." },
  { name: "Adobe XD", slug: "adobe-xd", category: "Design & Product", status: "coming-soon", description: "Vector-based user experience design tool for web and mobile applications." },
  { name: "Framer", slug: "framer", category: "Design & Product", status: "coming-soon", description: "Interactive design and prototyping tool with production-ready code export." },
  { name: "UI/UX Design", slug: "ui-ux-design", category: "Design & Product", status: "coming-soon", description: "The process of designing user interfaces and user experiences for digital products." },
  { name: "Design Systems", slug: "design-systems", category: "Design & Product", status: "coming-soon", description: "Collection of reusable components and guidelines for building consistent user interfaces." },
  { name: "Prototyping", slug: "prototyping", category: "Design & Product", status: "coming-soon", description: "Creating interactive mockups to test and validate design concepts before development." },
  { name: "Wireframing", slug: "wireframing", category: "Design & Product", status: "coming-soon", description: "Creating low-fidelity visual guides that represent the skeletal framework of a product." },

  // ==========================================
  // CYBERSECURITY & AUTHORIZED PENETRATION TESTING
  // ==========================================
  { name: "Cybersecurity Fundamentals", slug: "cybersecurity-fundamentals", category: "Cybersecurity", status: "coming-soon", description: "Core principles and practices for protecting systems, networks, and data from digital attacks." },
  { name: "Ethical Hacking", slug: "ethical-hacking", category: "Cybersecurity", status: "coming-soon", description: "Authorized practice of bypassing system security to identify potential vulnerabilities and improve defenses." },
  { name: "Penetration Testing", slug: "penetration-testing", category: "Cybersecurity", status: "coming-soon", description: "Simulated cyber attacks against systems to evaluate security, performed with explicit authorization." },
  { name: "Web Application Security", slug: "web-application-security", category: "Cybersecurity", status: "coming-soon", description: "Securing web applications against OWASP Top 10 vulnerabilities and common attack vectors." },
  { name: "Network Security", slug: "network-security", category: "Cybersecurity", status: "coming-soon", description: "Protecting network infrastructure and data integrity through policies, practices, and tools." },
  { name: "OWASP Top 10", slug: "owasp-top-10", category: "Cybersecurity", status: "coming-soon", description: "Standard awareness document representing the most critical web application security risks." },
  { name: "Kali Linux", slug: "kali-linux", category: "Cybersecurity", status: "coming-soon", description: "Debian-derived Linux distribution designed for digital forensics and authorized penetration testing." },
  { name: "Nmap", slug: "nmap", category: "Cybersecurity", status: "coming-soon", description: "Network discovery and security auditing tool for authorized network reconnaissance." },
  { name: "Wireshark", slug: "wireshark", category: "Cybersecurity", status: "coming-soon", description: "Network protocol analyzer for authorized network traffic inspection and troubleshooting." },
  { name: "Burp Suite", slug: "burp-suite", category: "Cybersecurity", status: "coming-soon", description: "Integrated platform for performing authorized security testing of web applications." },
  { name: "OWASP ZAP", slug: "owasp-zap", category: "Cybersecurity", status: "coming-soon", description: "Open-source web application security scanner for finding vulnerabilities during authorized testing." },
  { name: "Metasploit Framework", slug: "metasploit", category: "Cybersecurity", status: "coming-soon", description: "Penetration testing framework for authorized vulnerability assessment and exploit development." },
  { name: "Aircrack-ng", slug: "aircrack-ng", category: "Cybersecurity", status: "coming-soon", description: "Suite of tools for assessing WiFi network security through authorized wireless auditing." },
  { name: "Hashcat", slug: "hashcat", category: "Cybersecurity", status: "coming-soon", description: "Advanced password recovery utility for authorized security assessments and hash analysis." },
  { name: "John the Ripper", slug: "john-the-ripper", category: "Cybersecurity", status: "coming-soon", description: "Open-source password security auditing and recovery tool for authorized testing." },
  { name: "Skipfish", slug: "skipfish", category: "Cybersecurity", status: "coming-soon", description: "Active web application security reconnaissance tool for authorized vulnerability scanning." },
  { name: "sqlmap", slug: "sqlmap", category: "Cybersecurity", status: "coming-soon", description: "Open-source tool for detecting and exploiting SQL injection flaws during authorized security testing." },
  { name: "hping3", slug: "hping3", category: "Cybersecurity", status: "coming-soon", description: "Network tool for authorized packet crafting, firewall testing, and network auditing." },
  { name: "Social-Engineer Toolkit", slug: "social-engineer-toolkit", category: "Cybersecurity", status: "coming-soon", description: "Open-source framework designed for authorized social engineering awareness testing and training." },

  // ==========================================
  // TOOLS & ARCHITECTURE
  // ==========================================
  {
    slug: "git",
    name: "Git",
    status: "documented",
    description: "A free and open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    category: "Languages & Core",
    content: {
        overview: "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development.",
        officialWebsite: "https://git-scm.com/",
        creator: "Linus Torvalds",
        initialRelease: "2005",
        history: [
            {
                year: "2005",
                title: "BitKeeper Controversy",
                description: "The Linux kernel community lost the free use of BitKeeper. Linus Torvalds created Git over a weekend to replace it."
            },
            {
                year: "2005",
                title: "First Kernel Release",
                description: "Just two months after its inception, Git was used to manage the release of Linux 2.6.12."
            },
            {
                year: "2008",
                title: "GitHub Launched",
                description: "GitHub launched, massively popularizing Git for open-source development."
            }
        ],
        problemSolved: {
            title: "Distributed, Fast, and Safe Version Control",
            description: "Before Git, systems like SVN or CVS relied on a single centralized server. If the server went down, nobody could commit. Branching and merging were notoriously slow and painful.",
            problems: [
                "Centralized dependency—no offline commits.",
                "Painful, error-prone branching and merging.",
                "Slow performance for large repositories."
            ]
        },
        underTheHood: [
            {
                title: "Directed Acyclic Graph (DAG)",
                description: "Git models history as a graph of commits pointing to their parents. This makes branching incredibly cheap—just a pointer to a specific node."
            },
            {
                title: "Snapshots, Not Differences",
                description: "Unlike older VCS that stored deltas (changes), Git takes a snapshot of the entire filesystem at every commit. If a file hasn't changed, it just stores a reference to the previous identical file."
            },
            {
                title: "The Three Trees",
                description: "Working Directory (your files), Staging Area (index of what will be committed), and the Repository (.git/ containing the commit history)."
            }
        ],
        learningPath: [
            {
                step: "1",
                title: "Basics",
                description: "init, clone, add, commit, push, pull, and status."
            },
            {
                step: "2",
                title: "Branching",
                description: "branch, checkout, switch, and merge."
            },
            {
                step: "3",
                title: "History & Undoing",
                description: "log, diff, reset, revert, and restore."
            },
            {
                step: "4",
                title: "Advanced Workflows",
                description: "rebase, cherry-pick, stash, and interactive rebasing."
            }
        ],
        advancedConcepts: [
            "Interactive Rebase (squashing, editing past commits)",
            "Reflog (recovering lost commits)",
            "Git Hooks (pre-commit, pre-push)",
            "Submodules and Worktrees"
        ],
        security: {
            overview: "Git security primarily involves protecting secrets and managing repository access.",
            practices: [
                "Never commit secrets, API keys, or .env files. Use .gitignore rigorously.",
                "Use tools like git-secrets or TruffleHog to scan for leaked credentials.",
                "Sign commits with GPG/SSH keys to verify identity.",
                "Use strict branch protection rules (e.g., require PR approvals, block force pushes to main) on platforms like GitHub/GitLab."
            ]
        },
        tools: [
            {
                name: "GitHub",
                description: "The world's largest host of Git repositories.",
                website: "https://github.com/"
            },
            {
                name: "GitLab",
                description: "A comprehensive DevOps platform built around Git.",
                website: "https://about.gitlab.com/"
            },
            {
                name: "Husky",
                description: "Tool to easily manage Git hooks in Node.js projects.",
                website: "https://typicode.github.io/husky/"
            }
        ],
        relatedSkills: [
            "linux",
            "bash",
            "github-actions"
        ]
    }
},
  { name: "GitHub", slug: "github", category: "Tools & Architecture", status: "coming-soon", description: "Internet hosting service for software development and version control using Git." },
  { name: "WebSocket", slug: "websocket", category: "Tools & Architecture", status: "coming-soon", description: "Computer communications protocol providing full-duplex communication channels over TCP." },
  { name: "Microservices", slug: "microservices", category: "Tools & Architecture", status: "coming-soon", description: "Architectural style structuring an application as a collection of loosely coupled services." },
];
