import Link from "next/link";

interface KnowledgeConnectionsProps {
  connections: Array<{
    topicId: string;
    relationship: string;
    href?: string;
    status?: "available" | "coming-soon";
  }>;
}

export function KnowledgeConnections({ connections }: KnowledgeConnectionsProps) {
  return (
    <section className="py-16 md:py-24 border-b border-border/50">
      <div className="max-w-4xl">
        <h2 className="text-sm font-badge tracking-wider uppercase text-muted mb-8">
          11. Knowledge Graph
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {connections.map((conn, idx) => {
            const isAvailable = conn.status !== "coming-soon" && conn.href;
            
            const Inner = (
              <div className={`p-4 flex items-center justify-between border rounded-lg transition-colors ${
                isAvailable 
                  ? "bg-surface border-border hover:border-accent/50 cursor-pointer" 
                  : "bg-surface/50 border-border/50 border-dashed"
              }`}>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-mono text-muted uppercase tracking-wider">{conn.relationship}</span>
                  <span className={`font-medium ${isAvailable ? "text-foreground" : "text-muted"}`}>
                    {conn.topicId}
                  </span>
                </div>
                {isAvailable ? (
                  <span className="text-accent">→</span>
                ) : (
                  <span className="text-[10px] uppercase font-mono tracking-widest text-muted border border-border/50 px-2 py-0.5 rounded">
                    Soon
                  </span>
                )}
              </div>
            );

            if (isAvailable) {
              return (
                <Link key={idx} href={conn.href!}>
                  {Inner}
                </Link>
              );
            }

            return <div key={idx}>{Inner}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
