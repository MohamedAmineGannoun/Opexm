export function SectionTitle({
  etikette,
  title,
  description,
  align = "center",
}: {
  etikette: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`${alignment} max-w-2xl`}>
      <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
        {etikette}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
