"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Check, ChevronDown, Code2, Globe, Menu, X } from "lucide-react";
import {
  isLocale,
  localeNames,
  locales,
  localePath,
  type Locale,
} from "@/lib/i18n-config";
import { dictionaries } from "@/lib/i18n-dictionaries";

export function SiteHeader({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const restOfPath = (() => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return "";
    if (isLocale(parts[0])) parts.shift();
    return parts.length ? `/${parts.join("/")}` : "";
  })();

  const navLinks = [
    { href: localePath("/services", locale), label: dict.header.services },
    { href: localePath("/realisations", locale), label: dict.header.works },
    { href: localePath("/contact", locale), label: dict.header.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081511]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href={localePath("/", locale)}
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-600">
            <Code2 className="h-5 w-5 text-white" />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Opexm<span className="text-emerald-400">.</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {/* Sélecteur de langue */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-white/25 hover:text-white"
              aria-label={dict.header.switchLanguage}
              aria-expanded={langOpen}
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{localeNames[locale]}</span>
              <ChevronDown
                className={`h-3 w-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
              />
            </button>
            {langOpen && (
              <>
                {/* Zone cliquable invisible pour fermer */}
                <button
                  type="button"
                  aria-label="close"
                  className="fixed inset-0 z-10 cursor-default"
                  onClick={() => setLangOpen(false)}
                />
                <ul className="absolute end-0 z-20 mt-2 w-40 overflow-hidden rounded-xl border border-white/10 bg-[#141a30] shadow-xl">
                  {locales.map((l) => (
                    <li key={l}>
                      <Link
                        href={localePath(restOfPath || "/", l)}
                        onClick={() => setLangOpen(false)}
                        className={`flex items-center justify-between px-4 py-2.5 text-sm transition hover:bg-white/5 ${
                          l === locale ? "text-emerald-300" : "text-slate-300"
                        }`}
                      >
                        {localeNames[l]}
                        {l === locale && <Check className="h-4 w-4" />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Navigation desktop */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={localePath("/contact", locale)}
              className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-500"
            >
              {dict.header.startProject}
            </Link>
          </nav>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 lg:hidden"
            aria-label={open ? dict.header.closeMenu : dict.header.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Navigation mobile */}
      {open && (
        <nav className="border-t border-white/10 px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href={localePath("/contact", locale)}
                onClick={() => setOpen(false)}
                className="block rounded-full bg-emerald-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-emerald-500"
              >
                {dict.header.startProject}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
