// Datos de la sección Headhunting Estratégico (#hh)

export type Step = {
  n: string;
  title: string;
  desc: string;
  free?: boolean;
};

export type Level = {
  id: "agil" | "estr" | "exec";
  tab: string;
  sub: string;
  desc: string; // puede incluir <b>…</b> destacado
  metaTitle: string;
  metaGuarantee: string;
  steps: Step[];
};

export const LEVELS: Level[] = [
  {
    id: "agil",
    tab: "Nivel A · Ágil",
    sub: "Coordinadores · supervisores · comercial",
    desc: "El escalón de entrada. Búsqueda activa y evaluación estructurada para mandos intermedios y perfiles comerciales, con velocidad de firma boutique. **Empezamos construyendo el puesto contigo, y ese primer paso no tiene costo.**",
    metaTitle: "Shortlist en 10–15 días",
    metaGuarantee: "Garantía hasta 60 días*",
    steps: [
      {
        n: "0",
        title: "Lo construimos contigo",
        desc: "Assessment de vacante remoto: definimos el puesto a profundidad y acordamos el Scorecard.",
        free: true,
      },
      {
        n: "1",
        title: "Lo buscamos",
        desc: "Búsqueda activa en LinkedIn, base propia y redes, apoyada por agentes de IA.",
      },
      {
        n: "2",
        title: "Lo evaluamos",
        desc: "Scorecard ponderado + entrevista consultiva. Filtro eliminatorio.",
      },
      {
        n: "3",
        title: "Te presentamos a los mejores",
        desc: "3–5 finalistas con ficha por candidato y matriz comparativa.",
      },
      {
        n: "4",
        title: "Te acompañamos al cierre",
        desc: "Acompañamiento de oferta y seguimiento durante 30 días.",
      },
    ],
  },
  {
    id: "estr",
    tab: "Nivel B · Estratégico",
    sub: "Gerencias · jefaturas · managers",
    desc: "Para gerencias y dirección media, donde una decisión equivocada cuesta trimestres. Evaluación profunda, mapeo de mercado y un Paquete de Transferencia que asegura que el líder aterrice bien, no solo que firme.",
    metaTitle: "Metodología consultiva completa",
    metaGuarantee: "Garantía hasta 90 días*",
    steps: [
      {
        n: "0",
        title: "Lo construimos contigo",
        desc: "Intake estratégico de la posición y Scorecard ponderado a la medida del rol.",
        free: true,
      },
      {
        n: "1",
        title: "Mapeo de mercado",
        desc: "Universo de talento, benchmark salarial y empresas objetivo de la posición.",
      },
      {
        n: "2",
        title: "Sourcing tecnificado",
        desc: "Búsqueda multifuente + agentes de IA + outreach a talento que hoy no busca.",
      },
      {
        n: "3",
        title: "Evaluación consultiva profunda",
        desc: "Entrevistas por competencias, ajuste cultural y validación de referencias.",
      },
      {
        n: "4",
        title: "Shortlist ejecutivo",
        desc: "Finalistas con evidencia, score y recomendación. Trazabilidad total.",
      },
      {
        n: "5",
        title: "Coordinación del proceso",
        desc: "Agenda de paneles, feedback estructurado y gestión de la decisión.",
      },
      {
        n: "6",
        title: "Cierre + Paquete de Transferencia",
        desc: "Objetivos a 30/60/90 días y plan de integración. El líder llega con ruta.",
      },
    ],
  },
  {
    id: "exec",
    tab: "Nivel C · Executive",
    sub: "Dirección · C-Level · consejo",
    desc: "Para dirección, C-Level y consejo. Búsqueda confidencial y **assessment de liderazgo a profundidad**: aquí el cómo importa tanto como el quién, porque el costo del error se mide en años.",
    metaTitle: "Assessment + due diligence",
    metaGuarantee: "Garantía hasta 120 días*",
    steps: [
      {
        n: "0",
        title: "Lo construimos contigo",
        desc: "Intake con Dirección o Consejo: definimos cómo se ve el éxito a 12–18 meses.",
        free: true,
      },
      {
        n: "1",
        title: "Search confidencial",
        desc: "Mapeo discreto y aproximación directa a talento off-market que no aparece en bolsas.",
      },
      {
        n: "2",
        title: "Assessment ejecutivo",
        desc: "Entrevistas por competencias, assessment de liderazgo, casos de decisión y psicometría.",
      },
      {
        n: "3",
        title: "Due diligence",
        desc: "Referencias 360°, verificación de trayectoria y lectura de riesgo reputacional.",
      },
      {
        n: "4",
        title: "Comité de evaluación",
        desc: "Dossier ejecutivo por finalista. Los tres socios deliberan contigo antes de la oferta.",
      },
      {
        n: "5",
        title: "Oferta y negociación",
        desc: "Estructura de compensación, manejo de contraoferta y plan de transición.",
      },
      {
        n: "6",
        title: "Onboarding ejecutivo",
        desc: "Integración a 30/60/90 días conectada con Gestión del Desempeño. Acompañamiento sostenido.",
      },
    ],
  },
];

export type Deliverable = {
  n: string;
  title: string;
  detail: string;
};

export const DELIVERABLES: Deliverable[] = [
  {
    n: "01",
    title: "Scorecard del puesto",
    detail:
      "Criterios y pesos firmados contigo antes de iniciar la búsqueda. El estándar de evaluación queda definido desde el día cero.",
  },
  {
    n: "02",
    title: "Reporte de mercado",
    detail:
      "Mapa salarial y de talento de la posición: quién la paga, cuánto y dónde vive ese perfil hoy.",
  },
  {
    n: "03",
    title: "Shortlist ejecutivo",
    detail:
      "3–5 finalistas con embudo trazable y matriz comparativa para decidir lado a lado.",
  },
  {
    n: "04",
    title: "Ficha evaluativa",
    detail:
      "Síntesis por finalista: evidencia, score ponderado y una recomendación clara, no una opinión.",
  },
  {
    n: "05",
    title: "Acompañamiento de oferta",
    detail:
      "Apoyo en la negociación y el cierre del candidato elegido, hasta que firma.",
  },
  {
    n: "06",
    title: "Trazabilidad total",
    detail:
      "Cada candidato que avanza, y cada uno que sale, queda explicado. Cero cajas negras.",
  },
];

export const SCORECARD = {
  title: "Scorecard · Gerente Comercial",
  status: "Finalista",
  criteria: [
    { label: "Técnico", weight: "peso 35%", value: 88, accent: "electric" },
    { label: "Liderazgo", weight: "peso 25%", value: 80, accent: "electric" },
    { label: "Cultural", weight: "peso 20%", value: 76, accent: "electric" },
    { label: "Riesgo", weight: "peso 20%", value: 90, accent: "menta" },
  ],
  score: 83,
  threshold: 75,
} as const;
