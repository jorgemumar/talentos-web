"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

// Preguntas en lenguaje natural (lo que un director pregunta), con respuestas
// autocontenidas y directas — pensadas para que buscadores e IAs las citen.
const FAQS: { q: string; a: string }[] = [
  {
    q: "¿Qué es TalentOS?",
    a: "TalentOS es una firma boutique que diseña e instala el sistema operativo humano de tu empresa: un solo ciclo para atraer, medir y desarrollar talento, habilitado por inteligencia artificial y dirigido por socios senior. No es una agencia de reclutamiento ni cursos sueltos: es infraestructura de talento integrada.",
  },
  {
    q: "¿En qué se diferencian de una agencia de reclutamiento?",
    a: "Una agencia entrega CVs; nosotros entregamos decisiones. Cada finalista llega evaluado con un Scorecard ponderado de 12 criterios y un Paquete de Transferencia, y los tres socios firman cada shortlist. Además, no terminamos al firmar: la misma metodología mide y desarrolla a esa persona a lo largo de su ciclo. Un solo proveedor y un solo dato que sigue a la persona.",
  },
  {
    q: "¿Para qué tamaño de empresa es TalentOS?",
    a: "Para empresas medianas y PyMEs en crecimiento —de unas 50 a 500 personas— que ya no caben en lo improvisado, pero que no quieren la rigidez ni el costo de una gran consultora. Si contratas con frecuencia y estás abierto a profesionalizar tu talento, TalentOS es para ti.",
  },
  {
    q: "¿Cuánto tarda un proceso de headhunting?",
    a: "Depende del nivel del puesto. En el Nivel A (Ágil) presentamos un shortlist evaluado en 10–15 días. Los niveles Estratégico y Executive toman más tiempo por el mapeo de mercado, el assessment de liderazgo y el due diligence. En todos los casos sabes en qué etapa va el proceso en todo momento.",
  },
  {
    q: "¿Qué es el Paquete de Transferencia?",
    a: "Es lo que entregamos al cerrar, además del candidato: Scorecard del puesto, reporte de mercado, ficha evaluativa por finalista, objetivos a 30/60/90 días y plan de integración. En vez de “contrátalo y suerte”, el líder aterriza con una ruta clara desde el primer día.",
  },
  {
    q: "¿Qué incluye la garantía?",
    a: "Si el candidato deja el puesto por causas no imputables a tu empresa dentro del periodo indicado —hasta 60, 90 o 120 días según el nivel— reponemos la búsqueda sin costo.",
  },
  {
    q: "¿Trabajan fuera de Guadalajara?",
    a: "Sí. Operamos desde Guadalajara y cubrimos todo México de forma remota y tecnificada, con la misma cercanía y velocidad. La distancia no resta.",
  },
  {
    q: "¿Cómo empiezo a trabajar con ustedes?",
    a: "Con un assessment sin costo: definimos el puesto contigo, acordamos el Scorecard y estimamos lo que ya te está costando no decidir. Sin compromiso. Puedes escribirnos por WhatsApp o dejar tus datos en el formulario de contacto.",
  },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-noche/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
      >
        <h3 className="text-[1.05rem] font-semibold text-noche">{q}</h3>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 transition-transform duration-300",
            open ? "rotate-180 text-electric" : "text-muted-ink",
          )}
        />
      </button>
      {/* La respuesta queda SIEMPRE en el DOM (grid 0fr→1fr): visible para
          buscadores/IA aunque el acordeón esté colapsado. */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pr-6 leading-relaxed text-ink">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="border-t border-noche/10 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <div className="mx-auto w-full max-w-[840px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mb-10">
          <Reveal>
            <Eyebrow>Preguntas frecuentes</Eyebrow>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.08}
            className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.1] text-noche text-balance"
          >
            Lo que suelen preguntarnos.
          </Reveal>
        </div>

        <Reveal delay={0.1} className="border-t border-noche/10">
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
