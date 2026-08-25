import Image from "next/image";
import { NeuroLogo } from "@/components/brand/logo";
import { withBasePath } from "@/lib/base-path";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "#profissionais", label: "Profissionais" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#faq", label: "Perguntas frequentes" },
  { href: "#contato", label: "Contato" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden pb-28 pt-14 sm:pb-14">
      <Image
        src={withBasePath("/clinic/frente.jpeg")}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-navy/85" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-3">
        <div>
          <span className="inline-block rounded-xl bg-white/95 px-3 py-2">
            <NeuroLogo heightClassName="h-8" />
          </span>
          <p className="mt-3 max-w-[32ch] text-sm text-white/80">
            {siteConfig.brand.tagline}, em {siteConfig.brand.city}.
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <p className="text-sm font-semibold text-white">Navegação</p>
          <ul className="mt-4 space-y-2.5">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/75 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-white">Contato</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              {siteConfig.address.street}, {siteConfig.address.city} -{" "}
              {siteConfig.address.state}
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="relative mx-auto mt-12 max-w-6xl px-4 text-xs text-white/60">
        {siteConfig.brand.fullName} - {year}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
