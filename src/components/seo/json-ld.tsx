import { siteConfig } from "@/config/site";

interface BreadcrumbItem {
  name: string;
  item?: string;
}

interface JsonLdProps {
  type: "Person" | "Service" | "BreadcrumbList" | "Article" | "TechArticle";
  name?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  url?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

export function JsonLd(props: JsonLdProps) {
  const { type, name, description, breadcrumbs } = props;
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

  if ((type === "Article" || type === "TechArticle") && name) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": type,
      headline: name,
      description: description,
      url: props.url,
      image: props.image,
      author: {
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.domain,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.domain}/icon`,
        },
      },
      datePublished: props.datePublished,
      dateModified: props.dateModified || props.datePublished,
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
