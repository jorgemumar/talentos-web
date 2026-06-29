import { cn } from "@/lib/utils";

/**
 * Eyebrow de sección — réplica de `.eyebrow` del original:
 * dash coral + etiqueta en versalitas coral con tracking amplio.
 * `onDark` usa el coral aclarado (#ff8062) para fondos oscuros.
 */
export function Eyebrow({
  children,
  onDark = false,
  className,
}: {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[0.72rem] font-bold uppercase tracking-[0.22em]",
        onDark ? "text-[#ff8062]" : "text-coral",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "inline-block h-[1.5px] w-[26px]",
          onDark ? "bg-[#ff8062]" : "bg-coral",
        )}
      />
      {children}
    </span>
  );
}
