import { siteConfig } from "@/config/site";

interface BreadcrumbItem {
  name: string;
  item?: string;
}

interface JsonLdProps {
  type: "Person" | "Service" | "BreadcrumbList";
  name?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function JsonLd({ type, name, description, breadcrumbs }: JsonLdProps) {
  let schemaData = {};

  if (type === "Person") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.domain,
      jobTitle: siteConfig.title,
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    };
  }

  if (type === "Service" && name) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: name,
      provider: {
        "@type": "Person",
        name: siteConfig.name,
      },
      areaServed: "Worldwide",
      description: description,
    };
  }

  if (type === "BreadcrumbList" && breadcrumbs) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.item,
      })),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
