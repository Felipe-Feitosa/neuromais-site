import type { ReactNode } from "react";
import Image from "next/image";
import { FacadeStatement } from "@/components/facade-statement";
import { withBasePath } from "@/lib/base-path";
import { siteConfig } from "@/lib/site-config";

/**
 * Fachada real da clínica, fixa na tela enquanto a seção seguinte (Quem
 * somos, passada via children) desliza por cima e a cobre - ver a técnica
 * completa em globals.css. `children` é quem realmente decide quando o
 * encaixe termina: a altura dele é que define por quanto tempo a foto fica
 * presa antes de ser coberta.
 *
 * A foto é bem mais alta que larga, então o corte "cover" só mostra uma
 * fatia central - quanto mais larga a proporção da tela em relação à
 * altura, mais essa fatia precisa dar zoom pra cobrir a largura toda, e
 * menos céu sobra. `.facade-photo` (globals.css) ajusta o objectPosition
 * por aspect-ratio: normal mostra bastante fachada, mas em janelas bem
 * largas e baixas ele recua para preservar céu suficiente para os textos.
 *
 * Parágrafo e título vivem juntos num único flex-col com gap, em vez de
 * cada um ter seu próprio top% solto: telas largas e baixas (janela
 * maximizada num monitor wide, por exemplo) encolhem a ALTURA do pin sem
 * encolher o texto (o tamanho da fonte só reage a breakpoints de largura),
 * então dois top% independentes podiam colidir - o parágrafo cresce e
 * empurra por cima de onde o título estava fixado. Com gap, a distância
 * entre os dois nunca fecha, não importa a proporção da janela.
 *
 * O `facade-dwell` logo abaixo do pin é só um respiro de altura vazia: como
 * o pin gruda no topo da tela (position:sticky) e o painel seguinte (Quem
 * somos) começa a cobri-lo assim que aparece pela base, sem esse respiro a
 * foto ficava visível por pouquíssimo scroll antes de ser tampada. Esse
 * espaço extra atrasa a chegada do painel, dando tempo real de ver a foto
 * parada antes da transição.
 */
export function FacadeTransition({ children }: { children: ReactNode }) {
  return (
    <div className="facade-tall">
      <div className="facade-pin">
        <Image
          src={withBasePath("/clinic/frente-grande.png")}
          alt={`Fachada da Neuro+ em ${siteConfig.brand.city}`}
          fill
          sizes="100vw"
          className="facade-photo object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-navy/55 via-brand-navy/10 to-brand-navy/75"
          aria-hidden="true"
        />

        <div className="absolute inset-x-0 top-[8%] flex flex-col items-center gap-8 px-6 text-center sm:gap-10">
          <FacadeStatement />

          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Neuro+{" "}
            <span className="text-xl font-medium sm:text-2xl md:text-3xl">
              {siteConfig.brand.city}
            </span>
          </h2>
        </div>
      </div>

      <div className="h-[55vh]" aria-hidden="true" />

      <div className="facade-panel">{children}</div>
    </div>
  );
}
