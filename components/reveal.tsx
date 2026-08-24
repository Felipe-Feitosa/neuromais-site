"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/**
 * Wrapper de entrada em scroll. Justificativa de movimento: dá hierarquia de
 * leitura às seções sem exigir interação. Desliga sozinho quando o usuário
 * pede menos movimento (prefers-reduced-motion), requisito não negociável
 * neste projeto por parte do público infantil/neurodivergente.
 */
export function Reveal({ children, className, delay = 0, y = 16 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
