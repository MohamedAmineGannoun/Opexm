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
  contactInfo,
  faq,
  pricingPlans,
  projects,
  services,
  stats,
  steps,
  techStack,
  testimonials,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-40 right-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28 lg:pt-32">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            Agence web & mobile · Paris
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nous créons des{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              applications
            </span>{" "}
            que vos utilisateurs adorent
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Opexm conçoit et développe des sites web et des applications
            mobiles sur mesure. Design soigné, code moderne, livraisons par
            sprints : votre projet avance, vous gardez le contrôle.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-600/30 transition hover:bg-indigo-500"
            >
              Démarrer votre projet
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              Voir nos réalisations
            </Link>
          </div>

          {/* Grille décorative mobile + web */}
          <div className="relative mx-auto mt-16 max-w-4xl sm:mt-20">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-left sm:block sm:rotate-[-3deg] sm:translate-y-3">
                <div className="h-2.5 w-20 rounded-full bg-indigo-400/60" />
                <div className="mt-3 space-y-2">
                  <div className="h-2 w-full rounded-full bg-white/10" />
                  <div className="h-2 w-4/5 rounded-full bg-white/10" />
                  <div className="h-2 w-3/5 rounded-full bg-white/10" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="h-14 rounded-lg bg-gradient-to-br from-indigo-500/30 to-indigo-500/10" />
                  <div className="h-14 rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-fuchsia-500/10" />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
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

              <div className="hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-left sm:block sm:rotate-[3deg] sm:translate-y-3">
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
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionTitle
          etikette="Nos services"
          title="Tout ce qu'il faut pour réussir en ligne"
          description="De la première maquette à la mise en production, nous couvrons l'ensemble du cycle de vie de votre produit digital."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-indigo-400/40 hover:bg-white/[0.05]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-600/25">
                <service.icon className="h-6 w-6 text-white" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white group-hover:text-indigo-300">
                {service.title}
              </h3>
              <p className="mt-1 text-sm text-indigo-300/80">{service.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400">
                En savoir plus
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <SectionTitle
            etikette="Méthode"
            title="Un processus clair, sans surprise"
            description="Vous savez toujours où en est votre projet, ce qui arrive ensuite, et combien ça coûte."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <span className="text-4xl font-bold text-indigo-500/30">
                  {step.number}
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
          etikette="Réalisations"
          title="Des projets qui font la différence"
          description="Quelques exemples de produits que nous avons conçus, développés et lancés avec nos clients."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/25"
            >
              <div
                className={`flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <span className="text-6xl drop-shadow-lg">{project.emoji}</span>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  {project.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-emerald-400">
                  ✓ {project.result}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
          >
            Voir toutes les réalisations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ============ TÉMOIGNAGES ============ */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionTitle
            etikette="Témoignages"
            title="Ils nous ont fait confiance"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.author}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div aria-hidden className="text-4xl leading-none text-indigo-400/40">
                  &ldquo;
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-slate-300">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.author}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TECHNOLOGIES ============ */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionTitle
          etikette="Stack technique"
          title="Des technologies modernes et éprouvées"
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
            etikette="Tarifs"
            title="Des offres lisibles, adaptées à votre stade"
            description="Un budget cadré dès le départ. Pas de coûts cachés, pas de mauvaises surprises."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-indigo-400/50 bg-gradient-to-b from-indigo-600/20 to-indigo-600/[0.04] shadow-xl shadow-indigo-600/10"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-4 py-1 text-xs font-bold text-white">
                    Le plus choisi
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-2xl font-bold text-white">{plan.price}</p>
                <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-indigo-600 text-white hover:bg-indigo-500"
                      : "border border-white/15 text-slate-200 hover:bg-white/5"
                  }`}
                >
                  Choisir cette offre
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionTitle etikette="FAQ" title="Vos questions, nos réponses" />
        <div className="mt-12 space-y-4">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 open:border-indigo-400/30"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-indigo-400 transition-transform group-open:rotate-180" />
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
            Un projet en tête ? Parlons-en.
          </h2>
          <p className="mt-3 text-center text-sm text-slate-400">
            Réponse sous 24 h ouvrées, sans engagement.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition hover:border-indigo-400/40"
            >
              <Mail className="h-5 w-5 text-indigo-400" />
              <span className="text-sm text-slate-200">{contactInfo.email}</span>
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition hover:border-indigo-400/40"
            >
              <Phone className="h-5 w-5 text-indigo-400" />
              <span className="text-sm text-slate-200">{contactInfo.phoneDisplay}</span>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
              <MapPin className="h-5 w-5 text-indigo-400" />
              <span className="text-sm text-slate-200">Paris, France</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              <Rocket className="h-4 w-4" />
              Lancer la conversation
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <CtaSection
        title="Prêt à faire décoller votre projet ?"
        description="Racontez-nous votre idée. Nous revenons vers vous avec un plan d'action et une estimation claire, gratuitement."
      />
    </>
  );
}
