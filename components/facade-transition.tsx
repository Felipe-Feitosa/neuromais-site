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
 * para essa fatia cair no meio do céu (onde o texto de abertura entra) e
 * seguir até a fachada com o letreiro (onde fica o título). No mobile, a
 * proporção da tela já é próxima da proporção da foto, então praticamente
 * a imagem inteira aparece e essas mesmas posições continuam batendo.
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
          style={{ objectPosition: "50% 65%" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-navy/55 via-brand-navy/10 to-brand-navy/75"
          aria-hidden="true"
        />

        <div className="absolute inset-x-0 top-[13%] px-6 text-center">
          <FacadeStatement />
        </div>

        <div className="absolute inset-x-0 top-[40%] px-6 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Neuro+{" "}
            <span className="text-xl font-medium sm:text-2xl md:text-3xl">
              {siteConfig.brand.city}
            </span>
          </h2>
        </div>
      </div>

      <div className="facade-panel">{children}</div>
    </div>
  );
}
