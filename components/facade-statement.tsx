"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const lines = [
  "Chega de viagens cansativas até a capital para buscar diferentes atendimentos.",
  "Aqui, sua família encontra cuidado especializado sem sair de Castanhal.",
];

const group: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const line: Variants = {
  hidden: { y: "112%" },
  visible: {
    y: "0%",
    transition: { duration: 0.85, ease: [0.16, 0.84, 0.3, 1] },
  },
};

/**
 * Reveal editorial em máscara (CodeFronts "Split Text Reveal", MIT):
 * https://codefronts.com/motion/css-text-animations/css-letter-spacing-animation/
 * Cada frase mora no seu próprio overflow-hidden e sobe de baixo pra cima.
 * A fonte usa keyframe puro tocando uma vez no mount; aqui virou Motion
 * para poder ser disparado por scroll e reversível como o resto do site
 * (some se voltar, soma de novo se descer).
 */
export function FacadeStatement() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="mx-auto max-w-2xl font-display text-xl font-medium leading-snug tracking-tight text-white sm:text-2xl md:text-3xl">
        {lines.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="mx-auto max-w-2xl font-display text-xl font-medium leading-snug tracking-tight text-white sm:text-2xl md:text-3xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-80px" }}
      variants={group}
    >
      {lines.map((text) => (
        <span key={text} className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
          <motion.span className="block" variants={line}>
            {text}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
