import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { ServiceCycle } from "@/components/site/service-cycle";

export function Sistema() {
  return (
    <section
      id="sistema"
      className="relative isolate overflow-hidden bg-noche text-white"
    >
      {/* Glow electric superior (réplica de .sistema::before) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 60% at 50% -10%, rgba(27,79,220,0.3), transparent 60%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 lg:py-28">
        {/* Encabezado de sección */}
        <div className="mb-12 max-w-[740px] lg:mb-14">
          <Reveal>
            <Eyebrow onDark>El sistema operativo</Eyebrow>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.08}
            className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.1] text-white text-balance"
          >
            Un ciclo, no un catálogo.
          </Reveal>
          <Reveal
            as="p"
            delay={0.16}
            className="mt-4 max-w-[640px] text-pretty leading-relaxed text-white/70 sm:text-[1.08rem]"
          >
            Tres servicios diseñados para alimentarse entre sí. Lo que el
            headhunting trae, la gestión del desempeño lo mide; lo que la
            medición revela, el desarrollo humano lo cierra.
          </Reveal>
        </div>

        {/* Las 3 cards — ciclo interactivo (alimenta a la siguiente) */}
        <ServiceCycle />

        {/* Cierre integrador */}
        <Reveal
          delay={0.4}
          className="mt-10 rounded-[14px] border border-menta/25 bg-menta/[0.08] px-6 py-5 leading-relaxed text-white/90"
        >
          <b className="font-bold text-menta">El dato sigue a la persona.</b>{" "}
          Cada servicio enriquece al siguiente, de modo que las decisiones de
          talento se toman sobre evidencia acumulada, no sobre intuición
          fragmentada.
        </Reveal>
      </div>
    </section>
  );
}
