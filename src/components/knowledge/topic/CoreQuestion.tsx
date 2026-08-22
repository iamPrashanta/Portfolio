import { DeepTopic } from "@/types/knowledge";

export function CoreQuestion({ question, answer }: { question: string; answer: string }) {
  return (
    <section className="py-16 md:py-24 border-b border-border/50">
      <div className="max-w-4xl">
        <h2 className="text-sm font-badge tracking-wider uppercase text-accent mb-8">
          01. The Core Question
        </h2>
        
        <blockquote className="text-2xl md:text-4xl font-medium leading-tight text-foreground mb-10 pl-6 border-l-4 border-accent italic">
          "{question}"
        </blockquote>
        
        <p className="text-lg md:text-xl text-muted leading-relaxed">
          {answer}
        </p>
      </div>
    </section>
  );
}
