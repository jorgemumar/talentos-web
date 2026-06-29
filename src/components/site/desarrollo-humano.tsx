import { Check } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { DhLevels } from "@/components/site/dh-levels";

const FEATURES = [
  "Diagnóstico, modelo humano objetivo y estándares de comportamiento.",
  "Sesiones DEAR estandarizadas, delegables con coaches certificados.",
  "12 KPIs de comportamiento en 4 categorías, revisados trimestralmente.",
  "Seguimiento de compromisos entre sesiones, no solo durante ellas.",
];

export function DesarrolloHumano() {
  return (
    <section id="dh" className="border-t border-noche/10 bg-paper">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 lg:py-28">
        {/* Encabezado */}
        <div className="max-w-[780px]">
          <Reveal className="flex items-center gap-4">
            <span className="font-heading text-[4.6rem] font-bold leading-[0.8] text-coral/20">
              03
            </span>
            <span className="text-[0.74rem] font-bold uppercase tracking-[0.18em] text-coral">
              Desarrollar
            </span>
          </Reveal>

          <Reveal
            as="h2"
            delay={0.08}
            className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.1] text-noche"
          >
            Desarrollo Humano
          </Reveal>

          <Reveal
            as="p"
            delay={0.16}
            className="mt-4 max-w-[680px] text-pretty text-[1.12rem] leading-relaxed text-ink"
          >
            Un curso suelto se olvida en una semana. Por eso cada programa de
            coaching y formación con metodología{" "}
            <b className="font-semibold text-noche">DEAR</b> arranca de un gap
            real que detectó la medición de desempeño, y se sostiene entre
            sesiones, no solo durante ellas.
          </Reveal>
        </div>

        {/* Capacidades transversales */}
        <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal as="li" key={f} delay={0.1 + i * 0.06} className="flex list-none items-start gap-3">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-coral/12 text-coral">
                <Check className="size-3" strokeWidth={3} />
              </span>
              <span className="text-[0.98rem] text-ink">{f}</span>
            </Reveal>
          ))}
        </div>

        {/* Tres niveles interactivos, cada uno con su mock-up */}
        <Reveal delay={0.1} className="mt-12 border-t border-noche/10 pt-12">
          <DhLevels />
        </Reveal>
      </div>
    </section>
  );
}
