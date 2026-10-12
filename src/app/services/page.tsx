import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/cta";
import { SectionTitle } from "@/components/shared-ui";
import { services, techStack } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Développement web, applications mobiles, UI/UX design et backend cloud : découvrez nos expertises.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-14 text-center sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Nos services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Quatre expertises complémentaires pour construire des produits
            digitaux complets, du design à l’infrastructure.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="space-y-16 lg:space-y-20">
          {services.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-600/25">
                  <service.icon className="h-6 w-6 text-white" />
                </span>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-indigo-300">
                  {service.tagline}
                </p>
                <p className="mt-4 leading-relaxed text-slate-400">
                  {service.description}
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                  Discuter de ce service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Visuel décoratif */}
              <div
                className={`rounded-3xl border border-white/10 p-6 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="rounded-2xl bg-white/[0.03] p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-rose-400/60" />
                      <span className="h-3 w-3 rounded-full bg-amber-400/60" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400/60" />
                    </div>
                    <div className="h-2 w-16 rounded-full bg-white/10" />
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="h-3 w-3/4 rounded-full bg-gradient-to-r from-indigo-400/50 to-transparent" />
                    <div className="h-2 w-full rounded-full bg-white/10" />
                    <div className="h-2 w-5/6 rounded-full bg-white/10" />
                    <div className="h-2 w-2/3 rounded-full bg-white/10" />
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="h-16 rounded-lg bg-gradient-to-br from-indigo-500/25 to-transparent" />
                      <div className="h-16 rounded-lg bg-gradient-to-br from-violet-500/25 to-transparent" />
                      <div className="h-16 rounded-lg bg-gradient-to-br from-fuchsia-500/25 to-transparent" />
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600" />
                      <div className="flex-1 space-y-2">
                        <div className="h-2 w-1/2 rounded-full bg-white/15" />
                        <div className="h-2 w-1/3 rounded-full bg-white/10" />
                      </div>
                      <div className="h-8 w-20 rounded-full bg-indigo-500/40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <SectionTitle
            etikette="Technologies"
            title="Notre boîte à outils"
            description="Nous choisissons la technologie adaptée à votre projet, pas l'inverse."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Besoin d'un service en particulier ?"
        description="Décrivez votre besoin, nous vous dirons honnêtement si nous sommes le bon partenaire — et sinon, qui contacter."
      />
    </>
  );
}
