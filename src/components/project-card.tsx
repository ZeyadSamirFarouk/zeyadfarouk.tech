import Link from "next/link";
import type { Project } from "@/data/site-content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 transition duration-300 hover:-translate-y-1 hover:border-[--accent]/60">
      <Link href={`/portfolio/${project.slug}`} className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent]">
        <div className="project-cover" aria-hidden>
          <div className="project-glow" />
        </div>
        <div className="space-y-2 p-5">
          <div className="flex items-center justify-between gap-3 text-xs text-zinc-400">
            <span>{project.categoryLabel}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
          <p className="text-sm text-zinc-400">{project.challenge}</p>
        </div>
      </Link>
    </article>
  );
}
