import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProblemCard } from "@/components/problems/ProblemCard";
import { problems } from "@/data/problems";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Engineering Problems & Solutions | prashanta.dev",
  description: "Real-world engineering challenges, scalable architectures, and practical solutions.",
};

export default function ProblemsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-header">
        <Container>
          <Section>
            <SectionHeading
              badge="Knowledge Hub"
              heading="Problems & Solutions"
              subtext="Real-world engineering challenges."
            />
            
            <div className="mt-12 flex items-center justify-between border-b border-border/50 pb-4">
              <span className="text-sm font-mono text-muted">{String(problems.length).padStart(2, '0')} Problems</span>
              <span className="text-sm text-muted">Real-World Case Studies</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
              {problems.map((problem, index) => (
                <ProblemCard key={problem.slug} problem={problem} href={`/problems/${problem.slug}`} index={index} />
              ))}
            </div>
          </Section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
