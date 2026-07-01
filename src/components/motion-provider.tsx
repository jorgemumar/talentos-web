"use client";

import { MotionConfig } from "motion/react";

/**
 * Hace que TODAS las animaciones de `motion` respeten la preferencia del
 * sistema: si el usuario activa "reducir movimiento", motion desactiva las
 * animaciones de transformación automáticamente.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
