import type { Metadata } from "next";
import { Figtree, Outfit } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.brand.name} | Clínica Multidisciplinar Infantil em ${siteConfig.brand.city}`,
  description:
    "Pediatria, terapias e especialidades para a saúde e o desenvolvimento infantil e infantojuvenil, reunidas em um só lugar em Castanhal. Equipe multidisciplinar e cuidado individualizado para cada fase.",
  openGraph: {
    title: `${siteConfig.brand.name} Castanhal`,
    description:
      "Uma clínica multidisciplinar para cuidar da saúde e do desenvolvimento da sua família, mais perto de você.",
    locale: "pt_BR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: siteConfig.brand.fullName,
  medicalSpecialty: [
    "Pediatrics",
    "Psychology",
    "SpeechTherapy",
    "OccupationalTherapy",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "BR",
  },
  email: siteConfig.email,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${figtree.variable}`}>
      <body className="bg-brand-cream text-ink antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
