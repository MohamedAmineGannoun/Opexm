import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaSection } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/shared-ui";
import { dictionaries } from "@/lib/i18n-dictionaries";
import { isLocale, localePath, type Locale } from "@/lib/i18n-config";
import { serviceIcons, techStack } from "@/lib/data-static";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const locale = lang as Locale;
  const dict = dictionaries[locale];
  const slugs = ["web", "mobile", "design", "backend-cloud"];

  return (
    <>
      <PageHero title={dict.servicesPage.title} intro={dict.servicesPage.intro} />

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="space-y-16 lg:space-y-20">
          {dict.data.services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <div
                key={index}
                id={slugs[index]}
                className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg shadow-emerald-600/25">
                    <Icon className="h-6 w-6 text-white" />
                  </span>
                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-white">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-emerald-300">
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

                  <Link
                    href={localePath("/contact", locale)}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
                  >
                    {dict.servicesPage.ctaButton}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </Link>
                </div>

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
                      <div className="h-3 w-3/4 rounded-full bg-gradient-to-r from-emerald-400/50 to-transparent rtl:bg-gradient-to-l" />
                      <div className="h-2 w-full rounded-full bg-white/10" />
                      <div className="h-2 w-5/6 rounded-full bg-white/10" />
                      <div className="h-2 w-2/3 rounded-full bg-white/10" />
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        <div className="h-16 rounded-lg bg-gradient-to-br from-emerald-500/25 to-transparent" />
                        <div className="h-16 rounded-lg bg-gradient-to-br from-green-500/25 to-transparent" />
                        <div className="h-16 rounded-lg bg-gradient-to-br from-teal-500/25 to-transparent" />
                      </div>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-500 to-green-600" />
                        <div className="flex-1 space-y-2">
                          <div className="h-2 w-1/2 rounded-full bg-white/15" />
                          <div className="h-2 w-1/3 rounded-full bg-white/10" />
                        </div>
                        <div className="h-8 w-20 rounded-full bg-emerald-500/40" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <SectionTitle
            etikette={dict.servicesPage.techEta}
            title={dict.servicesPage.techTitle}
            description={dict.servicesPage.techText}
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
        locale={locale}
        title={dict.servicesPage.ctaTitle}
        description={dict.servicesPage.ctaText}
      />
    </>
  );
}
