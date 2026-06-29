import { MessageCircle } from "lucide-react";

import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { LINKEDIN_URL, WHATSAPP_URL } from "@/lib/site";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z" />
    </svg>
  );
}

export function CtaContacto() {
  return (
    <section
      id="contacto"
      className="relative isolate overflow-hidden bg-noche text-white"
    >
      {/* Glows de marca */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(27,79,220,0.35), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(40% 55% at 82% 100%, rgba(232,80,58,0.16), transparent 60%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1180px] px-5 py-28 text-center sm:px-8 lg:py-32">
        <Reveal className="flex justify-center">
          <Eyebrow onDark>Conversemos</Eyebrow>
        </Reveal>

        <Reveal
          as="h2"
          delay={0.08}
          className="mx-auto mt-5 max-w-3xl font-heading text-[clamp(2.1rem,4.5vw,3.4rem)] font-semibold leading-[1.08] text-balance"
        >
          Instalemos el sistema operativo de tu talento.
        </Reveal>

        <Reveal
          as="p"
          delay={0.16}
          className="mx-auto mt-5 max-w-[580px] text-pretty leading-relaxed text-white/75 sm:text-[1.12rem]"
        >
          Compartimos cómo se construye, se mide y se desarrolla talento en
          empresas que crecen. Conéctate con nosotros y sigamos la conversación
          ahí.
        </Reveal>

        <Reveal delay={0.24} className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-[0.95rem] font-semibold text-noche shadow-[0_14px_30px_-10px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
          >
            <LinkedInIcon className="size-[17px]" />
            Síguenos en LinkedIn
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 text-[0.95rem] font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
          >
            <MessageCircle className="size-4 text-menta" />
            Quiero hablar con alguien
          </a>
        </Reveal>

        <Reveal as="p" delay={0.3} className="mt-7 text-sm text-white/55">
          Publicamos cómo pensamos el talento. Te leemos en los comentarios.
        </Reveal>
      </div>
    </section>
  );
}
