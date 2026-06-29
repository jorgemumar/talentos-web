import { Star } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { LevelTabs } from "@/components/site/level-tabs";
import { Deliverables } from "@/components/site/deliverables";

const WIN_THEMES = [
  {
    kicker: "Decisiones, no CVs",
    title: "Evidencia ponderada",
    desc: "Un Scorecard de 12 criterios con pesos acordados contigo y filtros eliminatorios. El sí o el no quedan explicados.",
  },
  {
    kicker: "Velocidad real",
    title: "Habilitado por IA",
    desc: "10 agentes de IA aceleran sourcing, outreach y evaluación inicial. Reducen el tiempo del consultor, nunca su criterio.",
  },
  {
    kicker: "Los socios firman",
    title: "Nunca un junior",
    desc: "Tres socios con más de 15 años de experiencia validan cada shortlist. La cuenta no se delega.",
  },
];

export function Headhunting() {
  return (
    <section id="hh" className="border-t border-noche/10 bg-paper">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 lg:py-28">
        {/* Encabezado */}
        <div className="max-w-[780px]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-lg bg-coral px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-white">
              <Star className="size-3 fill-current" />
              Nuestra línea insignia
            </span>
          </Reveal>

          <Reveal delay={0.06} className="mt-5 flex items-center gap-4">
            <span className="font-heading text-[4.6rem] font-bold leading-[0.8] text-noche/10">
              01
            </span>
            <span className="text-[0.74rem] font-bold uppercase tracking-[0.18em] text-electric">
              Atraer
            </span>
          </Reveal>

          <Reveal
            as="h2"
            delay={0.12}
            className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.1] text-noche"
          >
            Headhunting Estratégico
          </Reveal>

          <Reveal
            as="p"
            delay={0.18}
            className="mt-4 max-w-[680px] text-pretty text-[1.12rem] leading-relaxed text-ink"
          >
            Una mala contratación en una posición clave no se mide en el fee que
            pagaste por buscarla: se mide en los meses que tu equipo perdió
            cargando el hueco. Nuestro trabajo es que esa decisión la tomes con
            evidencia, rápido, y sobre la persona correcta.
          </Reveal>

          <Reveal as="p" delay={0.24} className="mt-4 max-w-[680px] text-pretty leading-relaxed text-muted-ink">
            No entregamos CVs: entregamos decisiones. Cada finalista llega
            evaluado, con un{" "}
            <b className="font-semibold text-noche">Paquete de Transferencia</b>{" "}
            que detalla competencias, objetivos a 30/60/90 días y plan de
            integración. Tres niveles según lo que está en juego.
          </Reveal>
        </div>

        {/* Win themes */}
        <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-3">
          {WIN_THEMES.map((w, i) => (
            <Reveal
              key={w.title}
              delay={0.1 + i * 0.08}
              className="rounded-[14px] border border-noche/10 bg-white p-6"
            >
              <div className="font-heading text-[0.95rem] text-electric">
                {w.kicker}
              </div>
              <h4 className="mt-2 text-lg font-semibold text-noche">
                {w.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-ink">
                {w.desc}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Tabs de niveles A/B/C */}
        <LevelTabs />

        {/* Nota de garantía */}
        <Reveal as="p" className="mt-8 text-[0.82rem] italic text-muted-ink">
          * La garantía aplica dentro del periodo indicado: si el candidato deja
          el puesto por causas no imputables a tu empresa, reponemos la búsqueda
          sin costo.
        </Reveal>

        {/* Entregables + Scorecard */}
        <Deliverables />
      </div>
    </section>
  );
}
