"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAV_ITEMS, WHATSAPP_URL } from "@/lib/site";

export function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Fondo sólido al hacer scroll
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: resalta la sección visible
  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const barSolid = solid || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        barSolid
          ? "border-b border-white/10 bg-noche/95 backdrop-blur"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="TalentOS inicio" className="flex items-center">
          <Image
            src="/talentos-logo.png"
            alt="TalentOS"
            width={409}
            height={153}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </a>

        {/* Nav desktop con scrollspy */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = activeId === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "group relative text-sm font-medium transition-colors",
                  active ? "text-white" : "text-white/80 hover:text-white",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-0.5 bg-coral transition-all duration-200",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="hidden h-9 items-center rounded-full bg-coral px-4 text-sm font-semibold text-white transition-colors hover:bg-coral/90 sm:inline-flex"
          >
            Quiero hablar con alguien
          </a>

          {/* Botón burger (móvil) */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="flex size-10 cursor-pointer items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-white/10 bg-noche/98 backdrop-blur md:hidden"
        >
          <nav className="mx-auto flex w-full max-w-[1180px] flex-col px-5 py-4 sm:px-8">
            {NAV_ITEMS.map((item) => {
              const active = activeId === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-2 border-b border-white/5 py-3 text-[0.95rem] font-medium transition-colors",
                    active ? "text-white" : "text-white/75 hover:text-white",
                  )}
                >
                  <span
                    className={cn(
                      "size-1.5 rounded-full bg-coral transition-opacity",
                      active ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {item.label}
                </a>
              );
            })}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-coral px-4 text-sm font-semibold text-white transition-colors hover:bg-coral/90"
            >
              Quiero hablar con alguien
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
