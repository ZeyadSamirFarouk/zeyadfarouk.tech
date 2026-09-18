"use client";

import { useMemo, useState } from "react";
import { projectCategoryFilters, projects } from "@/data/site-content";
import { ProjectCard } from "@/components/project-card";

export function ProjectFilters() {
  const [activeCategory, setActiveCategory] = useState<
    (typeof projectCategoryFilters)[number]["value"]
  >("all");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="تصنيفات الأعمال">
        {projectCategoryFilters.map((filter) => (
          <button
            key={filter.value}
            className={`rounded-full border px-4 py-2 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] ${
              activeCategory === filter.value
                ? "border-[--accent] bg-[--accent]/15 text-white"
                : "border-zinc-700 text-zinc-300 hover:border-zinc-500"
            }`}
            onClick={() => setActiveCategory(filter.value)}
            type="button"
            role="tab"
            aria-selected={activeCategory === filter.value}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {filteredProjects.length ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-zinc-700 p-8 text-zinc-400">
          لا توجد أعمال في هذا التصنيف حالياً.
        </p>
      )}
    </div>
  );
}
