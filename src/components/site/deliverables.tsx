"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { DELIVERABLES } from "@/lib/headhunting-data";
import { DeliverableMock } from "@/components/site/deliverable-mocks";

export function Deliverables() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-14">
      <h3 className="mb-8 text-[1.08rem] font-bold text-noche">
        Lo que recibes al cerrar
      </h3>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        {/* Entregables (hover / click / focus) */}
        <div className="flex flex-col gap-3">
          {DELIVERABLES.map((d, i) => {
            const on = i === active;
            return (
              <button
                key={d.n}
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
                  <span
                    className={cn(
                      "font-heading text-[0.95rem] font-bold transition-colors",
                      on ? "text-electric" : "text-muted-ink",
                    )}
                  >
                    {d.n}
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
                <h4 className="mt-1 text-[1.05rem] font-semibold text-noche">
                  {d.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-ink">
                  {d.detail}
                </p>
              </button>
            );
          })}
        </div>

        {/* Mock-up del entregable activo (re-anima al cambiar) */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-24"
        >
          <DeliverableMock index={active} />
        </motion.div>
      </div>
    </div>
  );
}
