"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  motion,
} from "motion/react";

type AnimatedNumberProps = {
  value: number;
  /** Texto que sigue al número, p. ej. "+" o "%". */
  suffix?: string;
  className?: string;
};

/**
 * Cuenta hacia arriba hasta `value` cuando entra en viewport.
 * Respeta prefers-reduced-motion (muestra el valor final de inmediato).
 */
export function AnimatedNumber({
  value,
  suffix = "",
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 90,
    damping: 18,
    mass: 0.8,
  });
  const display = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
