interface MisconceptionsProps {
  items: Array<{
    myth: string;
    reality: string;
  }>;
}

export function Misconceptions({ items }: MisconceptionsProps) {
  return (
    <section className="py-16 md:py-24 border-b border-border/50">
      <div className="max-w-4xl">
        <h2 className="text-sm font-badge tracking-wider uppercase text-muted mb-12">
          12. Common Misconceptions
        </h2>
        
        <div className="space-y-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4 p-8 bg-surface border border-border rounded-2xl">
              <div>
                <h3 className="text-xs font-mono tracking-widest text-red-400 uppercase mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  Myth
                </h3>
                <p className="text-lg font-medium text-foreground/80 line-through decoration-red-400/30">
                  "{item.myth}"
                </p>
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <h3 className="text-xs font-mono tracking-widest text-emerald-500 uppercase mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Reality
                </h3>
                <p className="text-lg font-medium text-foreground">
                  {item.reality}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
