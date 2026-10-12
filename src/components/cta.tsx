import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 px-6 py-14 text-center sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
        />
        <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base text-indigo-100">
          {description}
        </p>
        <Link
          href="/contact"
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-indigo-700 shadow-xl transition hover:bg-indigo-50"
        >
          Demander un devis gratuit
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export function CtaStrip({ message }: { message: string }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 sm:flex-row">
        <p className="text-sm font-medium text-slate-200">{message}</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
        >
          Discutons-en
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
