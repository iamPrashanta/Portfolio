interface ConceptLayersProps {
  layers: Array<{
    layer: string;
    title: string;
    description: string;
  }>;
}

export function ConceptLayers({ layers }: ConceptLayersProps) {
  return (
    <section className="py-16 md:py-24 border-b border-border/50">
      <div className="max-w-4xl">
        <h2 className="text-sm font-badge tracking-wider uppercase text-muted mb-12">
          04. Concept Layers
        </h2>
        
        <div className="space-y-6">
          {layers.map((layer, idx) => (
            <div 
              key={idx} 
              className="flex flex-col md:flex-row gap-4 md:gap-8 p-6 bg-surface border border-border rounded-xl hover:border-accent/30 transition-colors"
            >
              <div className="md:w-1/3 shrink-0">
                <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">
                  {layer.layer}
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {layer.title}
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-foreground/80 leading-relaxed">
                  {layer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
