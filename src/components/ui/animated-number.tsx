"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useMotionValue, useSpring, useReducedMotion } from "motion/react";

// useLayoutEffect en cliente; useEffect en el servidor (evita el warning de SSR).
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type AnimatedNumberProps = {
  value: number;
  /** Texto que sigue al número, p. ej. "+" o "%". */
  suffix?: string;
  className?: string;
};

/**
 * Muestra `value` SIEMPRE: es el valor inicial del estado, así que el número
 * final se renderiza en el HTML del servidor y queda visible aunque el JS no
 * cargue, sea lento o el usuario tenga motion reducido.
 *
 * La cuenta ascendente 0 → value es un extra que corre al MONTAR en cliente
 * (no depende de ningún observador de scroll). Si algo fallara, una red de
 * seguridad garantiza que el número final quede fijo.
 */
export function AnimatedNumber({
  value,
  suffix = "",
  className,
}: AnimatedNumberProps) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value); // fallback = objetivo (SSR)
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 90,
    damping: 18,
    mass: 0.8,
  });

  useIsomorphicLayoutEffect(() => {
    // Motion reducido: sin animación, número final directo.
    if (reduce) {
      setDisplay(value);
      return;
    }

    // Antes del paint, arranca visualmente desde 0 para la cuenta ascendente.
    setDisplay(0);
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
    motionValue.set(value); // dispara el spring 0 → value

    // Red de seguridad: si el spring no corriera, fija el número final.
    const safety = setTimeout(() => setDisplay(value), 1600);

    return () => {
      unsubscribe();
      clearTimeout(safety);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, reduce]);

  return (
    <span className={className}>
      {display}
      {suffix}
    </span>
  );
}
