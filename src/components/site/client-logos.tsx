import { Reveal } from "@/components/site/reveal";

// PLACEHOLDER: reemplazar por los logos reales de clientes.
// Ideal: subir SVG/PNG a /public y renderizarlos con <Image />.
const LOGOS = ["Nordia", "Vantiq", "Meridian", "Kaizen&Co", "Solvia", "Aventa"];

export function ClientLogos() {
  return (
    <section className="border-t border-noche/10 bg-paper">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-12 sm:px-8">
        <Reveal
          as="p"
          className="text-center text-[0.75rem] font-bold uppercase tracking-[0.18em] text-muted-ink"
        >
          Empresas que confían en TalentOS
        </Reveal>

        <Reveal
          delay={0.08}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14"
        >
          {LOGOS.map((name) => (
            <span
              key={name}
              className="font-heading text-xl font-semibold tracking-tight text-noche/30 transition-colors duration-200 hover:text-noche/60"
            >
              {name}
            </span>
          ))}
        </Reveal>

        <Reveal
          as="p"
          delay={0.16}
          className="mt-7 text-center text-[0.72rem] italic text-muted-ink/70"
        >
          Logos ilustrativos — pendientes de reemplazar con clientes reales.
        </Reveal>
      </div>
    </section>
  );
}
