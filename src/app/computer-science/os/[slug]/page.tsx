import { Metadata } from "next";
import { notFound } from "next/navigation";
import { osDeep } from "@/data/computer-science/os-deep";
import { DeepTopicLayout } from "@/components/knowledge/topic/DeepTopicLayout";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return osDeep.map((topic) => ({
    slug: topic.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = osDeep.find((t) => t.slug === slug);
  
  if (!topic) return { title: "Not Found" };
  
  return {
    title: `${topic.title} | Computer Science | prashanta.dev`,
    description: topic.shortDescription,
    keywords: topic.seo?.keywords,
  };
}

export default async function DeepTopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = osDeep.find((t) => t.slug === slug);
  
  if (!topic) {
    notFound();
  }

  const resolvedNextTopics = topic.nextTopics.map(nextSlug => {
    const found = osDeep.find(t => t.slug === nextSlug);
    if (found) {
      return {
        slug: found.slug,
        title: found.title,
        description: found.shortDescription,
        href: `/computer-science/os/${found.slug}`
      };
    }
    return {
      slug: nextSlug,
      title: nextSlug.replace(/-/g, " "),
      description: "Continue exploring this concept.",
      href: `/computer-science/os/${nextSlug}`
    };
  });

  return (
    <>
      <JsonLd 
        type="TechArticle" 
        name={topic.title} 
        description={topic.shortDescription}
        url={`${siteConfig.domain}/computer-science/os/${topic.slug}`}
      />
      <JsonLd 
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: siteConfig.domain },
          { name: "Knowledge", item: `${siteConfig.domain}/computer-science` },
          { name: "Operating Systems", item: `${siteConfig.domain}/computer-science#os` },
          { name: topic.title, item: `${siteConfig.domain}/computer-science/os/${topic.slug}` }
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
