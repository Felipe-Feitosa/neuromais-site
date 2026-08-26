"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { FacadeStatement } from "@/components/facade-statement";
import { withBasePath } from "@/lib/base-path";
import { siteConfig } from "@/lib/site-config";

const title = (
  <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
    Neuro+{" "}
    <span className="text-xl font-medium sm:text-2xl md:text-3xl">
      {siteConfig.brand.city}
    </span>
  </h2>
);

/**
 * Fachada real da clínica, fixa na tela enquanto a seção seguinte (Quem
 * somos, passada via children) desliza por cima e a cobre - ver a técnica
 * completa em globals.css. `children` é quem realmente decide quando o
 * encaixe termina: a altura dele é que define por quanto tempo a foto fica
 * presa antes de ser coberta.
 *
 * O prédio é o chamariz desta seção, então ele precisa aparecer de verdade,
 * não só o céu com o texto por cima. Em vez de travar num único recorte
 * estático da foto (que nunca sobrava espaço pra mostrar céu+texto E
 * prédio ao mesmo tempo, principalmente em janelas largas e baixas), a
 * foto mora numa `.facade-scene` mais alta que a janela do pin (200vh
 * contra 100vh) e o scroll a empurra pra cima com Motion: primeiro aparece
 * o céu com o texto parado, e continuando a rolar a "câmera" desce pela
 * foto até revelar o prédio por completo, só então Quem somos entra.
 * `panRef` mede exatamente esse trecho de scroll (uma div vazia do
 * tamanho do curso da câmera) para o progresso ir de 0 a 1 nele. Logo
 * depois dela tem MAIS uma div vazia do tamanho de uma tela inteira: sem
 * ela, "Quem somos" começaria a subir por baixo assim que o pan começasse
 * (as duas coisas dividiriam o mesmo trecho de scroll), cobrindo o prédio
 * antes da câmera terminar de descer. Esse segundo respiro empurra a
 * chegada do painel pra só depois que o pan já terminou.
 *
 * Com `prefers-reduced-motion`, não há câmera pra descer - a foto volta a
 * ser um recorte único e estático (sem a `.facade-scene` mais alta), com
 * um objectPosition fixo que ainda mostra uma fatia razoável do prédio.
 */
export function FacadeTransition({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  const panRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: panRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="facade-tall">
      <div className="facade-pin">
        {shouldReduceMotion ? (
          <div className="absolute inset-0">
            <Image
              src={withBasePath("/clinic/frente-grande.png")}
              alt={`Fachada da Neuro+ em ${siteConfig.brand.city}`}
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "50% 68%" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-brand-navy/55 via-brand-navy/10 to-brand-navy/75"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 top-[8%] flex flex-col items-center gap-8 px-6 text-center sm:gap-10">
              <FacadeStatement />
              {title}
            </div>
          </div>
        ) : (
          <motion.div className="facade-scene" style={{ y }}>
            <Image
              src={withBasePath("/clinic/frente-grande.png")}
              alt={`Fachada da Neuro+ em ${siteConfig.brand.city}`}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-brand-navy/55 via-brand-navy/10 to-brand-navy/75"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 top-[4%] flex flex-col items-center gap-8 px-6 text-center sm:gap-10">
              <FacadeStatement />
              {title}
            </div>
          </motion.div>
        )}
      </div>

      <div ref={panRef} className="h-[100vh]" aria-hidden="true" />
      <div className="h-[100vh]" aria-hidden="true" />

      <div className="facade-panel">{children}</div>
    </div>
  );
}
