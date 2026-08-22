import { DeepTopic } from "@/types/knowledge";

export const networkingDeep: DeepTopic[] = [
  {
    id: "how-the-internet-works",
    slug: "how-the-internet-works",
    title: "How the Internet Works",
    difficulty: "Beginner",
    category: "networking",
    shortDescription: "The physical and logical infrastructure that connects billions of computers.",
    overview: {
      question: "What actually happens when I type a URL and hit Enter?",
      answer: "Your computer sends an electrical signal through a series of routers, undersea fiber-optic cables, and ISPs to find a specific server on the other side of the planet, which then sends data back."
    },
    whyItExists: {
      problem: "We needed a decentralized way for completely different types of computers (Mainframes, PCs, Phones) across different physical networks (radio, copper, fiber) to communicate reliably.",
      solution: "The Internet Protocol Suite (TCP/IP). A layered abstraction where each layer only talks to the layer directly above and below it.",
      keyInsight: "By agreeing on a universal set of protocols, we abstract away the physical hardware."
    },
    coreConcepts: [
      { title: "Packets", explanation: "Data is not sent as a continuous stream. It is chopped up into small chunks (packets), sent independently across the network, and reassembled at the destination." },
      { title: "Routers", explanation: "Specialized computers that sit at the intersections of networks. They look at a packet's destination IP address and decide the fastest path to forward it." },
      { title: "ISPs", explanation: "Internet Service Providers. They own the physical cables (Tier 1, 2, 3) and route your traffic into the global backbone." }
    ],
    keyTerms: [
      { term: "Protocol", definition: "A strict set of rules dictating how data should be formatted, transmitted, and received." },
      { term: "Latency", definition: "The time it takes for a packet to travel from source to destination. Heavily constrained by the speed of light." }
    ],
    connections: [
      { topicId: "ip-tcp-udp", relationship: "The core protocols governing packet delivery" },
      { topicId: "dns", relationship: "Translates human URLs into IP addresses" }
    ],
    engineeringMoment: {
      title: "ARPANET and Decentralization",
      story: "In the 1960s, the US DoD wanted a communications network that could survive a nuclear strike. If one node (city) was destroyed, the network had to automatically reroute traffic around it. This requirement for dynamic, decentralized routing birthed the core architecture of the Internet.",
      lesson: "Decentralized architecture creates massive resilience."
    },
    realWorldExamples: [
      { title: "Undersea Cables", description: "99% of international data traffic travels through physical fiber-optic cables resting on the ocean floor, not satellites." }
    ],
    misconceptions: [
      { myth: "The Web is the Internet.", reality: "The Internet is the physical infrastructure and core protocols. The Web (HTTP/HTML) is just one application running on top of the Internet, alongside Email (SMTP), File Transfer (FTP), and Games." }
    ],
    keyTakeaways: [
      "The Internet is a 'best-effort' network. It does not guarantee that your packet will arrive, only that it will try.",
      "Latency can never be zero because data cannot travel faster than light in a fiber optic cable."
    ],
    prerequisites: [],
    nextTopics: ["ip-tcp-udp", "dns"]
  },
  {
    id: "ip-tcp-udp",
    slug: "ip-tcp-udp",
    title: "TCP vs UDP",
    difficulty: "Intermediate",
    estimatedStudyTime: "15 min",
    category: "networking",
    shortDescription: "The fundamental transport protocols of the internet.",
    overview: {
      question: "How does data actually get from computer A to computer B reliably?",
      answer: "IP provides the addressing. TCP ensures every packet arrives in order and intact. UDP just throws the packets at the destination as fast as possible."
    },
    mentalModel: "TCP is a certified mail courier who requires a signature for every single page delivered, and if a page goes missing, he goes back to get it. UDP is a person throwing pages out of a moving car onto your lawn; it's incredibly fast, but if a page blows away, it's gone.",
    whyItExists: {
      problem: "The underlying Internet Protocol (IP) only knows how to route a packet to a destination. It doesn't care if the packet gets lost, corrupted, or arrives out of order.",
      solution: "We need transport layers on top of IP. TCP adds a massive reliability framework. UDP adds speed by skipping the reliability.",
      keyInsight: "There is an unavoidable physical trade-off between Reliability (which requires slow acknowledgements) and Speed."
    },
    conceptLayers: [
      { layer: "LAYER 01 — THE HANDSHAKE", title: "Connection Setup", description: "TCP requires a '3-way handshake' (SYN, SYN-ACK, ACK) just to say hello before sending any data. UDP sends data immediately without asking." },
      { layer: "LAYER 02 — THE DELIVERY", title: "Acknowledgments", description: "In TCP, the receiver must send an ACK for every packet received. If the sender doesn't hear the ACK, it resends the packet." },
      { layer: "LAYER 03 — THE ORDERING", title: "Reassembly", description: "IP packets arrive out of order. TCP holds them in a buffer and reassembles them sequentially before giving them to the application." }
    ],
    howItWorksDetailed: {
      explanation: "How TCP guarantees delivery over an unreliable network (The Internet).",
      flow: [
        { label: "Segment", annotation: "TCP breaks the large file into small packets and numbers them sequentially." },
        { label: "Transmit", annotation: "Packets are sent over IP. Some take different physical routes." },
        { label: "Acknowledge", annotation: "The receiver replies 'I got packet #1, #2, and #4. I am missing #3'." },
        { label: "Retransmit", annotation: "The sender resends packet #3. Once all are received, they are stitched back together." }
      ]
    },
    coreConcepts: [
      { title: "IP (Internet Protocol)", explanation: "The address system (e.g., 192.168.1.5). Every machine on the internet needs a unique IP to be found." },
      { title: "TCP (Transmission Control Protocol)", explanation: "Reliable, ordered, and error-checked. If a packet is lost, it pauses everything to ask the sender to resend it." },
      { title: "UDP (User Datagram Protocol)", explanation: "Connectionless. It just sends the data. If a packet is dropped, it's gone forever. Much faster and lighter than TCP." }
    ],
    keyTerms: [
      { term: "Ports", definition: "While an IP address identifies the computer, a Port identifies the specific application running on that computer (e.g., Port 80 for Web, Port 25 for Email)." },
      { term: "Head-of-Line Blocking", definition: "TCP's biggest flaw. If packet #3 is lost, TCP will stop delivering packets #4, #5, and #6 to the application until #3 is retransmitted, causing a sudden freeze." }
    ],
    whereItBreaks: [
      { scenario: "Real-Time Video/Audio", description: "If a frame drops in a Zoom call, TCP will pause the video to wait for it. By the time it arrives, it's useless because the conversation has moved on. Use UDP instead." },
      { scenario: "High-Latency Satellite Links", description: "TCP requires constant ACKs. If the round-trip time to a satellite is huge, TCP becomes incredibly slow waiting for ACKs." }
    ],
    tradeoffs: [
      {
        advantage: "TCP (Reliability)",
        disadvantages: ["High overhead/latency.", "Vulnerable to Head-of-Line blocking.", "Requires establishing a connection first."],
        context: "Web browsing, downloading files, emails. (You cannot have a 'missing chunk' in a downloaded PDF)."
      },
      {
        advantage: "UDP (Speed)",
        disadvantages: ["No guarantee of delivery.", "Packets arrive completely out of order.", "No congestion control."],
        context: "Multiplayer gaming, Zoom calls, live streaming. (Just give me the most recent frame!)."
      }
    ],
    engineeringMoment: {
      year: "2015+",
      title: "The Creation of QUIC (HTTP/3)",
      problem: "The web runs on HTTP, which runs on TCP. But TCP's Head-of-Line blocking makes the modern web feel sluggish on mobile networks where packets drop frequently.",
      response: "Google engineers ripped out TCP entirely and built a new protocol (QUIC) on top of UDP.",
      tradeoff: "They implemented their own smart reliability layer in software over UDP, avoiding TCP's OS-level blocking issues.",
      today: "QUIC became the official HTTP/3 standard. Most of your Google/YouTube traffic now runs over UDP, not TCP."
    },
    systemConnections: [
      {
        system: "WebSockets",
        description: "WebSockets start as an HTTP request but immediately upgrade to a persistent, raw TCP connection, allowing real-time bidirectional messaging without HTTP overhead.",
        layers: ["Application Layer", "Transport Layer"]
      }
    ],
    connections: [
      { topicId: "HTTP & HTTPS", relationship: "Traditionally runs entirely on top of TCP.", href: "/computer-science/networking/http-https", status: "available" },
      { topicId: "Distributed Systems", relationship: "Node communication heavily dictates which protocol to use.", href: "/computer-science/software-systems/distributed-systems", status: "coming-soon" }
    ],
    exercises: {
      understand: { 
        question: "Why does TCP require a 3-way handshake but UDP doesn't?",
        hint: "Think about setting up a dedicated phone call vs dropping a letter in a mailbox."
      },
      predict: {
        scenario: "You are building a multiplayer First Person Shooter game. Player positions update 60 times a second.",
        question: "Should the position updates be sent over TCP or UDP?"
      }
    },
    misconceptions: [
      { myth: "TCP is always better than UDP.", reality: "The correct protocol depends entirely on the application's tolerance for data loss vs its tolerance for latency." },
      { myth: "UDP is insecure.", reality: "Neither TCP nor UDP is inherently secure. Security (like TLS/SSL) is layered on top of them." }
    ],
    keyTakeaways: [
      "TCP = Reliability at the cost of speed and overhead.",
      "UDP = Speed and lightness at the cost of reliability.",
      "Most modern web technology relies on TCP, but the cutting edge (HTTP/3) has moved to UDP to bypass TCP's limitations."
    ],
    prerequisites: ["how-the-internet-works"],
    nextTopics: ["http-https"]
  },
  {
    id: "dns",
    slug: "dns",
    title: "DNS (Domain Name System)",
    difficulty: "Beginner",
    category: "networking",
    shortDescription: "The phonebook of the internet, translating human names into machine addresses.",
    overview: {
      question: "How does my computer know where 'google.com' is?",
      answer: "It asks a DNS server to translate the human-readable domain name (google.com) into a machine-readable IP address (142.250.190.46)."
    },
    whyItExists: {
      problem: "Humans are terrible at remembering random strings of numbers (IP addresses), especially when servers change their IPs frequently.",
      solution: "A global, distributed, hierarchical database that maps text names to IP addresses.",
      keyInsight: "Separating the name from the physical address allows companies to move servers seamlessly without users ever knowing."
    },
    coreConcepts: [
      { title: "Hierarchy", explanation: "DNS is structured like a tree: Root servers -> Top Level Domains (.com) -> Authoritative servers (google.com)." },
      { title: "Caching", explanation: "DNS lookups take time. Your browser, OS, and ISP all cache DNS records to speed up future requests." },
      { title: "A Records & CNAMEs", explanation: "An 'A' record maps a name directly to an IPv4 address. A 'CNAME' maps a name to another name." }
    ],
    keyTerms: [
      { term: "TTL (Time to Live)", definition: "How long a DNS record should be cached before asking the authoritative server for an update." }
    ],
    connections: [
      { topicId: "how-the-internet-works", relationship: "The first step in any web request" },
      { topicId: "load-balancing", relationship: "DNS can route users to different load balancers" }
    ],
    engineeringMoment: {
      title: "The Internet Breaks",
      story: "On October 21, 2016, a massive DDoS attack took down Dyn, a major DNS provider. Even though Netflix, Twitter, and Reddit's servers were perfectly fine, users couldn't reach them because the 'phonebook' was offline.",
      lesson: "DNS is a critical single point of failure for the internet."
    },
    keyTakeaways: [
      "When a website is down, the first question engineers ask is 'Is it a DNS issue?' (It usually is).",
      "DNS propagation (waiting for the world's caches to expire) is why changing hosting providers can take hours."
    ],
    prerequisites: ["how-the-internet-works"],
    nextTopics: ["load-balancing"]
  },
  {
    id: "http-https",
    slug: "http-https",
    title: "HTTP & HTTPS",
    difficulty: "Beginner",
    category: "networking",
    shortDescription: "The application-level protocol that powers the World Wide Web.",
    overview: {
      question: "What language do web browsers and servers speak to each other?",
      answer: "HTTP (HyperText Transfer Protocol). It is a simple, text-based request-response protocol running on top of TCP."
    },
    whyItExists: {
      problem: "We needed a standardized way for clients to request documents and data from servers, and understand what format the response is in.",
      solution: "A stateless protocol using Verbs (GET, POST), Headers (metadata), and a Body (the actual data/HTML).",
      keyInsight: "Statelessness makes HTTP incredibly scalable. The server doesn't need to remember anything about the client between requests."
    },
    coreConcepts: [
      { title: "Request / Response", explanation: "The client asks for something (Request), the server replies (Response). The connection is then usually closed or idled." },
      { title: "Headers", explanation: "Key-value pairs attached to every request and response, carrying metadata like Cookies, Content-Type, and Auth tokens." },
      { title: "HTTPS", explanation: "HTTP wrapped in TLS encryption. Crucial because raw HTTP sends everything (including passwords) in plain text." }
    ],
    keyTerms: [
      { term: "Stateless", definition: "Every request is completely independent. To simulate a 'logged in session', we must attach a cookie or token to every single request." },
      { term: "Status Codes", definition: "Standardized numbers indicating the result of a request (e.g., 200 OK, 404 Not Found, 500 Server Error)." }
    ],
    connections: [
      { topicId: "ip-tcp-udp", relationship: "HTTP depends entirely on TCP for reliable delivery" },
      { topicId: "apis", relationship: "REST APIs are built using HTTP verbs and status codes" }
    ],
    realWorldExamples: [
      { title: "REST APIs", description: "Modern web apps use HTTP to send and receive JSON data, completely separating the frontend UI from the backend logic." }
    ],
    keyTakeaways: [
      "HTTP is stateless. All session management is an illusion built on top of cookies/tokens.",
      "Never, ever send sensitive data over HTTP. Always use HTTPS."
    ],
    prerequisites: ["ip-tcp-udp"],
    nextTopics: ["websockets", "apis"]
  },
  {
    id: "websockets",
    slug: "websockets",
    title: "WebSockets",
    difficulty: "Intermediate",
    category: "networking",
    shortDescription: "Persistent, two-way communication between the browser and the server.",
    overview: {
      question: "How do chat apps receive messages instantly without refreshing the page?",
      answer: "Instead of the client constantly asking the server 'Do you have new messages?', WebSockets keep a single TCP connection open, allowing the server to push data to the client at any time."
    },
    whyItExists: {
      problem: "HTTP is strictly request-response. The server cannot initiate a conversation. For live-updating apps (chat, trading), constantly polling the server via HTTP is slow and wastes massive amounts of bandwidth.",
      solution: "The WebSocket protocol. It starts as an HTTP request, but 'upgrades' the connection to a persistent, full-duplex tunnel.",
      keyInsight: "Full-duplex means data flows in both directions simultaneously over one connection."
    },
    coreConcepts: [
      { title: "The Handshake", explanation: "The client sends a standard HTTP GET request with an 'Upgrade: websocket' header. If the server agrees, the connection stays open." },
      { title: "Low Overhead", explanation: "Unlike HTTP which sends heavy headers with every request, WebSocket frames have tiny overhead (as little as 2 bytes)." },
      { title: "Stateful", explanation: "Unlike HTTP, WebSocket connections are stateful. The server knows exactly who is connected at any given millisecond." }
    ],
    keyTerms: [
      { term: "Full-Duplex", definition: "Communication that occurs in both directions simultaneously." },
      { term: "Polling", definition: "The old technique of sending an AJAX request every 3 seconds to check for updates." }
    ],
    connections: [
      { topicId: "http-https", relationship: "WebSockets start as an HTTP request" },
      { topicId: "distributed-systems", relationship: "Scaling stateful WebSockets across multiple servers is difficult" }
    ],
    realWorldExamples: [
      { title: "Figma & Google Docs", description: "When you see another user's cursor moving in real time, those coordinate updates are streaming over a WebSocket connection." },
      { title: "Crypto Trading Platforms", description: "Order books update hundreds of times per second. Doing this via HTTP polling would crash the server." }
    ],
    keyTakeaways: [
      "Use HTTP for document retrieval and standard API calls.",
      "Use WebSockets only when you need high-frequency, low-latency, bidirectional data."
    ],
    prerequisites: ["http-https"],
    nextTopics: ["distributed-systems"]
  },
  {
    id: "load-balancing",
    slug: "load-balancing",
    title: "Load Balancing",
    difficulty: "Advanced",
    category: "networking",
    shortDescription: "Distributing network traffic across multiple servers to ensure reliability and speed.",
    overview: {
      question: "How does Amazon survive Black Friday traffic?",
      answer: "They don't have one giant server. They have thousands of smaller servers, and a Load Balancer sits in front, distributing incoming users across them evenly."
    },
    whyItExists: {
      problem: "A single server has physical limits on CPU and RAM. If traffic exceeds this, the server crashes (Vertical scaling fails).",
      solution: "Add more servers (Horizontal scaling). But users only know one IP address. The Load Balancer acts as a traffic cop, receiving all requests and silently forwarding them to backend servers.",
      keyInsight: "Horizontal scaling provides near-infinite capacity, provided you can route traffic efficiently."
    },
    coreConcepts: [
      { title: "Algorithms", explanation: "Round Robin (taking turns), Least Connections (send to the server with the least active users), or IP Hashing (same user always goes to the same server)." },
      { title: "Health Checks", explanation: "The Load Balancer constantly pings the backend servers. If a server dies, the balancer stops sending traffic to it." },
      { title: "L4 vs L7", explanation: "Layer 4 (TCP) balancing routes traffic based purely on IPs and ports. Layer 7 (HTTP) balancing inspects the URL and headers to make smart routing decisions." }
    ],
    keyTerms: [
      { term: "Horizontal Scaling", definition: "Adding more machines to the pool." },
      { term: "Vertical Scaling", definition: "Upgrading the CPU/RAM of a single machine." }
    ],
    connections: [
      { topicId: "dns", relationship: "DNS is often used as a global, primitive load balancer" },
      { topicId: "distributed-systems", relationship: "Load balancers are the gateway to distributed architectures" }
    ],
    realWorldExamples: [
      { title: "Cloudflare & AWS ELB", description: "When you visit a major site, you almost never hit their actual application server directly. You hit an Elastic Load Balancer which routes you to an available instance." }
    ],
    keyTakeaways: [
      "Load balancing is what transforms a 'server' into a 'system'.",
      "It enables Zero-Downtime Deployments by allowing you to update servers one by one while the balancer routes traffic to the others."
    ],
    prerequisites: ["dns", "http-https"],
    nextTopics: ["distributed-systems"]
  }
];
