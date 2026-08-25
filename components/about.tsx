"use client";

import { HandHeart, MapPinLine, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

const values = [
  {
    icon: UsersThree,
    label: "Equipe multidisciplinar",
  },
  {
    icon: HandHeart,
    label: "Cuidado individualizado",
  },
  {
    icon: MapPinLine,
    label: `Mais perto da sua família em ${siteConfig.brand.city}`,
  },
];

const markGroup: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.25, staggerChildren: 0.2 } },
};

const mark: Variants = {
  hidden: { backgroundSize: "0% 38%" },
  visible: {
    backgroundSize: "100% 38%",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Destaque acionado por scroll, não por ponteiro (hover não existe em touch,
 * e dependia do usuário mirar exatamente na frase). Segue a posição do
 * scroll nos dois sentidos, como o resto do site: acende em cascata ao
 * entrar na tela e apaga se a seção sair de vista, igual à pilha de
 * "Como funciona".
 */
function MarkedParagraph() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
        A Neuro+ nasce em {siteConfig.brand.city} para oferecer um{" "}
        <span className="mark-highlight text-ink" style={{ backgroundSize: "100% 38%" }}>
          cuidado especializado, acolhedor e integrado
        </span>{" "}
        à saúde e ao desenvolvimento infantil. Reunimos uma{" "}
        <span className="mark-highlight text-ink" style={{ backgroundSize: "100% 38%" }}>
          equipe multidisciplinar
        </span>
        , atuando de forma conjunta e individualizada, respeitando as
        necessidades, o tempo e as potencialidades de cada criança. Mais do que
        acompanhar o desenvolvimento, queremos{" "}
        <span className="mark-highlight text-ink" style={{ backgroundSize: "100% 38%" }}>
          acolher famílias, construir caminhos
        </span>{" "}
        e contribuir para que cada criança alcance o seu melhor potencial.
      </p>
    );
  }

  return (
    <motion.p
      className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-80px" }}
      variants={markGroup}
    >
      A Neuro+ nasce em {siteConfig.brand.city} para oferecer um{" "}
      <motion.span className="mark-highlight text-ink" variants={mark}>
        cuidado especializado, acolhedor e integrado
      </motion.span>{" "}
      à saúde e ao desenvolvimento infantil. Reunimos uma{" "}
      <motion.span className="mark-highlight text-ink" variants={mark}>
        equipe multidisciplinar
      </motion.span>
      , atuando de forma conjunta e individualizada, respeitando as
      necessidades, o tempo e as potencialidades de cada criança. Mais do que
      acompanhar o desenvolvimento, queremos{" "}
      <motion.span className="mark-highlight text-ink" variants={mark}>
        acolher famílias, construir caminhos
      </motion.span>{" "}
      e contribuir para que cada criança alcance o seu melhor potencial.
    </motion.p>
  );
}

export function About() {
  return (
    <section id="quem-somos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Quem somos
          </h2>
          <MarkedParagraph />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.label} className="flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal-deep">
                    <Icon size={18} weight="bold" />
                  </span>
                  <span className="text-sm font-medium text-ink">{value.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
