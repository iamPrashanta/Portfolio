import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArticleCard } from "@/components/cards/article-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { articles } from "@/data/articles";

export const metadata = {
  title: "Insights",
  description: "Engineering articles, system design deep dives, and technical thoughts.",
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-header">
        <Section size="lg" className="overflow-hidden !pb-0">
          <Container size="large" className="text-center flex flex-col items-center animate-fade-up">
            <SectionHeading
              badge="Insights"
              heading="Engineering Notes & Articles"
              subtext="My thoughts on backend architecture, system design, security, and scaling modern applications."
              align="center"
              headingAs="h1"
              className="max-w-[800px] items-center"
            />
          </Container>
        </Section>

        <Section size="sm">
          <Container size="default">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, idx) => (
                <div key={article.id} className="animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
