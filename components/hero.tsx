import Image from "next/image";
import { CalendarCheck, ChatCircleDots } from "@phosphor-icons/react/dist/ssr";
import { Doodle } from "@/components/brand/doodle";
import { withBasePath } from "@/lib/base-path";
import { buildInquiryWhatsappUrl, buildWhatsappUrl, siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <span className="inline-flex items-center rounded-pill bg-brand-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal-deep">
            Em breve em {siteConfig.brand.city}
          </span>

          <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-none tracking-tighter text-ink md:text-5xl">
            Cuidado especializado para o desenvolvimento do seu filho
          </h1>

          <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-ink-soft md:text-lg">
            Clínica multidisciplinar com pediatria, terapias e outras
            especialidades reunidas em um só lugar em {siteConfig.brand.city}.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={buildWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-pill bg-brand-yellow px-6 py-3.5 text-sm font-semibold text-ink transition-transform active:scale-[0.98]"
            >
              <CalendarCheck size={20} weight="bold" />
              {siteConfig.ctaLabel}
            </a>
            <a
              href={buildInquiryWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-pill border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white active:scale-[0.98]"
            >
              <ChatCircleDots size={20} />
              {siteConfig.secondaryCtaLabel}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm lg:mx-0 lg:ml-auto">
            <div
              aria-hidden="true"
              className="absolute inset-x-6 bottom-4 top-16 rounded-[40%] bg-brand-teal/10"
            />
            <Image
              src={withBasePath("/hero-illustration.png")}
              alt="Ilustração de uma criança sorrindo e acenando, representando o acolhimento da Neuro+"
              fill
              priority
              sizes="(min-width: 1024px) 24rem, 80vw"
              className="object-contain object-bottom"
            />
          </div>
          <Doodle className="pointer-events-none absolute -right-4 -top-2 h-28 w-28 lg:-right-6 lg:top-0 lg:h-32 lg:w-32" />
        </div>
      </div>
    </section>
  );
}
