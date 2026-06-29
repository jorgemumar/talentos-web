"use client";

import { motion } from "motion/react";
import {
  Check,
  Target,
  Calendar,
  ArrowLeftRight,
} from "lucide-react";

import { cn } from "@/lib/utils";

/* ── Chrome de ventana compartido ── */
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

/* ── BÁSICO · Diagnóstico + primeras sesiones DEAR ── */
function MockBasico() {
  const dims = [
    { label: "Comunicación", v: 68 },
    { label: "Feedback", v: 56 },
    { label: "Delegación", v: 44, gap: true },
  ];
  const sessions = [
    { s: "Sesión 1", topic: "Delegación efectiva", date: "12 may" },
    { s: "Sesión 2", topic: "Feedback continuo", date: "26 may" },
  ];
  return (
    <MockWindow
      title="Diagnóstico inicial · Arranque"
      caption="Vista ilustrativa del arranque — diagnóstico y primeras sesiones DEAR."
    >
      <div className="mb-1.5 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-muted-ink">
        Diagnóstico de comportamiento
      </div>
      <div className="space-y-2.5">
        {dims.map((d, i) => (
          <div key={d.label} className="flex items-center gap-3">
            <span className="w-28 shrink-0 text-[0.85rem] text-ink">{d.label}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-md bg-noche/[0.08]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${d.v}%` }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={cn("h-full rounded-md", d.gap ? "bg-coral" : "bg-electric")}
              />
            </div>
            <span className="w-9 text-right text-[0.8rem] font-bold text-noche">
              {(d.v / 20).toFixed(1)}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-coral/25 bg-coral/[0.06] px-3.5 py-3">
        <Target className="mt-0.5 size-4 shrink-0 text-coral" />
        <p className="text-[0.85rem] leading-snug text-ink">
          <b className="font-semibold text-coral">Gap detectado · </b>
          Delegación. Es el foco del programa, no un tema genérico.
        </p>
      </div>

      <div className="mt-4 space-y-2 border-t border-noche/10 pt-4">
        <div className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-muted-ink">
          Primeras sesiones DEAR agendadas
        </div>
        {sessions.map((s) => (
          <div key={s.s} className="flex items-center gap-2.5 text-[0.85rem]">
            <Calendar className="size-3.5 shrink-0 text-menta" />
            <span className="font-semibold text-noche">{s.s}</span>
            <span className="flex-1 text-ink">{s.topic}</span>
            <span className="text-muted-ink">{s.date}</span>
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

/* ── INTERMEDIO · Plan de Desarrollo DEAR (programa en marcha) ── */
function MockIntermedio() {
  const commitments = [
    { text: "Sesión de liderazgo · feedback aplicado", done: true },
    { text: "Conversación 1:1 con el equipo", done: true },
    { text: "Práctica de delegación pendiente", done: false },
  ];
  return (
    <MockWindow
      title="Plan de Desarrollo · DEAR"
      caption="Vista ilustrativa del seguimiento DEAR — el cambio ocurre entre sesiones."
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-noche">
          Compromisos de la semana
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-menta/15 px-2.5 py-1 text-[0.72rem] font-bold text-[#0a9e85]">
          <span className="size-1.5 rounded-full bg-menta" />
          En ruta
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        {commitments.map((c, i) => (
          <div key={c.text} className="flex items-center gap-3 text-[0.9rem] text-ink">
            <span
              className={
                c.done
                  ? "grid size-5 shrink-0 place-items-center rounded-md bg-menta/15 text-[#0a9e85]"
                  : "grid size-5 shrink-0 place-items-center rounded-md bg-noche/[0.07] text-[0.7rem] font-extrabold text-muted-ink"
              }
            >
              {c.done ? <Check className="size-3" strokeWidth={3.5} /> : i + 1}
            </span>
            {c.text}
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        <div className="rounded-[10px] border border-noche/10 bg-paper px-3 py-2.5">
          <div className="text-[0.7rem] font-bold text-muted-ink">
            Adopción de hábitos
          </div>
          <div className="font-heading text-[1.25rem] text-[#0a9e85]">+24%</div>
        </div>
        <div className="rounded-[10px] border border-noche/10 bg-paper px-3 py-2.5">
          <div className="text-[0.7rem] font-bold text-muted-ink">
            KPIs en verde
          </div>
          <div className="font-heading text-[1.25rem] text-noche">9 / 12</div>
        </div>
      </div>
    </MockWindow>
  );
}

/* ── AVANZADO · Sistema integral: sucesión + desempeño ── */
function MockAvanzado() {
  const bench = [
    { role: "Dir. Comercial", successor: "A.G.", ready: "Listo", tone: "ok" as const },
    { role: "Gte. Operaciones", successor: "M.R.", ready: "6–12 meses", tone: "warn" as const },
    { role: "Gte. Finanzas", successor: "L.T.", ready: "1–2 años", tone: "muted" as const },
  ];
  const toneChip = {
    ok: "bg-menta/15 text-[#0a9e85]",
    warn: "bg-amber/15 text-amber",
    muted: "bg-noche/[0.06] text-muted-ink",
  };
  return (
    <MockWindow
      title="Sistema integral · Sucesión"
      caption="Vista ilustrativa del sistema — banca de sucesión conectada al desempeño."
    >
      <div className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-muted-ink">
        Banca de sucesión
      </div>
      <div className="space-y-2">
        {bench.map((b) => (
          <div
            key={b.role}
            className="flex items-center gap-3 rounded-lg border border-noche/10 px-3 py-2"
          >
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-noche text-[0.6rem] font-bold text-white">
              {b.successor}
            </span>
            <span className="flex-1 text-[0.86rem] font-medium text-noche">
              {b.role}
            </span>
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[0.68rem] font-bold",
                toneChip[b.tone],
              )}
            >
              {b.ready}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg bg-electric/[0.06] px-3 py-2 text-[0.78rem] font-semibold text-electric">
        <ArrowLeftRight className="size-3.5" />
        Integrado con Gestión del Desempeño
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2.5">
        <div className="rounded-[10px] border border-noche/10 bg-paper px-3 py-2.5">
          <div className="text-[0.7rem] font-bold text-muted-ink">
            Cobertura de sucesión
          </div>
          <div className="font-heading text-[1.25rem] text-[#0a9e85]">78%</div>
        </div>
        <div className="rounded-[10px] border border-noche/10 bg-paper px-3 py-2.5">
          <div className="text-[0.7rem] font-bold text-muted-ink">
            Comportamiento en verde
          </div>
          <div className="font-heading text-[1.25rem] text-noche">11 / 12</div>
        </div>
      </div>
    </MockWindow>
  );
}

const LEVEL_MOCKS = [MockBasico, MockIntermedio, MockAvanzado];

/** Renderiza el mock-up del nivel activo (0–2). */
export function DhLevelMock({ index }: { index: number }) {
  const Mock = LEVEL_MOCKS[index] ?? MockBasico;
  return <Mock />;
}
