import { HandHeart, MapPinLine, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

const values = [
  {
    icon: UsersThree,
    label: "Equipe multidisciplinar",
  },
  {
    icon: HandHeart,
    label: "Cuidado individualizado",
  },
  {
    icon: MapPinLine,
    label: `Mais perto da sua família em ${siteConfig.brand.city}`,
  },
];

export function About() {
  return (
    <section id="quem-somos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Quem somos
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
            A Neuro+ nasce em {siteConfig.brand.city} para oferecer um cuidado
            especializado, acolhedor e integrado à saúde e ao desenvolvimento
            infantil. Reunimos uma equipe multidisciplinar, atuando de forma
            conjunta e individualizada, respeitando as necessidades, o tempo e as
            potencialidades de cada criança. Mais do que acompanhar o
            desenvolvimento, queremos acolher famílias, construir caminhos e
            contribuir para que cada criança alcance o seu melhor potencial.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.label} className="flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal-deep">
                    <Icon size={18} weight="bold" />
                  </span>
                  <span className="text-sm font-medium text-ink">{value.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
