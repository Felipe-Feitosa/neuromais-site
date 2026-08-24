"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

const faqs = [
  {
    question: "Quais especialidades a Neuro+ oferece?",
    answer:
      "Pediatria e diferentes especialidades médicas, além de psicologia, fonoaudiologia, terapia ocupacional, psicopedagogia e outras áreas do desenvolvimento infantil, todas em um só endereço.",
  },
  {
    question: "Qual a faixa etária atendida?",
    answer:
      "Atendemos crianças e adolescentes desde a primeira infância até os 18 anos, com pediatria e as demais especialidades adequadas a cada fase.",
  },
  {
    question: "A clínica atende convênios ou é particular?",
    answer:
      "Fale com a nossa equipe pelo WhatsApp para confirmar os convênios atendidos e as condições para atendimento particular.",
  },
  {
    question:
      "Preciso de um diagnóstico ou encaminhamento médico para agendar uma avaliação?",
    answer:
      "Não. Você pode entrar em contato diretamente com a nossa equipe para agendar a avaliação, mesmo sem um diagnóstico ou encaminhamento prévio.",
  },
  {
    question: "Como funciona o início do acompanhamento?",
    answer:
      "Começamos pelo primeiro contato e pela avaliação da criança. A partir daí, direcionamos para as especialidades certas e seguimos com o acompanhamento contínuo.",
  },
  {
    question: "Onde fica a clínica em Castanhal?",
    answer: `${siteConfig.address.street}, ${siteConfig.address.neighborhood}, ${siteConfig.address.city} - ${siteConfig.address.state}.`,
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal-deep">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Tire suas dúvidas
          </h2>
        </Reveal>

        <div className="mt-8 divide-y divide-black/8 rounded-2xl border border-black/5 bg-white">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="px-5 sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-ink sm:text-lg">
                    {item.question}
                  </span>
                  <CaretDown
                    size={18}
                    className={`shrink-0 text-ink-soft transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p
                    id={`faq-panel-${index}`}
                    className="max-w-[60ch] pb-5 text-sm leading-relaxed text-ink-soft sm:text-base"
                  >
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
