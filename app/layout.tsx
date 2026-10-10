import type { Metadata } from "next";
import "./globals.css";
import { clinic } from "@/data/clinic";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Dr. Arora's Multispeciality Dental Clinic | Dentist in Dehradun",
  description:
    "Dr. Arora's Multispeciality Dental Clinic on Rajpur Road, Dehradun. Specialists in Digital Smile Design, dental implants, full-mouth rehabilitation, cosmetic dentistry & more. Rated 4.9/5 · 159 Google Reviews.",
  keywords: [
    "dentist in Dehradun",
    "dental clinic Rajpur Road",
    "Digital Smile Design Dehradun",
    "dental implants Dehradun",
    "cosmetic dentist Dehradun",
    "prosthodontist Dehradun",
    "full mouth rehabilitation Dehradun",
    "smile makeover Dehradun",
    "Dr Arora dental clinic",
  ].join(", "),
  authors: [{ name: "Dr. Arora's Multispeciality Dental Clinic" }],
  creator: "Dr. Arora's Multispeciality Dental Clinic",
  metadataBase: new URL("https://dr-aroras.grexa.site"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dr-aroras.grexa.site",
    siteName: "Dr. Arora's Multispeciality Dental Clinic",
    title: "Dr. Arora's Multispeciality Dental Clinic | Dentist in Dehradun",
    description:
      "Personalised dental care with Digital Smile Design, implant dentistry and modern restorative treatment — planned around you. Rajpur Road, Dehradun.",
    images: [
      {
        url: "/images/hero-smile.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Arora's Multispeciality Dental Clinic, Dehradun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Arora's Multispeciality Dental Clinic | Dentist in Dehradun",
    description:
      "Personalised dental care with Digital Smile Design, implant dentistry and modern restorative treatment — planned around you.",
    images: ["/images/hero-smile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://dr-aroras.grexa.site",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    // google: "YOUR_GOOGLE_VERIFICATION_CODE", // [CLINIC VERIFICATION REQUIRED]
  },
};

const jsonLd = clinic.schema;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#123F46" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
