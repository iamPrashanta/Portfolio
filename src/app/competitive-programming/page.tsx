import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TopicCard } from "@/components/knowledge/TopicCard";
import { competitiveProgramming } from "@/data/competitive-programming";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Competitive Programming | prashanta.dev",
  description: "Advanced problem-solving techniques, optimization strategies, and competitive programming patterns.",
};

export default function CompetitiveProgrammingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-header">
        <Container>
          <Section>
            <SectionHeading
              badge="Knowledge Hub"
              heading="Competitive Programming"
              subtext="Problem solving patterns and optimized solutions."
            />
            
            <div className="mt-12 flex items-center justify-between border-b border-border/50 pb-4">
              <span className="text-sm font-mono text-muted">{String(competitiveProgramming.length).padStart(2, '0')} Topics</span>
              <span className="text-sm text-muted">Beginner → Advanced</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
              {competitiveProgramming.length > 0 ? (
                competitiveProgramming.map((topic, index) => (
                  <TopicCard key={topic.slug} topic={topic} href={`/competitive-programming/techniques/${topic.slug}`} index={index} />
                ))
              ) : (
                <div className="col-span-full py-12 border border-dashed border-border rounded-[var(--radius-default)] text-center text-muted">
                  <p>Techniques and patterns are currently being curated. Check back soon.</p>
                </div>
              )}
            </div>
          </Section>

          <Section className="border-t border-border mt-12 pt-16">
            <h2 className="text-3xl font-medium text-foreground mb-8">Learning Roadmap</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-border bg-surface rounded-[var(--radius-default)] shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6 font-bold text-xl">1</div>
                <h3 className="text-xl font-medium text-foreground mb-3">Core Foundations</h3>
                <p className="text-muted leading-relaxed">
                  Start with time and space complexity, basic data structures (Arrays, Strings, Linked Lists), and standard algorithms like sorting and binary search.
                </p>
              </div>
              <div className="p-8 border border-border bg-surface rounded-[var(--radius-default)] shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6 font-bold text-xl">2</div>
                <h3 className="text-xl font-medium text-foreground mb-3">Intermediate Patterns</h3>
                <p className="text-muted leading-relaxed">
                  Master two pointers, sliding window, prefix sums, and basic graph traversals (BFS, DFS). Learn to identify these patterns in word problems.
                </p>
              </div>
              <div className="p-8 border border-border bg-surface rounded-[var(--radius-default)] shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6 font-bold text-xl">3</div>
                <h3 className="text-xl font-medium text-foreground mb-3">Advanced Structures</h3>
                <p className="text-muted leading-relaxed">
                  Dive into trees, tries, disjoint set union (DSU), segment trees, and dynamic programming state transitions.
                </p>
              </div>
              <div className="p-8 border border-border bg-surface rounded-[var(--radius-default)] shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6 font-bold text-xl">4</div>
                <h3 className="text-xl font-medium text-foreground mb-3">Optimization Techniques</h3>
                <p className="text-muted leading-relaxed">
                  Focus on bit manipulation, greedy algorithms, advanced math (number theory, combinatorics), and game theory.
                </p>
              </div>
            </div>
          </Section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
