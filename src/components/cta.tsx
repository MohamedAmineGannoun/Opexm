import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { dictionaries } from "@/lib/i18n-dictionaries";
import { localePath, type Locale } from "@/lib/i18n-config";

export function CtaSection({
  title,
  description,
  locale,
}: {
  title: string;
  description: string;
  locale: Locale;
}) {
  const dict = dictionaries[locale];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 px-6 py-14 text-center sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
        />
        <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base text-emerald-100">
          {description}
        </p>
        <Link
          href={localePath("/contact", locale)}
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-emerald-700 shadow-xl transition hover:bg-emerald-50"
        >
          {dict.home.ctaButton}
          <ArrowRight className="h-4 w-4 rtl:rotate-180" />
        </Link>
      </div>
    </section>
  );
}
