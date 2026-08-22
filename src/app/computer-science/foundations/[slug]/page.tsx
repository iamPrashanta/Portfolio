import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { foundations } from "@/data/computer-science";
import { CodeExample } from "@/components/code/CodeExample";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { RelatedContent } from "@/components/knowledge/RelatedContent";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return foundations.map((topic) => ({
    slug: topic.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = foundations.find((t) => t.slug === slug);
  
  if (!topic) return { title: "Not Found" };
  
  return {
    title: `${topic.seo.title} | prashanta.dev`,
    description: topic.seo.description,
    keywords: topic.seo.keywords,
  };
}

export default async function FoundationTopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = foundations.find((t) => t.slug === slug);
  
  if (!topic) {
    notFound();
  }

  return (
    <>
      <JsonLd 
        type="TechArticle" 
        name={topic.title} 
        description={topic.seo.description}
        url={`${siteConfig.domain}/computer-science/foundations/${topic.slug}`}
      />
      <JsonLd 
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: siteConfig.domain },
          { name: "Knowledge", item: `${siteConfig.domain}/computer-science` },
          { name: "Foundations", item: `${siteConfig.domain}/computer-science/foundations` },
          { name: topic.title, item: `${siteConfig.domain}/computer-science/foundations/${topic.slug}` }
        ]}
      />
      <Navbar />
      <main className="pt-header">
        <Container>
          <Section>
            {/* Basic Header */}
            <div className="mb-12 border-b border-border pb-8">
              <div className="flex gap-2 text-sm text-muted mb-4 font-badge tracking-wider uppercase">
                <span>Knowledge</span>
                <span>/</span>
                <span>Computer Science</span>
                <span>/</span>
                <span className="text-foreground">{topic.title}</span>
              </div>
              <h1 className="text-display-md font-medium text-foreground mb-6">{topic.title}</h1>
              <p className="text-xl text-muted max-w-3xl leading-relaxed">
                {topic.shortDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-12">
                <div>
                  <h2 className="text-2xl font-medium text-foreground mb-4">Overview</h2>
                  <div className="prose max-w-none text-foreground/80 leading-relaxed">
                    {topic.introduction}
                  </div>
                </div>

                {topic.whyItMatters && (
                  <div>
                    <h2 className="text-2xl font-medium text-foreground mb-4">Why Does It Matter?</h2>
                    <div className="prose max-w-none text-foreground/80 leading-relaxed">
                      {topic.whyItMatters}
                    </div>
                  </div>
                )}

                {topic.codeExamples && topic.codeExamples.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-medium text-foreground mb-4">Examples</h2>
                    {topic.codeExamples.map((example, idx) => (
                      <div key={idx} className="mb-8">
                        <h3 className="text-lg font-medium text-foreground mb-2">{example.title}</h3>
                        {example.description && <p className="text-muted text-sm mb-4">{example.description}</p>}
                        <CodeExample example={example} />
                      </div>
                    ))}
                  </div>
                )}

                <RelatedContent 
                  type="knowledge"
                  prerequisites={topic.prerequisites}
                  relatedTopics={topic.relatedTopics}
                  relatedAlgorithms={topic.relatedAlgorithms}
                  relatedProblems={topic.relatedProblems}
                  relatedSkills={topic.relatedSkills}
                  relatedServices={topic.relatedServices}
                />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  <div className="bg-surface border border-border rounded-[var(--radius-default)] p-6 shadow-sm">
                    <h3 className="text-sm font-badge font-medium text-foreground uppercase tracking-wider mb-4">Quick Facts</h3>
                    <dl className="space-y-4 text-sm">
                      <div>
                        <dt className="text-muted mb-1">Difficulty</dt>
                        <dd className="text-foreground font-medium capitalize">{topic.difficulty}</dd>
                      </div>
                      <div>
                        <dt className="text-muted mb-1">Category</dt>
                        <dd className="text-foreground font-medium">Foundations</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
