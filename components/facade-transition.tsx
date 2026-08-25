import type { ReactNode } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/base-path";
import { siteConfig } from "@/lib/site-config";

/**
 * Fachada real da clínica, fixa na tela enquanto a seção seguinte (Quem
 * somos, passada via children) desliza por cima e a cobre - ver a técnica
 * completa em globals.css. `children` é quem realmente decide quando o
 * encaixe termina: a altura dele é que define por quanto tempo a foto fica
 * presa antes de ser coberta.
 */
export function FacadeTransition({ children }: { children: ReactNode }) {
  return (
    <div className="facade-tall">
      <div className="facade-pin">
        <Image
          src={withBasePath("/clinic/frente.jpeg")}
          alt={`Fachada da Neuro+ em ${siteConfig.brand.city}`}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-navy/45 via-brand-navy/30 to-brand-navy/80"
          aria-hidden="true"
        />
        <div className="relative px-6 text-center">
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
