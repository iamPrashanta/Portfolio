import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TopicCard } from "@/components/knowledge/TopicCard";
import { algorithms } from "@/data/algorithms";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Algorithms | prashanta.dev",
  description: "Comprehensive guide to algorithms, patterns, complexities, and real-world applications.",
};

export default function AlgorithmsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-header">
        <Container>
          <Section>
            <SectionHeading
              badge="Knowledge Hub"
              heading="Algorithms"
              subtext="Sorting, searching, and graph traversal."
            />
            
            <div className="mt-12 flex items-center justify-between border-b border-border/50 pb-4">
              <span className="text-sm font-mono text-muted">{String(algorithms.length).padStart(2, '0')} Topics</span>
              <span className="text-sm text-muted">Beginner → Advanced</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
              {algorithms.length > 0 ? (
                algorithms.map((topic, index) => (
                  <TopicCard key={topic.slug} topic={topic} href={`/algorithms/${topic.slug}`} index={index} />
                ))
              ) : (
                <div className="col-span-full py-12 border border-dashed border-border rounded-[var(--radius-default)] text-center text-muted">
                  <p>Algorithm deep dives are currently being curated. Check back soon.</p>
                </div>
              )}
            </div>
          </Section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
