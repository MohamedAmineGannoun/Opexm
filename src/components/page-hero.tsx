import Link from "next/link";

export function PageHero({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-emerald-600/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-14 text-center sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">{intro}</p>
      </div>
    </section>
  );
}

/** Variante utilisée par la page contact (client component) */
export function PageHeroLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-emerald-300 underline-offset-4 hover:underline"
    >
      {label}
    </Link>
  );
}
