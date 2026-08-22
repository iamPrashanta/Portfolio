interface WhyItExistsProps {
  why: {
    problem: string;
    solution: string;
    keyInsight: string;
  };
}

export function WhyItExists({ why }: WhyItExistsProps) {
  return (
    <section className="py-16 md:py-24 border-b border-border/50">
      <div className="max-w-4xl">
        <h2 className="text-sm font-badge tracking-wider uppercase text-muted mb-12">
          03. Why It Exists
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-mono tracking-widest text-accent uppercase flex items-center gap-2">
              <span className="w-4 h-[1px] bg-accent"></span>
              The Problem
            </h3>
            <p className="text-lg text-muted leading-relaxed">
              {why.problem}
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-mono tracking-widest text-emerald-500 uppercase flex items-center gap-2">
              <span className="w-4 h-[1px] bg-emerald-500"></span>
              The Idea
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              {why.solution}
            </p>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-surface border border-border rounded-xl">
          <h4 className="text-xs font-badge tracking-widest text-muted uppercase mb-3">Key Insight</h4>
          <p className="text-foreground font-medium">{why.keyInsight}</p>
        </div>
      </div>
    </section>
  );
}
