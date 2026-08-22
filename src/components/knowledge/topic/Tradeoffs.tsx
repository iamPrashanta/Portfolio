interface TradeoffsProps {
  tradeoffs: Array<{
    advantage: string;
    disadvantages: string[];
    context?: string;
  }>;
}

export function Tradeoffs({ tradeoffs }: TradeoffsProps) {
  return (
    <section className="py-16 md:py-24 border-b border-border/50">
      <div className="max-w-4xl">
        <h2 className="text-sm font-badge tracking-wider uppercase text-muted mb-12">
          08. Tradeoffs
        </h2>
        
        <div className="space-y-8">
          {tradeoffs.map((item, idx) => (
            <div key={idx} className="p-8 bg-surface border border-border rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xs font-mono tracking-widest text-emerald-500 uppercase mb-3">You Get</h3>
                  <p className="text-xl font-bold text-foreground">{item.advantage}</p>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="text-xs font-mono tracking-widest text-accent uppercase mb-3">But You Pay With</h3>
                  <ul className="space-y-2">
                    {item.disadvantages.map((dis, i) => (
                      <li key={i} className="flex gap-2 items-start text-foreground/80">
                        <span className="text-accent mt-0.5">-</span>
                        <span>{dis}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {item.context && (
                <div className="mt-8 pt-4 border-t border-border/50">
                  <p className="text-sm text-muted italic">When it matters: {item.context}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
