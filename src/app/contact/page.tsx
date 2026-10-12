"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { contactInfo } from "@/lib/data";

type SubmitState = "idle" | "sending" | "success";

const budgets = [
  "< 5 000 €",
  "5 000 – 15 000 €",
  "15 000 – 50 000 €",
  "> 50 000 €",
  "Je ne sais pas encore",
];

const projectTypes = [
  "Site web vitrine",
  "E-commerce",
  "Application mobile",
  "Plateforme web / SaaS",
  "Refonte / migration",
  "Autre",
];

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-indigo-400/60 focus:bg-white/[0.06]";

export default function ContactPage() {
  const [state, setState] = useState<SubmitState>("idle");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    // Simulation d'envoi — connectez ici votre API, EmailJS, Resend, etc.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setState("success");
  }

  if (state === "success") {
    return (
      <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center sm:px-6">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15">
          <CheckCircle2 className="h-8 w-8 text-emerald-400" />
        </span>
        <h1 className="mt-6 text-3xl font-bold text-white">
          Message envoyé !
        </h1>
        <p className="mt-4 max-w-md text-slate-400">
          Merci pour votre message. Notre équipe vous recontacte sous 24 h
          ouvrées pour planifier un premier échange.
        </p>
        <button
          type="button"
          onClick={() => {
            setState("idle");
            setSelectedType(null);
            setSelectedBudget(null);
          }}
          className="mt-8 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
        >
          Envoyer un autre message
        </button>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Parlons de votre projet
        </h1>
        <p className="mt-5 text-lg text-slate-400">
          Décrivez-nous votre idée en quelques lignes. Nous revenons vers vous
          avec une première analyse et un rendez-vous, gratuitement.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="lg:col-span-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                  Nom complet *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Marie Dupont"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="marie@entreprise.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-300">
                Société
              </label>
              <input
                id="company"
                name="company"
                placeholder="Entreprise SAS"
                className={inputClasses}
              />
            </div>

            <div className="mt-6">
              <span className="mb-3 block text-sm font-medium text-slate-300">
                Type de projet *
              </span>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      selectedType === type
                        ? "border-indigo-400 bg-indigo-500/20 text-white"
                        : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/25"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <span className="mb-3 block text-sm font-medium text-slate-300">
                Budget envisagé
              </span>
              <div className="flex flex-wrap gap-2">
                {budgets.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => setSelectedBudget(budget)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      selectedBudget === budget
                        ? "border-indigo-400 bg-indigo-500/20 text-white"
                        : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/25"
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                Votre projet en quelques mots *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Ex. : nous voulons une app mobile pour que nos clients réservent nos prestations en ligne..."
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={state === "sending"}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-600/25 transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Envoyer ma demande
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">
              Vos données restent confidentielles et ne sont jamais partagées.
            </p>
          </div>
        </form>

        {/* Coordonnées */}
        <aside className="lg:col-span-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white">
              Contact direct
            </h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15">
                  <Mail className="h-5 w-5 text-indigo-400" />
                </span>
                <div>
                  <p className="font-medium text-slate-300">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-white hover:text-indigo-300"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15">
                  <Phone className="h-5 w-5 text-indigo-400" />
                </span>
                <div>
                  <p className="font-medium text-slate-300">Téléphone</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-white hover:text-indigo-300"
                  >
                    {contactInfo.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15">
                  <MapPin className="h-5 w-5 text-indigo-400" />
                </span>
                <div>
                  <p className="font-medium text-slate-300">Adresse</p>
                  <p className="text-white">{contactInfo.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15">
                  <Clock className="h-5 w-5 text-indigo-400" />
                </span>
                <div>
                  <p className="font-medium text-slate-300">Horaires</p>
                  <p className="text-white">{contactInfo.hours}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-transparent p-5">
              <p className="text-sm font-semibold text-white">
                ⚡ Premier échange gratuit
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                30 minutes par téléphone ou visio pour cerner votre besoin.
                Vous repartez avec un avis honnête, même si nous ne travaillons
                pas ensemble.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
