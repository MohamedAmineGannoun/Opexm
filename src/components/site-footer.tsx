import Link from "next/link";
import { Code2, Mail, MapPin, Phone } from "lucide-react";

const CURRENT_YEAR = 2026;

const serviceLinks = [
  { href: "/services#web", label: "Développement web" },
  { href: "/services#mobile", label: "Applications mobiles" },
  { href: "/services#design", label: "UI/UX Design" },
];

const footerSections = [
  {
    title: "Services",
    links: serviceLinks,
  },
  {
    title: "Navigation",
    links: [
      { href: "/", label: "Accueil" },
      { href: "/realisations", label: "Réalisations" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0e1c]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marque */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600">
                <Code2 className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Opexm<span className="text-indigo-400">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Agence de développement web et mobile. Nous transformons vos idées
              en produits digitaux qui durent.
            </p>
          </div>

          {/* Liens */}
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

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-indigo-400" />
                <a href="mailto:hello@opexm.fr" className="hover:text-white">
                  hello@opexm.fr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-indigo-400" />
                <a href="tel:+33123456789" className="hover:text-white">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                <span>12 rue de la Réussite, 75008 Paris</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {CURRENT_YEAR} Opexm. Tous droits réservés.
          </p>
          <p className="text-xs text-slate-500">
            Fait avec Next.js, Tailwind CSS et beaucoup de café.
          </p>
        </div>
      </div>
    </footer>
  );
}
