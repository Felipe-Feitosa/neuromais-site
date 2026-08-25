"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { withBasePath } from "@/lib/base-path";

/**
 * PREENCHER: nomes, especialidades, registro profissional, foto e mini-bio reais.
 * As fotos entram em /public/equipe. Enquanto não chegam, todas apontam para o
 * placeholder da marca (deliberadamente não é um retrato gerado, para nunca
 * haver risco de publicar um profissional inexistente).
 */
const team = [
  {
    name: "Dra. Marina Albuquerque",
    role: "Pediatria",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi cras fermentum odio.",
    photo: "/equipe/placeholder.jpg",
  },
  {
    name: "Camila Bastos",
    role: "Psicologia",
    bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim.",
    photo: "/equipe/placeholder.jpg",
  },
  {
    name: "Rafael Nogueira",
    role: "Fonoaudiologia",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    photo: "/equipe/placeholder.jpg",
  },
  {
    name: "Juliana Menezes",
    role: "Terapia Ocupacional",
    bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    photo: "/equipe/placeholder.jpg",
  },
  {
    name: "Thiago Carvalho",
    role: "Psicopedagogia",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    photo: "/equipe/placeholder.jpg",
  },
  {
    name: "Beatriz Siqueira",
    role: "Psicomotricidade",
    bio: "Curabitur pretium tincidunt lacus, nulla gravida orci a odio nullam varius turpis et.",
    photo: "/equipe/placeholder.jpg",
  },
];

export function Professionals() {
  const shouldReduceMotion = useReducedMotion();

  return (
    /* overflow-x-clip: as peças entram deslocadas lateralmente e, num
     * viewport estreito, a que vem da direita ultrapassaria a borda e criaria
     * scroll horizontal. `clip` corta sem criar container de rolagem, então
     * não interfere no position:sticky nem nas animações de scroll da página. */
    <section id="profissionais" className="overflow-x-clip py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Conheça nossos profissionais
          </h2>
          <p className="mt-3 text-ink-soft">
            Especialidades diferentes que se encaixam para acompanhar a criança
            de forma conjunta e individualizada.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {team.map((person, index) => {
            /* Peças alternando de lado e assentando com leve recuo: a metáfora
             * do encaixe é a própria mensagem da seção (equipe multidisciplinar
             * que se completa). Só transform e opacity, direto no compositor. */
            const fromLeft = index % 2 === 0;
            const row = Math.floor(index / 2);

            const card = (
              <article className="flex h-full items-center gap-5 rounded-2xl border border-black/5 bg-white p-5 shadow-[0_18px_40px_-32px_rgba(16,21,46,0.5)] sm:gap-6 sm:p-6">
                <div className="relative aspect-[4/5] w-28 shrink-0 overflow-hidden rounded-xl bg-brand-cream sm:w-32">
                  <Image
                    src={withBasePath(person.photo)}
                    alt={`Retrato de ${person.name}`}
                    fill
                    sizes="(min-width: 640px) 128px, 112px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold leading-tight text-ink">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-teal-deep">
                    {person.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {person.bio}
                  </p>
                </div>
              </article>
            );

            if (shouldReduceMotion) {
              return <div key={person.name}>{card}</div>;
            }

            return (
              <motion.div
                key={person.name}
                initial={{
                  opacity: 0,
                  x: fromLeft ? -56 : 56,
                  rotate: fromLeft ? -2.5 : 2.5,
                  scale: 0.94,
                }}
                whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 16,
                  mass: 0.9,
                  delay: row * 0.12 + (fromLeft ? 0 : 0.06),
                }}
              >
                {card}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
