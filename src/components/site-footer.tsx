import Link from "next/link";
import { Code2, Mail, MapPin, Phone } from "lucide-react";
import { dictionaries } from "@/lib/i18n-dictionaries";
import { localePath, type Locale } from "@/lib/i18n-config";

const CURRENT_YEAR = 2026;

export function SiteFooter({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  const footerSections = [
    {
      title: dict.footer.services,
      links: [
        { href: localePath("/services#web", locale), label: dict.footer.webDev },
        {
          href: localePath("/services#mobile", locale),
          label: dict.footer.mobileApps,
        },
        {
          href: localePath("/services#design", locale),
          label: dict.footer.uiUx,
        },
      ],
    },
    {
      title: dict.footer.navigation,
      links: [
        { href: localePath("/", locale), label: dict.footer.home },
        {
          href: localePath("/realisations", locale),
          label: dict.header.works,
        },
        {
          href: localePath("/contact", locale),
          label: dict.header.contact,
        },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#061109]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href={localePath("/", locale)} className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-600">
                <Code2 className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Opexm<span className="text-emerald-400">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              {dict.footer.tagline}
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              {dict.footer.contact}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <a href="mailto:hello@opexm.fr" className="hover:text-white">
                  hello@opexm.fr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <a href="tel:+33123456789" className="hover:text-white">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {CURRENT_YEAR} Opexm. {dict.footer.rights}
          </p>
          <p className="text-xs text-slate-500">{dict.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
