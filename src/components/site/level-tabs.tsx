"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { LEVELS } from "@/lib/headhunting-data";

/** Renderiza texto con **negritas** marcadas con dobles asteriscos. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <b key={i} className="font-semibold text-noche">
            {p.slice(2, -2)}
          </b>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

export function LevelTabs() {
  const [active, setActive] = useState(LEVELS[0].id);
  const level = LEVELS.find((l) => l.id === active)!;

  return (
    <div className="mt-10">
      {/* Tabbar */}
      <div className="inline-flex flex-wrap gap-1 rounded-[14px] border border-noche/10 bg-white p-1.5">
        {LEVELS.map((l) => {
          const on = l.id === active;
          return (
            <button
              key={l.id}
              type="button"
              onClick={() => setActive(l.id)}
              aria-pressed={on}
              className={cn(
                "flex flex-col gap-px rounded-[10px] px-5 py-2.5 text-left text-[0.95rem] font-semibold transition-colors",
                on
                  ? "bg-noche text-white"
                  : "text-muted-ink hover:text-noche",
              )}
            >
              {l.tab}
              <small
                className={cn(
                  "text-[0.72rem] font-medium",
                  on ? "text-white/70" : "text-muted-ink/70",
                )}
              >
                {l.sub}
              </small>
            </button>
          );
        })}
      </div>

      {/* Panel activo — keyed para re-animar al cambiar de nivel (sin esperar exit) */}
      <div className="mt-7">
        <motion.div
          key={level.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Cabecera del panel */}
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <p className="max-w-2xl text-pretty leading-relaxed text-ink">
              <RichText text={level.desc} />
            </p>
            <div className="text-right text-[0.82rem] font-bold whitespace-nowrap text-electric">
              {level.metaTitle}
              <span className="mt-0.5 block text-muted-ink">
                {level.metaGuarantee}
              </span>
            </div>
          </div>

          {/* Stepper */}
          <ol className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-4">
            {level.steps.map((s, i) => (
              <li key={s.n} className="relative">
                <div className="mb-2.5 flex items-center gap-3">
                  <span
                    className={cn(
                      "grid size-[34px] shrink-0 place-items-center rounded-[10px] text-[0.95rem] font-bold text-white",
                      s.free ? "bg-menta" : "bg-noche",
                    )}
                  >
                    {s.n}
                  </span>
                  {i < level.steps.length - 1 && (
                    <span className="h-0.5 flex-1 rounded bg-noche/10" />
                  )}
                </div>
                <h5 className="text-[0.95rem] font-semibold text-noche">
                  {s.title}
                </h5>
                <p className="mt-1 text-sm leading-snug text-muted-ink">
                  {s.desc}
                </p>
                {s.free && (
                  <span className="mt-1.5 inline-block rounded-[5px] bg-menta/15 px-2 py-0.5 text-[0.62rem] font-extrabold uppercase tracking-[0.1em] text-[#0a9e85]">
                    Sin costo
                  </span>
                )}
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </div>
  );
}
