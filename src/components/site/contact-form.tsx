"use client";

import { useState } from "react";
import { Loader2, Check, AlertCircle } from "lucide-react";

/**
 * Formulario de contacto vía Web3Forms (sin backend propio).
 * ▸ Consigue tu access key GRATIS en https://web3forms.com (solo pones tu
 *   correo, sin registro) y reemplaza el placeholder de abajo.
 * ▸ El access key de Web3Forms es público por diseño (va en el cliente).
 */
const WEB3FORMS_ACCESS_KEY = "3473068c-7981-40d4-be24-9e891810a2bb";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 text-[0.92rem] text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/35 focus:bg-white/[0.09]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");

    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "Nuevo assessment sin costo — talentos.work");
    data.append("from_name", "Sitio TalentOS");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-menta/30 bg-menta/[0.08] p-8 text-center">
        <span className="grid size-12 place-items-center rounded-full bg-menta/20 text-menta">
          <Check className="size-6" strokeWidth={2.5} />
        </span>
        <h4 className="mt-4 font-heading text-xl font-semibold text-white">
          ¡Recibido! Te contactamos pronto.
        </h4>
        <p className="mt-2 text-sm text-white/70">
          Gracias por tu interés. Un socio revisará tu mensaje y te escribirá
          para agendar tu assessment sin costo.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/12 bg-white/[0.04] p-6 sm:p-7"
    >
      <div className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#ff8062]">
        Agenda tu assessment sin costo
      </div>
      <h3 className="mt-2 font-heading text-[1.5rem] font-semibold text-white">
        Cuéntanos de tu empresa
      </h3>
      <p className="mt-1.5 text-sm text-white/65">
        ¿Prefieres no usar WhatsApp? Déjanos tus datos y te escribimos.
      </p>

      <div className="mt-5 space-y-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-label="Nombre"
            placeholder="Nombre"
            className={inputClass}
          />
          <input
            name="company"
            type="text"
            autoComplete="organization"
            aria-label="Empresa"
            placeholder="Empresa"
            className={inputClass}
          />
        </div>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-label="Correo de trabajo"
          placeholder="Correo de trabajo"
          className={inputClass}
        />
        <textarea
          name="message"
          rows={3}
          aria-label="¿Qué posición o reto de talento tienes hoy?"
          placeholder="¿Qué posición o reto de talento tienes hoy?"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="mt-3 flex items-center gap-1.5 text-[0.82rem] text-coral">
          <AlertCircle className="size-4" />
          No se pudo enviar. Intenta de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-coral px-7 text-[0.95rem] font-semibold text-white transition-all hover:bg-coral/90 disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Enviando…
          </>
        ) : (
          "Agenda tu assessment sin costo"
        )}
      </button>
      <p className="mt-3 text-center text-[0.72rem] text-white/45">
        Sin compromiso. Respondemos en menos de 24 h hábiles.
      </p>
    </form>
  );
}
