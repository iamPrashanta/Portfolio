import Link from "next/link";
import { EngineeringProblem } from "@/types/problem";
import { Badge } from "@/components/ui/badge";

interface ProblemCardProps {
  problem: EngineeringProblem;
  href: string;
}

export function ProblemCard({ problem, href, index }: ProblemCardProps & { index?: number }) {
  const formattedIndex = index !== undefined ? String(index + 1).padStart(2, '0') : null;

  const getSeverityColor = (severity?: string) => {
    switch (severity) {
      case "critical": return "text-red-400";
      case "high": return "text-orange-400";
      case "medium": return "text-yellow-400";
      default: return "text-neutral-400";
    }
  };

  return (
    <Link href={href} className="block group h-full">
      <div className="h-full flex flex-col justify-between p-6 border border-border bg-surface rounded-[var(--radius-default)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface-muted hover:shadow-md relative overflow-hidden">
        
        {/* Top section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className={`text-[10px] font-semibold tracking-wider uppercase ${getSeverityColor(problem.severity)}`}>
              {problem.severity || "Low"} Priority
            </span>
            {formattedIndex && (
              <span className="text-xs font-mono text-muted/50">
                {formattedIndex}
              </span>
            )}
          </div>
          
          <h3 className="text-xl font-medium text-foreground mb-3 flex items-start justify-between gap-4 group-hover:text-accent transition-colors">
            <span className="line-clamp-2">{problem.title}</span>
            <span className="text-muted group-hover:text-accent transition-transform duration-300 group-hover:translate-x-1 shrink-0">
              →
            </span>
          </h3>
          
          <p className="text-sm text-muted leading-relaxed line-clamp-3">
            {problem.shortDescription}
          </p>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-4 border-t border-border/50 flex items-center justify-between">
          <span className="text-[10px] font-semibold tracking-wider text-muted uppercase group-hover:text-foreground transition-colors">
            Explore Problem
          </span>
          <span className="text-[10px] font-mono text-muted/80 bg-background/50 px-2 py-1 rounded capitalize">
            {problem.category.replace(/-/g, " ")}
          </span>
        </div>
      </div>
    </Link>
  );
}
