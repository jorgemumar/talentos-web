import { LINKEDIN_URL, SITIO_URL } from "@/lib/site";

// Datos estructurados de la firma (Organization + ProfessionalService, que es
// subtipo de LocalBusiness). Ayuda a Google y a los buscadores con IA a
// entender qué es TalentOS, qué ofrece y dónde opera.
const ORG = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITIO_URL}/#organization`,
  name: "TalentOS",
  legalName: "TalentOS",
  url: SITIO_URL,
  logo: `${SITIO_URL}/talentos-iso.png`,
  image: `${SITIO_URL}/opengraph-image`,
  description:
    "Firma boutique que diseña e instala el sistema operativo humano de las empresas: atraer, medir y desarrollar talento como un solo ciclo, habilitado por IA.",
  slogan: "El sistema operativo de tu talento",
  areaServed: [
    { "@type": "City", name: "Guadalajara" },
    { "@type": "AdministrativeArea", name: "Jalisco" },
    { "@type": "Country", name: "México" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guadalajara",
    addressRegion: "Jalisco",
    addressCountry: "MX",
  },
  sameAs: [LINKEDIN_URL],
  knowsAbout: [
    "Headhunting estratégico",
    "Reclutamiento ejecutivo",
    "Gestión del desempeño",
    "Desarrollo humano",
    "Evaluación de talento",
    "People analytics",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Headhunting Estratégico" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gestión del Desempeño Inteligente" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desarrollo Humano" } },
  ],
};

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG) }}
    />
  );
}
