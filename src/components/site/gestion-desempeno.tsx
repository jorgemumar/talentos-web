import { Check } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { GdiPillars } from "@/components/site/gdi-pillars";
import { PerformanceBoard } from "@/components/site/performance-board";

const FEATURES = [
  "Objetivos en cascada (SMART) desde la dirección hasta cada colaborador.",
  "Evaluaciones 360°/180°, retroalimentación continua y cuadros de sucesión.",
];

export function GestionDesempeno() {
  return (
    <section id="gdi" className="border-t border-noche/10 bg-white">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 lg:py-28">
        {/* Encabezado */}
        <div className="max-w-[780px]">
          <Reveal className="flex items-center gap-4">
            <span className="font-heading text-[4.6rem] font-bold leading-[0.8] text-noche/10">
              02
            </span>
            <span className="text-[0.74rem] font-bold uppercase tracking-[0.18em] text-menta-ink">
              Medir
            </span>
          </Reveal>

          <Reveal
            as="h2"
            delay={0.08}
            className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.1] text-noche"
          >
            Gestión del Desempeño Inteligente
          </Reveal>

          <Reveal delay={0.14} className="mt-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-menta/30 bg-menta/[0.12] px-3 py-1.5 text-[0.72rem] font-bold tracking-[0.04em] text-menta-ink">
              <span className="size-1.5 rounded-full bg-menta" />
              Metodología + capa de IA
            </span>
          </Reveal>

          <Reveal
            as="p"
            delay={0.2}
            className="mt-4 max-w-[680px] text-pretty text-[1.12rem] leading-relaxed text-ink"
          >
            La mayoría de las empresas evalúan desempeño una vez al año, con
            formatos que se llenan por compromiso y que nadie vuelve a abrir.
            Nosotros lo convertimos en un sistema vivo: ciclos continuos, datos
            accionables y decisiones que la dirección general puede tomar con
            evidencia.
          </Reveal>
        </div>

        {/* Cuatro pilares interactivos, cada uno con su mock-up */}
        <Reveal delay={0.1} className="mt-12">
          <GdiPillars />
        </Reveal>

        {/* Capacidades transversales */}
        <div className="mt-12 grid grid-cols-1 gap-4 border-t border-noche/10 pt-8 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal as="li" key={f} delay={0.1 + i * 0.07} className="flex list-none items-start gap-3">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-menta/15 text-menta-ink">
                <Check className="size-3" strokeWidth={3} />
              </span>
              <span className="text-[0.98rem] text-ink">{f}</span>
            </Reveal>
          ))}
        </div>

        {/* Visión integrada — tablero coordinado de cierre */}
        <div className="mt-16 border-t border-noche/10 pt-14">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <Reveal className="flex justify-center">
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-menta-ink">
                Visión integrada
              </span>
            </Reveal>
            <Reveal
              as="h3"
              delay={0.08}
              className="mt-2 font-heading text-[clamp(1.4rem,2.6vw,2rem)] font-semibold text-noche"
            >
              Un solo tablero coordinado
            </Reveal>
            <Reveal as="p" delay={0.14} className="mt-3 text-pretty leading-relaxed text-muted-ink">
              Los cuatro pilares convergen en una sola lectura de dirección:
              cumplimiento, clima, retención y avance por área en tiempo real.
            </Reveal>
          </div>

          <Reveal delay={0.18} className="mx-auto max-w-3xl">
            <PerformanceBoard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
