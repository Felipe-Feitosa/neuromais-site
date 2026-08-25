import { NeuroLogo } from "@/components/brand/logo";
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
    <footer className="border-t border-black/5 bg-white pb-28 pt-14 sm:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-3">
        <div>
          <NeuroLogo heightClassName="h-8" />
          <p className="mt-3 max-w-[32ch] text-sm text-ink-soft">
            {siteConfig.brand.tagline}, em {siteConfig.brand.city}.
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <p className="text-sm font-semibold text-ink">Navegação</p>
          <ul className="mt-4 space-y-2.5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-soft hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-ink">Contato</p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li>
              {siteConfig.address.street}, {siteConfig.address.city} -{" "}
              {siteConfig.address.state}
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl px-4 text-xs text-ink-soft/70">
        {siteConfig.brand.fullName} - {year}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
