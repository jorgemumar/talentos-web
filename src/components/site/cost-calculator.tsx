"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const MIN = 15000;
const MAX = 250000;
const STEP = 5000;

const fmt = (n: number) => "$" + Math.round(n).toLocaleString("es-MX");

export function CostCalculator() {
  const [sal, setSal] = useState(40000);
  const pct = ((sal - MIN) / (MAX - MIN)) * 100;

  const costs = [
    {
      h: "Vacante abierta",
      n: `${fmt(sal)}–${fmt(sal * 1.5)}`,
      s: "por mes · productividad no realizada",
    },
    {
      h: "Proceso lento",
      n: `${fmt(sal)}–${fmt(sal * 1.5)}`,
      s: "por cada mes extra de búsqueda",
    },
    {
      h: "Contratación equivocada",
      n: `${fmt(sal * 6)}–${fmt(sal * 12)}`,
      s: "costo de reemplazo · una sola vez",
    },
    {
      h: "Decidir sin evidencia",
      n: "Riesgo alto",
      s: "multiplica la probabilidad del costo de al lado",
      risk: true,
    },
  ];

  return (
    <div className="mt-9 overflow-hidden rounded-[20px] bg-noche p-8 text-white sm:p-10">
      {/* Cabecera + input */}
      <div className="grid items-center gap-9 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#ff8062]">
            Assessment · el costo de no decidir
          </div>
          <h3 className="mt-3 font-heading text-[clamp(1.5rem,2.6vw,2rem)] font-semibold">
            ¿Cuánto te cuesta no decidir bien?
          </h3>
          <p className="mt-3 leading-relaxed text-white/70">
            Mueve el sueldo del puesto y observa la exposición estimada. Son
            rangos de mercado para dar contexto; tu cifra real la calibramos
            contigo en el assessment.
          </p>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/[0.05] p-6">
          <label htmlFor="sal" className="text-[0.82rem] text-white/70">
            Sueldo mensual del puesto
          </label>
          <div className="mt-1.5 mb-4 flex items-baseline gap-2">
            <span className="font-heading text-[2.1rem] leading-none tabular-nums">
              {fmt(sal)}
            </span>
            <span className="text-[0.8rem] font-semibold text-white/55">MXN</span>
          </div>
          <input
            id="sal"
            type="range"
            min={MIN}
            max={MAX}
            step={STEP}
            value={sal}
            onChange={(e) => setSal(Number(e.target.value))}
            aria-label="Sueldo mensual del puesto"
            className="h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.4)] [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            style={{
              background: `linear-gradient(to right, #1b4fdc 0%, #1b4fdc ${pct}%, rgba(255,255,255,0.15) ${pct}%, rgba(255,255,255,0.15) 100%)`,
            }}
          />
          <div className="mt-2.5 flex justify-between text-[0.74rem] text-white/45">
            <span>$15K</span>
            <span>$250K</span>
          </div>
        </div>
      </div>

      {/* Tarjetas de costo (se recalculan) */}
      <div className="mt-7 grid grid-cols-2 gap-3.5 lg:grid-cols-4">
        {costs.map((c) => (
          <div
            key={c.h}
            className={cn(
              "rounded-[13px] border border-white/[0.11] border-t-2 bg-white/[0.04] p-4",
              c.risk ? "border-t-coral" : "border-t-[#ff8062]",
            )}
          >
            <div className="text-[0.82rem] font-bold text-white/85">{c.h}</div>
            <div
              className={cn(
                "mt-2 font-heading text-[1.32rem] leading-[1.15] tabular-nums",
                c.risk ? "text-[#ff8062]" : "text-white",
              )}
            >
              {c.n}
            </div>
            <div className="mt-2 text-[0.78rem] text-white/55">{c.s}</div>
          </div>
        ))}
      </div>

      <p className="mt-5 max-w-[760px] text-[0.8rem] text-white/50">
        Supuestos: productividad no realizada ≈ 1–1.5× sueldo/mes · costo de
        reemplazo ≈ 0.5–1× sueldo anual. Cifras estimadas para ilustrar; el
        assessment completo lo hacemos sobre tus números reales.
      </p>
    </div>
  );
}
