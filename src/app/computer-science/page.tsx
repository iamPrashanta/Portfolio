import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TopicCard } from "@/components/knowledge/TopicCard";
import { foundations } from "@/data/computer-science";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Computer Science & Foundations | prashanta.dev",
  description: "Core computer science concepts, memory management, big O notation, and systems programming basics.",
};

export default function ComputerSciencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-header">
        <Container>
          <Section>
            <SectionHeading
              badge="Knowledge Hub"
              heading="Computer Science"
              subtext="Foundational principles of computing, architecture, and systems engineering."
            />
            
            <div className="mt-12 flex items-center justify-between border-b border-border/50 pb-4">
              <span className="text-sm font-mono text-muted">{String(foundations.length).padStart(2, '0')} Topics</span>
              <span className="text-sm text-muted">Beginner → Advanced</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
              {foundations.length > 0 ? (
                foundations.map((topic, index) => (
                  <TopicCard key={topic.slug} topic={topic} href={`/computer-science/foundations/${topic.slug}`} index={index} />
                ))
              ) : (
                <div className="col-span-full py-12 border border-dashed border-border rounded-[var(--radius-default)] text-center text-muted">
                  <p>Computer science foundations are currently being curated. Check back soon.</p>
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
