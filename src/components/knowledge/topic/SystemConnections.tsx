interface SystemConnectionsProps {
  connections: Array<{
    system: string;
    description: string;
    layers?: string[];
  }>;
}

export function SystemConnections({ connections }: SystemConnectionsProps) {
  return (
    <section className="py-16 md:py-24 border-b border-border/50">
      <div className="max-w-4xl">
        <h2 className="text-sm font-badge tracking-wider uppercase text-muted mb-12">
          10. Real-World Systems
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {connections.map((conn, idx) => (
            <div key={idx} className="p-8 bg-surface border border-border rounded-2xl flex flex-col h-full">
              <h3 className="text-xl font-bold text-foreground mb-4">{conn.system}</h3>
              <p className="text-muted leading-relaxed mb-8 flex-grow">{conn.description}</p>
              
              {conn.layers && conn.layers.length > 0 && (
                <div className="mt-auto">
                  <h4 className="text-xs font-mono tracking-widest text-muted uppercase mb-3">Implementation Layers</h4>
                  <div className="space-y-2">
                    {conn.layers.map((layer, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0"></div>
                        <span className="text-sm font-medium text-foreground">{layer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
