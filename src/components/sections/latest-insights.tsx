import * as React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArticleCard } from "@/components/cards/article-card";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";

export function LatestInsights() {
  const latest = articles.slice(0, 3);

  return (
    <Section size="lg" className="bg-neutral-50">
      <Container size="default">
        <SectionHeading
          badge="Latest Insights"
          heading="Engineering articles, system design deep dives, and technical thoughts."
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {latest.map((article, idx) => (
            <div
              key={article.id}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="/insights" variant="outlineDark">View All Insights</Button>
        </div>
      </Container>
    </Section>
  );
}
