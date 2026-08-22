export function MentalModel({ model }: { model: string }) {
  return (
    <section className="py-16 md:py-24 bg-surface-muted border-b border-border/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-4xl relative z-10">
        <h2 className="text-sm font-badge tracking-wider uppercase text-foreground mb-8 flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          02. Mental Model
        </h2>
        
        <div className="p-8 md:p-12 bg-background border border-accent/20 rounded-2xl shadow-sm">
          <div className="flex gap-4 items-start">
            <span className="text-4xl text-accent leading-none font-serif opacity-50">"</span>
            <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mt-2">
              {model}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
