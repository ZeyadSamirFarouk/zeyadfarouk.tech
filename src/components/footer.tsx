import Link from "next/link";
import { brand } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[rgba(8,8,12,0.9)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
            {brand.availability}
          </p>
          <h2 className="text-2xl font-semibold text-white">جاهز نبدأ مشروعك القادم؟</h2>
          <p className="max-w-xl text-zinc-300">
            أرسل تفاصيل مشروعك وسأعود لك خلال 24 ساعة بخطة عمل واضحة.
          </p>
          <Link href="/contact" className="btn-primary inline-flex">
            ابدأ مشروعك
          </Link>
        </div>

        <div className="space-y-3 text-sm text-zinc-300">
          <p>
            البريد: <a href={`mailto:${brand.email}`} className="hover:text-[--accent]">{brand.email}</a>
          </p>
          <p>
            الهاتف: <a href={`tel:${brand.phone.replace(/\s+/g, "")}`} className="hover:text-[--accent]">{brand.phone}</a>
          </p>
          <div className="flex flex-wrap gap-3">
            {brand.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-3 py-1 transition hover:border-[--accent] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="pt-4 text-xs text-zinc-500">© {new Date().getFullYear()} {brand.name}</p>
        </div>
      </div>
    </footer>
  );
}
