import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Sparkles,
} from "lucide-react";
import { CtaSection } from "@/components/cta";
import { SectionTitle } from "@/components/shared-ui";
import {
  ProjectsGrid,
  ServicesGrid,
  StatsBand,
  TestimonialsGrid,
} from "@/components/data-sections";
import { dictionaries } from "@/lib/i18n-dictionaries";
import { isLocale, localePath, type Locale } from "@/lib/i18n-config";
import { contactInfo, techStack } from "@/lib/data-static";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const locale = lang as Locale;
  const dict = dictionaries[locale];
  const stepNumbers = ["01", "02", "03", "04"];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-emerald-600/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-40 end-0 h-72 w-72 rounded-full bg-teal-600/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28 lg:pt-32">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            {dict.home.badge}
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {dict.home.heroTitleStart}{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {dict.home.heroHighlight}
            </span>{" "}
            {dict.home.heroTitleEnd}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            {dict.home.heroText}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={localePath("/contact", locale)}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-emerald-600/30 transition hover:bg-emerald-500"
            >
              {dict.home.heroCta}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <Link
              href={localePath("/realisations", locale)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              {dict.home.heroSecondary}
            </Link>
          </div>

          {/* Grille décorative */}
          <div className="relative mx-auto mt-16 max-w-4xl sm:mt-20">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:block sm:rotate-[-3deg] sm:translate-y-3">
                <div className="h-2.5 w-20 rounded-full bg-emerald-400/60" />
                <div className="mt-3 space-y-2">
                  <div className="h-2 w-full rounded-full bg-white/10" />
                  <div className="h-2 w-4/5 rounded-full bg-white/10" />
                  <div className="h-2 w-3/5 rounded-full bg-white/10" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="h-14 rounded-lg bg-gradient-to-br from-emerald-500/30 to-emerald-500/10" />
                  <div className="h-14 rounded-lg bg-gradient-to-br from-teal-500/30 to-teal-500/10" />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500" />
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-2 w-full rounded-full bg-white/10" />
                  <div className="h-2 w-3/4 rounded-full bg-white/10" />
                  <div className="h-2 w-1/2 rounded-full bg-white/10" />
                </div>
                <div className="mt-4 h-14 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/10" />
              </div>

              <div className="hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:block sm:rotate-[3deg] sm:translate-y-3">
                <div className="mx-auto h-24 w-14 rounded-xl border border-white/15 bg-gradient-to-b from-white/10 to-transparent">
                  <div className="mx-auto mt-2 h-1 w-6 rounded-full bg-white/30" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-full rounded-full bg-white/10" />
                  <div className="h-2 w-2/3 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <StatsBand locale={locale} />
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionTitle
          etikette={dict.home.servicesEta}
          title={dict.home.servicesTitle}
          description={dict.home.servicesText}
        />
        <ServicesGrid locale={locale} />
      </section>

      {/* ============ PROCESS ============ */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <SectionTitle
            etikette={dict.home.methodEta}
            title={dict.home.methodTitle}
            description={dict.home.methodText}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.data.steps.map((step, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <span className="text-4xl font-bold text-emerald-500/30">
                  {stepNumbers[index]}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROJETS ============ */}
      <section id="projets" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionTitle
          etikette={dict.home.worksEta}
          title={dict.home.worksTitle}
          description={dict.home.worksText}
        />
        <ProjectsGrid locale={locale} limit={3} />
        <div className="mt-10 text-center">
          <Link
            href={localePath("/realisations", locale)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
          >
            {dict.shared.allWorks}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>

      {/* ============ TÉMOIGNAGES ============ */}
      {/*<section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionTitle
            etikette={dict.home.quotesEta}
            title={dict.home.quotesTitle}
          />
          <TestimonialsGrid locale={locale} />
        </div>
      </section>*/}

      {/* ============ TECHNOLOGIES ============ */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionTitle
          etikette={dict.home.stackEta}
          title={dict.home.stackTitle}
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
      </section>

      {/* ============ TARIFS ============ */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <SectionTitle
            etikette={dict.home.pricingEta}
            title={dict.home.pricingTitle}
            description={dict.home.pricingText}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {dict.data.pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border p-8 ${
                  index === 1
                    ? "border-emerald-400/50 bg-gradient-to-b from-emerald-600/20 to-emerald-600/[0.04] shadow-xl shadow-emerald-600/10"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {index === 1 && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold text-white">
                    {dict.shared.chosen}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-2xl font-bold text-white">{plan.price}</p>
                <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={localePath("/contact", locale)}
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
                    index === 1
                      ? "bg-emerald-600 text-white hover:bg-emerald-500"
                      : "border border-white/15 text-slate-200 hover:bg-white/5"
                  }`}
                >
                  {dict.shared.choosePlan}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionTitle etikette={dict.shared.faq} title={dict.home.faqTitle} />
        <div className="mt-12 space-y-4">
          {dict.data.faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 open:border-emerald-400/30"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-start text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-emerald-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ============ CONTACT EXPRESS ============ */}
      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-center text-2xl font-bold text-white">
            {dict.home.contactTitle}
          </h2>
          <p className="mt-3 text-center text-sm text-slate-400">
            {dict.home.contactText}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition hover:border-emerald-400/40"
            >
              <Mail className="h-5 w-5 text-emerald-400" />
              <span className="text-sm text-slate-200">{contactInfo.email}</span>
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition hover:border-emerald-400/40"
            >
              <Phone className="h-5 w-5 text-emerald-400" />
              <span className="text-sm text-slate-200">
                {contactInfo.phoneDisplay}
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
              <MapPin className="h-5 w-5 text-emerald-400" />
              <span className="text-sm text-slate-200">
                {dict.home.contactCity}
              </span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href={localePath("/contact", locale)}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              <Rocket className="h-4 w-4" />
              {dict.home.contactCta}
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <CtaSection
        locale={locale}
        title={dict.home.ctaTitle}
        description={dict.home.ctaText}
      />
    </>
  );
}
