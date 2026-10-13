import {
  Cloud,
  Layers,
  Palette,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

/** Icônes des services, dans l'ordre du dictionnaire (web, mobile, design, backend) */
export const serviceIcons: LucideIcon[] = [Layers, Smartphone, Palette, Cloud];

/** Visuels non traduits des projets (nom, emoji, dégradé, stack) */
export const projectVisuals = [
  {
    name: "PayFlow",
    emoji: "💳",
    gradient: "from-emerald-500 to-teal-600",
    stack: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    name: "Marché Libre",
    emoji: "🛒",
    gradient: "from-green-500 to-emerald-700",
    stack: ["Next.js", "TypeScript", "Stripe"],
  },
  {
    name: "MediTrack",
    emoji: "💊",
    gradient: "from-teal-600 to-emerald-800",
    stack: ["React", "NestJS", "Docker"],
  },
  {
    name: "CampusRide",
    emoji: "🎒",
    gradient: "from-lime-600 to-emerald-700",
    stack: ["Flutter", "Firebase", "Maps SDK"],
  },
  {
    name: "Atelier Bleu",
    emoji: "🏺",
    gradient: "from-emerald-600 to-green-800",
    stack: ["Next.js", "Sanity", "Tailwind"],
  },
  {
    name: "FleetOps",
    emoji: "🚚",
    gradient: "from-teal-500 to-emerald-700",
    stack: ["Next.js", "GraphQL", "AWS"],
  },
];

/** Stack technique (noms de technologies, pas de traduction) */
export const techStack = [
  "Next.js", "React", "TypeScript", "Node.js", "React Native", "Flutter",
  "PostgreSQL", "MongoDB", "GraphQL", "Docker", "AWS", "Figma",
];

export const contactInfo = {
  email: "hello@opexm.fr",
  phone: "+33123456789",
  phoneDisplay: "+33 1 23 45 67 89",
  address: "12 rue de la Réussite, 75008 Paris",
  hours: "Lun – Ven · 9h00 – 18h30",
};
