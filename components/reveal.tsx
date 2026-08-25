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
 * leitura às seções sem exigir interação, e reage nos dois sentidos (some se
 * você rolar de volta pra cima, reaparece se descer de novo) - o mesmo
 * princípio da pilha em "Como funciona": o estado segue a posição de scroll
 * o tempo todo, não só na primeira vez que a seção aparece. Desliga sozinho
 * quando o usuário pede menos movimento (prefers-reduced-motion), requisito
 * não negociável neste projeto por parte do público infantil/neurodivergente.
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
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
