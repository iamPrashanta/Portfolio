import { DeepTopic } from "@/types/knowledge";

interface TryItYourselfProps {
  exercises: DeepTopic["exercises"];
}

export function TryItYourself({ exercises }: TryItYourselfProps) {
  if (!exercises) return null;
  
  return (
    <section className="py-16 md:py-24 border-b border-border/50">
      <div className="max-w-4xl">
        <h2 className="text-sm font-badge tracking-wider uppercase text-muted mb-8">
          13. Try It Yourself
        </h2>
        
        <div className="space-y-6">
          {exercises.understand && (
            <div className="p-6 bg-surface border border-border rounded-xl">
              <h3 className="text-xs font-mono tracking-widest text-emerald-500 uppercase mb-2">Understand</h3>
              <p className="text-foreground font-medium mb-2">{exercises.understand.question}</p>
              {exercises.understand.hint && (
                <p className="text-sm text-muted mt-4 p-3 bg-background border border-border/50 rounded-lg">
                  <span className="font-medium mr-2">Hint:</span>
                  {exercises.understand.hint}
                </p>
              )}
            </div>
          )}

          {exercises.predict && (
            <div className="p-6 bg-surface border border-border rounded-xl">
              <h3 className="text-xs font-mono tracking-widest text-accent uppercase mb-2">Predict</h3>
              <div className="mb-4 p-4 bg-background border border-border/50 rounded-lg">
                <p className="font-mono text-sm text-muted">{exercises.predict.scenario}</p>
              </div>
              <p className="text-foreground font-medium">{exercises.predict.question}</p>
            </div>
          )}

          {exercises.build && (
            <div className="p-6 bg-surface border border-border rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none"></div>
              <h3 className="text-xs font-mono tracking-widest text-indigo-400 uppercase mb-3">Build / Investigate</h3>
              <p className="text-foreground font-medium mb-4">{exercises.build.task}</p>
              
              {exercises.build.requirements && (
                <ul className="space-y-2">
                  {exercises.build.requirements.map((req, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-sm text-foreground/80">
                      <span className="text-indigo-400 mt-0.5">✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
