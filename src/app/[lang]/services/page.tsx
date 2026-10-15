import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaSection } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/shared-ui";
import { dictionaries } from "@/lib/i18n-dictionaries";
import { isLocale, localePath, type Locale } from "@/lib/i18n-config";
import { serviceIcons, techStack } from "@/lib/data-static";
import { ServiceVisual } from "@/components/service-visual";

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

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <ServiceVisual slug={slugs[index]} />
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
