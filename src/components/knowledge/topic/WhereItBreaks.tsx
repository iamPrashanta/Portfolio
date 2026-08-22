interface WhereItBreaksProps {
  items: Array<{
    scenario: string;
    description: string;
  }>;
}

export function WhereItBreaks({ items }: WhereItBreaksProps) {
  return (
    <section className="py-16 md:py-24 border-b border-border/50">
      <div className="max-w-4xl">
        <h2 className="text-sm font-badge tracking-wider uppercase text-red-500/80 mb-8 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          07. Where It Breaks
        </h2>
        
        <p className="text-lg text-foreground/80 leading-relaxed mb-10">
          Mental models are simplifications. Here is where the abstraction leaks and things go wrong in production.
        </p>

        <div className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-4 p-6 bg-red-500/5 border border-red-500/10 rounded-xl">
              <h3 className="text-base font-bold text-foreground md:w-1/3 shrink-0">{item.scenario}</h3>
              <p className="text-sm text-muted md:w-2/3 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
