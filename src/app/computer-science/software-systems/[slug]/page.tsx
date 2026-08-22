import { Metadata } from "next";
import { notFound } from "next/navigation";
import { softwareSystemsDeep } from "@/data/computer-science/software-systems-deep";
import { DeepTopicLayout } from "@/components/knowledge/topic/DeepTopicLayout";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return softwareSystemsDeep.map((topic) => ({
    slug: topic.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = softwareSystemsDeep.find((t) => t.slug === slug);
  
  if (!topic) return { title: "Not Found" };
  
  return {
    title: `${topic.title} | Computer Science | prashanta.dev`,
    description: topic.shortDescription,
    keywords: topic.seo?.keywords,
  };
}

export default async function DeepTopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = softwareSystemsDeep.find((t) => t.slug === slug);
  
  if (!topic) {
    notFound();
  }

  // Resolve nextTopics using their slugs from the local category or elsewhere if needed.
  const resolvedNextTopics = topic.nextTopics.map(nextSlug => {
    const found = softwareSystemsDeep.find(t => t.slug === nextSlug);
    if (found) {
      return {
        slug: found.slug,
        title: found.title,
        description: found.shortDescription,
        href: `/computer-science/software-systems/${found.slug}`
      };
    }
    // Fallback if not found in this array
    return {
      slug: nextSlug,
      title: nextSlug.replace("-", " "),
      description: "Continue exploring this concept.",
      href: `/computer-science/software-systems/${nextSlug}`
    };
  });

  return (
    <>
      <JsonLd 
        type="TechArticle" 
        name={topic.title} 
        description={topic.shortDescription}
        url={`${siteConfig.domain}/computer-science/software-systems/${topic.slug}`}
      />
      <JsonLd 
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: siteConfig.domain },
          { name: "Knowledge", item: `${siteConfig.domain}/computer-science` },
          { name: "Software Systems", item: `${siteConfig.domain}/computer-science#software-systems` },
          { name: topic.title, item: `${siteConfig.domain}/computer-science/software-systems/${topic.slug}` }
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
