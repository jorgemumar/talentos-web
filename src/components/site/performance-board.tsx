"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const TILES = [
  { label: "Cumplimiento", value: "92%", menta: true },
  { label: "Clima", value: "78", menta: false },
  { label: "Retención", value: "94%", menta: true },
];

const BARS = [
  { area: "Comercial", h: 62, menta: false },
  { area: "Ops", h: 80, menta: false },
  { area: "Finanzas", h: 95, menta: true },
  { area: "RH", h: 55, menta: false },
  { area: "TI", h: 72, menta: false },
  { area: "Dir", h: 88, menta: true },
];

/** Tablero de Desempeño ilustrativo (mock-up de la sección GDI). */
export function PerformanceBoard() {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-noche/10 bg-white shadow-[0_30px_70px_-34px_rgba(13,31,78,0.55)]">
        {/* Barra de ventana */}
        <div className="flex items-center gap-3 border-b border-noche/10 bg-paper px-4 py-3">
          <div className="flex gap-1.5">
            <i className="size-2.5 rounded-full bg-noche/15" />
            <i className="size-2.5 rounded-full bg-noche/15" />
            <i className="size-2.5 rounded-full bg-noche/15" />
          </div>
          <span className="text-[0.8rem] font-medium text-muted-ink">
            Tablero de Desempeño · Q2
          </span>
        </div>

        {/* Cuerpo */}
        <div className="p-6">
          {/* Tiles */}
          <div className="mb-5 grid grid-cols-3 gap-2.5">
            {TILES.map((t) => (
              <div
                key={t.label}
                className="rounded-[11px] border border-noche/10 bg-paper p-3"
              >
                <div className="text-[0.66rem] font-bold uppercase tracking-[0.08em] text-muted-ink">
                  {t.label}
                </div>
                <div
                  className={cn(
                    "mt-0.5 font-heading text-2xl",
                    t.menta ? "text-menta-ink" : "text-noche",
                  )}
                >
                  {t.value}
                </div>
              </div>
            ))}
          </div>

          {/* Avance por área */}
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[0.86rem] font-semibold text-noche">
              Avance de objetivos por área
            </span>
            <span className="text-[0.74rem] text-muted-ink">cascada</span>
          </div>

          <div className="flex h-20 items-end gap-2 pt-1.5">
            {BARS.map((b, i) => (
              <motion.div
                key={b.area}
                initial={{ height: 0 }}
                animate={{ height: `${b.h}%` }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "flex-1 rounded-t-md",
                  b.menta
                    ? "bg-gradient-to-t from-menta/50 to-menta"
                    : "bg-gradient-to-t from-electric/50 to-electric",
                )}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[0.72rem] text-muted-ink">
            {BARS.map((b) => (
              <span key={b.area}>{b.area}</span>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-[0.74rem] italic text-muted-ink">
        Vista ilustrativa del tablero — métricas en menta indican desempeño
        positivo.
      </p>
    </div>
  );
}
