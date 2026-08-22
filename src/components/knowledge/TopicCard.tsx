import Link from "next/link";
import { ComputerScienceTopic } from "@/types/knowledge";
import { Badge } from "@/components/ui/badge";

interface TopicCardProps {
  topic: ComputerScienceTopic;
  href: string;
}

export function TopicCard({ topic, href, index }: TopicCardProps & { index?: number }) {
  const formattedIndex = index !== undefined ? String(index + 1).padStart(2, '0') : null;

  return (
    <Link href={href} className="block group h-full">
      <div className="h-full flex flex-col justify-between p-6 border border-border bg-surface rounded-[var(--radius-default)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface-muted hover:shadow-md relative overflow-hidden">
        
        {/* Top section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-semibold tracking-wider text-muted uppercase">
              {topic.difficulty}
            </span>
            {formattedIndex && (
              <span className="text-xs font-mono text-muted/50">
                {formattedIndex}
              </span>
            )}
          </div>
          
          <h3 className="text-xl font-medium text-foreground mb-3 flex items-start justify-between gap-4 group-hover:text-accent transition-colors">
            <span className="line-clamp-2">{topic.title}</span>
            <span className="text-muted group-hover:text-accent transition-transform duration-300 group-hover:translate-x-1 shrink-0">
              →
            </span>
          </h3>
          
          <p className="text-sm text-muted leading-relaxed line-clamp-3">
            {topic.shortDescription}
          </p>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-4 border-t border-border/50 flex items-center justify-between">
          <span className="text-[10px] font-semibold tracking-wider text-muted uppercase group-hover:text-foreground transition-colors">
            Read Topic
          </span>
          {topic.complexity && (
            <span className="text-[10px] font-mono text-muted/80 bg-background/50 px-2 py-1 rounded">
              {topic.complexity.worst || topic.complexity.average || topic.complexity.best}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
