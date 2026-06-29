"use client";

import { motion, type HTMLMotionProps } from "motion/react";

const TAGS = {
  div: motion.div,
  li: motion.li,
  ul: motion.ul,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

type RevealProps = {
  children: React.ReactNode;
  /** Retraso en segundos (para escalonar elementos hermanos). */
  delay?: number;
  /** Desplazamiento vertical inicial en px. */
  y?: number;
  className?: string;
  as?: keyof typeof TAGS;
} & Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition">;

/**
 * Fade-up de entrada. Anima en el montaje (patrón probado del hero): el estado
 * de reposo es visible, sin depender de IntersectionObserver. `delay` permite
 * escalonar elementos hermanos; `as` conserva la semántica (li, h2, p, …).
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  as = "div",
  ...rest
}: RevealProps) {
  const MotionTag = TAGS[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
