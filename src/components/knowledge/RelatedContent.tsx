import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { foundations } from "@/data/computer-science";
import { dataStructures } from "@/data/data-structures";
import { algorithms } from "@/data/algorithms";
import { competitiveProgramming } from "@/data/competitive-programming";
import { problems } from "@/data/problems";
import { skills } from "@/data/skills";
import { services } from "@/data/services";

// Build a global lookup map for fast slug -> { title, href } resolution
const globalGraph = new Map<string, { title: string; href: string }>();

const buildGraph = () => {
  if (globalGraph.size > 0) return;
  
  foundations.forEach(t => globalGraph.set(t.slug, { title: t.title, href: `/computer-science/foundations/${t.slug}` }));
  dataStructures.forEach(t => globalGraph.set(t.slug, { title: t.title, href: `/data-structures/${t.slug}` }));
  algorithms.forEach(t => globalGraph.set(t.slug, { title: t.title, href: `/algorithms/${t.slug}` }));
  competitiveProgramming.forEach(t => globalGraph.set(t.slug, { title: t.title, href: `/competitive-programming/techniques/${t.slug}` }));
  problems.forEach(p => globalGraph.set(p.slug, { title: p.title, href: `/problems/${p.slug}` }));
  skills.forEach(s => globalGraph.set(s.slug, { title: s.name, href: `/skills/${s.slug}` }));
  services.forEach(s => globalGraph.set(s.slug, { title: s.title, href: `/services/${s.slug}` }));
};

interface RelatedContentProps {
  type: "knowledge" | "problem";
  prerequisites?: string[];
  relatedTopics?: string[];
  relatedAlgorithms?: string[];
  relatedProblems?: string[];
  relatedSkills?: string[];
  relatedServices?: string[];
}

export function RelatedContent(props: RelatedContentProps) {
  buildGraph();

  const renderGroup = (title: string, slugs?: string[]) => {
    if (!slugs || slugs.length === 0) return null;
    
    const items = slugs.map(slug => globalGraph.get(slug)).filter(Boolean) as { title: string; href: string }[];
    if (items.length === 0) return null;

    return (
      <div className="mb-6">
        <h4 className="text-sm font-medium text-muted mb-3 uppercase tracking-wider">{title}</h4>
        <div className="flex flex-wrap gap-2">
          {items.map((item, idx) => (
            <Link 
              key={idx} 
              href={item.href}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors shadow-sm"
            >
              {item.title}
              <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const hasContent = props.prerequisites?.length || 
                     props.relatedTopics?.length || 
                     props.relatedAlgorithms?.length || 
                     props.relatedProblems?.length || 
                     props.relatedSkills?.length || 
                     props.relatedServices?.length;

  if (!hasContent) return null;

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h3 className="text-2xl font-medium text-foreground mb-8">
        {props.type === "knowledge" ? "Continue Learning" : "Explore Related Engineering"}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
        <div>
          {renderGroup("Prerequisites", props.prerequisites)}
          {renderGroup(props.type === "problem" ? "Related Knowledge" : "Related Concepts", props.relatedTopics)}
          {renderGroup("Related Algorithms", props.relatedAlgorithms)}
        </div>
        <div>
          {renderGroup("Related Problems", props.relatedProblems)}
          {renderGroup("Relevant Skills", props.relatedSkills)}
          {renderGroup("Engineering Services", props.relatedServices)}
        </div>
      </div>
    </section>
  );
}
