"use client";

import { useState } from "react";

type AgeBand = {
  id: string;
  label: string;
  milestones: string[];
  warningSigns: string[];
};

const ageBands: AgeBand[] = [
  {
    id: "0-3m",
    label: "0 a 3 meses",
    milestones: [
      "Reage a sons e vozes familiares",
      "Acompanha rostos e objetos com o olhar por curtos períodos",
      "Começa a sorrir em resposta a estímulos",
      "Movimenta braços e pernas com firmeza",
      "Levanta a cabeça por instantes quando de bruços",
    ],
    warningSigns: [
      "Não reage a sons altos",
      "Não fixa nem acompanha o olhar",
      "Não sorri em resposta a estímulos",
      "Corpo muito molinho ou muito rígido",
      "Dificuldade para sugar ou mamar",
    ],
  },
  {
    id: "4-6m",
    label: "4 a 6 meses",
    milestones: [
      "Sustenta a cabeça com firmeza",
      "Rola de barriga para cima e para baixo",
      "Alcança e leva objetos à boca",
      "Sorri e vocaliza durante interações",
      "Começa a balbuciar sons",
    ],
    warningSigns: [
      "Não sustenta a cabeça",
      "Não tenta alcançar objetos",
      "Não sorri nem interage com quem está por perto",
      "Não emite sons ou balbucios",
      "Parece indiferente às pessoas ao redor",
    ],
  },
  {
    id: "7-9m",
    label: "7 a 9 meses",
    milestones: [
      "Senta sem apoio por alguns instantes",
      "Engatinha ou se arrasta para se locomover",
      "Segura objetos pequenos com as duas mãos",
      "Reage ao próprio nome",
      "Estranha um pouco pessoas desconhecidas",
    ],
    warningSigns: [
      "Não senta mesmo com apoio",
      "Não demonstra interesse por brincadeiras",
      "Não reage quando é chamado",
      "Não leva objetos à boca nem os manuseia",
      "Ausência total de balbucios",
    ],
  },
  {
    id: "10-12m",
    label: "10 a 12 meses",
    milestones: [
      "Fica em pé com apoio",
      "Engatinha com firmeza",
      "Aponta para objetos de interesse",
      "Entende palavras simples, como não e o próprio nome",
      "Imita gestos, como bater palmas ou dar tchau",
    ],
    warningSigns: [
      "Não fica em pé mesmo apoiado",
      "Não aponta nem demonstra interesse por objetos",
      "Não entende comandos simples",
      "Não imita gestos ou sons",
      "Perda de habilidades que já tinha",
    ],
  },
  {
    id: "15-18m",
    label: "15 a 18 meses",
    milestones: [
      "Anda sozinho ou com pouco apoio",
      "Fala algumas palavras com significado",
      "Aponta para pedir ou mostrar algo",
      "Brinca de faz de conta de forma simples",
      "Segue instruções curtas de uma etapa",
    ],
    warningSigns: [
      "Não anda mesmo com apoio",
      "Não fala nenhuma palavra",
      "Não aponta para pedir ou compartilhar interesse",
      "Não brinca de forma exploratória",
      "Pouco contato visual durante interações",
    ],
  },
  {
    id: "2a",
    label: "2 anos",
    milestones: [
      "Corre e sobe degraus com apoio",
      "Forma frases curtas de duas palavras",
      "Segue instruções de duas etapas",
      "Brinca ao lado de outras crianças",
      "Demonstra emoções de forma clara",
    ],
    warningSigns: [
      "Vocabulário muito reduzido para a idade",
      "Dificuldade para seguir instruções simples",
      "Pouco interesse por outras crianças",
      "Movimentos repetitivos incomuns",
      "Perda de palavras ou habilidades que já tinha",
    ],
  },
  {
    id: "3-5a",
    label: "3 a 5 anos",
    milestones: [
      "Fala em frases completas e é compreendido por pessoas fora da família",
      "Interage e brinca de forma cooperativa com outras crianças",
      "Segue regras simples de jogos",
      "Desenha formas básicas com controle crescente do lápis",
      "Ganha autonomia em tarefas simples do dia a dia",
    ],
    warningSigns: [
      "Fala pouco compreensível para a idade",
      "Dificuldade marcante para interagir com outras crianças",
      "Rigidez extrema a mudanças de rotina",
      "Atraso perceptível na coordenação motora",
      "Agitação muito intensa ou isolamento persistente",
    ],
  },
  {
    id: "escolar",
    label: "Idade escolar",
    milestones: [
      "Comunica pensamentos e sentimentos com clareza",
      "Acompanha o ritmo de aprendizagem esperado para a série",
      "Faz amizades e mantém interações sociais",
      "Segue combinados e rotinas com autonomia crescente",
      "Lida com frustrações de forma cada vez mais equilibrada",
    ],
    warningSigns: [
      "Dificuldade persistente de leitura, escrita ou concentração",
      "Isolamento social ou dificuldade marcante para fazer amigos",
      "Queixas frequentes da escola sobre comportamento ou aprendizagem",
      "Mudanças bruscas de humor ou comportamento",
      "Perda de habilidades acadêmicas ou sociais que já tinha",
    ],
  },
];

/**
 * Marcos e sinais de alerta por faixa etária, em abas. Puramente
 * informativo: sem marcação, sem mensagem personalizada, só a leitura dos
 * dois lados (o que se espera, o que observar).
 */
export function DevelopmentSignsByAge() {
  const [activeId, setActiveId] = useState(ageBands[0].id);
  const active = ageBands.find((band) => band.id === activeId) ?? ageBands[0];

  return (
    <div>
      <div role="tablist" aria-label="Faixa etária" className="flex flex-wrap gap-2">
        {ageBands.map((band) => {
          const isActive = band.id === activeId;
          return (
            <button
              key={band.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(band.id)}
              className={`rounded-pill px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-brand-navy text-white"
                  : "bg-white text-ink-soft hover:text-ink border border-black/10"
              }`}
            >
              {band.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-black/5 bg-white p-6 sm:p-7">
          <h4 className="font-display text-base font-semibold text-ink sm:text-lg">
            O que a maioria das crianças já faz
          </h4>
          <ul className="mt-4 space-y-3">
            {active.milestones.map((milestone) => (
              <li key={milestone} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal-deep" />
                {milestone}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-brand-teal/8 p-6 sm:p-7">
          <h4 className="font-display text-base font-semibold text-ink sm:text-lg">
            Sinais de alerta para observar
          </h4>
          <ul className="mt-4 space-y-3">
            {active.warningSigns.map((sign) => (
              <li key={sign} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal-deep" />
                {sign}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-5 max-w-[68ch] text-sm leading-relaxed text-ink-soft">
        Se seu filho não apresenta alguns desses marcos, ou apresenta vários
        sinais de alerta, converse com o pediatra e considere uma avaliação
        especializada.
      </p>
    </div>
  );
}
