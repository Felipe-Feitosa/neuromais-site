"use client";

import { useEffect, useState, type ComponentType, type CSSProperties } from "react";
import Image from "next/image";
import {
  Baby,
  Brain,
  ChatCircleText,
  PuzzlePiece,
  BookOpenText,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { HoloCard } from "@/components/ui/holo-card";
import { withBasePath } from "@/lib/base-path";

type IconType = ComponentType<{ size?: number; weight?: "regular" | "bold" | "fill" }>;

type Specialty = {
  name: string;
  description: string;
  icon: IconType;
  image: string;
  span: string;
  aspect: number;
  holoVars: CSSProperties;
};

const specialties: Specialty[] = [
  {
    name: "Pediatria",
    description:
      "Acompanhamento médico contínuo, atento a cada fase do crescimento e do desenvolvimento.",
    icon: Baby,
    image: "/especialidades/pediatria.jpg",
    span: "lg:col-span-2",
    aspect: 2.5,
    holoVars: {
      "--motiq-surface": "#0f7a6a",
      "--motiq-surface-2": "#0b5e52",
      "--motiq-accent": "#0f7a6a",
      "--motiq-accent-text": "#f5b70f",
      "--motiq-border-strong": "#1ea88f",
    } as CSSProperties,
  },
  {
    name: "Psicologia",
    description: "Escuta e suporte emocional para a criança e para a família.",
    icon: Brain,
    image: "/especialidades/psicologia.jpg",
    span: "lg:col-span-1",
    aspect: 1.3,
    holoVars: {
      "--motiq-surface": "#141c87",
      "--motiq-surface-2": "#0d1461",
      "--motiq-accent": "#2b5ce6",
      "--motiq-accent-text": "#7f9fff",
      "--motiq-border-strong": "#2e3f8f",
    } as CSSProperties,
  },
  {
    name: "Fonoaudiologia",
    description: "Estímulo à comunicação, fala e linguagem em cada etapa.",
    icon: ChatCircleText,
    image: "/especialidades/fonoaudiologia.jpg",
    span: "lg:col-span-1",
    aspect: 1.3,
    holoVars: {
      "--motiq-surface": "#0f7a6a",
      "--motiq-surface-2": "#0b5e52",
      "--motiq-accent": "#0f7a6a",
      "--motiq-accent-text": "#8fb0ff",
      "--motiq-border-strong": "#1ea88f",
    } as CSSProperties,
  },
  {
    name: "Terapia Ocupacional",
    description: "Desenvolvimento de autonomia nas atividades do dia a dia.",
    icon: PuzzlePiece,
    image: "/especialidades/to.jpg",
    span: "lg:col-span-1",
    aspect: 1.3,
    holoVars: {
      "--motiq-surface": "#141c87",
      "--motiq-surface-2": "#0d1461",
      "--motiq-accent": "#d99e02",
      "--motiq-accent-text": "#f5b70f",
      "--motiq-border-strong": "#e9d6a3",
    } as CSSProperties,
  },
  {
    name: "Psicopedagogia",
    description: "Suporte à aprendizagem, respeitando o tempo de cada criança.",
    icon: BookOpenText,
    image: "/especialidades/psicopedagogia.jpg",
    span: "lg:col-span-1",
    aspect: 1.3,
    holoVars: {
      "--motiq-surface": "#0f7a6a",
      "--motiq-surface-2": "#0b5e52",
      "--motiq-accent": "#0f7a6a",
      "--motiq-accent-text": "#1ea88f",
      "--motiq-border-strong": "#1ea88f",
    } as CSSProperties,
  },
];

/** Touch devices have no real "hover" - the tilt/pointer-follow gesture only
 * fights native scroll there, so it's forced to the static resting pose. */
function useIsCoarsePointer() {
  const [isCoarse, setIsCoarse] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    setIsCoarse(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsCoarse(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isCoarse;
}

export function Specialties() {
  const isCoarsePointer = useIsCoarsePointer();

  return (
    <section id="especialidades" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal-deep">
            Especialidades
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Uma equipe multidisciplinar, em um só endereço
          </h2>
          <p className="mt-3 max-w-[60ch] text-ink-soft">
            Diferentes especialidades atuando de forma conjunta e individualizada,
            respeitando as necessidades, o tempo e as potencialidades de cada
            criança.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {specialties.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = item.span.includes("col-span-2");
            return (
              <Reveal key={item.name} delay={index * 0.05} className={item.span}>
                <div data-theme="dark" style={item.holoVars}>
                  <HoloCard
                    aspect={item.aspect}
                    foil="azure"
                    reducedMotion={isCoarsePointer}
                    label={`Especialidade: ${item.name}. Incline com o ponteiro ou use as setas do teclado.`}
                  >
                    <div className="absolute -inset-5 -z-10 overflow-hidden rounded-[inherit]">
                      <Image
                        src={withBasePath(item.image)}
                        alt={`Atendimento de ${item.name} na Neuro+`}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />
                    </div>

                    <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
                      <Icon size={22} weight="bold" />
                    </span>
                    <div className="relative z-10">
                      <h3
                        className={`font-display font-semibold text-white ${
                          isFeatured ? "text-2xl" : "text-lg"
                        }`}
                      >
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/85">
                        {item.description}
                      </p>
                    </div>
                  </HoloCard>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
