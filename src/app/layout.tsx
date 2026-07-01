import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://talentos.work";
const SITE_TITLE = "TalentOS — El sistema operativo de tu talento";
const SITE_DESCRIPTION =
  "La firma que diseña e instala el sistema operativo humano de tu empresa: atraer, medir y desarrollar talento como un solo ciclo, habilitado por IA. Headhunting estratégico, gestión del desempeño y desarrollo humano. Guadalajara y todo México.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · TalentOS",
  },
  description: SITE_DESCRIPTION,
  applicationName: "TalentOS",
  keywords: [
    "TalentOS",
    "headhunting",
    "headhunting estratégico",
    "reclutamiento ejecutivo",
    "gestión del desempeño",
    "desarrollo humano",
    "evaluación de talento",
    "people analytics",
    "recursos humanos",
    "Guadalajara",
    "México",
  ],
  authors: [{ name: "TalentOS" }],
  creator: "TalentOS",
  publisher: "TalentOS",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "TalentOS",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
