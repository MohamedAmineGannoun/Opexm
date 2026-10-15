/**
 * Illustrations créatives des réalisations — une mini-scène unique par projet.
 * Même style que le reste du site : cartes arrondies, palette émeraude / vert /
 * teal, barres de contenu « skeleton ». Tout est en CSS+SVG (aucun asset externe).
 */

/** Cadre commun : bande dégradée + scène centrée */
function Scene({
  gradient,
  children,
}: {
  gradient: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br lg:h-48 ${gradient}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -start-10 h-36 w-36 rounded-full bg-white/10 blur-2xl"
      />
      {children}
    </div>
  );
}

/* ---------------- PayFlow : portefeuille mobile ---------------- */
function PayFlowScene() {
  return (
    <Scene gradient="from-emerald-500 to-teal-600">
      <div className="relative w-32 rounded-[1.25rem] border border-white/25 bg-[#06231a]/90 p-2.5 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.03]">
        <div className="mx-auto h-1 w-8 rounded-full bg-white/25" />
        <div className="mt-2.5 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 p-2.5 text-white shadow-lg">
          <p className="text-[8px] font-medium tracking-widest opacity-80">BALANCE</p>
          <p dir="ltr" className="mt-0.5 text-sm font-bold tracking-tight">4 250 €</p>
          <div className="mt-2 flex gap-1.5">
            <span className="rounded-full bg-white/25 px-2 py-0.5 text-[7px] font-semibold">↑ Envoyer</span>
            <span className="rounded-full bg-black/20 px-2 py-0.5 text-[7px] font-semibold">+ Ajouter</span>
          </div>
        </div>
        <div className="mt-2 space-y-1.5">
          {[10, 14, 12].map((w, i) => (
            <div key={i} className="flex items-center gap-1.5 rounded-lg bg-white/5 px-1.5 py-1">
              <span className={`h-3.5 w-3.5 shrink-0 rounded-full ${["bg-emerald-400/80", "bg-teal-400/80", "bg-green-400/80"][i]}`} />
              <span className="h-1 w-1/2 rounded-full bg-white/25" />
              <span className={`h-1 rounded-full bg-white/40 ${i === 1 ? "w-3" : "w-2"}`} />
            </div>
          ))}
        </div>
      </div>
    </Scene>
  );
}

/* ---------------- Marché Libre : vitrine e-commerce ---------------- */
function MarcheLibreScene() {
  return (
    <Scene gradient="from-green-500 to-emerald-700">
      <div className="relative w-44 rounded-lg border border-white/25 bg-[#06231a]/90 p-2 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.03]">
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
          <span className="ml-1 h-2 flex-1 rounded-full bg-white/15" />
        </div>
        <div className="mt-1.5 flex items-center gap-1.5">
          <span className="h-3.5 w-3.5 rounded bg-emerald-400/80" />
          <span className="h-1.5 flex-1 rounded-full bg-white/20" />
          <span className="h-3 w-6 rounded-full bg-white/25" />
        </div>
        <div className="mt-1.5 grid grid-cols-3 gap-1">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="rounded bg-white/5 p-1">
              <div className={`h-6 rounded-sm ${["bg-emerald-400/50", "bg-teal-400/50", "bg-green-400/50", "bg-emerald-500/40", "bg-teal-500/40", "bg-green-500/40"][i]}`} />
              <div className="mt-1 h-1 w-3/4 rounded-full bg-white/25" />
              <div className="mt-0.5 h-1 w-1/2 rounded-full bg-emerald-300/50" />
            </div>
          ))}
        </div>
      </div>
    </Scene>
  );
}

/* ---------------- MediTrack : tableau de bord santé ---------------- */
function MediTrackScene() {
  return (
    <Scene gradient="from-teal-600 to-emerald-800">
      <svg viewBox="0 0 160 96" className="w-44 rounded-lg shadow-2xl drop-shadow-xl transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.03]">
        <rect width="160" height="96" rx="8" fill="#06231a" fillOpacity="0.92" />
        {/* Cartes KPI */}
        {[8, 60, 112].map((x, i) => (
          <g key={x}>
            <rect x={x} y="10" width="40" height="22" rx="5" fill="#ffffff" fillOpacity="0.06" />
            <circle cx={x + 7} cy="18" r="3.5" fill={["#34d399", "#2dd4bf", "#4ade80"][i]} fillOpacity="0.85" />
            <rect x={x + 14} y="15" width="20" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.35" />
            <rect x={x + 14} y="21" width="14" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.2" />
          </g>
        ))}
        {/* Graphique linéaire (rythme cardiaque) */}
        <rect x="8" y="40" width="144" height="46" rx="6" fill="#ffffff" fillOpacity="0.05" />
        <polyline
          points="12,72 32,72 38,56 46,80 54,50 62,74 72,62 84,68 96,46 108,66 120,58 132,64 148,48"
          fill="none" stroke="#34d399" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"
        />
        <circle cx="96" cy="46" r="3" fill="#34d399" />
        <circle cx="96" cy="46" r="6.5" fill="#34d399" fillOpacity="0.25" />
      </svg>
    </Scene>
  );
}

/* ---------------- CampusRide : carte + navette ---------------- */
function CampusRideScene() {
  return (
    <Scene gradient="from-lime-600 to-emerald-700">
      <svg viewBox="0 0 160 96" className="w-44 rounded-lg shadow-2xl drop-shadow-xl transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.03]">
        <rect width="160" height="96" rx="8" fill="#06231a" fillOpacity="0.92" />
        {/* Rues */}
        <path d="M0 24 H160 M0 48 H160 M0 72 H160 M40 0 V96 M80 0 V96 M120 0 V96" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="6" />
        {/* Itinéraire */}
        <path
          d="M20 76 L20 48 L60 48 L60 24 L100 24 L100 44 L138 44"
          fill="none" stroke="#34d399" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 9"
        />
        {/* Point de départ / arrivée */}
        <circle cx="20" cy="76" r="5" fill="#34d399" />
        <circle cx="20" cy="76" r="9" fill="#34d399" fillOpacity="0.25" />
        <rect x="132" y="38" width="12" height="12" rx="3" fill="#2dd4bf" />
        <circle cx="138" cy="44" r="2.5" fill="#06231a" />
        {/* Navette */}
        <g transform="translate(88 12)">
          <rect width="24" height="12" rx="3.5" fill="#06231a" stroke="#34d399" strokeOpacity="0.6" />
          <rect x="3" y="2.5" width="7" height="4" rx="1" fill="#34d399" fillOpacity="0.5" />
          <rect x="12" y="2.5" width="7" height="4" rx="1" fill="#34d399" fillOpacity="0.5" />
          <circle cx="7" cy="12" r="2.5" fill="#ffffff" fillOpacity="0.5" />
          <circle cx="17" cy="12" r="2.5" fill="#ffffff" fillOpacity="0.5" />
        </g>
      </svg>
    </Scene>
  );
}

/* ---------------- Atelier Bleu : galerie céramique ---------------- */
function AtelierBleuScene() {
  return (
    <Scene gradient="from-emerald-600 to-green-800">
      <div className="relative w-40 rounded-lg border border-white/25 bg-[#06231a]/90 p-2.5 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.03]">
        <div className="mx-auto h-2 w-16 rounded-full bg-white/25" />
        <div className="mt-2 grid grid-cols-2 gap-2">
          {/* Vases stylisés en SVG */}
          <div className="rounded-md bg-white/5 p-2">
            <svg viewBox="0 0 40 40" className="h-14 w-full">
              <path d="M20 4 C27 4 30 10 28 18 C34 22 34 32 27 34 C23 36 17 36 13 34 C6 32 6 22 12 18 C10 10 13 4 20 4 Z" fill="#34d399" fillOpacity="0.65" />
            </svg>
            <div className="mt-1 h-1 w-2/3 rounded-full bg-white/25" />
          </div>
          <div className="rounded-md bg-white/5 p-2">
            <svg viewBox="0 0 40 40" className="h-14 w-full">
              <ellipse cx="20" cy="24" rx="13" ry="11" fill="#2dd4bf" fillOpacity="0.6" />
              <rect x="16" y="5" width="8" height="10" rx="3" fill="#2dd4bf" fillOpacity="0.8" />
            </svg>
            <div className="mt-1 h-1 w-2/3 rounded-full bg-white/25" />
          </div>
        </div>
        <div className="mt-2 flex justify-center">
          <span className="h-3 w-12 rounded-full bg-emerald-400/70" />
        </div>
      </div>
    </Scene>
  );
}

/* ---------------- FleetOps : flotte + stats ---------------- */
function FleetOpsScene() {
  return (
    <Scene gradient="from-teal-500 to-emerald-700">
      <div className="relative flex w-44 items-center gap-2 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.03]">
        {/* Carte de suivi */}
        <svg viewBox="0 0 88 96" className="w-21 shrink-0 rounded-lg shadow-2xl drop-shadow-xl">
          <rect width="88" height="96" rx="8" fill="#06231a" fillOpacity="0.92" />
          <path d="M0 30 H88 M0 62 H88 M30 0 V96 M60 0 V96" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="5" />
          <path d="M10 78 L30 78 L30 46 L62 46 L62 16" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 7" />
          {/* Camions */}
          <g transform="translate(24 38)"><rect width="12" height="9" rx="2" fill="#34d399" /><rect x="9" y="2.5" width="7" height="6.5" rx="1.5" fill="#2dd4bf" /><circle cx="4" cy="9.5" r="2" fill="#ffffff" fillOpacity="0.6" /><circle cx="13" cy="9.5" r="2" fill="#ffffff" fillOpacity="0.6" /></g>
          <g transform="translate(56 10)"><rect width="12" height="9" rx="2" fill="#34d399" /><rect x="9" y="2.5" width="7" height="6.5" rx="1.5" fill="#2dd4bf" /><circle cx="4" cy="9.5" r="2" fill="#ffffff" fillOpacity="0.6" /><circle cx="13" cy="9.5" r="2" fill="#ffffff" fillOpacity="0.6" /></g>
          <g transform="translate(4 70)"><rect width="12" height="9" rx="2" fill="#34d399" /><rect x="9" y="2.5" width="7" height="6.5" rx="1.5" fill="#2dd4bf" /><circle cx="4" cy="9.5" r="2" fill="#ffffff" fillOpacity="0.6" /><circle cx="13" cy="9.5" r="2" fill="#ffffff" fillOpacity="0.6" /></g>
        </svg>
        {/* KPI flottants */}
        <div className="flex w-24 flex-col gap-2">
          <div className="rounded-lg border border-white/15 bg-[#06231a]/90 px-2.5 py-2 shadow-xl">
            <p className="text-[8px] font-medium tracking-widest text-white/50">ON TIME</p>
            <p dir="ltr" className="text-base font-bold text-emerald-300">98%</p>
          </div>
          <div className="rounded-lg border border-white/15 bg-[#06231a]/90 px-2.5 py-2 shadow-xl">
            <p className="text-[8px] font-medium tracking-widest text-white/50">LIVRAISONS</p>
            <p dir="ltr" className="text-base font-bold text-teal-300">312</p>
          </div>
          <div className="flex h-8 items-end gap-1 rounded-lg border border-white/15 bg-[#06231a]/90 px-2 py-1.5 shadow-xl">
            {[55, 80, 40, 95, 65].map((h, i) => (
              <span key={i} className="w-2 rounded-sm bg-gradient-to-t from-teal-500/60 to-emerald-400" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </Scene>
  );
}

/** Les visuels, dans l'ordre du dictionnaire (PayFlow, Marché Libre, MediTrack, CampusRide, Atelier Bleu, FleetOps) */
export function ProjectScene({ index }: { index: number }) {
  switch (index) {
    case 0: return <PayFlowScene />;
    case 1: return <MarcheLibreScene />;
    case 2: return <MediTrackScene />;
    case 3: return <CampusRideScene />;
    case 4: return <AtelierBleuScene />;
    case 5: return <FleetOpsScene />;
    default: return null;
  }
}
