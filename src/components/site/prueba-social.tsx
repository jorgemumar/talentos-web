import { Quote } from "lucide-react";

import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

// PLACEHOLDER: métricas ilustrativas — reemplazar con resultados reales.
const METRICS = [
  { value: "+120", label: "posiciones colocadas" },
  { value: "14 días", label: "shortlist promedio" },
  { value: "94%", label: "permanencia a 12 meses", menta: true },
];

// PLACEHOLDER: testimonios ilustrativos — reemplazar con clientes reales
// (nombre, cargo y empresa verdaderos + su cita textual).
const TESTIMONIALS = [
  {
    quote:
      "Pasamos de improvisar contrataciones a decidir con evidencia. El primer líder que colocaron sigue con nosotros dos años después.",
    name: "Cliente A",
    role: "Dirección General",
    company: "Empresa mediana · ZMG",
    initials: "A",
  },
  {
    quote:
      "El shortlist llegó en dos semanas, evaluado y con plan de 30/60/90. No volvimos a ver un CV suelto.",
    name: "Cliente B",
    role: "Dirección de RH",
    company: "PyME en expansión",
    initials: "B",
  },
  {
    quote:
      "La medición de desempeño por fin se usa, no se archiva. La dirección toma decisiones con datos, no con intuición.",
    name: "Cliente C",
    role: "Gerencia General",
    company: "Corporativo regional",
    initials: "C",
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
                  "font-heading text-[clamp(2.2rem,4vw,2.8rem)] font-semibold leading-none",
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
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={0.1 + i * 0.08}
              className="flex flex-col rounded-2xl border border-noche/10 bg-white p-7 shadow-[0_20px_44px_-30px_rgba(13,31,78,0.35)]"
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

        <Reveal
          as="p"
          delay={0.3}
          className="mt-8 text-center text-[0.72rem] italic text-muted-ink/70"
        >
          Cifras y testimonios ilustrativos — pendientes de reemplazar con datos
          reales.
        </Reveal>
      </div>
    </section>
  );
}
