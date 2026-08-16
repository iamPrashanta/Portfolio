import { LegalSection } from "@/types/legal";

export const privacyPolicy: LegalSection[] = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    content: [
      {
        type: "paragraph",
        content: "This Privacy Policy explains how information may be collected, used, stored, and protected when you visit prashanta.dev or engage my professional software engineering and consulting services.",
      },
      {
        type: "paragraph",
        content: "The website (prashanta.dev) represents the independent software development and consulting practice of [Legal Name / Individual Name]. Because my services involve software development, system architecture, technical consulting, and ongoing technical management for various businesses and clients, this policy is structured to cover the different ways information may be processed depending on how you interact with me.",
      }
    ],
  },
  {
    id: "information-collected",
    number: "02",
    title: "Information That May Be Collected",
    content: [
      {
        type: "paragraph",
        content: "Depending on whether you are simply browsing the portfolio or actively engaging my professional services, different types of information may be collected:",
      },
      {
        type: "callout",
        title: "Contact and Identity Information",
        content: "Information voluntarily provided during project discussions or submitted through contact forms, such as your name, company name, business email, and phone number."
      },
      {
        type: "callout",
        title: "Professional and Project Information",
        content: "Information required to scope and deliver services, including project requirements, technical documentation, business specifications, project communications, support requests, and feedback."
      },
      {
        type: "callout",
        title: "Client Relationship Information",
        content: "Records relating to active or past engagements, including statements of work, invoices, payment statuses, and service history."
      }
    ]
  },
  {
    id: "automatically-collected",
    number: "03",
    title: "Automatically Collected Information",
    content: [
      {
        type: "paragraph",
        content: "When you visit the website, certain technical information may be collected automatically by hosting providers or potential future analytics services. This may include your IP address, browser and device information, pages visited, and approximate location.",
      },
      {
        type: "note",
        content: "Note: At this time, prashanta.dev does not employ aggressive third-party marketing trackers (such as Meta Pixel or Google Analytics) without your explicit knowledge. We primarily collect what is strictly necessary to deliver the website securely and efficiently."
      }
    ]
  },
  {
    id: "how-used",
    number: "04",
    title: "How Information May Be Used",
    content: [
      {
        type: "paragraph",
        content: "Information is used primarily to facilitate professional relationships and deliver high-quality engineering services. Specifically, information may be used for:"
      },
      {
        type: "list_bullet",
        items: [
          "Responding to inquiries and discussing potential projects.",
          "Providing contracted software development and consulting services.",
          "Managing client relationships and communicating about ongoing projects.",
          "Sending invoices and payment-related communications.",
          "Providing ongoing maintenance and technical support.",
          "Improving the website, technical resources, and service offerings.",
          "Ensuring the security of the platform and preventing abuse.",
          "Meeting legal, tax, and accounting obligations."
        ]
      }
    ]
  },
  {
    id: "legal-bases",
    number: "05",
    title: "Legal Bases and Consent",
    content: [
      {
        type: "paragraph",
        content: "Depending on applicable law and the circumstances of our engagement, information is processed under several legal bases: with your explicit consent, for the performance of a contract (such as a Statement of Work), for legitimate business interests (such as maintaining communication records), or to comply with legal obligations."
      }
    ]
  },
  {
    id: "payments",
    number: "06",
    title: "Payments and Financial Information",
    content: [
      {
        type: "paragraph",
        content: "I receive payments from multiple companies and clients for one-time projects, milestone-based deliverables, and recurring retainers. However, prashanta.dev itself does not operate as a financial payment processor."
      },
      {
        type: "paragraph",
        content: "Payments are processed through mutually agreed channels or third-party payment providers (such as bank transfers or digital invoicing systems). These payment processors collect and process your financial information directly, subject to their own privacy policies. I only retain transaction, invoice, and accounting records as required for legitimate business and legal purposes."
      }
    ]
  },
  {
    id: "sharing",
    number: "07",
    title: "Sharing Information",
    content: [
      {
        type: "paragraph",
        content: "Personal information is never sold to third parties for advertising purposes. Information is only shared where reasonably necessary to operate the business and deliver services, which may include:"
      },
      {
        type: "list_bullet",
        items: [
          "Hosting providers and cloud infrastructure.",
          "Email and communication providers.",
          "Development, deployment, and project collaboration tools.",
          "Payment processors and accounting software.",
          "Professional advisors (such as accountants or legal counsel).",
          "Legal or regulatory authorities where strictly required by law."
        ]
      }
    ]
  },
  {
    id: "client-project-data",
    number: "08",
    title: "Client Project Data",
    content: [
      {
        type: "paragraph",
        content: "During the course of software development or consulting, I frequently receive access to sensitive client materials. This may include source code, repositories, APIs, cloud infrastructure, databases, access credentials, and proprietary business information."
      },
      {
        type: "paragraph",
        content: "This access is used strictly as reasonably necessary to perform the agreed services. While I apply professional engineering standards to protect this data, clients remain responsible for securing their own systems, controlling access levels, and providing credentials through secure, approved channels."
      }
    ]
  },
  {
    id: "data-retention",
    number: "09",
    title: "Data Retention",
    content: [
      {
        type: "paragraph",
        content: "Information is retained only for as long as necessary to fulfill the purposes outlined in this policy. This includes the duration necessary to provide services, maintain project history for future support, meet accounting and tax requirements, comply with legal obligations, and resolve any disputes."
      }
    ]
  },
  {
    id: "security",
    number: "10",
    title: "Security",
    content: [
      {
        type: "paragraph",
        content: "I utilize reasonable technical and organizational safeguards designed to protect information from unauthorized access, disclosure, or destruction. However, no online system or digital storage can guarantee absolute security, and information is shared at your own risk."
      }
    ]
  },
  {
    id: "international-transfers",
    number: "11",
    title: "International Data Transfers",
    content: [
      {
        type: "paragraph",
        content: "Because my clients and infrastructure providers are located globally, your information may be processed in countries different from your own (including India and the United States) depending on the service providers used. By engaging my services or using the website, you acknowledge that your data may be transferred to and processed in these locations."
      }
    ]
  },
  {
    id: "cookies",
    number: "12",
    title: "Cookies and Similar Technologies",
    content: [
      {
        type: "paragraph",
        content: "The website may use cookies or similar technologies to remember your preferences, secure the platform, or analyze site traffic. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent, though some features of the site may not function properly without them."
      }
    ]
  },
  {
    id: "user-rights",
    number: "13",
    title: "User Rights",
    content: [
      {
        type: "paragraph",
        content: "Depending on your location and applicable law, you may have rights regarding your personal information, including the right to request access, correction, deletion, restriction, or data portability. You may also have the right to object to certain processing or withdraw your consent."
      }
    ]
  },
  {
    id: "third-party-links",
    number: "14",
    title: "Third-Party Links",
    content: [
      {
        type: "paragraph",
        content: "The website and my communications may contain links to external sites, code repositories, or third-party services that are not operated by me. I have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services."
      }
    ]
  },
  {
    id: "changes",
    number: "15",
    title: "Changes to This Policy",
    content: [
      {
        type: "paragraph",
        content: "This Privacy Policy may be updated periodically to reflect changes in legal requirements or business practices. Material changes will be indicated by an updated \"Last Updated\" date at the top of the policy."
      }
    ]
  },
  {
    id: "contact",
    number: "16",
    title: "Contact",
    content: [
      {
        type: "paragraph",
        content: "If you have any questions about this Privacy Policy or how your information is handled, please contact me at:"
      },
      {
        type: "emails_list"
      }
    ]
  }
];
