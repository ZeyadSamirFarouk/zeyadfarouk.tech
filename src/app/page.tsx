import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import {
  brand,
  processSteps,
  projects,
  services,
  testimonials,
  trustPoints,
} from "@/data/site-content";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-6xl space-y-20 px-5 py-10 sm:px-8 sm:py-14">
      <Reveal className="hero-panel p-6 sm:p-10">
        <div className="grid items-end gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              <span className="inline-flex h-2 w-2 rounded-full bg-[--accent]" aria-hidden />
              {brand.roleAr} — {brand.roleEn}
            </p>
            <h1 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl">
              أصنع حضورًا بصريًا فاخرًا يحوّل العلامة إلى تجربة لا تُنسى.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-300">{brand.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                اطلب مشروعك
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                شاهد الأعمال
              </Link>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-white/12 bg-black/25 p-5 text-sm text-zinc-200">
            <p className="text-zinc-400">Value Snapshot</p>
            {trustPoints.map((point) => (
              <p key={point} className="rounded-xl border border-white/10 p-3">
                {point}
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="space-y-6" delay={100}>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-zinc-400">Selected Work</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">أعمال مختارة</h2>
          </div>
          <Link href="/portfolio" className="btn-secondary hidden sm:inline-flex">
            عرض كل المشاريع
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Reveal>

      <Reveal className="space-y-6" delay={150}>
        <p className="text-sm text-zinc-400">Services</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">الخدمات التي أقدمها</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.id} className="rounded-2xl border border-white/10 bg-zinc-900/35 p-5">
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-1 text-sm text-zinc-400">المدة المتوقعة: {service.timeline}</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {service.includes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className="space-y-6" delay={200}>
        <p className="text-sm text-zinc-400">Process</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">آلية العمل</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-white/10 bg-zinc-900/30 p-5">
              <p className="text-xs text-zinc-500">0{index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-300">{step.description}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className="space-y-4" delay={250}>
        <p className="text-sm text-zinc-400">Testimonials</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">آراء العملاء</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.author} className="rounded-2xl border border-white/10 bg-zinc-900/35 p-5 text-zinc-200">
              <p className="leading-8">{item.quote}</p>
              <footer className="mt-4 text-sm text-zinc-400">{item.author}</footer>
            </blockquote>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
