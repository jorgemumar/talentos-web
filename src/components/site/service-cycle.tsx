"use client";

import { Fragment, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type Service = {
  verb: string;
  step: string;
  title: string;
  desc: string;
  flag?: boolean;
  flagtag?: string;
  rgb: string; // acento del card (alimenta a la siguiente)
  linkText?: string; // microcopy hacia la siguiente etapa
};

const SERVICIOS: Service[] = [
  {
    verb: "Atraer",
    step: "01",
    title: "Headhunting Estratégico",
    desc: "Atraemos al líder correcto con evaluación consultiva y un Paquete de Transferencia, no un CV suelto.",
    flag: true,
    flagtag: "Línea insignia · punto de entrada",
    rgb: "232,80,58",
    linkText: "Lo que atrae, se mide",
  },
  {
    verb: "Medir",
    step: "02",
    title: "Gestión del Desempeño Inteligente",
    desc: "Medimos su desempeño con metodología y agentes de IA: datos accionables, no encuestas de compromiso.",
    rgb: "27,79,220",
    linkText: "Lo que mide, se desarrolla",
  },
  {
    verb: "Desarrollar",
    step: "03",
    title: "Desarrollo Humano",
    desc: "Cerramos los gaps reales que detecta la medición con coaching y formación, metodología DEAR.",
    rgb: "0,201,167",
  },
];

export function ServiceCycle() {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-0">
      {SERVICIOS.map((s, i) => {
        const on = hovered === i;
        return (
          <Fragment key={s.step}>
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? undefined : { y: -6 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              onClick={() => setHovered(i)}
              className={cn(
                "group relative flex-1 rounded-[18px] border p-7 text-left outline-none transition-[box-shadow,border-color] duration-200 sm:p-8",
                s.flag
                  ? "border-coral/55 bg-gradient-to-b from-coral/[0.08] to-white/[0.03]"
                  : "border-white/10 bg-white/[0.04]",
              )}
              style={
                on
                  ? {
                      borderColor: `rgba(${s.rgb},0.65)`,
                      boxShadow: `0 0 0 1px rgba(${s.rgb},0.25), 0 22px 45px -18px rgba(${s.rgb},0.55)`,
                    }
                  : undefined
              }
            >
              <span className="absolute right-7 top-7 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white/40">
                {s.verb}
              </span>
              <div className="font-heading text-lg text-menta">{s.step}</div>
              <h3 className="mt-3 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">{s.desc}</p>
              {s.flagtag && (
                <span className="mt-4 inline-block rounded-md bg-coral/15 px-2.5 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-coral">
                  {s.flagtag}
                </span>
              )}
            </motion.button>

            {/* Conector: alimenta a la siguiente etapa */}
            {i < SERVICIOS.length - 1 && (
              <div className="relative flex shrink-0 items-center justify-center py-1 md:w-14 md:py-0">
                {/* Microcopy del enlace */}
                <motion.span
                  initial={false}
                  animate={{
                    opacity: on ? 1 : 0,
                    y: on ? 0 : reduce ? 0 : 4,
                  }}
                  transition={{ duration: 0.2 }}
                  className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-[2.5rem] whitespace-nowrap rounded-full border px-2.5 py-1 text-[0.66rem] font-semibold text-white"
                  style={{
                    background: `rgba(${s.rgb},0.22)`,
                    borderColor: `rgba(${s.rgb},0.45)`,
                  }}
                >
                  {s.linkText}
                </motion.span>

                {/* Flecha direccional (derecha en desktop, abajo en móvil) */}
                <motion.div
                  animate={on && !reduce ? { x: [0, 4, 0] } : { x: 0 }}
                  transition={
                    on
                      ? { duration: 1, ease: "easeInOut", repeat: Infinity }
                      : { duration: 0.2 }
                  }
                  className="rotate-90 md:rotate-0"
                >
                  <ArrowRight
                    className="size-5 transition-colors duration-200"
                    style={{
                      color: on ? `rgb(${s.rgb})` : "rgba(255,255,255,0.25)",
                    }}
                  />
                </motion.div>
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
