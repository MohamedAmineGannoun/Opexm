"use client";

import { useEffect } from "react";

/**
 * Observer léger qui ajoute la classe `is-revealed` aux éléments marqués
 * `data-reveal` lorsqu'ils entrent dans le viewport (apparition douce).
 * Chaque enfant [data-reveal] est individualisé via --reveal-delay selon
 * son ordre dans son parent.
 */
export function RevealObserver() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    // Attribue un petit délai croissant aux frères d'un même conteneur,
    // côté client uniquement — l'attribut inline n'est jamais envoyé au SSR,
    // donc le HTML serveur ne contient jamais cette propriété.
    const groups = new Map<HTMLElement, number>();
    elements.forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return;
      const next = (groups.get(parent) ?? 0) + 1;
      groups.set(parent, next);
      el.style.setProperty("--reveal-delay", `${Math.min((next - 1) * 90, 360)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
