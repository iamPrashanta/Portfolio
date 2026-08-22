interface KeyConceptsProps {
  concepts: Array<{
    title: string;
    explanation: string;
  }>;
}

export function KeyConcepts({ concepts }: KeyConceptsProps) {
  return (
    <section className="py-16 md:py-24 border-b border-border/50">
      <div className="max-w-4xl">
        <h2 className="text-sm font-badge tracking-wider uppercase text-muted mb-12">
          06. Key Concepts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {concepts.map((concept, idx) => (
            <div key={idx} className="p-6 bg-surface border border-border rounded-xl">
              <div className="text-xs font-mono text-muted mb-2 tracking-widest">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{concept.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{concept.explanation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
