"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { FacadeStatement } from "@/components/facade-statement";
import { Reveal } from "@/components/reveal";
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
 * O prédio é o chamariz desta seção, então ele precisa aparecer de verdade.
 * A foto mora numa `.facade-scene` mais alta que a janela do pin (200vh
 * contra 100vh) e o scroll a empurra pra cima com Motion, revelando o
 * prédio aos poucos.
 *
 * O pan é disparado por posição ABSOLUTA de scroll (`scrollY`, medida a
 * partir do topo real da página), não pelo progresso de uma div solta
 * depois do pin. Motivo: se o pan só começasse a ser rastreado depois que
 * a altura inteira do pin (100vh) já tivesse passado, o usuário ficaria
 * uma tela inteira parado olhando só o texto antes de qualquer coisa se
 * mexer - exatamente a sensação de "travado" que o pin (sticky) já cria
 * por natureza. Com scrollY bruto, o pan começa a mexer poucos vh depois
 * do topo da seção (só o suficiente pro texto assentar), então o scroll
 * já parece "fazer algo" quase o tempo todo.
 *
 * `PAN_LEAD_VH`/`PAN_DISTANCE_VH` definem essa janela em unidades de
 * altura de viewport; `sectionTop` (medido via ref, refeito a cada
 * resize) converte isso em pixels absolutos de página.
 *
 * A única div vazia depois do pin (`BUFFER_VH`) soma exatamente o quanto
 * o painel "Quem somos" precisa esperar: o pan termina em PAN_LEAD_VH +
 * PAN_DISTANCE_VH (cai bem no fim da altura natural do pin, 100vh), e o
 * painel só começa a aparecer POST_PAN_VH depois disso - uma folga
 * pequena, o bastante pra não competirem pelo mesmo trecho de scroll sem
 * virar uma segunda pausa longa.
 *
 * O título "Neuro+ Castanhal" mora no mesmo flex-col do parágrafo, só que
 * com um gap bem maior (`gap-[26vh]`, metade disso na versão estática de
 * reduced-motion, já que a caixa ali é metade da altura) - assim ele cai
 * no meio do vazio de céu entre o texto e o prédio sem correr o risco de
 * colidir com o parágrafo em telas atípicas: o gap segue a altura real do
 * parágrafo (que pode variar), não uma porcentagem fixa solta. O próprio
 * `Reveal` dá o fade-in dele no scroll.
 */
const PAN_LEAD_VH = 0.15;
const PAN_DISTANCE_VH = 0.85;
const POST_PAN_VH = 0.15;
const BUFFER_VH = PAN_LEAD_VH + PAN_DISTANCE_VH + POST_PAN_VH;

export function FacadeTransition({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  const tallRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState<{ start: number; end: number } | null>(null);

  useEffect(() => {
    function measure() {
      const el = tallRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const vh = window.innerHeight;
      setBounds({ start: top + vh * PAN_LEAD_VH, end: top + vh * (PAN_LEAD_VH + PAN_DISTANCE_VH) });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollY } = useScroll();
  const y = useTransform(
    scrollY,
    bounds ? [bounds.start, bounds.end] : [0, 1],
    ["0%", "-50%"],
    { clamp: true },
  );

  return (
    <div ref={tallRef} className="facade-tall">
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
            <div className="absolute inset-x-0 top-[8%] flex flex-col items-center gap-[13vh] px-6 text-center">
              <FacadeStatement />
              <Reveal>{title}</Reveal>
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
            <div className="absolute inset-x-0 top-[4%] flex flex-col items-center gap-[26vh] px-6 text-center">
              <FacadeStatement />
              <Reveal>{title}</Reveal>
            </div>
          </motion.div>
        )}
      </div>

      <div style={{ height: `${BUFFER_VH * 100}vh` }} aria-hidden="true" />

      <div className="facade-panel">{children}</div>
    </div>
  );
}
