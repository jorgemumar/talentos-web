"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRightCircle,
  BarChart3,
  TrendingUp,
  Database,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

type CycleNode = {
  id: string;
  icon: LucideIcon;
  label: string;
  sub: string;
  angle: number; // desde las 12 en punto, sentido horario
  chip: string; // clases del chip de icono
  hex: string; // color de acento (stroke / dot)
  rgb: string; // componentes rgb para rgba()
  borderActive: string; // clase de borde al activarse
  message: string; // mensaje de venta al hacer hover
};

const NODES: CycleNode[] = [
  {
    id: "atraer",
    icon: ArrowRightCircle,
    label: "Atraer",
    sub: "Headhunting Estratégico",
    angle: 0,
    chip: "bg-electric/15 text-electric",
    hex: "#1b4fdc",
    rgb: "27,79,220",
    borderActive: "border-electric/50",
    message:
      "El líder entra con su dato desde el día uno. No empiezas de cero en cada etapa.",
  },
  {
    id: "medir",
    icon: BarChart3,
    label: "Medir",
    sub: "Gestión del Desempeño",
    angle: 120,
    chip: "bg-menta/15 text-menta",
    hex: "#00c9a7",
    rgb: "0,201,167",
    borderActive: "border-menta/50",
    message:
      "Su desempeño se mide sobre la base de lo que ya sabíamos de él. Evidencia, no intuición.",
  },
  {
    id: "desarrollar",
    icon: TrendingUp,
    label: "Desarrollar",
    sub: "Desarrollo Humano",
    angle: 240,
    chip: "bg-coral/15 text-coral",
    hex: "#e8503a",
    rgb: "232,80,58",
    borderActive: "border-coral/50",
    message:
      "Cerramos el gap exacto que reveló la medición. Nada genérico, nada que se archive.",
  },
];

const ORBIT_RADIUS = 37; // % del contenedor cuadrado

function polar(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: 50 + radius * Math.cos(rad), y: 50 + radius * Math.sin(rad) };
}

export function TalentCycle() {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);
  const activeNode = NODES.find((n) => n.id === hovered) ?? null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-noche/10 bg-white p-6 shadow-[0_24px_50px_-30px_rgba(13,31,78,0.4)] sm:p-8"
    >
      {/* Header de la tarjeta */}
      <div className="flex items-center gap-2.5 text-sm font-semibold text-noche">
        <span className="size-[9px] rounded-full bg-menta shadow-[0_0_0_4px_rgba(0,201,167,0.22)]" />
        Un solo ciclo, un solo dato
      </div>

      {/* Orbe del ciclo */}
      <div className="relative mx-auto mt-6 aspect-square w-full max-w-[460px]">
        {/* Anillo guía punteado (gira lentamente) */}
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-noche/15"
          style={{ width: `${ORBIT_RADIUS * 2}%`, height: `${ORBIT_RADIUS * 2}%` }}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 48, ease: "linear", repeat: Infinity }}
        />
        {/* Anillo interior sutil */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-noche/5"
          style={{ width: `${ORBIT_RADIUS * 1.28}%`, height: `${ORBIT_RADIUS * 1.28}%` }}
        />

        {/* Líneas conectoras nodo → centro */}
        <svg
          viewBox="0 0 100 100"
          aria-hidden
          className="pointer-events-none absolute inset-0 size-full"
        >
          {NODES.map((node) => {
            const { x, y } = polar(node.angle, ORBIT_RADIUS);
            const active = hovered === node.id;
            return (
              <g key={node.id}>
                <line
                  x1={x}
                  y1={y}
                  x2="50"
                  y2="50"
                  strokeLinecap="round"
                  stroke={active ? node.hex : "rgba(13,31,78,0.10)"}
                  strokeWidth={active ? 0.9 : 0.5}
                  style={{ transition: "stroke 200ms ease, stroke-width 200ms ease" }}
                />
                {active && !reduce && (
                  <motion.line
                    x1={x}
                    y1={y}
                    x2="50"
                    y2="50"
                    strokeLinecap="round"
                    stroke={node.hex}
                    strokeWidth={1.1}
                    strokeDasharray="2 6"
                    opacity={0.95}
                    initial={{ strokeDashoffset: 8 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 0.9, ease: "linear", repeat: Infinity }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Hub central — el dato */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 z-10 flex size-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border bg-paper text-center shadow-sm transition-[box-shadow,border-color] duration-200 sm:size-28"
          style={
            activeNode
              ? {
                  borderColor: `rgba(${activeNode.rgb},0.4)`,
                  boxShadow: `0 0 0 4px rgba(${activeNode.rgb},0.1)`,
                }
              : { borderColor: "rgba(13,31,78,0.1)" }
          }
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-noche text-paper">
            <Database className="size-5" strokeWidth={2} />
          </span>
          <p className="mt-1.5 text-[0.7rem] font-semibold text-noche">Un solo dato</p>
        </motion.div>

        {/* Nodos del ciclo */}
        {NODES.map((node, idx) => {
          const { x, y } = polar(node.angle, ORBIT_RADIUS);
          const Icon = node.icon;
          const active = hovered === node.id;
          return (
            <div
              key={node.id}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <motion.button
                type="button"
                aria-label={`${node.label} — ${node.sub}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={reduce ? undefined : { scale: 1.05 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.12, ease: "easeOut" }}
                onHoverStart={() => setHovered(node.id)}
                onHoverEnd={() => setHovered(null)}
                onFocus={() => setHovered(node.id)}
                onBlur={() => setHovered(null)}
                onClick={() => setHovered(node.id)}
                className={cn(
                  "flex w-28 flex-col items-center gap-1.5 rounded-2xl border bg-white px-2 py-3 text-center shadow-[0_14px_30px_-22px_rgba(13,31,78,0.6)] transition-[box-shadow,border-color] duration-200 outline-none sm:w-32",
                  active ? node.borderActive : "border-noche/10",
                )}
                style={
                  active
                    ? {
                        boxShadow: `0 0 0 4px rgba(${node.rgb},0.12), 0 14px 32px -10px rgba(${node.rgb},0.5)`,
                      }
                    : undefined
                }
              >
                <span
                  className={cn(
                    "flex size-10 items-center justify-center rounded-[11px]",
                    node.chip,
                  )}
                >
                  <Icon className="size-[21px]" strokeWidth={2} />
                </span>
                <p className="text-[0.8rem] font-semibold text-noche">{node.label}</p>
                <p className="text-[0.7rem] leading-tight text-muted-ink">{node.sub}</p>
              </motion.button>
            </div>
          );
        })}
      </div>

      {/* Barra de texto: mensaje de venta del nodo activo, o caption genérica */}
      <div className="mt-5 flex min-h-[3.5rem] items-center justify-center">
        <motion.div
          key={hovered ?? "generic"}
          initial={{ opacity: 0, y: reduce ? 0 : 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          {activeNode ? (
            <div
              className="mx-auto flex max-w-[27rem] items-start gap-2.5 rounded-xl border px-3.5 py-2.5"
              style={{
                borderColor: `rgba(${activeNode.rgb},0.3)`,
                background: `rgba(${activeNode.rgb},0.06)`,
              }}
            >
              <span
                className="mt-1 size-2 shrink-0 rounded-full"
                style={{ background: activeNode.hex }}
              />
              <p className="text-left text-[0.86rem] leading-snug text-ink">
                {activeNode.message}
              </p>
            </div>
          ) : (
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-menta/10 px-3 py-1 text-[0.72rem] font-medium text-noche">
                <span className="size-1.5 rounded-full bg-menta" />
                el dato sigue a la persona
              </span>
            </div>
          )}
        </motion.div>
      </div>

      {/* Footer de la tarjeta */}
      <p className="mt-4 border-t border-noche/10 pt-4 text-sm leading-relaxed text-muted-ink">
        El mismo cliente recorre los tres servicios en distinto momento del
        ciclo. Un solo proveedor, una sola metodología.
      </p>
    </motion.div>
  );
}
