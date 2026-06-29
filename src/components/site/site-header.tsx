"use client";

// Header preliminar — se refinará en la sección de navegación (scrollspy, menú móvil completo).

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_ITEMS, WHATSAPP_URL } from "@/lib/site";

export function SiteHeader() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-white/10 bg-noche/95 backdrop-blur"
          : "border-b border-transparent"
      }`}
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

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-coral transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex h-9 items-center rounded-full bg-coral px-4 text-sm font-semibold text-white transition-colors hover:bg-coral/90"
        >
          Quiero hablar con alguien
        </a>
      </div>
    </header>
  );
}
