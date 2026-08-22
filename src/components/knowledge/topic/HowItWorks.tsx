import { CodeExample } from "@/components/code/CodeExample";
import { DeepTopic } from "@/types/knowledge";

interface HowItWorksProps {
  data: DeepTopic["howItWorksDetailed"];
  fallback?: DeepTopic["howItWorks"];
}

export function HowItWorks({ data, fallback }: HowItWorksProps) {
  if (!data && !fallback) return null;

  return (
    <section className="py-16 md:py-24 border-b border-border/50">
      <div className="max-w-4xl">
        <h2 className="text-sm font-badge tracking-wider uppercase text-muted mb-8">
          05. How It Works
        </h2>
        
        {data?.explanation && (
          <p className="text-lg text-foreground/80 leading-relaxed mb-12">
            {data.explanation}
          </p>
        )}

        {/* Conceptual Flow */}
        {data?.flow && data.flow.length > 0 && (
          <div className="mb-16 p-8 bg-surface-muted border border-border rounded-2xl flex flex-col items-center">
            {data.flow.map((node, idx) => (
              <div key={idx} className="flex flex-col items-center w-full">
                <div className="px-6 py-4 bg-background border border-border/80 rounded-lg shadow-sm text-center w-full max-w-sm relative">
                  <span className="font-mono text-sm text-foreground font-medium tracking-wide">{node.label}</span>
                  {node.annotation && (
                    <span className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full text-xs text-muted max-w-[150px] text-left hidden md:block">
                      {node.annotation}
                    </span>
                  )}
                </div>
                {idx < data.flow!.length - 1 && (
                  <div className="h-8 w-px bg-accent/50 my-2 relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 border-b border-r border-accent/50 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Numbered Steps */}
        {(data?.steps || fallback) && (
          <div className="mb-16 space-y-8">
            {(data?.steps || fallback)?.map((step, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="shrink-0 w-10 h-10 rounded-full bg-surface border border-accent/30 flex items-center justify-center text-accent font-mono text-sm font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Code Examples */}
        {data?.codeExamples && data.codeExamples.length > 0 && (
          <div className="space-y-12">
            {data.codeExamples.map((ex, idx) => (
              <div key={idx}>
                {ex.description && <p className="text-foreground/80 mb-4">{ex.description}</p>}
                <CodeExample 
                  example={{
                    title: ex.title,
                    implementations: [
                      {
                        language: ex.language as any,
                        label: ex.language,
                        code: ex.code
                      }
                    ]
                  }} 
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
