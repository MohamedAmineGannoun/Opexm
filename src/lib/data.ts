import {
  Cloud,
  Layers,
  Palette,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
};

export const services: Service[] = [
  {
    slug: "web",
    icon: Layers,
    title: "Développement web",
    tagline: "Sites vitrines, e-commerce et plateformes SaaS",
    description:
      "Des applications web rapides, accessibles et scalables. Nous concevons des expériences qui chargent vite, référencent bien et convertissent vos visiteurs en clients.",
    deliverables: [
      "Site vitrine ou corporate",
      "Boutique e-commerce",
      "Application web & SaaS",
      "Migration et refonte",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    slug: "mobile",
    icon: Smartphone,
    title: "Applications mobiles",
    tagline: "iOS et Android, natif ou cross-platform",
    description:
      "Des applications mobiles pensées pour l'usage réel : fluides, élégantes et stables. De l'idée au store, nous accompagnons chaque étape du cycle de vie de votre app.",
    deliverables: [
      "Apps iOS & Android",
      "MVP startup",
      "Applications internes",
      "Publication sur les stores",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    slug: "design",
    icon: Palette,
    title: "UI/UX Design",
    tagline: "Interfaces qui plaisent et fonctionnent",
    description:
      "Un bon produit commence par une bonne expérience. Nous dessinons des interfaces claires, testées avec de vrais utilisateurs, et livrons des design systems réutilisables.",
    deliverables: [
      "Design system",
      "Maquettes Figma",
      "Audit UX",
      "Prototypes interactifs",
    ],
    technologies: ["Figma", "Design System", "Tests utilisateurs", "Accessibilité"],
  },
  {
    slug: "backend-cloud",
    icon: Cloud,
    title: "Backend & Cloud",
    tagline: "APIs robustes et infrastructures fiables",
    description:
      "La partie immergée de l'iceberg : APIs sécurisées, bases de données bien modélisées, CI/CD et hébergement cloud. Tout ce qu'il faut pour grandir sans douleur.",
    deliverables: [
      "API REST & GraphQL",
      "Architecture cloud",
      "CI/CD & DevOps",
      "Monitoring & sécurité",
    ],
    technologies: ["Node.js", "PostgreSQL", "Docker", "AWS"],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  result: string;
  gradient: string;
  emoji: string;
};

export const projects: Project[] = [
  {
    title: "PayFlow",
    category: "Fintech · App mobile",
    description:
      "Application mobile de paiement entre particuliers avec authentification biométrique et suivi en temps réel des transactions.",
    stack: ["React Native", "Node.js", "PostgreSQL"],
    result: "120 000 téléchargements la première année",
    gradient: "from-emerald-500 to-teal-600",
    emoji: "💳",
  },
  {
    title: "Marché Libre",
    category: "E-commerce · Web",
    description:
      "Plateforme e-commerce de produits locaux avec moteur de recherche instantané, panier optimisé et tableau de bord vendeur.",
    stack: ["Next.js", "TypeScript", "Stripe"],
    result: "+38 % de conversion après refonte",
    gradient: "from-orange-500 to-amber-600",
    emoji: "🛒",
  },
  {
    title: "MediTrack",
    category: "Santé · SaaS",
    description:
      "SaaS de suivi de stocks pour pharmacies : alertes de péremption, commandes automatiques et conformité des données de santé.",
    stack: ["React", "NestJS", "Docker"],
    result: "97 % de réduction des ruptures de stock",
    gradient: "from-sky-500 to-blue-600",
    emoji: "💊",
  },
  {
    title: "CampusRide",
    category: "Mobilité · App hybride",
    description:
      "App de covoiturage dédiée aux campus universitaires : trajets quotidiens, réservation de places et messagerie intégrée.",
    stack: ["Flutter", "Firebase", "Maps SDK"],
    result: "45 000 trajets organisés en 8 mois",
    gradient: "from-violet-500 to-indigo-600",
    emoji: "🎒",
  },
  {
    title: "Atelier Bleu",
    category: "Artisanat · Vitrine",
    description:
      "Site vitrine d'un atelier de céramique avec galerie immersive, prise de rendez-vous en ligne et vente de pièces uniques.",
    stack: ["Next.js", "Sanity", "Tailwind"],
    result: "Book de commandes plein pendant 6 mois",
    gradient: "from-rose-500 to-pink-600",
    emoji: "🏺",
  },
  {
    title: "FleetOps",
    category: "Logistique · Plateforme B2B",
    description:
      "Plateforme web de gestion de flotte de véhicules : suivi GPS temps réel, maintenance prédictive et rapports automatisés.",
    stack: ["Next.js", "GraphQL", "AWS"],
    result: "-30 % de coûts de maintenance flotte",
    gradient: "from-cyan-500 to-sky-600",
    emoji: "🚚",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Opexm a compris notre métier en une semaine. L'app est sortie dans les délais, avec un niveau de finition qu'on n'avait jamais vu chez un prestataire.",
    author: "Sarah Marchetti",
    role: "CEO, PayFlow",
    initials: "SM",
  },
  {
    quote:
      "La refonte de notre e-commerce a doublé notre panier moyen en trois mois. Communication claire, itérations rapides, zéro surprise sur la facture.",
    author: "Karim Belkacem",
    role: "Fondateur, Marché Libre",
    initials: "KB",
  },
  {
    quote:
      "Ils ont remplacé un outil Excel monstrueux par une plateforme que toute l'équipe a adoptée en deux jours. Du travail d'orfèvre.",
    author: "Claire Dubois",
    role: "Directrice des opérations, MediTrack",
    initials: "CD",
  },
];

export const steps = [
  {
    number: "01",
    title: "Découverte",
    description:
      "Un premier échange pour comprendre votre métier, vos utilisateurs et vos contraintes. Sans jargon, sans engagement.",
  },
  {
    number: "02",
    title: "Conception",
    description:
      "Wireframes, maquettes et stack technique validés ensemble. Vous savez exactement ce qui sera livré, et à quel prix.",
  },
  {
    number: "03",
    title: "Développement",
    description:
      "Sprints de deux semaines avec démos régulières. Vous voyez le produit avancer et pouvez ajuster le tir en continu.",
  },
  {
    number: "04",
    title: "Lancement & suivi",
    description:
      "Mise en production, formation de vos équipes et maintenance. Nous restons à vos côtés après la mise en ligne.",
  },
];

export const stats = [
  { value: "60+", label: "Projets livrés" },
  { value: "12", label: "Années d'expérience" },
  { value: "98 %", label: "Clients satisfaits" },
  { value: "8", label: "Experts passionnés" },
];

export const techStack = [
  "Next.js", "React", "TypeScript", "Node.js", "React Native", "Flutter",
  "PostgreSQL", "MongoDB", "GraphQL", "Docker", "AWS", "Figma",
];

export const pricingPlans = [
  {
    name: "Site vitrine",
    price: "à partir de 2 900 €",
    description: "Pour exister en ligne avec un site rapide et soigné.",
    features: [
      "Design sur mesure (maquette incluse)",
      "Jusqu'à 8 pages",
      "SEO technique de base",
      "Formulaire de contact",
      "Mise en ligne & formation",
      "3 mois de maintenance offerte",
    ],
    highlighted: false,
  },
  {
    name: "Pack App",
    price: "à partir de 14 900 €",
    description: "Pour lancer votre application mobile ou votre SaaS.",
    features: [
      "Étude UX & maquettes",
      "App iOS + Android ou web app",
      "Backend & API inclus",
      "Publication sur les stores",
      "Analytics & suivi",
      "6 mois de maintenance offerte",
    ],
    highlighted: true,
  },
  {
    name: "Sur mesure",
    price: "sur devis",
    description: "Pour les projets ambitieux avec des exigences spécifiques.",
    features: [
      "Cadrage & ateliers de conception",
      "Architecture dédiée",
      "Intégrations existantes",
      "Équipe dédiée au projet",
      "SLA & support prioritaire",
      "Évolution continue",
    ],
    highlighted: false,
  },
];

export const faq = [
  {
    question: "Combien coûte un site ou une application ?",
    answer:
      "Un site vitrine démarre autour de 2 900 €, une application mobile au-delà de 14 900 €. Chaque projet étant unique, nous établissons un devis détaillé et sans surprise après un premier échange gratuit.",
  },
  {
    question: "Quels sont vos délais ?",
    answer:
      "Comptez 3 à 6 semaines pour un site vitrine, et 2 à 4 mois pour une application mobile ou une plateforme web. Nous livrons par sprints, vous voyez le produit dès les premières semaines.",
  },
  {
    question: "Travaillez-vous avec des clients hors de Paris ?",
    answer:
      "Oui, nous travaillons avec des clients dans toute la France et en Europe. Nos processus distancés (demos hebdomadaires, outil de gestion partagé) rendent la collaboration fluide, où que vous soyez.",
  },
  {
    question: "Que se passe-t-il après la mise en ligne ?",
    answer:
      "Chaque projet inclut une période de garantie. Ensuite, nos offres de maintenance couvrent les mises à jour, la sécurité, les sauvegardes et les évolutions. Vous restez maître de votre produit.",
  },
  {
    question: "Code-sur-mesure ou no-code ?",
    answer:
      "Nous développons sur mesure avec des technologies modernes (Next.js, React Native...). Cela garantit la performance, la propriété du code et l'absence de dépendance à une plateforme propriétaire. Pour les budgets serrés, nous savons aussi recommander une solution no-code adaptée.",
  },
];

export const contactInfo = {
  email: "hello@opexm.fr",
  phone: "+33 1 23 45 67 89",
  phoneDisplay: "+33 1 23 45 67 89",
  address: "12 rue de la Réussite, 75008 Paris",
  hours: "Lun – Ven · 9h00 – 18h30",
};

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
