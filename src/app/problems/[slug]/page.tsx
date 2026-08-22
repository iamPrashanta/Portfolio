import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { problems } from "@/data/problems";
import { CodeExample } from "@/components/code/CodeExample";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactCta } from "@/components/sections/contact-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { RelatedContent } from "@/components/knowledge/RelatedContent";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return problems.map((problem) => ({
    slug: problem.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const problem = problems.find((p) => p.slug === slug);
  
  if (!problem) return { title: "Not Found" };
  
  return {
    title: `${problem.seo.title} | prashanta.dev`,
    description: problem.seo.description,
    keywords: problem.seo.keywords,
  };
}

export default async function ProblemDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const problem = problems.find((p) => p.slug === slug);
  
  if (!problem) {
    notFound();
  }

  if (!problem) {
    notFound();
  }

  return (
    <>
      <JsonLd 
        type="TechArticle" 
        name={problem.title} 
        description={problem.seo.description}
        url={`${siteConfig.domain}/problems/${problem.slug}`}
      />
      <JsonLd 
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: siteConfig.domain },
          { name: "Knowledge", item: `${siteConfig.domain}/computer-science` },
          { name: "Problems & Solutions", item: `${siteConfig.domain}/problems` },
          { name: problem.title, item: `${siteConfig.domain}/problems/${problem.slug}` }
        ]}
      />
      <Navbar />
      <main className="pt-header">
        <Container>
          <Section>
            {/* Header */}
            <div className="mb-12 border-b border-border pb-8">
              <div className="flex gap-2 text-sm text-muted mb-6 font-badge tracking-wider uppercase">
                <span>Knowledge</span>
                <span>/</span>
                <span>Problems & Solutions</span>
                <span>/</span>
                <span className="text-foreground">{problem.title}</span>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <Badge icon={false} className="capitalize">
                  {problem.severity || "Low"} Priority
                </Badge>
                <span className="text-sm text-muted capitalize font-badge tracking-wider">
                  {problem.category.replace(/-/g, " ")}
                </span>
              </div>

              <h1 className="text-display-md font-medium text-foreground mb-6">{problem.title}</h1>
              <p className="text-xl text-muted max-w-3xl leading-relaxed">
                {problem.shortDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-16">
                
                <section>
                  <h2 className="text-3xl font-medium text-foreground mb-6">The Problem</h2>
                  <div className="prose max-w-none text-foreground/80 leading-relaxed">
                    {problem.problemStatement}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-medium text-foreground mb-6">Symptoms & Identification</h2>
                  <ul className="space-y-4">
                    {problem.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex gap-4 p-5 rounded-[var(--radius-default)] border border-border bg-surface-muted shadow-sm">
                        <span className="text-accent font-bold mt-0.5">•</span>
                        <span className="text-foreground">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {problem.architectureOptions && problem.architectureOptions.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-medium text-foreground mb-6">Architecture Options</h2>
                    <div className="space-y-8">
                      {problem.architectureOptions.map((option, idx) => (
                        <div key={idx} className="p-8 rounded-[var(--radius-default)] border border-border bg-surface shadow-sm">
                          <h3 className="text-xl font-medium text-foreground mb-4">{option.title}</h3>
                          <p className="text-muted mb-8 leading-relaxed">{option.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-border">
                            <div>
                              <h4 className="text-sm font-badge font-medium text-green-600 dark:text-green-400 uppercase tracking-wider mb-4">Pros</h4>
                              <ul className="space-y-3">
                                {option.pros.map((pro, i) => (
                                  <li key={i} className="flex gap-3 text-sm text-foreground/80">
                                    <span className="text-green-600 dark:text-green-400 font-bold">✓</span> {pro}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-sm font-badge font-medium text-red-600 dark:text-red-400 uppercase tracking-wider mb-4">Cons</h4>
                              <ul className="space-y-3">
                                {option.cons.map((con, i) => (
                                  <li key={i} className="flex gap-3 text-sm text-foreground/80">
                                    <span className="text-red-600 dark:text-red-400 font-bold">✕</span> {con}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {problem.codeExamples && problem.codeExamples.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-medium text-foreground mb-6">Implementation Examples</h2>
                    {problem.codeExamples.map((example, idx) => (
                      <div key={idx} className="mb-8">
                        <h3 className="text-lg font-medium text-foreground mb-2">{example.title}</h3>
                        {example.description && <p className="text-muted text-sm mb-4">{example.description}</p>}
                        <CodeExample example={example} />
                      </div>
                    ))}
                  </section>
                )}
                
                <RelatedContent 
                  type="problem"
                  prerequisites={problem.prerequisites}
                  relatedTopics={problem.relatedTopics}
                  relatedAlgorithms={problem.relatedAlgorithms}
                  relatedProblems={problem.relatedProblems}
                  relatedSkills={problem.relatedSkills}
                  relatedServices={problem.relatedServices}
                />

              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  <div className="bg-surface border border-border rounded-[var(--radius-default)] p-6 shadow-sm">
                    <h3 className="text-sm font-badge font-medium text-foreground uppercase tracking-wider mb-4">Quick Facts</h3>
                    <dl className="space-y-4 text-sm">
                      <div>
                        <dt className="text-muted mb-1">Category</dt>
                        <dd className="text-foreground font-medium capitalize">{problem.category.replace(/-/g, " ")}</dd>
                      </div>
                      <div>
                        <dt className="text-muted mb-1">Difficulty</dt>
                        <dd className="text-foreground font-medium">Advanced</dd>
                      </div>
                    </dl>
                  </div>
                  
                  {/* Contextual CTA */}
                  <div className="bg-surface-muted border border-border rounded-[var(--radius-default)] p-6 shadow-sm">
                    <h3 className="text-lg font-medium text-foreground mb-3">Need help with this?</h3>
                    <p className="text-sm text-muted mb-6 leading-relaxed">
                      Building a system facing similar scalability constraints? I work on backend architecture, high-concurrency systems, and performance optimization.
                    </p>
                    <a href="/contact" className="inline-block w-full text-center py-3 px-6 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-colors">
                      Discuss a Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Container>
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
