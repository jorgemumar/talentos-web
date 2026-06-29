"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { DhLevelMock } from "@/components/site/dh-level-mocks";

const LEVELS = [
  {
    name: "Básico",
    desc: "Diagnóstico + activación y primeras sesiones DEAR.",
  },
  {
    name: "Intermedio",
    desc: "Programa estructurado con liderazgo y accountability continuo.",
  },
  {
    name: "Avanzado",
    desc: "Sistema completo + sucesión, integrado con Gestión del Desempeño.",
  },
];

export function DhLevels() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
      {/* Niveles (hover / click / focus) */}
      <div className="flex flex-col gap-3">
        {LEVELS.map((l, i) => {
          const on = i === active;
          return (
            <button
              key={l.name}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-pressed={on}
              className={cn(
                "group relative overflow-hidden rounded-[14px] border p-5 text-left transition-all duration-300",
                on
                  ? "border-coral/40 bg-coral/[0.04] shadow-[0_18px_40px_-26px_rgba(232,80,58,0.5)]"
                  : "border-noche/10 bg-white hover:border-noche/25",
              )}
            >
              {/* Acento lateral del activo */}
              <span
                className={cn(
                  "absolute inset-y-0 left-0 w-1 rounded-r bg-coral transition-opacity",
                  on ? "opacity-100" : "opacity-0",
                )}
              />
              <div className="flex items-center justify-between">
                <span className="text-[0.98rem] font-bold text-noche">
                  {l.name}
                </span>
                <span
                  className={cn(
                    "text-[0.68rem] font-semibold uppercase tracking-[0.1em] transition-opacity",
                    on ? "text-coral opacity-100" : "opacity-0",
                  )}
                >
                  Viendo →
                </span>
              </div>
              <p className="mt-1 text-[0.88rem] leading-snug text-muted-ink">
                {l.desc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Mock-up del nivel activo (re-anima al cambiar) */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="lg:sticky lg:top-24"
      >
        <DhLevelMock index={active} />
      </motion.div>
    </div>
  );
}
