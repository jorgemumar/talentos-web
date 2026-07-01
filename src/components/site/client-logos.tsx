import { Reveal } from "@/components/site/reveal";

// Roster de clientes en texto (sin logos): empresa · ejecutivo · industria.
// Industrias inferidas — confirmar/ajustar con el cliente.
const CLIENTS = [
  { company: "3V Estrategia", exec: "Rodolfo Valladolid", industry: "Consultoría" },
  { company: "Multicable", exec: "Miguel Oyervides Cárdenas", industry: "Telecomunicaciones" },
  { company: "CL Consultores", exec: "Edgar Cuevas", industry: "Servicios contables, fiscales y administrativos" },
  { company: "VAR Bookkeeping", exec: "Juan Carlos Hernández", industry: "Bookkeeping y servicios financieros" },
  { company: "Dental del Real", exec: "Francisco del Real", industry: "Salud dental" },
  { company: "Aldora", exec: "Fernando González", industry: "Software y tecnología" },
];

export function ClientLogos() {
  return (
    <section className="border-t border-noche/10 bg-paper">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-8">
        <Reveal
          as="p"
          className="text-center text-[0.75rem] font-bold uppercase tracking-[0.18em] text-muted-ink"
        >
          Han confiado en nosotros
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((c, i) => (
            <Reveal
              key={c.company}
              delay={0.05 * i}
              className="flex flex-col items-center text-center"
            >
              <div className="font-heading text-lg font-semibold text-noche">
                {c.company}
              </div>
              <div className="mt-1 text-sm text-muted-ink">{c.exec}</div>
              <div className="mt-1.5 max-w-[16rem] text-[0.8rem] font-semibold text-electric">
                {c.industry}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
