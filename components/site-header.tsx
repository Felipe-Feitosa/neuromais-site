"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { NeuroLogo } from "@/components/brand/logo";
import { buildWhatsappUrl, siteConfig } from "@/lib/site-config";

const navItems = [
  { href: "#profissionais", label: "Profissionais" },
  { href: "#sinais-de-alerta", label: "Sinais de alerta" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#faq", label: "Perguntas frequentes" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-pill border border-black/5 bg-white/90 px-3 shadow-[0_1px_0_rgba(16,21,46,0.04),0_8px_24px_-12px_rgba(16,21,46,0.18)] backdrop-blur-sm sm:px-5">
        <a href="#top" className="flex items-center pl-1">
          <NeuroLogo heightClassName="h-8" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={buildWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-pill bg-brand-yellow px-5 py-2.5 text-sm font-semibold text-ink transition-transform active:scale-[0.98] sm:inline-flex"
          >
            {siteConfig.ctaLabel}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Navegação mobile"
          className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-black/5 bg-white p-3 shadow-lg lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-ink-soft hover:bg-brand-cream hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={buildWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-pill bg-brand-yellow px-4 py-3 text-center text-base font-semibold text-ink sm:hidden"
          >
            {siteConfig.ctaLabel}
          </a>
        </nav>
      )}
    </header>
  );
}
