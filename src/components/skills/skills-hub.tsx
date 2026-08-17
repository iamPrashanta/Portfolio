"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { Skill } from "@/data/skills";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const FEATURED_SLUGS = [
  "python",
  "php",
  "java",
  "node-js",
  "next-js",
  "express-js",
  "go",
  "rust",
  "postgresql",
  "docker",
  "aws",
  "apache-kafka",
  "artificial-intelligence",
  "machine-learning",
  "large-language-models",
];

interface SkillsHubProps {
  skills: Skill[];
}

export function SkillsHub({ skills }: SkillsHubProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("All");

  // Dynamically calculate stats
  const totalSkills = skills.length;
  const documentedSkills = skills.filter((s) => s.status === "documented").length;
  const underDevelopmentSkills = totalSkills - documentedSkills;

  // Extract unique categories
  const categories = React.useMemo(() => {
    const cats = Array.from(new Set(skills.map((s) => s.category)));
    return ["All", ...cats];
  }, [skills]);

  // Featured skills
  const featuredSkills = React.useMemo(() => {
    return FEATURED_SLUGS.map((slug) => skills.find((s) => s.slug === slug)).filter(
      Boolean
    ) as Skill[];
  }, [skills]);

  // Filter skills based on search and category
  const filteredSkills = React.useMemo(() => {
    return skills.filter((skill) => {
      const matchesSearch =
        searchQuery === "" ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = activeCategory === "All" || skill.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [skills, searchQuery, activeCategory]);

  // Group filtered skills by category for the default view
  const remainingCategorized = React.useMemo(() => {
    const grouped = filteredSkills.reduce((acc, skill) => {
      // If we are in the default view (no search, "All" category), exclude featured skills
      if (searchQuery === "" && activeCategory === "All" && FEATURED_SLUGS.includes(skill.slug)) {
        return acc;
      }
      
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<string, Skill[]>);
    
    return grouped;
  }, [filteredSkills, searchQuery, activeCategory]);

  const isFiltered = searchQuery !== "" || activeCategory !== "All";

  return (
    <>
      <Section size="none" className="pt-12 pb-8 border-b border-border">
        <Container size="default">
          {/* Overview Stats */}
          <div className="flex flex-wrap gap-8 mb-10 text-sm font-medium animate-fade-up">
            <div className="flex flex-col gap-1">
              <span className="text-foreground text-3xl">{totalSkills}</span>
              <span className="text-muted uppercase tracking-wider text-xs">Technologies</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-foreground text-3xl">{documentedSkills}</span>
              <span className="text-muted uppercase tracking-wider text-xs">Detailed Guides</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-foreground text-3xl">{underDevelopmentSkills}</span>
              <span className="text-muted uppercase tracking-wider text-xs">Under Development</span>
            </div>
          </div>

          {/* Controls: Search and Filters */}
          <div className="flex flex-col gap-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted" />
              </div>
              <input
                type="text"
                placeholder="Search technologies..."
                className="w-full pl-12 pr-4 py-3 bg-surface border border-border rounded-lg text-foreground focus:outline-none focus:border-foreground transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    activeCategory === category
                      ? "bg-foreground text-background border-foreground"
                      : "bg-surface border-border text-foreground hover:border-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section size="none" className="py-16 md:py-24 min-h-[50vh]">
        <Container size="default">
          {/* Empty State */}
          {filteredSkills.length === 0 && (
            <div className="text-center py-20 border border-border border-dashed rounded-2xl bg-surface">
              <p className="text-foreground font-medium text-lg mb-2">No technologies found</p>
              <p className="text-muted">
                Could not find anything matching &quot;{searchQuery}&quot; in {activeCategory === "All" ? "any category" : activeCategory}.
              </p>
            </div>
          )}

          {/* Default View: Featured + Categorized */}
          {!isFiltered && filteredSkills.length > 0 && (
            <div className="flex flex-col gap-16 md:gap-24">
              {/* Featured Technologies */}
              {featuredSkills.length > 0 && (
                <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  <h3 className="text-2xl font-medium mb-8 text-foreground">Featured Technologies</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {featuredSkills.map((skill) => (
                      <SkillCard key={skill.slug} skill={skill} />
                    ))}
                  </div>
                </div>
              )}

              {/* Categorized Remaining Skills */}
              <div className="flex flex-col gap-16">
                {Object.entries(remainingCategorized).map(([category, items], idx) => (
                  <div
                    key={category}
                    className="animate-fade-up"
                    style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                  >
                    <h4 className="text-xl font-medium mb-6 pb-4 border-b border-border text-foreground flex items-center justify-between">
                      <span>{category}</span>
                      <span className="text-sm font-normal text-muted">{items.length}</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {items.map((skill) => (
                        <SkillCard key={skill.slug} skill={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Filtered View: Flat Grid */}
          {isFiltered && filteredSkills.length > 0 && (
            <div className="animate-fade-up">
              <div className="mb-8 text-muted flex items-center justify-between border-b border-border pb-4">
                <span>{filteredSkills.length} {filteredSkills.length === 1 ? "technology" : "technologies"} found</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredSkills.map((skill) => (
                  <SkillCard key={skill.slug} skill={skill} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const isDocumented = skill.status === "documented";

  return (
    <Link
      href={`/skills/${skill.slug}`}
      className="group flex flex-col p-5 rounded-[12px] bg-surface border border-border hover:border-foreground transition-all hover:shadow-sm h-full"
    >
      <div className="flex items-center justify-between mb-3">
        <h5 className="font-medium text-foreground text-lg m-0">{skill.name}</h5>
        <ArrowRight
          size={16}
          className="text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all"
        />
      </div>
      <p className="text-muted text-sm line-clamp-2 mb-6 flex-1">
        {skill.description}
      </p>
      
      <div className="mt-auto flex items-center gap-2 text-xs font-medium uppercase tracking-wider">
        <div 
          className={`w-2 h-2 rounded-full ${
            isDocumented ? "bg-accent" : "bg-transparent border border-muted"
          }`} 
        />
        <span className={isDocumented ? "text-foreground" : "text-muted"}>
          {isDocumented ? "Detailed Guide" : "Under Development"}
        </span>
      </div>
    </Link>
  );
}
