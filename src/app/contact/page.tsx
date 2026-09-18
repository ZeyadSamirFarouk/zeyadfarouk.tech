import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { brand } from "@/data/site-content";

export const metadata: Metadata = {
  title: "اطلب مشروعك",
  description: "أرسل متطلبات مشروعك عبر نموذج منظم مع طرق تواصل مباشرة.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
      <Reveal className="space-y-5 pb-8 lg:pb-0">
        <p className="text-sm text-zinc-400">Contact</p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">اطلب مشروعك</h1>
        <p className="max-w-md leading-8 text-zinc-300">
          شاركني تفاصيل مشروعك وسأرجع لك برد واضح حول الخطوات القادمة. إذا فضّلت التواصل المباشر، استخدم
          الطرق التالية.
        </p>

        <div className="space-y-3 rounded-2xl border border-white/10 bg-zinc-900/35 p-5 text-sm text-zinc-200">
          <p>
            Email: <a href={`mailto:${brand.email}`} className="hover:text-[--accent]">{brand.email}</a>
          </p>
          <p>
            WhatsApp: <a href={brand.whatsapp} className="hover:text-[--accent]" target="_blank" rel="noopener noreferrer">رابط التواصل</a>
          </p>
          <p>
            Phone: <a href={`tel:${brand.phone.replace(/\s+/g, "")}`} className="hover:text-[--accent]">{brand.phone}</a>
          </p>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <ContactForm />
      </Reveal>
    </div>
  );
}
