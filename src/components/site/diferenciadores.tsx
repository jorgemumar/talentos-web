import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";

type Diff = {
  n: string;
  title: string;
  desc: string;
  menta?: boolean;
};

const DIFFS: Diff[] = [
  {
    n: "01",
    title: "Sistema integrado",
    desc: "Tres servicios que se alimentan entre sí. Un solo proveedor para todo el ciclo del talento, no piezas sueltas.",
  },
  {
    n: "02",
    title: "Metodología de 20 años",
    desc: "Marco consultivo probado en holdings, corporativos y empresas medianas, ahora potenciado con IA.",
  },
  {
    n: "03",
    title: "Ciclos continuos",
    desc: "Acompañamiento sostenido y mejora continua, no proyectos puntuales que terminan en un PDF.",
  },
  {
    n: "04",
    title: "Fortune 500 a precio PyME",
    desc: "Eficiencia tecnológica que pone herramientas de gran corporativo al alcance de empresas en crecimiento.",
  },
  {
    n: "05",
    title: "Escala por tecnología",
    desc: "Crecemos con automatización e IA, no contratando a decenas de reclutadores. Así mantenemos la atención cercana y el costo accesible a medida que crecemos.",
  },
  {
    n: "+",
    title: "Habilitado por IA, dirigido por personas",
    desc: "La tecnología acelera; el criterio senior decide. Esa mezcla es lo difícil de copiar.",
    menta: true,
  },
];

export function Diferenciadores() {
  return (
    <section
      id="diferenciadores"
      className="relative isolate overflow-hidden border-t border-white/10 bg-noche text-white"
    >
      {/* Glow electric superior-izquierdo (réplica de .diff::before) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 12% 0, rgba(27,79,220,0.25), transparent 55%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 lg:py-28">
        {/* Encabezado */}
        <div className="mb-12 max-w-[740px] lg:mb-14">
          <Reveal>
            <Eyebrow onDark>Por qué TalentOS</Eyebrow>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.08}
            className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.1] text-white text-balance"
          >
            Cinco diferencias que se notan.
          </Reveal>
        </div>

        {/* Grid de diferenciadores */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFS.map((d, i) => (
            <Reveal
              key={d.n}
              delay={0.06 * i}
              className={`rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                d.menta
                  ? "border-menta/30 bg-menta/[0.06] hover:border-menta/55"
                  : "border-white/12 bg-white/[0.04] hover:border-white/30"
              }`}
            >
              <div
                className={`font-heading text-[1.6rem] leading-none ${
                  d.menta ? "text-menta" : "text-[#ff8062]"
                }`}
              >
                {d.n}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{d.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {d.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
