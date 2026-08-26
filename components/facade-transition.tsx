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
 * A foto é bem mais alta que larga, então em telas widescreen o corte
 * "cover" só mostra uma fatia central - o objectPosition aqui foi calibrado
 * para essa fatia cair no céu (onde entram os textos) e descer até boa
 * parte da fachada (letreiro, vidro colorido, entrada). No mobile, a
 * proporção da tela já é próxima da proporção da foto, então quase não há
 * corte vertical - o céu limpo dura bem mais nessa faixa do que no
 * desktop, por isso o título do meio (entre o parágrafo e o prédio) usa um
 * top% bem diferente por breakpoint: no mobile ele cai em céu limpo, no
 * desktop cai exatamente na linha escura da borda do telhado, que é o
 * único respiro disponível ali antes do vidro colorido começar.
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
          className="object-cover"
          style={{ objectPosition: "50% 75%" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-navy/55 via-brand-navy/10 to-brand-navy/75"
          aria-hidden="true"
        />

        <div className="absolute inset-x-0 top-[13%] px-6 text-center">
          <FacadeStatement />
        </div>

        <div className="absolute inset-x-0 top-[42%] px-6 text-center sm:top-[33%]">
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
