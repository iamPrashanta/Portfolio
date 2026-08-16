import Link from "next/link";
import { PrashantaImage } from "@/components/ui/prashanta-image";
import { Article } from "@/types/article";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className={cn("group flex flex-col h-full", className)}
    >
      <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden mb-6 bg-neutral-100">
        <PrashantaImage
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[2px]"
          fallbackLabel="ARTICLE"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[0.75rem] font-medium tracking-wide text-black uppercase">
          {article.category}
        </div>
      </div>
      
      <div className="flex flex-col flex-1">
        <h3 className="text-[1.5rem] font-medium leading-[1.3] mb-3 group-hover:text-accent transition-colors">
          {article.title}
        </h3>
        
        <p className="text-neutral-900 text-[1rem] leading-[1.5] mb-6 line-clamp-3 flex-1">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-6 border-t border-neutral-200 mt-auto">
          <div className="text-[0.875rem] text-neutral-900">
            {article.date} <span className="mx-2">•</span> {article.readTime}
          </div>
          <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center transition-all group-hover:bg-black group-hover:border-black shrink-0 ml-4">
            <PrashantaImage
              src="/icons/arrow.svg"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4 opacity-50 rotate-[-45deg] group-hover:opacity-100 group-hover:invert transition-all"
              fallbackLabel="ICON"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
