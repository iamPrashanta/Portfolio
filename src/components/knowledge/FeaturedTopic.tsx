import React from "react";
import Link from "next/link";
import { DeepTopic } from "@/types/knowledge";

interface FeaturedTopicProps {
  topic: DeepTopic;
  href: string;
}

export function FeaturedTopic({ topic, href }: FeaturedTopicProps) {
  return (
    <div className="group relative block bg-surface border border-border rounded-[var(--radius-default)] p-8 transition-all duration-300 hover:shadow-lg hover:border-accent/50 overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150" />

      <div className="relative z-10 flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Left Column: Title and Core Idea */}
        <div className="flex-1 space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase bg-accent/10 px-2 py-1 rounded">
                Featured Topic
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-muted uppercase">
                {topic.difficulty}
              </span>
            </div>
            <h5 className="font-semibold text-foreground mb-2">&quot;The Question&quot;</h5>
            <h3 className="text-3xl font-semibold text-foreground group-hover:text-accent transition-colors">
              {topic.title}
            </h3>
          </div>
          
          <div className="prose prose-sm prose-neutral dark:prose-invert">
            <p className="text-muted leading-relaxed text-base">
              {topic.shortDescription}
            </p>
          </div>

          <Link href={href} className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
            Explore Topic <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Right Column: Deep Details Preview */}
        <div className="flex-1 space-y-6 border-t md:border-t-0 md:border-l border-border/50 pt-6 md:pt-0 md:pl-8 lg:pl-16">
          
          {topic.overview && (
            <div className="mb-6 bg-accent/5 p-4 rounded-lg border border-accent/10">
              <h4 className="text-[10px] font-bold tracking-widest text-muted uppercase mb-2">
                The Question
              </h4>
              <p className="text-sm font-medium text-foreground italic">
                &quot;{topic.overview.question}&quot;
              </p>
            </div>
          )}

          {topic.whyItExists && (
            <div>
              <h4 className="text-[10px] font-bold tracking-widest text-muted uppercase mb-2">
                Why It Exists
              </h4>
              <p className="text-sm text-muted leading-relaxed">
                {topic.whyItExists.problem}
              </p>
            </div>
          )}

          {topic.connections && topic.connections.length > 0 && (
            <div>
              <h4 className="text-[10px] font-bold tracking-widest text-muted uppercase mb-2">
                Key Connections
              </h4>
              <div className="flex flex-wrap gap-2">
                {topic.connections.slice(0, 4).map((conn, i) => (
                  <span key={i} className="text-xs font-mono text-muted-foreground bg-surface-muted px-2 py-1 rounded border border-border/30">
                    {conn.relationship}
                  </span>
                ))}
                {topic.connections.length > 4 && (
                  <span className="text-xs font-mono text-muted-foreground px-2 py-1">
                    +{topic.connections.length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
