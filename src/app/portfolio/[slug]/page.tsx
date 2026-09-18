import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/site-content";

type PageParams = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "مشروع غير موجود" };
  }

  return {
    title: project.title,
    description: `${project.categoryLabel} • ${project.year}`,
  };
}

export default async function ProjectDetailsPage({ params }: PageParams) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <div className="mx-auto w-full max-w-5xl space-y-10 px-5 py-10 sm:px-8 sm:py-14">
      <Reveal className="space-y-3">
        <p className="text-sm text-zinc-400">
          {project.categoryLabel} • {project.year}
        </p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">{project.title}</h1>
        <p className="max-w-3xl text-zinc-300">{project.challenge}</p>
      </Reveal>

      <Reveal className="grid gap-6 lg:grid-cols-[1.1fr_1fr]" delay={120}>
        <section className="space-y-4 rounded-2xl border border-white/10 bg-zinc-900/35 p-6">
          <h2 className="text-xl font-semibold text-white">النهج الإبداعي</h2>
          <p className="leading-8 text-zinc-300">{project.approach}</p>
          <h3 className="pt-2 text-sm text-zinc-400">Deliverables</h3>
          <ul className="space-y-2 text-zinc-200">
            {project.deliverables.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          {project.gallery.map((item) => (
            <div key={item} className="project-cover flex items-end rounded-2xl border border-white/10 p-4">
              <p className="text-sm text-zinc-200">{item}</p>
            </div>
          ))}
        </section>
      </Reveal>

      <Reveal className="rounded-2xl border border-[--accent]/40 bg-[--accent]/10 p-6 text-zinc-100" delay={180}>
        <h2 className="text-xl font-semibold">هل تريد نتيجة مشابهة لمشروعك؟</h2>
        <p className="mt-2 text-zinc-200">شاركني أهدافك وسأقترح عليك أفضل مسار تصميم يناسب علامتك.</p>
        <Link href="/contact" className="btn-secondary mt-4 inline-flex border-[--accent]/60">
          اطلب مشروع مشابه
        </Link>
      </Reveal>
    </div>
  );
}
