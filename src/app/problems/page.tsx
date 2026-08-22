import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// New Components
import { LearningContext } from "@/components/knowledge/LearningContext";
import { KnowledgeMap } from "@/components/knowledge/KnowledgeMap";
import { FeaturedTopic } from "@/components/knowledge/FeaturedTopic";
import { ConceptChain } from "@/components/knowledge/ConceptChain";
import { SystemMoments } from "@/components/knowledge/SystemMoments";
import { WhyItMatters } from "@/components/knowledge/WhyItMatters";
import { Misconceptions } from "@/components/knowledge/Misconceptions";
import { LearningPath } from "@/components/knowledge/LearningPath";

// Data
import { problemsHubData as data } from "@/data/problems/hub-data";

export const metadata: Metadata = {
  title: "Problems & Solutions Ecosystem | prashanta.dev",
  description: data.description,
};

export default function ProblemsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-header">
        <Container>
          {/* 1. Hub Hero / Identity */}
          <Section className="py-12 md:py-20 border-b border-border/50">
            <SectionHeading
              badge="Knowledge Ecosystem"
              heading={data.title}
              subtext={data.description}
            />
          </Section>

          {/* 2. What We Really Study */}
          <LearningContext intro={data.learningContext.intro} pillars={data.learningContext.pillars} />

          {/* 3. The Big Picture Knowledge Map */}
          <KnowledgeMap 
            domains={data.topicCategories.map(cat => ({
              id: cat.id,
              title: cat.title,
              nodes: cat.topics.map(t => ({
                id: t.id,
                label: t.title,
                dependsOn: t.prerequisites,
                enables: t.nextTopics,
                usedIn: t.realWorldExamples?.map(ex => ex.title)
              }))
            }))} 
          />

          {/* 4 & 5. Learning Domains & Expanded Topic Collection */}
          <Section className="py-20 border-b border-border/50">
            <div className="mb-16">
              <h3 className="text-sm font-semibold tracking-wider text-accent uppercase mb-4">
                Learning Domains
              </h3>
              <p className="text-xl text-foreground font-medium">
                Explore the Curriculum
              </p>
            </div>

            <div className="space-y-32">
              {data.topicCategories.map((category) => (
                <div key={category.id} className="scroll-mt-32" id={category.id}>
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-foreground">{category.title}</h4>
                    <p className="text-muted mt-2 max-w-2xl">{category.description}</p>
                  </div>
                  
                  {category.topics.length > 0 && (
                    <div className="mb-8">
                      <FeaturedTopic topic={category.topics[0]} href={`/problems/${category.topics[0].slug}`} />
                    </div>
                  )}

                  {category.topics.length > 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.topics.slice(1).map((topic) => (
                        <Link 
                          key={topic.id} 
                          href={`/problems/${topic.slug}`}
                          className="group bg-surface border border-border rounded-[var(--radius-default)] p-6 hover:border-accent/50 transition-colors flex flex-col h-full"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] font-mono text-muted uppercase tracking-widest">{topic.difficulty}</span>
                            <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">→</span>
                          </div>
                          <h5 className="text-lg font-bold text-foreground mb-3">{topic.title}</h5>
                          <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-4 flex-grow">{topic.shortDescription}</p>
                          <div className="flex flex-wrap gap-2 mt-auto">
                             {topic.keyTerms?.slice(0, 2).map((term, i) => (
                               <span key={i} className="text-[10px] bg-surface-muted text-muted-foreground px-2 py-1 rounded border border-border/30">
                                 {term.term}
                               </span>
                             ))}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>

          {/* 6. How Concepts Connect */}
          <ConceptChain chains={data.conceptConnections} />

          {/* 7. System Moments */}
          <SystemMoments moments={data.systemMoments} />

          {/* 8. Why This Matters */}
          <WhyItMatters items={data.whyItMatters} />

          {/* 9. Common Misconceptions */}
          <Misconceptions items={data.misconceptions} />

          {/* 10. Suggested Learning Journey */}
          <LearningPath path={data.learningPath} />

          {/* 11. Where To Go Next */}
          <Section className="py-20 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">Ready to see these principles in action?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects" className="px-8 py-4 bg-surface border border-border rounded-lg hover:border-accent/50 transition-colors font-medium">
                Explore Applied Projects →
              </Link>
            </div>
          </Section>

        </Container>
      </main>
      <Footer />
    </>
  );
}
