import Image from "next/image";

/**
 * Fondo "gradient mesh" premium para el hero — versión OSCURA (igual que el
 * original): lienzo noche con destellos sutiles de electric/coral/menta,
 * un grid blanco finísimo y el isotipo blanco como marca de agua a la derecha.
 * Puramente decorativo.
 */
export function HeroMesh() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Lienzo base noche */}
      <div className="absolute inset-0 bg-noche" />

      {/* Orbes de color, muy suaves sobre el azul noche */}
      <div className="absolute -left-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-electric/35 blur-[130px]" />
      <div className="absolute -right-24 top-8 h-[28rem] w-[28rem] rounded-full bg-coral/20 blur-[130px]" />
      <div className="absolute bottom-[-14rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-menta/15 blur-[140px]" />

      {/* Grid de líneas blancas finísimo */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, black 35%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, black 35%, transparent 80%)",
        }}
      />

      {/* Isotipo blanco como marca de agua (réplica de .hero-iso del original) */}
      <Image
        src="/talentos-iso-white.png"
        alt=""
        width={560}
        height={517}
        priority
        className="absolute top-1/2 right-[-120px] hidden w-[560px] max-w-none -translate-y-1/2 opacity-[0.06] lg:block"
      />

      {/* Fundido inferior hacia paper para la transición a la siguiente sección */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-paper" />
    </div>
  );
}
