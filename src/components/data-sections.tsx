import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { dictionaries } from "@/lib/i18n-dictionaries";
import { localePath, type Locale } from "@/lib/i18n-config";
import { serviceIcons, projectVisuals } from "@/lib/data-static";

export function ServicesGrid({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const slugs = ["web", "mobile", "design", "backend-cloud"];

  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2">
      {dict.data.services.map((service, index) => {
        const Icon = serviceIcons[index];
        return (
          <Link
            key={index}
            href={localePath(`/services#${slugs[index]}`, locale)}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-emerald-400/40 hover:bg-white/[0.05]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg shadow-emerald-600/25">
              <Icon className="h-6 w-6 text-white" />
            </span>
            <h3 className="mt-5 text-xl font-semibold text-white group-hover:text-emerald-300">
              {service.title}
            </h3>
            <p className="mt-1 text-sm text-emerald-300/80">{service.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {service.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400">
              {dict.shared.more}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export function ProjectsGrid({
  locale,
  limit,
}: {
  locale: Locale;
  limit?: number;
}) {
  const dict = dictionaries[locale];
  const items = limit ? dict.data.projectsText.slice(0, limit) : dict.data.projectsText;

  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project, index) => {
        const visual = projectVisuals[index];
        return (
          <article
            key={index}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/25"
          >
            <div
              className={`flex h-44 items-center justify-center bg-gradient-to-br ${visual.gradient} lg:h-48`}
            >
              <span className="text-6xl drop-shadow-lg transition-transform group-hover:scale-110">
                {visual.emoji}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                {project.category}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {visual.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {visual.stack.map((tech) => (
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
        );
      })}
    </div>
  );
}

export function TestimonialsGrid({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <div className="mt-14 grid gap-6 md:grid-cols-3">
      {dict.data.testimonials.map((t) => (
        <figure
          key={t.author}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
        >
          <div aria-hidden className="text-4xl leading-none text-emerald-400/40">
            &ldquo;
          </div>
          <blockquote className="mt-3 text-sm leading-relaxed text-slate-300">
            {t.quote}
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-sm font-bold text-white">
              {t.author
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{t.author}</p>
              <p className="text-xs text-slate-400">{t.role}</p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function StatsBand({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
      {dict.data.stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</p>
          <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
