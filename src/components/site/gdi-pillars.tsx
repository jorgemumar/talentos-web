"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { GdiPillarMock } from "@/components/site/gdi-pillar-mocks";

const PILLARS = [
  {
    n: "PILAR 01",
    title: "Metodología",
    desc: "Marco de 4 dimensiones con pesos, escalas y cálculo de Pago Variable por Resultados (PVAR).",
  },
  {
    n: "PILAR 02",
    title: "Tecnología",
    desc: "IA integrada, automatización de ciclos y People Analytics.",
  },
  {
    n: "PILAR 03",
    title: "Consultoría",
    desc: "Acompañamiento senior para diseño, implementación y calibración.",
  },
  {
    n: "PILAR 04",
    title: "Cambio",
    desc: "Modelo de adopción para que el sistema se use de verdad, no que se archive.",
  },
];

export function GdiPillars() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
      {/* Lista de pilares (hover / click) */}
      <div className="flex flex-col gap-3">
        {PILLARS.map((p, i) => {
          const on = i === active;
          return (
            <button
              key={p.n}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-pressed={on}
              className={cn(
                "group relative overflow-hidden rounded-[14px] border p-5 text-left transition-all duration-300",
                on
                  ? "border-electric/40 bg-electric/[0.04] shadow-[0_18px_40px_-26px_rgba(27,79,220,0.5)]"
                  : "border-noche/10 bg-white hover:border-noche/25",
              )}
            >
              {/* Acento lateral del activo */}
              <span
                className={cn(
                  "absolute inset-y-0 left-0 w-1 rounded-r bg-electric transition-opacity",
                  on ? "opacity-100" : "opacity-0",
                )}
              />
              <div className="flex items-center justify-between">
                <span className="text-[0.72rem] font-extrabold tracking-[0.04em] text-menta-ink">
                  {p.n}
                </span>
                <span
                  className={cn(
                    "text-[0.68rem] font-semibold uppercase tracking-[0.1em] transition-opacity",
                    on ? "text-electric opacity-100" : "opacity-0",
                  )}
                >
                  Viendo →
                </span>
              </div>
              <h4 className="mt-1 text-lg font-semibold text-noche">{p.title}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-ink">
                {p.desc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Mock-up del pilar activo (re-anima al cambiar) */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="lg:sticky lg:top-24"
      >
        <GdiPillarMock index={active} />
      </motion.div>
    </div>
  );
}
