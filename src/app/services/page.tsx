import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { processSteps, services } from "@/data/site-content";

export const metadata: Metadata = {
  title: "الخدمات",
  description: "تعرف على خدمات التصميم وما يتضمنه كل عرض مع آلية العمل والزمن المتوقع.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-5 py-10 sm:px-8 sm:py-14">
      <Reveal className="space-y-3">
        <p className="text-sm text-zinc-400">Services</p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">الخدمات</h1>
      </Reveal>

      <Reveal className="grid gap-5 md:grid-cols-2" delay={120}>
        {services.map((service) => (
          <article key={service.id} className="rounded-2xl border border-white/10 bg-zinc-900/35 p-6">
            <h2 className="text-xl font-semibold text-white">{service.title}</h2>
            <p className="mt-2 text-sm text-zinc-400">الجدول الزمني: {service.timeline}</p>
            <ul className="mt-4 space-y-2 text-zinc-200">
              {service.includes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </Reveal>

      <Reveal className="space-y-4" delay={180}>
        <h2 className="text-2xl font-semibold text-white">مراحل التنفيذ وما يستلمه العميل</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-white/10 bg-zinc-900/35 p-5">
              <p className="text-xs text-zinc-500">0{index + 1}</p>
              <h3 className="mt-2 font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-300">{step.description}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal delay={220}>
        <Link href="/contact" className="btn-primary inline-flex">
          ابدأ مشروعك الآن
        </Link>
      </Reveal>
    </div>
  );
}
