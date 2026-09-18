import type { Metadata } from "next";
import { ProjectFilters } from "@/components/project-filters";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "الأعمال",
  description: "استعرض مشاريع الهوية والحملات والسوشال وواجهات UI المصممة باحترافية.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-5 py-10 sm:px-8 sm:py-14">
      <Reveal className="space-y-3">
        <p className="text-sm text-zinc-400">Portfolio</p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">معرض الأعمال</h1>
        <p className="max-w-3xl text-zinc-300">
          تصفّح المشاريع حسب التصنيف، ثم ادخل لتفاصيل كل مشروع لمعرفة التحدي، المنهج، والمخرجات.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <ProjectFilters />
      </Reveal>
    </div>
  );
}
