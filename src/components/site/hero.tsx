"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

import { AnimatedNumber } from "@/components/ui/animated-number";
import { HeroMesh } from "@/components/site/hero-mesh";
import { HERO_STATS, WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-20 text-white sm:pt-32 lg:pt-40 lg:pb-28"
    >
      <HeroMesh />

      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[0.8rem] font-medium tracking-tight text-white/90 backdrop-blur">
              <Sparkles className="size-3.5 text-menta" />
              Atraer · Medir · Desarrollar — habilitado por IA
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-7 font-heading text-[clamp(2.7rem,6.6vw,5rem)] leading-[1.04] font-semibold tracking-[-0.015em] text-white text-balance"
          >
            El sistema operativo
            <br />
            de tu{" "}
            <span className="whitespace-nowrap text-coral italic">talento</span>
            <span className="text-white">.</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Diseñamos e instalamos el sistema operativo humano de tu empresa:
            atraer, medir y desarrollar talento como un solo ciclo, habilitado
            por inteligencia artificial. Calidad de firma boutique, velocidad de
            tecnología.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#sistema"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-electric px-7 text-[0.95rem] font-semibold text-white shadow-[0_14px_30px_-8px_rgba(27,79,220,0.85)] transition-all hover:-translate-y-0.5 hover:bg-electric/90 hover:shadow-[0_18px_40px_-8px_rgba(27,79,220,0.95)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
            >
              Cómo funciona el sistema
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 text-[0.95rem] font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
            >
              <MessageCircle className="size-4 text-menta" />
              Quiero hablar con alguien
            </a>
          </motion.div>

          {/* Stats */}
          <motion.dl
            variants={item}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] sm:grid-cols-3"
          >
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center bg-white/[0.04] px-5 py-6 text-center backdrop-blur"
              >
                <dt className="flex items-baseline gap-1 font-heading text-4xl font-semibold text-white">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  <span className="text-lg font-medium text-menta">
                    {stat.label}
                  </span>
                </dt>
                <dd className="mt-2 text-sm leading-snug text-white/65">
                  {stat.detail}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
