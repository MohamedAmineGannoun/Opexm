import type { Metadata } from "next";
import { CtaSection } from "@/components/cta";
import { SectionTitle } from "@/components/shared-ui";
import { projects, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez les applications web et mobiles que Opexm a conçues et livrées pour ses clients.",
};

export default function RealisationsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-fuchsia-600/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-14 text-center sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Nos réalisations
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Des produits digitaux conçus avec nos clients, mesurés à l’impact
            réel qu’ils ont généré.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/25"
            >
              <div
                className={`flex h-48 items-center justify-center bg-gradient-to-br ${project.gradient} transition-transform`}
              >
                <span className="text-6xl drop-shadow-lg transition-transform group-hover:scale-110">
                  {project.emoji}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  {project.category}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-white">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm font-semibold text-emerald-400">
                  ✓ {project.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionTitle etikette="Clients" title="Ce qu'ils en disent" />
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

      <CtaSection
        title="Votre projet ici ?"
        description="Chaque case de cette grille a commencé par une conversation. La vôtre peut être la prochaine."
      />
    </>
  );
}
