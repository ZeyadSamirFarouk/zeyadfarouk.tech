import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { brand, skills, testimonials } from "@/data/site-content";

export const metadata: Metadata = {
  title: "من أنا",
  description: "نبذة احترافية عن زياد سمير فاروق وخبراته وأدواته وأبرز نقاط القوة.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-10 px-5 py-10 sm:px-8 sm:py-14">
      <Reveal className="space-y-4">
        <p className="text-sm text-zinc-400">About</p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">{brand.name}</h1>
        <p className="text-lg text-zinc-300">{brand.roleAr} / {brand.roleEn}</p>
        <p className="max-w-3xl leading-8 text-zinc-300">
          أساعد العلامات التجارية على بناء صورة بصرية متماسكة وقابلة للنمو. أركز على المزج بين التفكير
          الاستراتيجي والتنفيذ الإبداعي لإنتاج أعمال ترفع قيمة العلامة وتدعم أهدافها التجارية.
        </p>
      </Reveal>

      <Reveal className="grid gap-6 md:grid-cols-2" delay={120}>
        <section className="rounded-2xl border border-white/10 bg-zinc-900/35 p-6">
          <h2 className="text-xl font-semibold text-white">نقاط القوة</h2>
          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>• بناء هويات بصرية قابلة للتوسع</li>
            <li>• توجيه فني لحملات عالية التأثير</li>
            <li>• تنظيم الملفات والتسليم الاحترافي للفِرق</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-zinc-900/35 p-6">
          <h2 className="text-xl font-semibold text-white">الأدوات والمهارات</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-200">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="space-y-4" delay={180}>
        <h2 className="text-2xl font-semibold text-white">شهادات مختارة (Placeholder قابل للتعديل)</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.author} className="rounded-2xl border border-white/10 bg-zinc-900/35 p-5 text-zinc-200">
              <p>{item.quote}</p>
              <footer className="mt-3 text-sm text-zinc-400">{item.author}</footer>
            </blockquote>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
