/**
 * Configuração central do site Neuro+.
 *
 * Todo dado de contato, rótulo de CTA e link externo mora aqui.
 * Antes de publicar, procure por "PREENCHER" e substitua pelos dados reais da clínica.
 */

export const siteConfig = {
  brand: {
    name: "Neuro+",
    fullName: "Neuro+ Clínica Multidisciplinar Infantil e Infantojuvenil",
    city: "Castanhal",
    state: "PA",
    tagline: "Aqui o cuidado tem mais brincadeira",
  },

  // PREENCHER: número de WhatsApp da clínica, formato internacional sem espaços.
  // Exemplo real: "5591987654321" (55 + DDD + número).
  whatsapp: {
    number: "5591000000000", // PREENCHER
    defaultMessage:
      "Olá! Vim pelo site da Neuro+ e gostaria de agendar uma avaliação.",
    inquiryMessage:
      "Olá! Vim pelo site da Neuro+ e gostaria de tirar algumas dúvidas antes de agendar.",
  },

  email: "contato@neuromaispa.com.br",

  address: {
    street: "Av. Presidente Vargas, 2382",
    neighborhood: "Centro",
    city: "Castanhal",
    state: "PA",
    zip: "68740-000", // PREENCHER: CEP exato, se houver
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.+Presidente+Vargas%2C+2382%2C+Centro%2C+Castanhal+-+PA",
  },

  // PREENCHER: horário real de funcionamento.
  hours: [
    { days: "Segunda a sexta", time: "08h às 18h" }, // PREENCHER
    { days: "Sábado", time: "08h às 12h" }, // PREENCHER
  ],

  social: {
    instagram: "https://www.instagram.com/neuromais.pa/",
  },

  // Rótulo único de CTA de agendamento, usado em toda a página (nav, hero, seções, rodapé, barra mobile).
  // Trocar para "Entrar na lista de espera" enquanto a unidade ainda não abriu para agendamento.
  ctaLabel: "Agendar avaliação",

  // Segundo rótulo de CTA, para quem quer tirar dúvidas antes de agendar. Intenção
  // diferente do CTA principal - use sempre este mesmo texto onde aparecer.
  secondaryCtaLabel: "Fale com nossa equipe",
} as const;

export function buildWhatsappUrl(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}

export function buildInquiryWhatsappUrl() {
  return buildWhatsappUrl(siteConfig.whatsapp.inquiryMessage);
}
