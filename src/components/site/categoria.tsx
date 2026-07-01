import { Check, X } from "lucide-react";

import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { TalentCycle } from "@/components/site/talent-cycle";

const NOT = [
  "Una agencia de reclutamiento",
  "Una empresa de RRHH o de staffing",
  "Cursos y evaluaciones que viven en silos",
];

export function Categoria() {
  return (
    <section id="categoria" className="border-t border-noche/10 bg-white">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Columna editorial */}
          <div>
            <Reveal>
              <Eyebrow>Otra categoría</Eyebrow>
            </Reveal>

            <Reveal
              as="h2"
              delay={0.08}
              className="mt-5 font-heading text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.12] text-noche text-balance"
            >
              No es reclutamiento.
              <br />
              Es infraestructura de talento.
            </Reveal>

            <Reveal
              as="p"
              delay={0.16}
              className="mt-5 max-w-lg text-pretty leading-relaxed text-muted-ink"
            >
              El talento de tu empresa no se resuelve comprando servicios
              sueltos —una búsqueda por aquí, un curso por allá—: se maneja como
              un sistema, donde cada etapa alimenta a la siguiente. Por eso
              TalentOS no encaja en las casillas de siempre.
            </Reveal>

            <ul className="mt-8 flex flex-col gap-4">
              {NOT.map((text, i) => (
                <Reveal as="li" key={text} delay={0.22 + i * 0.07} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                    <X className="size-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-[1.02rem] text-muted-ink line-through decoration-coral/50">
                    {text}
                  </span>
                </Reveal>
              ))}

              {/* La afirmación */}
              <Reveal
                as="li"
                delay={0.43}
                className="mt-2 flex items-start gap-3.5 rounded-xl border border-menta/30 bg-menta/[0.07] p-4"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-menta text-white">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-[1.02rem] font-semibold text-noche">
                  Un sistema integrado que atrae, mide y desarrolla a la misma
                  persona a lo largo de su ciclo
                </span>
              </Reveal>
            </ul>
          </div>

          {/* Columna del ciclo */}
          <TalentCycle />
        </div>
      </div>
    </section>
  );
}
