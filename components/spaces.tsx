import { Reveal } from "@/components/reveal";
import { ElasticGallery } from "@/components/ui/elastic-gallery";

export function Spaces() {
  return (
    <section id="estrutura" className="pt-20 sm:pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Uma estrutura pensada para acolher
          </h2>
          <p className="mt-3 text-ink-soft">
            Ambientes modernos e cuidadosamente planejados para o conforto da
            criança e da família em cada visita. Passe o mouse ou toque em cada
            sala para conhecer o espaço.
          </p>
        </Reveal>
      </div>

      <ElasticGallery />
    </section>
  );
}
