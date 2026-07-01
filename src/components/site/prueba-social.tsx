import { Quote } from "lucide-react";

import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

// Métricas basadas en metodología (no en volumen histórico) — sostenibles
// para la firma. Confirmadas.
const METRICS = [
  { value: "12", label: "criterios en el Scorecard ponderado" },
  { value: "10–15 días", label: "a un shortlist evaluado" },
  { value: "hasta 120 días", label: "de garantía de permanencia", menta: true },
];

// Testimonios reales (nombre y empresa confirmados; cargos por confirmar).
const TESTIMONIALS = [
  {
    quote:
      "Trabajar con ellos es trabajar con pares. Entienden que una posición clave no se llena con un CV, se decide con criterio. Nos presentaron finalistas evaluados de verdad, no una lista para descartar.",
    name: "Rodolfo Valladolid",
    role: "Dirección",
    company: "3V Estrategia",
    initials: "RV",
  },
  {
    quote:
      "Necesitábamos cubrir un puesto operativo sin frenar la operación. La velocidad fue real y el proceso, ordenado de principio a fin. Supimos en todo momento en qué etapa íbamos.",
    name: "Miguel Oyervides Cárdenas",
    role: "Dirección General Adjunta",
    company: "Multicable",
    initials: "MO",
  },
  {
    quote:
      "Lo que más valoro es que cada decisión quedó explicada. Nada de cajas negras: sabíamos por qué avanzaba cada candidato y por qué salía otro. Eso da tranquilidad al contratar.",
    name: "Edgar Cuevas",
    role: "Dirección",
    company: "CL Consultores",
    initials: "EC",
  },
  {
    quote:
      "El talento contable bueno es escaso y caro de equivocarse. Nos ayudaron a elegir con evidencia y el que entró sigue con nosotros. La evaluación previa valió cada peso.",
    name: "Juan Carlos Hernández",
    role: "Dirección Comercial",
    company: "VAR Bookkeeping",
    initials: "JC",
  },
  {
    quote:
      "Profesionalizar al equipo dejó de ser una intención y se volvió un sistema. Hoy medimos y desarrollamos al personal con un método, no a ojo. Se nota en el día a día de la clínica.",
    name: "Francisco del Real",
    role: "Dirección",
    company: "Dental del Real",
    initials: "FR",
  },
  {
    quote:
      "Escalar tecnología exige el talento correcto en el momento correcto. Nos ayudaron a incorporar perfiles clave con evaluación seria, no a llenar vacantes. El sistema se nota en la calidad de quien entra.",
    name: "Fernando González",
    role: "Dirección Comercial",
    company: "Aldora",
    initials: "FG",
  },
];

export function PruebaSocial() {
  return (
    <section className="border-t border-noche/10 bg-white">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 lg:py-28">
        {/* Encabezado */}
        <div className="mb-12 max-w-[740px]">
          <Reveal>
            <Eyebrow>Prueba social</Eyebrow>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.08}
            className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.1] text-noche text-balance"
          >
            La evidencia habla por el sistema.
          </Reveal>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {METRICS.map((m, i) => (
            <Reveal
              key={m.label}
              delay={0.06 * i}
              className="rounded-2xl border border-noche/10 bg-paper p-7 text-center"
            >
              <div
                className={cn(
                  "font-heading text-[clamp(2rem,3.6vw,2.6rem)] font-semibold leading-none",
                  m.menta ? "text-[#0a9e85]" : "text-noche",
                )}
              >
                {m.value}
              </div>
              <div className="mt-2 text-sm font-medium text-muted-ink">
                {m.label}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Testimonios */}
        <div className="mt-5 flex flex-wrap justify-center gap-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={0.08 + i * 0.07}
              className="flex w-full flex-col rounded-2xl border border-noche/10 bg-white p-7 shadow-[0_20px_44px_-30px_rgba(13,31,78,0.35)] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <Quote className="size-6 text-coral/70" />
              <p className="mt-4 flex-1 text-pretty leading-relaxed text-ink">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-noche/10 pt-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-noche font-heading text-sm font-bold text-white">
                  {t.initials}
                </span>
                <div className="text-sm">
                  <div className="font-semibold text-noche">{t.name}</div>
                  <div className="text-muted-ink">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
