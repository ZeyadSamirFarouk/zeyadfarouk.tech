"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { brand } from "@/data/site-content";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/portfolio", label: "الأعمال" },
  { href: "/services", label: "الخدمات" },
  { href: "/about", label: "من أنا" },
  { href: "/contact", label: "اطلب مشروعك" },
];

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(8,8,12,0.86)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group inline-flex flex-col" aria-label="العودة إلى الرئيسية">
          <span className="text-sm text-zinc-400">{brand.roleEn}</span>
          <span className="text-base font-semibold text-zinc-100 transition-colors group-hover:text-[--accent]">
            {brand.name}
          </span>
        </Link>

        <button
          className="rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-100 transition hover:border-[--accent] lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          القائمة
        </button>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="التنقل الرئيسي">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] ${
                isActive(link.href)
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
              }`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-menu"
          className="border-t border-zinc-800 px-5 py-4 lg:hidden"
          aria-label="التنقل للجوال"
        >
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-md px-3 py-2 text-sm transition ${
                  isActive(link.href)
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
