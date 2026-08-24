import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { buildWhatsappUrl, siteConfig } from "@/lib/site-config";

/**
 * Barra fixa de conversão para mobile, onde a maior parte do tráfego local
 * chega. Escondida em telas sm+ porque o CTA já vive no header nesse breakpoint.
 */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 px-4 py-3 backdrop-blur-sm sm:hidden">
      <a
        href={buildWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-pill bg-brand-yellow px-6 py-3.5 text-sm font-semibold text-ink active:scale-[0.98]"
      >
        <WhatsappLogo size={20} weight="fill" />
        {siteConfig.ctaLabel}
      </a>
    </div>
  );
}
