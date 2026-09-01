import {
  WarningCircle,
  Stethoscope,
  Brain,
  ChatCircleText,
  PuzzlePiece,
  PersonSimpleWalk,
  UsersThree,
  Pill,
  ChatsCircle,
} from "@phosphor-icons/react/dist/ssr";
import { CalendarCheck } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { DevelopmentSignsByAge } from "@/components/development-signs-by-age";
import { buildInquiryWhatsappUrl, buildWhatsappUrl, siteConfig } from "@/lib/site-config";

const redFlags = [
  "Perda de habilidades que a criança já tinha, como parar de falar, de andar ou de interagir",
  "Não responder a sons ou parecer não ouvir",
  "Não fixar o olhar nem acompanhar rostos e objetos",
  "Episódios suspeitos, como olhar fixo, desligamentos ou movimentos repetitivos incomuns",
  "Atraso evidente em várias áreas ao mesmo tempo, como fala, movimento e interação",
  "Rigidez extrema a mudanças, isolamento social persistente ou agressividade e autoagressão frequentes",
];

const professionals = [
  {
    icon: Stethoscope,
    role: "Pediatra (ou pediatra do desenvolvimento)",
    description:
      "Primeiro contato. Acompanha o crescimento e o desenvolvimento geral e orienta os próximos passos.",
  },
  {
    icon: Brain,
    role: "Neuropediatra",
    description:
      "Avalia o sistema nervoso, atrasos motores, epilepsia e suspeitas de transtornos do neurodesenvolvimento.",
  },
  {
    icon: ChatCircleText,
    role: "Fonoaudiólogo",
    description: "Cuida da fala, da linguagem, da comunicação e também de questões alimentares.",
  },
  {
    icon: PuzzlePiece,
    role: "Terapeuta ocupacional",
    description: "Trabalha coordenação fina, questões sensoriais e as atividades do dia a dia.",
  },
  {
    icon: PersonSimpleWalk,
    role: "Fisioterapeuta",
    description: "Acompanha atrasos motores amplos, como sentar, engatinhar, andar e equilíbrio.",
  },
  {
    icon: UsersThree,
    role: "Psicólogo ou psicopedagogo",
    description: "Apoia questões emocionais, comportamentais, de aprendizagem e de interação social.",
  },
  {
    icon: Pill,
    role: "Psiquiatra da infância e adolescência",
    description: "Acompanha quadros mais complexos de comportamento, humor, TDAH e TEA.",
  },
];

/**
 * Seção educativa sobre neurodesenvolvimento infantil: quando os pais devem
 * procurar avaliação especializada. Fica entre "Profissionais" e "Como
 * funciona o acompanhamento" de propósito, estabelecendo o motivo (por que
 * buscar ajuda) antes de explicar o processo (como a Neuro+ ajuda).
 *
 * Tom não alarmista por design: reforça que variação de ritmo é normal e
 * que buscar avaliação é cuidado, não confirmação de problema. Único
 * eyebrow desta seção, dentro do orçamento da página.
 */
export function DevelopmentSigns() {
  return (
    <section id="sinais-de-alerta" className="py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <Reveal>
          <span className="inline-flex items-center rounded-pill bg-brand-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal-deep">
            Atenção ao desenvolvimento
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Desenvolvimento infantil: quando procurar ajuda especializada
          </h2>
          <p className="mt-4 text-ink-soft">
            Cada criança tem o seu próprio ritmo, mas alguns sinais indicam que
            vale a pena conversar com um profissional. Quanto antes a avaliação
            acontece, melhores as chances de apoio e evolução.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-8 max-w-2xl px-4">
        <Reveal delay={0.05}>
          <p className="text-center text-sm leading-relaxed text-ink-soft sm:text-base">
            O desenvolvimento neuropsicomotor envolve a fala, o movimento, a
            interação social e a aprendizagem, e caminha de forma diferente em
            cada criança. Existe uma faixa considerada dentro do esperado para
            cada idade, com marcos que costumam aparecer nessa janela. Quando
            vários desses marcos não aparecem, ou quando a criança perde uma
            habilidade que já tinha, vale a pena olhar com mais atenção. É
            comum ter dúvidas sobre isso, e buscar uma avaliação não significa
            que existe um problema grave, e sim que você está cuidando do
            desenvolvimento do seu filho.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 max-w-4xl px-4">
        <Reveal>
          <h3 className="text-center font-display text-2xl font-semibold tracking-tight text-ink sm:text-left">
            Marcos e sinais de alerta por idade
          </h3>
        </Reveal>
        <Reveal delay={0.05} className="mt-6">
          <DevelopmentSignsByAge />
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-4xl px-4">
        <Reveal>
          <div className="rounded-2xl bg-brand-navy p-8 text-white sm:p-10">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-yellow/15">
              <WarningCircle size={22} weight="bold" className="text-brand-yellow" />
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Sinais que sempre merecem avaliação
            </h3>
            <p className="mt-2 max-w-[60ch] text-sm text-white/75">
              Independentemente da idade, estes sinais justificam procurar um
              profissional o quanto antes.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {redFlags.map((flag) => (
                <li key={flag} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  {flag}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-5xl px-4">
        <Reveal className="max-w-xl">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Qual profissional procurar?
          </h3>
          <p className="mt-2 text-ink-soft">
            Na dúvida, comece pelo pediatra. Ele pode orientar e, se for o
            caso, encaminhar para o especialista mais indicado.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {professionals.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.role} delay={index * 0.04}>
                <div className="h-full rounded-2xl border border-black/5 bg-white p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal-deep">
                    <Icon size={20} weight="bold" />
                  </span>
                  <p className="mt-3 font-display text-base font-semibold text-ink">
                    {item.role}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-2xl px-4 text-center">
        <Reveal>
          <p className="text-ink-soft">
            Buscar uma avaliação não significa que algo está errado. Significa
            que você está cuidando do desenvolvimento do seu filho.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
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
              <ChatsCircle size={20} />
              {siteConfig.secondaryCtaLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
