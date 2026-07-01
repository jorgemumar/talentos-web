"use client";

import { motion } from "motion/react";
import {
  Sparkles,
  RefreshCw,
  Check,
  Circle,
  Loader,
} from "lucide-react";

import { cn } from "@/lib/utils";

/* ── Chrome de ventana compartido (idéntico al resto de mock-ups) ── */
function MockWindow({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-noche/10 bg-white shadow-[0_30px_70px_-34px_rgba(13,31,78,0.55)]">
        <div className="flex items-center gap-3 border-b border-noche/10 bg-paper px-4 py-3">
          <div className="flex gap-1.5">
            <i className="size-2.5 rounded-full bg-noche/15" />
            <i className="size-2.5 rounded-full bg-noche/15" />
            <i className="size-2.5 rounded-full bg-noche/15" />
          </div>
          <span className="text-[0.8rem] font-medium text-muted-ink">
            {title}
          </span>
        </div>
        <div className="p-6">{children}</div>
      </div>
      <p className="mt-3 text-center text-[0.74rem] italic text-muted-ink">
        {caption}
      </p>
    </div>
  );
}

/* ── PILAR 01 · Metodología → marco de 4 dimensiones + PVAR ── */
function MockMetodologia() {
  const dims = [
    { label: "Resultados", weight: 40 },
    { label: "Competencias", weight: 30 },
    { label: "Valores", weight: 20 },
    { label: "Desarrollo", weight: 10 },
  ];
  return (
    <MockWindow
      title="Marco de evaluación · 4 dimensiones"
      caption="Vista ilustrativa del marco — dimensiones, pesos y cálculo de PVAR."
    >
      <div className="mb-2 flex items-center justify-between text-[0.66rem] font-bold uppercase tracking-[0.08em] text-muted-ink">
        <span>Dimensión</span>
        <span>Peso · escala 1–5</span>
      </div>
      <div className="space-y-3">
        {dims.map((d, i) => (
          <div key={d.label} className="flex items-center gap-3">
            <span className="w-28 shrink-0 text-[0.88rem] font-medium text-ink">
              {d.label}
            </span>
            <div className="h-2 flex-1 overflow-hidden rounded-md bg-noche/[0.08]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${d.weight}%` }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-md bg-electric"
              />
            </div>
            <span className="w-9 text-right text-[0.82rem] font-bold text-noche">
              {d.weight}%
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between rounded-xl bg-menta/[0.07] px-4 py-3.5">
        <div>
          <div className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-muted-ink">
            Pago Variable por Resultados
          </div>
          <div className="text-[0.78rem] text-ink">
            Score ponderado 4.2 / 5
          </div>
        </div>
        <div className="text-right">
          <div className="font-heading text-[1.6rem] leading-none text-menta-ink">
            92%
          </div>
          <div className="text-[0.68rem] text-muted-ink">del bono objetivo</div>
        </div>
      </div>
    </MockWindow>
  );
}

/* ── PILAR 02 · Tecnología → People Analytics + ciclo + insight IA ── */
function MockTecnologia() {
  const cycle = ["Objetivos", "Evaluación", "Calibración"];
  return (
    <MockWindow
      title="People Analytics · Ciclo automatizado"
      caption="Vista ilustrativa de People Analytics — ciclos automáticos e insights de IA."
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-electric/10 px-2.5 py-1 text-[0.72rem] font-bold text-electric">
          <RefreshCw className="size-3" />
          Ciclo Q2 · automatizado
        </span>
        <span className="text-[0.74rem] text-muted-ink">Cobertura 100%</span>
      </div>

      <div className="mb-5 flex items-center gap-1.5">
        {cycle.map((c, i) => (
          <div key={c} className="flex flex-1 items-center gap-1.5">
            <span className="flex-1 rounded-lg border border-noche/10 bg-paper py-2 text-center text-[0.76rem] font-semibold text-noche">
              {c}
            </span>
            {i < cycle.length - 1 && (
              <span className="text-muted-ink">→</span>
            )}
          </div>
        ))}
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2.5">
        {[
          { k: "Ciclos / año", v: "4 · auto" },
          { k: "Datos procesados", v: "1.2K / mes" },
        ].map((m) => (
          <div key={m.k} className="rounded-[11px] border border-noche/10 bg-paper p-3">
            <div className="text-[0.66rem] font-bold uppercase tracking-[0.08em] text-muted-ink">
              {m.k}
            </div>
            <div className="mt-0.5 font-heading text-lg text-noche">{m.v}</div>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-2.5 rounded-xl border border-menta/25 bg-menta/[0.07] px-3.5 py-3">
        <Sparkles className="mt-0.5 size-4 shrink-0 text-menta-ink" />
        <p className="text-[0.84rem] leading-snug text-ink">
          <b className="font-semibold text-menta-ink">Insight IA · </b>
          Riesgo de rotación en Comercial al alza. Sugerido: plan de retención
          para 3 perfiles clave este trimestre.
        </p>
      </div>
    </MockWindow>
  );
}

/* ── PILAR 03 · Consultoría → acompañamiento + timeline ── */
function MockConsultoria() {
  const phases = [
    { label: "Diseño", note: "Sem. 1–3", state: "done" as const },
    { label: "Implementación", note: "Sem. 4–9", state: "now" as const },
    { label: "Calibración", note: "Sem. 10–12", state: "next" as const },
  ];
  return (
    <MockWindow
      title="Acompañamiento · Consultor senior"
      caption="Vista ilustrativa del acompañamiento — diseño, implementación y calibración."
    >
      <div className="mb-5 flex items-center gap-3 rounded-xl border border-noche/10 bg-paper px-3.5 py-3">
        <span className="grid size-10 place-items-center rounded-xl bg-noche font-heading text-sm font-bold text-white">
          C.M.
        </span>
        <div className="flex-1">
          <div className="text-[0.9rem] font-semibold text-noche">
            Consultor senior asignado
          </div>
          <div className="text-[0.78rem] text-muted-ink">
            15+ años · acompañamiento dedicado
          </div>
        </div>
      </div>

      <div className="relative pl-1">
        <span className="absolute left-[9px] top-3 bottom-3 w-px bg-noche/10" />
        <div className="space-y-4">
          {phases.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="relative flex items-center gap-3.5"
            >
              <span
                className={cn(
                  "relative z-10 grid size-[18px] shrink-0 place-items-center rounded-full ring-2 ring-white",
                  p.state === "done" && "bg-menta text-white",
                  p.state === "now" && "bg-electric text-white",
                  p.state === "next" && "bg-noche/15 text-noche/50",
                )}
              >
                {p.state === "done" && <Check className="size-2.5" strokeWidth={3.5} />}
                {p.state === "now" && <Loader className="size-2.5" />}
                {p.state === "next" && <Circle className="size-2" />}
              </span>
              <div className="flex flex-1 items-center justify-between">
                <span
                  className={cn(
                    "text-[0.9rem] font-semibold",
                    p.state === "next" ? "text-muted-ink" : "text-noche",
                  )}
                >
                  {p.label}
                </span>
                <span className="text-[0.74rem] text-muted-ink">{p.note}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MockWindow>
  );
}

/* ── PILAR 04 · Cambio → adopción por área + uso real vs archivado ── */
function MockCambio() {
  const areas = [
    { label: "Dirección", v: 92 },
    { label: "Comercial", v: 88 },
    { label: "Operaciones", v: 79 },
    { label: "Recursos H.", v: 71 },
  ];
  return (
    <MockWindow
      title="Adopción del sistema · por área"
      caption="Vista ilustrativa de adopción — uso real del sistema, no archivado."
    >
      <div className="space-y-3">
        {areas.map((a, i) => (
          <div key={a.label} className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-[0.84rem] text-ink">{a.label}</span>
            <div className="h-2.5 flex-1 overflow-hidden rounded-md bg-noche/[0.08]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${a.v}%` }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={cn("h-full rounded-md", a.v >= 85 ? "bg-menta" : "bg-electric")}
              />
            </div>
            <span className="w-9 text-right text-[0.82rem] font-bold text-noche">
              {a.v}%
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5 border-t border-noche/10 pt-4">
        <div className="rounded-[11px] bg-menta/[0.08] p-3 text-center">
          <div className="font-heading text-2xl text-menta-ink">84%</div>
          <div className="text-[0.7rem] font-medium text-muted-ink">Uso real</div>
        </div>
        <div className="rounded-[11px] bg-noche/[0.04] p-3 text-center">
          <div className="font-heading text-2xl text-muted-ink">16%</div>
          <div className="text-[0.7rem] font-medium text-muted-ink">Archivado</div>
        </div>
      </div>
    </MockWindow>
  );
}

const PILLAR_MOCKS = [
  MockMetodologia,
  MockTecnologia,
  MockConsultoria,
  MockCambio,
];

/** Renderiza el mock-up del pilar activo (0–3). */
export function GdiPillarMock({ index }: { index: number }) {
  const Mock = PILLAR_MOCKS[index] ?? MockMetodologia;
  return <Mock />;
}
