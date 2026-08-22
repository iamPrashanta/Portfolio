import { Metadata } from "next";
import { notFound } from "next/navigation";
import { architectureDeep } from "@/data/computer-science/architecture-deep";
import { DeepTopicLayout } from "@/components/knowledge/topic/DeepTopicLayout";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return architectureDeep.map((topic) => ({
    slug: topic.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = architectureDeep.find((t) => t.slug === slug);
  
  if (!topic) return { title: "Not Found" };
  
  return {
    title: `${topic.title} | Computer Science | prashanta.dev`,
    description: topic.shortDescription,
    keywords: topic.seo?.keywords,
  };
}

export default async function DeepTopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = architectureDeep.find((t) => t.slug === slug);
  
  if (!topic) {
    notFound();
  }

  // Resolve nextTopics using their slugs from the local category or elsewhere if needed.
  const resolvedNextTopics = topic.nextTopics.map(nextSlug => {
    const found = architectureDeep.find(t => t.slug === nextSlug);
    if (found) {
      return {
        slug: found.slug,
        title: found.title,
        description: found.shortDescription,
        href: `/computer-science/architecture/${found.slug}`
      };
    }
    // Fallback if not found in this array
    return {
      slug: nextSlug,
      title: nextSlug.replace("-", " "),
      description: "Continue exploring this concept.",
      href: `/computer-science/architecture/${nextSlug}`
    };
  });

  return (
    <>
      <JsonLd 
        type="TechArticle" 
        name={topic.title} 
        description={topic.shortDescription}
        url={`${siteConfig.domain}/computer-science/architecture/${topic.slug}`}
      />
      <JsonLd 
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: siteConfig.domain },
          { name: "Knowledge", item: `${siteConfig.domain}/computer-science` },
          { name: "Architecture", item: `${siteConfig.domain}/computer-science#architecture` },
          { name: topic.title, item: `${siteConfig.domain}/computer-science/architecture/${topic.slug}` }
        ]}
      />
      <Navbar />
      <main className="pt-header">
        <DeepTopicLayout topic={topic} nextTopics={resolvedNextTopics} />
      </main>
      <Footer />
    </>
  );
}
