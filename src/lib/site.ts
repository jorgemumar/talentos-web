// Configuración compartida del sitio TalentOS

export const WHATSAPP_NUMERO = "5215659746351";
export const WHATSAPP_MSG =
  "Hola TalentOS, quiero hablar con alguien sobre el talento de mi empresa.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  WHATSAPP_MSG,
)}`;

export const LINKEDIN_URL = "https://www.linkedin.com/company/talentos";
export const SITIO_URL = "https://talentos.work";

export const NAV_ITEMS = [
  { label: "El sistema", href: "#sistema" },
  { label: "Headhunting", href: "#hh" },
  { label: "Servicios", href: "#diferenciadores" },
  { label: "Por qué invertir", href: "#costo" },
] as const;

export type HeroStat = {
  value: number;
  suffix?: string;
  label: string;
  detail: string;
};

export const HERO_STATS: HeroStat[] = [
  {
    value: 3,
    label: "servicios",
    detail: "integrados en un solo ciclo de talento",
  },
  {
    value: 10,
    label: "agentes IA",
    detail: "aceleran el proceso, no reemplazan el criterio",
  },
  {
    value: 3,
    label: "socios",
    detail: "firman cada shortlist · nunca hablas con un junior",
  },
];
