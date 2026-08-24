import { Reveal } from "@/components/reveal";

const groups = [
  {
    range: "0-1",
    unit: "ano",
    description: "Acompanhamento do desenvolvimento desde os primeiros meses de vida.",
    tone: "bg-white border border-black/5 text-ink",
    lift: "sm:mt-10",
  },
  {
    range: "1-3",
    unit: "anos",
    description: "Estímulo à fala, ao movimento e às primeiras interações sociais.",
    tone: "bg-brand-teal text-white",
    lift: "",
  },
  {
    range: "3-18",
    unit: "anos",
    description: "Suporte contínuo à aprendizagem, à comunicação e à autonomia.",
    tone: "bg-white border border-black/5 text-ink",
    lift: "sm:mt-10",
  },
];

export function AgeGroups() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Cuidado para cada fase
          </h2>
          <p className="mt-3 text-ink-soft">
            Cada idade pede um jeito diferente de olhar. A Neuro+ acompanha a
            criança do início da vida até a adolescência.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-start">
          {groups.map((group, index) => (
            <Reveal
              key={group.range}
              delay={index * 0.06}
              className={`flex-1 ${group.lift}`}
            >
              <div className={`h-full rounded-2xl p-7 ${group.tone}`}>
                <p className="font-display text-4xl font-semibold tracking-tight">
                  {group.range}
                  <span className="ml-2 text-base font-medium opacity-70">
                    {group.unit}
                  </span>
                </p>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    group.tone.includes("brand-teal") ? "text-white/85" : "text-ink-soft"
                  }`}
                >
                  {group.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
