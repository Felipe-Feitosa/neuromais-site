"use client";

import { useState, type FormEvent } from "react";
import {
  MapPin,
  EnvelopeSimple,
  Clock,
  InstagramLogo,
  PaperPlaneTilt,
  ChatCircleDots,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { buildInquiryWhatsappUrl, buildWhatsappUrl, siteConfig } from "@/lib/site-config";

export function Contact() {
  const [name, setName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      `Olá! Meu nome é ${name || "(nome)"} e vim pelo site da Neuro+.`,
      childAge ? `Idade da criança: ${childAge}.` : null,
      message || "Gostaria de agendar uma avaliação.",
    ].filter(Boolean);

    window.open(buildWhatsappUrl(lines.join(" ")), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Vamos conversar sobre o seu filho
            </h2>
            <p className="mt-3 max-w-[52ch] text-ink-soft">
              Conte um pouco sobre a criança e a nossa equipe entra em contato
              para conversar sobre os próximos passos.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <ChatCircleDots size={20} className="mt-0.5 shrink-0 text-brand-teal-deep" />
                <a
                  href={buildInquiryWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-soft underline decoration-black/15 underline-offset-4 hover:text-ink sm:text-base"
                >
                  {siteConfig.secondaryCtaLabel}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-brand-teal-deep" />
                <span className="text-sm text-ink-soft sm:text-base">
                  {siteConfig.address.street}, {siteConfig.address.neighborhood}
                  <br />
                  {siteConfig.address.city} - {siteConfig.address.state}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 shrink-0 text-brand-teal-deep" />
                <span className="text-sm text-ink-soft sm:text-base">
                  {siteConfig.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <EnvelopeSimple size={20} className="mt-0.5 shrink-0 text-brand-teal-deep" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-ink-soft underline decoration-black/15 underline-offset-4 hover:text-ink sm:text-base"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <InstagramLogo size={20} className="mt-0.5 shrink-0 text-brand-teal-deep" />
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-soft underline decoration-black/15 underline-offset-4 hover:text-ink sm:text-base"
                >
                  Instagram da Neuro+
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-black/5 bg-white p-6 sm:p-8"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  Seu nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como podemos te chamar"
                  className="rounded-xl border border-black/10 bg-brand-cream/60 px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:border-brand-blue"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="childAge" className="text-sm font-medium text-ink">
                  Idade da criança
                </label>
                <input
                  id="childAge"
                  name="childAge"
                  type="text"
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  placeholder="Ex.: 4 anos"
                  className="rounded-xl border border-black/10 bg-brand-cream/60 px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:border-brand-blue"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-ink">
                  Como podemos ajudar
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Conte um pouco sobre o que sua família está buscando"
                  className="resize-none rounded-xl border border-black/10 bg-brand-cream/60 px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:border-brand-blue"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-brand-yellow px-6 py-3.5 text-sm font-semibold text-ink transition-transform active:scale-[0.98]"
              >
                <PaperPlaneTilt size={20} weight="bold" />
                {siteConfig.ctaLabel}
              </button>

              <p className="text-center text-xs text-ink-soft">
                Ao enviar, abrimos o WhatsApp com a sua mensagem pronta para
                falar com a Neuro+.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
