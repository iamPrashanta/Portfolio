import { LegalSection } from "@/types/legal";

export const termsOfService: LegalSection[] = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    content: [
      {
        type: "paragraph",
        content: "By accessing or using prashanta.dev, or by engaging my professional services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the website or engage my services."
      },
      {
        type: "paragraph",
        content: "Please note that specific client engagements may be governed by separate written agreements, Statements of Work (SOWs), contracts, project proposals, or email agreements. Where a specific signed or mutually agreed client document conflicts with these general Terms, the specific agreement shall generally control for that particular engagement."
      }
    ],
  },
  {
    id: "nature-of-services",
    number: "02",
    title: "Nature of Services",
    content: [
      {
        type: "paragraph",
        content: "I offer independent professional software engineering and consulting services. These services may include, but are not limited to:"
      },
      {
        type: "list_bullet",
        items: [
          "Custom software development (Full-stack, Backend, Frontend)",
          "System architecture and API design",
          "AI and automation integration",
          "Technical consulting and project management",
          "Ongoing system maintenance and support",
          "Cloud infrastructure and deployment"
        ]
      },
      {
        type: "paragraph",
        content: "The exact scope, timeline, and cost of any service will be determined independently for each client engagement."
      }
    ]
  },
  {
    id: "independent-contractor",
    number: "03",
    title: "Independent Contractor Relationship",
    content: [
      {
        type: "paragraph",
        content: "I act at all times as an independent contractor. Engaging my services does not create an employment relationship, partnership, joint venture, agency, or fiduciary relationship between us, unless explicitly established by a separate written agreement."
      }
    ]
  },
  {
    id: "project-scope",
    number: "04",
    title: "Project Scope and Deliverables",
    content: [
      {
        type: "paragraph",
        content: "Project scope is strictly defined through formal proposals, Statements of Work, contracts, or other mutually agreed written specifications. Any requests for new features, major changes, or additional work outside the initially agreed scope may require a change request, a revised timeline, and additional fees before work begins."
      }
    ]
  },
  {
    id: "client-responsibilities",
    number: "05",
    title: "Client Responsibilities",
    content: [
      {
        type: "paragraph",
        content: "To ensure the successful delivery of projects, clients are expected to:"
      },
      {
        type: "list_bullet",
        items: [
          "Provide accurate and clear project requirements.",
          "Provide timely feedback, approvals, and communication.",
          "Supply required access to systems, accounts, or documentation.",
          "Ensure they possess the legal right and necessary licenses for any materials, content, code, or branding provided for the project.",
          "Secure and manage their own administrative credentials."
        ]
      },
      {
        type: "note",
        content: "Project timelines are estimates and may be significantly affected if required client input, access, or feedback is delayed."
      }
    ]
  },
  {
    id: "fees",
    number: "06",
    title: "Fees and Payments",
    content: [
      {
        type: "paragraph",
        content: "I provide professional services to multiple clients simultaneously, and each engagement is independent. Pricing and payment schedules are determined per engagement and outlined in the respective proposal or contract."
      },
      {
        type: "paragraph",
        content: "Payment structures may include one-time payments (such as milestone-based or fixed-price projects), recurring payments (such as monthly retainers or maintenance fees), or variable hourly consulting fees."
      },
      {
        type: "list_bullet",
        items: [
          "Invoices must be paid by the specified due date.",
          "Work may be paused or suspended if significant payments are overdue.",
          "Late payments may be subject to legally permitted late fees as specified in the applicable agreement.",
          "Clients are responsible for applicable taxes, currency conversion charges, and banking fees related to their payments."
        ]
      }
    ]
  },
  {
    id: "recurring-services",
    number: "07",
    title: "Recurring Services and Retainers",
    content: [
      {
        type: "paragraph",
        content: "I offer recurring professional services such as monthly engineering retainers, ongoing maintenance, and technical monitoring. Each recurring arrangement will explicitly define the scope, billing frequency, fee, and included capacity (e.g., hours per month). Unless explicitly agreed otherwise, unused hours or capacity do not roll over to subsequent billing periods."
      }
    ]
  },
  {
    id: "intellectual-property",
    number: "08",
    title: "Intellectual Property",
    content: [
      {
        type: "callout",
        title: "Client-Specific Deliverables",
        content: "Custom code, designs, or deliverables created specifically for a client's project are generally transferred or licensed to the client upon full payment of all associated fees, subject to the applicable project agreement."
      },
      {
        type: "callout",
        title: "Pre-Existing Materials",
        content: "I retain full ownership of my general technical knowledge, skills, reusable code, pre-existing frameworks, utilities, templates, and internal development tools used or incorporated during an engagement. Clients receive a license to use these materials as part of the final deliverable, but do not gain exclusive ownership over them."
      },
      {
        type: "callout",
        title: "Third-Party Software",
        content: "Open-source software, APIs, frameworks, and third-party libraries incorporated into a project remain subject to their respective original licenses."
      }
    ]
  },
  {
    id: "confidentiality",
    number: "09",
    title: "Confidentiality",
    content: [
      {
        type: "paragraph",
        content: "I am committed to protecting confidential client information, which may include source code, product plans, customer data, and credentials. I will use such information strictly for the purpose of executing the agreed services."
      },
      {
        type: "paragraph",
        content: "Where a separate Non-Disclosure Agreement (NDA) or confidentiality agreement has been signed, that agreement will govern the handling of confidential information for that specific project."
      }
    ]
  },
  {
    id: "third-party-services",
    number: "10",
    title: "Third-Party Services and Infrastructure",
    content: [
      {
        type: "paragraph",
        content: "Modern software projects heavily rely on external third-party platforms, such as cloud hosts (e.g., AWS, Vercel), payment gateways (e.g., Stripe), and APIs. Clients are responsible for creating, funding, and managing their own accounts for these services unless otherwise agreed."
      },
      {
        type: "note",
        content: "I do not control these external providers and cannot guarantee their uninterrupted availability. Any project issues or downtime caused by third-party outages, API deprecations, or platform changes are outside my direct control."
      }
    ]
  },
  {
    id: "maintenance",
    number: "11",
    title: "Maintenance and Support",
    content: [
      {
        type: "paragraph",
        content: "The delivery of a completed project does not automatically include indefinite maintenance, bug fixing, or technical support. Ongoing support requires a separate maintenance agreement or a recurring engineering retainer."
      }
    ]
  },
  {
    id: "no-guarantees",
    number: "12",
    title: "No Guaranteed Business Results",
    content: [
      {
        type: "paragraph",
        content: "While all engineering and consulting services are performed professionally and in good faith based on industry standards, I make no guarantees regarding specific business outcomes, including revenue generation, user growth, funding success, SEO rankings, or the commercial success of a product."
      }
    ]
  },
  {
    id: "warranties-disclaimers",
    number: "13",
    title: "Warranties and Disclaimers",
    content: [
      {
        type: "paragraph",
        content: "Services and deliverables are provided \"as is\" and according to the agreed scope. Given the rapidly evolving nature of software dependencies and cybersecurity threats, I do not warrant that software will be completely error-free, immune to all security vulnerabilities, or permanently compatible with future systems and browsers."
      }
    ]
  },
  {
    id: "liability",
    number: "14",
    title: "Limitation of Liability",
    content: [
      {
        type: "paragraph",
        content: "To the maximum extent permitted by applicable law, I shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities arising out of or related to the services provided."
      },
      {
        type: "paragraph",
        content: "Specific liability limitations and financial caps may be explicitly defined in individual client contracts. [Liability Cap / To Be Confirmed: In the absence of a specific agreement, total liability shall not exceed the total fees paid for the specific services giving rise to the claim during the three (3) months preceding the event.]"
      }
    ]
  },
  {
    id: "termination",
    number: "15",
    title: "Suspension and Termination",
    content: [
      {
        type: "paragraph",
        content: "Either party may terminate an engagement according to the terms specified in the applicable agreement. Common grounds for termination or suspension of services include non-payment, material breach of terms, or illegal activity."
      },
      {
        type: "paragraph",
        content: "Upon termination, outstanding fees for all completed or committed work remain payable immediately. Obligations regarding confidentiality, intellectual property, and limitation of liability shall survive termination."
      }
    ]
  },
  {
    id: "portfolio",
    number: "16",
    title: "Website Content and Portfolio Use",
    content: [
      {
        type: "paragraph",
        content: "All content on prashanta.dev (including articles, case studies, and code examples) is protected by intellectual property laws and may not be republished without permission."
      },
      {
        type: "paragraph",
        content: "I reserve the right to display completed projects, non-confidential deliverables, and case studies in my professional portfolio and marketing materials, provided such disclosure does not violate any active NDA or expose sensitive proprietary client data."
      }
    ]
  },
  {
    id: "governing-law",
    number: "17",
    title: "Governing Law and Jurisdiction",
    content: [
      {
        type: "paragraph",
        content: "These Terms shall be governed by and construed in accordance with the laws of [Applicable Jurisdiction]. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in [Applicable Jurisdiction]."
      }
    ]
  },
  {
    id: "contact",
    number: "18",
    title: "Contact",
    content: [
      {
        type: "paragraph",
        content: "For any questions regarding these Terms of Service or to discuss a potential engagement, please contact me at:"
      },
      {
        type: "paragraph",
        content: "Email: contact@prashanta.dev"
      }
    ]
  }
];
