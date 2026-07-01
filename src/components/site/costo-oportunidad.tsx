import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { CostCalculator } from "@/components/site/cost-calculator";

const COSTS = [
  {
    title: "La vacante abierta",
    desc: "Cada semana sin cubrir una posición clave es productividad que no ocurre, equipo sobrecargado y oportunidades que se enfrían. El hueco trabaja en tu contra todos los días.",
  },
  {
    title: "La contratación equivocada",
    desc: "Reemplazar a alguien que no encajó cuesta varias veces su sueldo entre volver a buscar, capacitar y recomponer la moral del equipo. La evaluación profunda sale barata frente a repetir el error.",
  },
  {
    title: "El proceso lento",
    desc: "El mejor talento ya tiene trabajo. Cuando la búsqueda se alarga, el candidato que querías firma en otro lado. La velocidad decide entre contratarlo o verlo irse.",
  },
  {
    title: "Decidir sin evidencia",
    desc: "Elegir por intuición o por una pila de CVs es apostar con información incompleta. Un Scorecard ponderado no garantiza el acierto, pero elimina las razones equivocadas para decir que sí.",
  },
];

export function CostoOportunidad() {
  return (
    <section id="costo" className="border-t border-noche/10 bg-white">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 lg:py-28">
        {/* Encabezado */}
        <div className="mb-10 max-w-[740px]">
          <Reveal>
            <Eyebrow>El costo de no decidir</Eyebrow>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.08}
            className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.1] text-noche text-balance"
          >
            La silla vacía ya tiene precio.
          </Reveal>
          <Reveal
            as="p"
            delay={0.16}
            className="mt-4 max-w-[640px] text-pretty leading-relaxed text-muted-ink"
          >
            Antes de pensar en lo que cuesta una búsqueda, vale la pena ver lo
            que ya está costando el problema. Estos costos no aparecen en ninguna
            factura, pero se pagan igual.
          </Reveal>
        </div>

        {/* Costos invisibles */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {COSTS.map((c, i) => (
            <Reveal
              key={c.title}
              delay={0.08 * i}
              className="rounded-[14px] border border-noche/10 border-l-[3px] border-l-coral bg-paper p-6 transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_rgba(13,31,78,0.4)]"
            >
              <h3 className="text-lg font-semibold text-noche">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-ink">
                {c.desc}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Calculadora de costo de oportunidad */}
        <Reveal delay={0.1}>
          <CostCalculator />
        </Reveal>
      </div>
    </section>
  );
}
