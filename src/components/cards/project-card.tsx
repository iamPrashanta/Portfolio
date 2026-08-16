import * as React from "react";
import { PrashantaImage } from "@/components/ui/prashanta-image";
import Link from "next/link";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  variant?: "v1" | "v2";
  inverse?: boolean;
  className?: string;
}

export function ProjectCard({ project, variant = "v2", inverse = false, className }: ProjectCardProps) {
  if (variant === "v1") {
    // Marquee style card (smaller, logo overlaid)
    return (
      <Link
        href={`/projects/${project.slug}`}
        className={cn("group block w-[300px] md:w-[400px] shrink-0", className)}
      >
        <div className="bg-white rounded-t-[16px] p-6 pb-4">
          <div className="relative mb-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-sm z-10 -mb-12 ml-4">
              <PrashantaImage
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-[400ms] group-hover:scale-[1.02]"
                fallbackLabel="PROJECT"
              />
            </div>
            {project.logo && (
              <div className="absolute top-0 right-0 p-4">
                <PrashantaImage src={project.logo} alt="" width={40} height={40} className="w-10 h-auto" fallbackLabel="LOGO" />
              </div>
            )}
          </div>
          <p className="text-[0.755rem] text-neutral-900 mt-14 line-clamp-2">
            {project.description}
          </p>
        </div>
        <div className="bg-white rounded-b-[16px] px-6 py-4 flex items-center justify-between border-t border-neutral-100">
          <h3 className="text-[1rem] font-medium text-neutral-950">{project.title}</h3>
          <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center transition-transform group-hover:bg-black group-hover:text-white">
            <PrashantaImage
              src="/icons/plus-circle.svg"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 group-hover:invert transition-all"
              fallbackLabel="ICON"
            />
          </div>
        </div>
      </Link>
    );
  }

  // Grid style card (V2)
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group flex flex-col", className)}
    >
      <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-neutral-100 mb-6">
        <PrashantaImage
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[2px]"
          fallbackLabel="PROJECT"
        />
        {project.logo && (
          <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-xl">
            <PrashantaImage src={project.logo} alt="" width={100} height={32} className="h-8 w-auto" fallbackLabel="LOGO" />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between">
        <h3 className={cn("text-[1.5rem] font-medium tracking-tight", inverse ? "text-white" : "text-neutral-950")}>{project.title}</h3>
        <div className={cn("w-10 h-10 rounded-full border flex items-center justify-center transition-all group-hover:bg-black group-hover:border-black", inverse ? "border-white/20 hover:bg-white" : "border-neutral-200")}>
          <PrashantaImage
            src="/icons/plus.svg"
            alt=""
            width={16}
            height={16}
            className={cn("w-4 h-4 transition-all opacity-50 group-hover:opacity-100", inverse ? "invert group-hover:invert-0" : "group-hover:invert")}
            fallbackLabel="ICON"
          />
        </div>
      </div>
      <p className={cn("mt-2 line-clamp-2", inverse ? "text-white/80" : "text-neutral-900")}>{project.description}</p>
    </Link>
  );
}
