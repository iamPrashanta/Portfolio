import Link from "next/link";
import { DeepTopic } from "@/types/knowledge";

interface NextLearningProps {
  topic: DeepTopic;
  nextTopics: Array<{
    slug: string;
    title: string;
    description: string;
    href: string;
  }>;
}

export function NextLearning({ topic, nextTopics }: NextLearningProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl">
        <h2 className="text-sm font-badge tracking-wider uppercase text-muted mb-12">
          14. What To Learn Next
        </h2>
        
        <div className="mb-12 p-8 bg-surface-muted border border-border rounded-2xl">
          <h3 className="text-xs font-mono tracking-widest text-emerald-500 uppercase mb-6">You Now Understand</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex gap-3 items-start text-foreground/80 font-medium">
                <span className="text-emerald-500 shrink-0">✓</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {nextTopics.length > 0 && (
          <div>
            <h3 className="text-xs font-mono tracking-widest text-accent uppercase mb-6">Next Recommended</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nextTopics.map((next, idx) => (
                <Link 
                  key={idx}
                  href={next.href}
                  className="group p-6 bg-surface border border-border rounded-xl hover:border-accent/50 transition-colors block"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-mono text-muted tracking-widest">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                      →
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {next.title}
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {next.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
