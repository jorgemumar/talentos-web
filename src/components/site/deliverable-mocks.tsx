"use client";

import { motion } from "motion/react";
import {
  Check,
  AlertTriangle,
  Users,
  Building2,
  Coins,
  CircleDot,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { SCORECARD } from "@/lib/headhunting-data";

/* ── Chrome de ventana compartido (idéntico al Scorecard original) ── */
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

/** Barra de progreso animada reutilizable. */
function Bar({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  return (
    <div className="h-2 overflow-hidden rounded-md bg-noche/[0.08]">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className={cn("h-full rounded-md bg-electric", className)}
      />
    </div>
  );
}

/* ── 1 · Scorecard del puesto (evaluación ponderada) ── */
function MockScorecard() {
  return (
    <MockWindow
      title={SCORECARD.title}
      caption="Vista ilustrativa del Scorecard — Verde avanza · Ámbar revisa · Rojo descarta."
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="text-sm font-semibold text-noche">
          Evaluación ponderada
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-menta/15 px-2.5 py-1 text-[0.72rem] font-bold text-[#0a9e85]">
          <span className="size-1.5 rounded-full bg-menta" />
          {SCORECARD.status}
        </span>
      </div>

      {SCORECARD.criteria.map((c) => (
        <div key={c.label} className="mb-3.5">
          <div className="mb-1.5 flex items-baseline justify-between text-[0.85rem]">
            <span className="font-semibold text-ink">{c.label}</span>
            <span className="text-muted-ink">{c.weight}</span>
          </div>
          <Bar value={c.value} className={c.accent === "menta" ? "bg-menta" : "bg-electric"} />
        </div>
      ))}

      <div className="mt-5 flex items-center justify-between border-t border-noche/10 pt-4">
        <div>
          <div className="text-[0.74rem] font-bold text-muted-ink">
            SCORE PONDERADO
          </div>
          <div className="font-heading text-[1.7rem] text-[#0a9e85]">
            {SCORECARD.score}%
          </div>
        </div>
        <div className="text-right">
          <div className="mb-1.5 text-[0.74rem] font-bold text-muted-ink">
            UMBRAL ≥ {SCORECARD.threshold}%
          </div>
          <div className="flex justify-end gap-1.5">
            <span className="size-3 rounded-full bg-menta" />
            <span className="size-3 rounded-full bg-amber" />
            <span className="size-3 rounded-full bg-coral/40" />
          </div>
        </div>
      </div>
    </MockWindow>
  );
}

/* ── 2 · Reporte de mercado (rango salarial + disponibilidad) ── */
function MockMercado() {
  // posiciones % sobre el rango P10–P90
  const p25 = 28;
  const median = 52;
  const p90 = 88;
  const targetStart = 40;
  const targetEnd = 66;
  return (
    <MockWindow
      title="Reporte de mercado · Gerente Comercial"
      caption="Vista ilustrativa del reporte — mediana y dispersión salarial de la posición."
    >
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-noche">
          Compensación anual · ZMG
        </span>
        <span className="text-[0.78rem] font-semibold text-electric">
          MXN
        </span>
      </div>
      <p className="mb-5 text-[0.78rem] text-muted-ink">
        Rango de mercado para la posición
      </p>

      {/* Eje de rango */}
      <div className="relative mb-2 h-9">
        <div className="absolute top-4 h-2 w-full rounded-md bg-noche/[0.08]" />
        {/* banda objetivo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="absolute top-4 h-2 rounded-md bg-menta/30"
          style={{ left: `${targetStart}%`, width: `${targetEnd - targetStart}%` }}
        />
        {/* marcadores */}
        {[
          { x: p25, label: "$640K", tag: "P25" },
          { x: median, label: "$820K", tag: "Mediana", strong: true },
          { x: p90, label: "$1.05M", tag: "P90" },
        ].map((m) => (
          <div
            key={m.tag}
            className="absolute -translate-x-1/2 text-center"
            style={{ left: `${m.x}%` }}
          >
            <span
              className={cn(
                "mx-auto block size-3 rounded-full ring-2 ring-white",
                m.strong ? "bg-electric" : "bg-noche/40",
              )}
              style={{ marginTop: "10px" }}
            />
          </div>
        ))}
      </div>
      <div className="mb-5 flex justify-between text-[0.72rem]">
        <span className="font-semibold text-noche">$640K</span>
        <span className="font-bold text-electric">Mediana $820K</span>
        <span className="font-semibold text-noche">$1.05M</span>
      </div>
      <div className="mb-5 inline-flex items-center gap-1.5 rounded-md bg-menta/10 px-2 py-1 text-[0.72rem] font-medium text-[#0a9e85]">
        <span className="size-1.5 rounded-full bg-menta" />
        Tu rango objetivo · $780K – $900K
      </div>

      <div className="space-y-3 border-t border-noche/10 pt-4">
        {[
          { icon: Building2, label: "Empresas que pagan el perfil", value: "24 en ZMG" },
          { icon: Users, label: "Talento mapeado", value: "180 perfiles" },
          { icon: CircleDot, label: "Disponibilidad", value: "Media–alta", menta: true },
        ].map((r) => (
          <div key={r.label} className="flex items-center justify-between text-[0.85rem]">
            <span className="flex items-center gap-2 text-ink">
              <r.icon className="size-4 text-muted-ink" />
              {r.label}
            </span>
            <span className={cn("font-semibold", r.menta ? "text-[#0a9e85]" : "text-noche")}>
              {r.value}
            </span>
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

/* ── 3 · Shortlist ejecutivo (embudo + matriz de finalistas) ── */
function MockShortlist() {
  const funnel = [
    { label: "Mapeados", n: 180, w: 100 },
    { label: "Evaluados", n: 18, w: 42 },
    { label: "Finalistas", n: 4, w: 20 },
  ];
  const finalistas = [
    { id: "A.G.", score: 86, tag: "Recomendado", top: true },
    { id: "M.R.", score: 81 },
    { id: "L.T.", score: 78 },
    { id: "J.S.", score: 74 },
  ];
  return (
    <MockWindow
      title="Shortlist · Gerente Comercial"
      caption="Vista ilustrativa del shortlist — embudo trazable y matriz comparativa."
    >
      {/* Embudo */}
      <div className="mb-5 space-y-2">
        {funnel.map((f, i) => (
          <div key={f.label} className="flex items-center gap-3">
            <span className="w-20 shrink-0 text-[0.78rem] text-muted-ink">
              {f.label}
            </span>
            <div className="h-6 flex-1 overflow-hidden rounded-md bg-noche/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${f.w}%` }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "flex h-full items-center rounded-md px-2 text-[0.72rem] font-bold text-white",
                  i === 2 ? "bg-coral" : "bg-electric",
                )}
              >
                {f.n}
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Matriz de finalistas */}
      <div className="space-y-2 border-t border-noche/10 pt-4">
        {finalistas.map((c) => (
          <div
            key={c.id}
            className={cn(
              "flex items-center gap-3 rounded-lg border px-3 py-2",
              c.top ? "border-menta/40 bg-menta/[0.06]" : "border-noche/10",
            )}
          >
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-noche text-[0.62rem] font-bold text-white">
              {c.id}
            </span>
            <div className="h-1.5 flex-1 overflow-hidden rounded bg-noche/[0.08]">
              <div
                className={cn("h-full rounded", c.top ? "bg-menta" : "bg-electric")}
                style={{ width: `${c.score}%` }}
              />
            </div>
            <span className="w-9 text-right text-[0.8rem] font-bold text-noche">
              {c.score}%
            </span>
            {c.tag && (
              <span className="rounded bg-menta/15 px-1.5 py-0.5 text-[0.6rem] font-bold text-[#0a9e85]">
                {c.tag}
              </span>
            )}
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

/* ── 4 · Ficha evaluativa (síntesis por candidato) ── */
function MockFicha() {
  return (
    <MockWindow
      title="Ficha · Candidato A"
      caption="Vista ilustrativa de la ficha — síntesis evaluativa por finalista."
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="grid size-12 place-items-center rounded-xl bg-noche font-heading text-base font-bold text-white">
          A.G.
        </span>
        <div className="flex-1">
          <div className="font-semibold text-noche">Candidato A</div>
          <div className="text-[0.8rem] text-muted-ink">
            Gerente Comercial · 12 años
          </div>
        </div>
        <span className="rounded-full bg-electric/10 px-2.5 py-1 text-[0.8rem] font-bold text-electric">
          Score 86%
        </span>
      </div>

      <div className="mb-4">
        <div className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-muted-ink">
          Fortalezas
        </div>
        <div className="space-y-1.5">
          {[
            "Crecimiento de cartera +38% en 2 años",
            "Liderazgo de equipos comerciales de 15+",
          ].map((t) => (
            <div key={t} className="flex items-start gap-2 text-[0.85rem] text-ink">
              <Check className="mt-0.5 size-3.5 shrink-0 text-menta" strokeWidth={3} />
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-muted-ink">
          Riesgos
        </div>
        <div className="flex items-start gap-2 text-[0.85rem] text-ink">
          <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-amber" />
          Sin experiencia previa en industria regulada — mitigar con onboarding.
        </div>
      </div>

      <div className="rounded-lg border border-noche/10 bg-paper px-3.5 py-3 text-[0.85rem] text-ink">
        <b className="font-semibold text-noche">Recomendación.</b> Avanza a
        oferta. Aterriza bien con plan 30/60/90 y mentoría de Dirección.
      </div>
    </MockWindow>
  );
}

/* ── 5 · Acompañamiento de oferta (paquete + probabilidad) ── */
function MockOferta() {
  const accept = 82;
  return (
    <MockWindow
      title="Oferta · Candidato A"
      caption="Vista ilustrativa de la oferta — paquete y probabilidad de cierre."
    >
      <div className="mb-5 space-y-2.5">
        {[
          { label: "Sueldo base anual", value: "$840K" },
          { label: "Bono variable", value: "$210K" },
        ].map((r) => (
          <div key={r.label} className="flex items-center justify-between text-[0.88rem]">
            <span className="flex items-center gap-2 text-ink">
              <Coins className="size-4 text-muted-ink" />
              {r.label}
            </span>
            <span className="font-semibold text-noche">{r.value}</span>
          </div>
        ))}
        <div className="flex items-center justify-between border-t border-noche/10 pt-2.5 text-[0.92rem]">
          <span className="font-semibold text-noche">Total · MXN</span>
          <span className="font-heading text-xl text-noche">$1.05M</span>
        </div>
      </div>

      <div className="mb-4 rounded-lg bg-menta/[0.07] p-4">
        <div className="mb-1.5 flex items-baseline justify-between">
          <span className="text-[0.8rem] font-semibold text-noche">
            Probabilidad de aceptación
          </span>
          <span className="font-heading text-[1.4rem] text-[#0a9e85]">
            {accept}%
          </span>
        </div>
        <Bar value={accept} className="bg-menta" />
      </div>

      <div className="flex items-center gap-2 text-[0.82rem]">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/15 px-2.5 py-1 font-bold text-amber">
          <span className="size-1.5 rounded-full bg-amber" />
          En negociación
        </span>
        <span className="text-muted-ink">Contraoferta gestionada · cierre estimado 5 días</span>
      </div>
    </MockWindow>
  );
}

/* ── 6 · Trazabilidad total (log auditable del proceso) ── */
function MockTrazabilidad() {
  const log = [
    { date: "12 may", text: "Scorecard firmado con el cliente", kind: "ok" },
    { date: "18 may", text: "180 perfiles mapeados en mercado", kind: "ok" },
    { date: "24 may", text: "18 evaluados · 6 descartados (técnico)", kind: "out" },
    { date: "29 may", text: "4 finalistas presentados con ficha", kind: "ok" },
    { date: "03 jun", text: "Candidato A — oferta enviada", kind: "active" },
  ];
  const dot = {
    ok: "bg-menta",
    out: "bg-coral/60",
    active: "bg-electric",
  } as const;
  return (
    <MockWindow
      title="Trazabilidad · Búsqueda #248"
      caption="Vista ilustrativa de la trazabilidad — log auditable, paso a paso."
    >
      <div className="relative pl-1">
        {/* línea vertical */}
        <span className="absolute left-[6px] top-2 bottom-2 w-px bg-noche/10" />
        <div className="space-y-4">
          {log.map((e, i) => (
            <motion.div
              key={e.date}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex gap-3.5"
            >
              <span
                className={cn(
                  "relative z-10 mt-1 size-3 shrink-0 rounded-full ring-2 ring-white",
                  dot[e.kind as keyof typeof dot],
                )}
              />
              <div>
                <div className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-muted-ink">
                  {e.date}
                </div>
                <div className="text-[0.88rem] text-ink">{e.text}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex items-center gap-1.5 border-t border-noche/10 pt-4 text-[0.78rem] text-muted-ink">
        <Check className="size-3.5 text-menta" strokeWidth={3} />
        Cada avance y cada salida queda explicado · cero cajas negras.
      </div>
    </MockWindow>
  );
}

const MOCKS = [
  MockScorecard,
  MockMercado,
  MockShortlist,
  MockFicha,
  MockOferta,
  MockTrazabilidad,
];

/** Renderiza el mock-up correspondiente al entregable activo (0–5). */
export function DeliverableMock({ index }: { index: number }) {
  const Mock = MOCKS[index] ?? MockScorecard;
  return <Mock />;
}
