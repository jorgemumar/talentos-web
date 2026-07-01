import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { ClientLogos } from "@/components/site/client-logos";
import { Categoria } from "@/components/site/categoria";
import { Sistema } from "@/components/site/sistema";
import { Headhunting } from "@/components/site/headhunting";
import { GestionDesempeno } from "@/components/site/gestion-desempeno";
import { DesarrolloHumano } from "@/components/site/desarrollo-humano";
import { Diferenciadores } from "@/components/site/diferenciadores";
import { CostoOportunidad } from "@/components/site/costo-oportunidad";
import { Audiencia } from "@/components/site/audiencia";
import { PruebaSocial } from "@/components/site/prueba-social";
import { CtaContacto } from "@/components/site/cta-contacto";
import { SiteFooter } from "@/components/site/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ClientLogos />
        <Categoria />
        <Sistema />
        <Headhunting />
        <GestionDesempeno />
        <DesarrolloHumano />
        <Diferenciadores />
        <CostoOportunidad />
        <Audiencia />
        <PruebaSocial />
        <CtaContacto />
      </main>
      <SiteFooter />
    </>
  );
}
