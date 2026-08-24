import type { ComponentType, CSSProperties } from "react";
import {
  ChatCircleDots,
  MagnifyingGlass,
  Compass,
  ArrowsClockwise,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";

type IconType = ComponentType<{ size?: number; weight?: "regular" | "bold" | "fill" }>;

const steps: {
  title: string;
  description: string;
  icon: IconType;
  background: string;
}[] = [
  {
    title: "Primeiro contato",
    description:
      "Você fala com a Neuro+ pelo WhatsApp ou e-mail e conta um pouco sobre a criança.",
    icon: ChatCircleDots,
    background: "linear-gradient(135deg, #0f7a6a, #0b5e52)",
  },
  {
    title: "Avaliação",
    description: "Nossa equipe conhece a criança e entende suas necessidades.",
    icon: MagnifyingGlass,
    background: "linear-gradient(135deg, #141c87, #0d1461)",
  },
  {
    title: "Direcionamento",
    description:
      "Indicamos as especialidades e o caminho mais adequado para o momento da criança.",
    icon: Compass,
    background: "linear-gradient(135deg, #2b5ce6, #141c87)",
  },
  {
    title: "Acompanhamento",
    description:
      "A criança segue em acompanhamento contínuo, com o plano revisado conforme evolui.",
    icon: ArrowsClockwise,
    background: "linear-gradient(135deg, #0b5e52, #0d1461)",
  },
];

export function CareJourney() {
  return (
    <section id="como-funciona" className="py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-4">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Como funciona o acompanhamento
          </h2>
          <p className="mt-3 text-ink-soft">
            Primeiro contato, avaliação, direcionamento e acompanhamento: um
            caminho simples, no ritmo de cada criança.
          </p>
        </Reveal>

        <div className="relative mt-14">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="journey-stack__card mb-10 flex min-h-[220px] flex-col justify-between gap-6 p-7 text-white shadow-[0_30px_60px_-34px_rgba(16,21,46,0.55)] sm:p-9"
                style={{ "--i": index, background: step.background } as CSSProperties}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-white/70">
                    0{index + 1}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                    <Icon size={20} weight="bold" />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-white/90 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
