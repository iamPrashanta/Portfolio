import { EngineeringProblem } from "@/types/problem";

export const c10k: EngineeringProblem = {
  slug: "c10k",
  title: "The C10K Problem",
  shortDescription: "How to handle 10,000 concurrent connections, why traditional thread-per-connection architectures fail, and the event-driven solutions that power modern high-scale systems.",
  category: "scalability",
  severity: "high",
  symptoms: [
    "Server becomes completely unresponsive at a few thousand concurrent connections",
    "Memory exhaustion due to thread stack allocation",
    "High CPU usage from thread context switching rather than actual work",
    "File descriptor limits being exhausted"
  ],
  problemStatement: "The C10K problem (originally coined in 1999) describes the challenge of optimizing network sockets to handle a large number of clients (10,000+) at the same time. While modern hardware can easily handle the raw bandwidth, the software architecture used to manage the connections often becomes the bottleneck.",
  whyItHappens: [
    {
      title: "The Thread-per-Connection Model",
      content: "Traditional web servers (like early Apache) spawned a new process or thread for every incoming connection. Since each thread requires its own memory stack (typically 1MB-8MB) and kernel resources, 10,000 connections would instantly require 10GB-80GB of RAM just for thread overhead, regardless of the actual data being processed."
    },
    {
      title: "Context Switching Overhead",
      content: "When thousands of threads are active, the CPU spends more time switching between threads (saving and loading registers) than executing actual business logic. This leads to thread thrashing and dramatically degraded throughput."
    }
  ],
  rootCauses: [
    {
      title: "Synchronous Blocking I/O",
      description: "In blocking I/O, a thread waiting for network or disk operations goes to sleep. To serve other clients, the OS must schedule a different thread, forcing a costly context switch."
    },
    {
      title: "O(n) Polling",
      description: "Older system calls like select() and poll() take time proportional to the number of connections (O(n)). Checking 10,000 connections to see which ones have data ready becomes extremely slow."
    }
  ],
  architectureOptions: [
    {
      title: "Thread/Process Pool",
      description: "Pre-allocate a fixed number of worker threads to handle connections.",
      pros: ["Simple programming model", "Isolates failures"],
      cons: ["Does not scale to 10k connections", "High memory overhead"]
    },
    {
      title: "Event-Driven Asynchronous I/O (Recommended)",
      description: "A single thread (or a small pool of threads matching CPU cores) uses an event loop (epoll/kqueue) to handle thousands of connections non-blocking.",
      pros: ["Minimal memory overhead per connection", "No context switching thrashing", "Scales to millions of connections (C10M)"],
      cons: ["Harder to write and debug", "Callback hell or requires async/await syntax"]
    }
  ],
  recommendedSolution: [
    {
      title: "Modern Event-Driven Architecture",
      content: "To solve the C10K problem today, we use an event-driven architecture combined with non-blocking I/O. Modern runtimes like Node.js, Go, and Python's asyncio implement this pattern natively. They rely on O(1) event notification systems provided by the OS, such as epoll (Linux) or kqueue (FreeBSD), allowing a single thread to monitor thousands of sockets efficiently."
    }
  ],
  implementationSteps: [
    {
      title: "Use a Non-Blocking Runtime",
      content: "Choose a technology stack designed for high concurrency. Node.js uses libuv for its event loop, Go uses lightweight goroutines scheduled onto a small thread pool, and Java offers Project Loom (Virtual Threads)."
    }
  ],
  codeExamples: [
    {
      title: "Event-Driven vs Blocking Mental Model",
      implementations: [
        {
          language: "typescript",
          label: "Node.js (Event-Driven)",
          code: `import * as net from 'net';\n\nconst server = net.createServer((socket) => {\n  // Non-blocking: callback is fired only when data arrives\n  socket.on('data', (data) => {\n    socket.write('Echo: ' + data);\n  });\n});\n\n// A single thread can handle thousands of these sockets\nserver.listen(8080);`,
        },
        {
          language: "python",
          label: "Python (asyncio)",
          code: `import asyncio\n\nasync def handle_client(reader, writer):\n    # Non-blocking await\n    data = await reader.read(100)\n    writer.write(data)\n    await writer.drain()\n    writer.close()\n\nasync def main():\n    server = await asyncio.start_server(handle_client, '127.0.0.1', 8888)\n    async with server:\n        await server.serve_forever()\n\nasyncio.run(main())`,
        }
      ]
    }
  ],
  relatedTopics: ["event-loop", "asynchronous-io", "websockets", "concurrency-vs-parallelism"],
  seo: {
    title: "The C10K Problem: Handling 10,000 Concurrent Connections",
    description: "Learn how modern systems solve the C10K problem using event-driven architectures, non-blocking I/O, and tools like Node.js and epoll.",
    keywords: ["C10K Problem", "High Concurrency", "Event Loop", "Asynchronous I/O", "epoll"],
  }
};
