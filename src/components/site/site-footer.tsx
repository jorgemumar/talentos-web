import Image from "next/image";

import { WHATSAPP_URL, LINKEDIN_URL, SITIO_URL } from "@/lib/site";

const COLS = [
  {
    title: "Servicios",
    links: [
      { label: "Headhunting Estratégico", href: "#hh" },
      { label: "Gestión del Desempeño", href: "#gdi" },
      { label: "Desarrollo Humano", href: "#dh" },
    ],
  },
  {
    title: "Firma",
    links: [
      { label: "El sistema", href: "#sistema" },
      { label: "Por qué TalentOS", href: "#diferenciadores" },
      { label: "Por qué invertir", href: "#costo" },
    ],
  },
];

const footLinkClass =
  "block py-1 text-[0.92rem] text-white/60 transition-colors hover:text-white";

export function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-coral bg-[#091638] text-white/60">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-8">
        <div className="flex flex-wrap justify-between gap-10">
          {/* Marca */}
          <div className="max-w-[300px]">
            <a href="#top" aria-label="TalentOS inicio" className="inline-flex">
              <Image
                src="/talentos-logo.png"
                alt="TalentOS"
                width={409}
                height={153}
                className="h-8 w-auto"
              />
            </a>
            <p className="mt-4 font-heading text-[1.05rem] italic text-white/85">
              El sistema operativo de tu talento. Atraer · medir · desarrollar,
              habilitado por IA.
            </p>
          </div>

          {/* Columnas de enlaces */}
          <div className="flex flex-wrap gap-10 sm:gap-12">
            {COLS.map((col) => (
              <div key={col.title}>
                <h5 className="mb-3 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-white">
                  {col.title}
                </h5>
                {col.links.map((l) => (
                  <a key={l.href} href={l.href} className={footLinkClass}>
                    {l.label}
                  </a>
                ))}
              </div>
            ))}

            <div>
              <h5 className="mb-3 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-white">
                Hablemos
              </h5>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className={footLinkClass}
              >
                WhatsApp
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener"
                className={footLinkClass}
              >
                LinkedIn
              </a>
              <a
                href={SITIO_URL}
                target="_blank"
                rel="noopener"
                className={footLinkClass}
              >
                talentos.work
              </a>
              <span className="mt-2 block text-[0.85rem] text-white/45">
                Guadalajara, Jalisco · cobertura nacional
              </span>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-[0.82rem] text-white/45">
          <span>© 2026 TalentOS. Todos los derechos reservados.</span>
          <span>Atraer · Medir · Desarrollar — habilitado por IA.</span>
        </div>
      </div>
    </footer>
  );
}
