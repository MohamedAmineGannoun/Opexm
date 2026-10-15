/**
 * Illustrations des sections services.
 * Le visuel « navigateur » (existant) reste la base ; le service mobile
 * reçoit une maquette de smartphone dans exactement le même style :
 * mêmes cartes, mêmes couleurs (émeraude / vert / teal), mêmes barres de contenu.
 */
export function ServiceVisual({ slug }: { slug: string }) {
  if (slug === "mobile") return <MobileVisual />;
  return <BrowserVisual />;
}

function BrowserVisual() {
  return (
    <div className="rounded-3xl border border-white/10 p-6">
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
  );
}

function MobileVisual() {
  return (
    <div className="relative rounded-3xl border border-white/10 p-6">
      {/* Accents décoratifs autour du téléphone */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-6 -end-4 h-28 w-28 rounded-full bg-emerald-500/15 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-6 -start-4 h-28 w-28 rounded-full bg-teal-500/10 blur-2xl"
      />
      <div
        aria-hidden
        className="absolute -start-5 top-10 hidden rounded-2xl border border-white/10 bg-[#0b1c15] px-3 py-2 text-xs font-semibold text-emerald-300 shadow-lg sm:block"
      >
        &lt;/&gt;
      </div>
      <div
        aria-hidden
        className="absolute -end-5 bottom-10 hidden rounded-2xl border border-white/10 bg-[#0b1c15] px-3 py-2 shadow-lg sm:block"
      >
        <div className="flex items-end gap-1">
          <span className="h-3 w-1.5 rounded-sm bg-emerald-400/50" />
          <span className="h-5 w-1.5 rounded-sm bg-emerald-400/70" />
          <span className="h-8 w-1.5 rounded-sm bg-emerald-400" />
        </div>
      </div>

      <div className="rounded-2xl bg-white/[0.03] p-6">
        {/* Le smartphone */}
        <div className="mx-auto w-44 rounded-[2rem] border border-white/15 bg-[#081511] p-3 shadow-2xl shadow-emerald-900/30">
          {/* Encoche */}
          <div className="mx-auto h-1.5 w-12 rounded-full bg-white/20" />

          {/* Barre de statut */}
          <div className="mt-3 flex items-center justify-between px-1">
            <div className="h-1.5 w-8 rounded-full bg-white/15" />
            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
            </div>
          </div>

          {/* En-tête app : icône + salutation */}
          <div className="mt-4 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-600/30" />
            <div className="flex-1 space-y-1.5">
              <div className="h-2 w-3/4 rounded-full bg-white/20" />
              <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
            </div>
          </div>

          {/* Squelette de recherche */}
          <div className="mt-3 flex h-7 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2">
            <span className="h-2.5 w-2.5 rounded-full border border-emerald-400/50" />
            <span className="h-1.5 flex-1 rounded-full bg-white/10" />
          </div>

          {/* Cartes de contenu */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-gradient-to-br from-emerald-500/30 to-transparent p-2">
              <div className="h-6 w-6 rounded-md bg-emerald-400/40" />
              <div className="mt-2 h-1.5 w-3/4 rounded-full bg-white/20" />
            </div>
            <div className="rounded-lg bg-gradient-to-br from-teal-500/30 to-transparent p-2">
              <div className="h-6 w-6 rounded-md bg-teal-400/40" />
              <div className="mt-2 h-1.5 w-3/4 rounded-full bg-white/20" />
            </div>
          </div>

          {/* Lignes de liste */}
          <div className="mt-3 space-y-2">
            {[0, 1].map((i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg bg-white/5 px-2 py-2">
                <div className="h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-emerald-500/70 to-green-600/70" />
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 w-2/3 rounded-full bg-white/15" />
                  <div className="h-1.5 w-2/5 rounded-full bg-white/10" />
                </div>
                <div className="h-4 w-8 rounded-full bg-emerald-500/40" />
              </div>
            ))}
          </div>

          {/* Barre d'onglets */}
          <div className="mt-3 flex items-center justify-around rounded-xl border border-white/10 bg-white/5 px-2 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
