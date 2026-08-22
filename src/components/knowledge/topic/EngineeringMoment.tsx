interface EngineeringMomentProps {
  moment: {
    title: string;
    problem?: string;
    response?: string;
    tradeoff?: string;
    today?: string;
    year?: string;
    story?: string;
    lesson?: string;
  };
}

export function EngineeringMoment({ moment }: EngineeringMomentProps) {
  const isDeepFormat = moment.problem || moment.response;

  return (
    <section className="py-16 md:py-24 border-b border-border/50">
      <div className="max-w-4xl">
        <h2 className="text-sm font-badge tracking-wider uppercase text-muted mb-8">
          09. The Engineering Moment
        </h2>
        
        <div className="p-8 md:p-12 bg-background border border-border shadow-sm rounded-2xl">
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border/50">
            {moment.year && (
              <span className="px-3 py-1 bg-surface text-foreground font-mono text-sm rounded-md border border-border">
                {moment.year}
              </span>
            )}
            <h3 className="text-2xl md:text-3xl font-medium text-foreground">{moment.title}</h3>
          </div>

          {isDeepFormat ? (
            <div className="space-y-8">
              {moment.problem && (
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-muted uppercase mb-2">The Problem</h4>
                  <p className="text-foreground/80 leading-relaxed">{moment.problem}</p>
                </div>
              )}
              {moment.response && (
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-muted uppercase mb-2">The Engineering Response</h4>
                  <p className="text-foreground/80 leading-relaxed">{moment.response}</p>
                </div>
              )}
              {moment.tradeoff && (
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-muted uppercase mb-2">The Tradeoff</h4>
                  <p className="text-foreground/80 leading-relaxed">{moment.tradeoff}</p>
                </div>
              )}
              {moment.today && (
                <div className="pt-4 border-t border-border/50">
                  <h4 className="text-xs font-mono tracking-widest text-accent uppercase mb-2">Where We See It Today</h4>
                  <p className="text-foreground font-medium leading-relaxed">{moment.today}</p>
                </div>
              )}
            </div>
          ) : (
            // Fallback for older moment structure
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">{moment.story}</p>
              <div className="p-6 bg-surface-muted border border-border rounded-xl">
                <h4 className="text-xs font-mono tracking-widest text-accent uppercase mb-2">The Lesson</h4>
                <p className="text-foreground font-medium">{moment.lesson}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
