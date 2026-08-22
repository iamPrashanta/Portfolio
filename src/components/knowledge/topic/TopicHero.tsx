import { DeepTopic } from "@/types/knowledge";

export function TopicHero({ topic }: { topic: DeepTopic }) {
  return (
    <section className="py-16 md:py-24 border-b border-border/50">
      <div className="flex flex-col gap-6 max-w-4xl">
        <div className="flex gap-2 text-sm text-muted font-badge tracking-wider uppercase">
          <span>{topic.category.replace("-", " ")}</span>
          <span>/</span>
          <span className="text-foreground">{topic.difficulty}</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-foreground">
          {topic.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-muted leading-relaxed font-light">
          {topic.shortDescription}
        </p>
        
        <div className="flex flex-wrap items-center gap-4 mt-4 pt-6 border-t border-border/50">
          <div className="flex items-center gap-2 text-sm font-mono text-muted">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            {topic.difficulty}
          </div>
          {topic.estimatedStudyTime && (
            <div className="flex items-center gap-2 text-sm font-mono text-muted">
              <span>•</span>
              <span>{topic.estimatedStudyTime}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm font-mono text-muted">
            <span>•</span>
            <span className="capitalize">{topic.category.replace("-", " ")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
