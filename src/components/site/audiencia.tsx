import { Building2, TrendingUp, Globe, type LucideIcon } from "lucide-react";

import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

type Audience = {
  icon: LucideIcon;
  title: string;
  desc: string;
  dark?: boolean;
};

const AUDIENCES: Audience[] = [
  {
    icon: Building2,
    title: "Empresas medianas",
    desc: "50 a 500 colaboradores que necesitan profesionalizar su talento sin perder agilidad.",
  },
  {
    icon: TrendingUp,
    title: "PyMEs en expansión",
    desc: "Negocios en crecimiento o reestructura, con contratación frecuente y apertura a la consultoría.",
  },
  {
    icon: Globe,
    title: "Base en ZMG, alcance nacional",
    desc: "Operamos desde Guadalajara y cubrimos todo México de forma remota y tecnificada, con la misma cercanía y velocidad. La distancia no resta.",
    dark: true,
  },
];

export function Audiencia() {
  return (
    <section id="audiencia" className="border-t border-noche/10 bg-paper">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 lg:py-28">
        {/* Encabezado */}
        <div className="mb-10 max-w-[740px]">
          <Reveal>
            <Eyebrow>Para quién</Eyebrow>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.08}
            className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.1] text-noche text-balance"
          >
            Hecho para empresas en crecimiento.
          </Reveal>
          <Reveal
            as="p"
            delay={0.16}
            className="mt-4 max-w-[640px] text-pretty leading-relaxed text-muted-ink"
          >
            Diseñado para organizaciones que ya no caben en lo improvisado, pero
            que tampoco quieren la rigidez ni el costo de una gran consultora
            tradicional.
          </Reveal>
        </div>

        {/* Perfiles */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {AUDIENCES.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal
                key={a.title}
                delay={0.1 + i * 0.08}
                className={cn(
                  "rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5",
                  a.dark
                    ? "border-white/10 bg-noche hover:shadow-[0_24px_50px_-28px_rgba(13,31,78,0.8)]"
                    : "border-noche/10 bg-white hover:shadow-[0_22px_44px_-26px_rgba(13,31,78,0.35)]",
                )}
              >
                <div
                  className={cn(
                    "mb-4 flex size-[42px] items-center justify-center rounded-[11px]",
                    a.dark ? "bg-menta/15 text-menta" : "bg-electric/10 text-electric",
                  )}
                >
                  <Icon className="size-5" strokeWidth={2} />
                </div>
                <h3
                  className={cn(
                    "text-lg font-semibold",
                    a.dark ? "text-white" : "text-noche",
                  )}
                >
                  {a.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    a.dark ? "text-white/70" : "text-muted-ink",
                  )}
                >
                  {a.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
