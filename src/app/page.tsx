import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { Categoria } from "@/components/site/categoria";
import { Sistema } from "@/components/site/sistema";
import { Headhunting } from "@/components/site/headhunting";
import { GestionDesempeno } from "@/components/site/gestion-desempeno";
import { DesarrolloHumano } from "@/components/site/desarrollo-humano";
import { Diferenciadores } from "@/components/site/diferenciadores";
import { CostoOportunidad } from "@/components/site/costo-oportunidad";
import { Audiencia } from "@/components/site/audiencia";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Categoria />
        <Sistema />
        <Headhunting />
        <GestionDesempeno />
        <DesarrolloHumano />
        <Diferenciadores />
        <CostoOportunidad />
        <Audiencia />
      </main>
    </>
  );
}
