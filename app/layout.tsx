import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "Mirai Embroidery Machines | Premium Industrial Embroidery Solutions",
  description: "Experience the pinnacle of industrial embroidery technology with Mirai. We provide high-performance embroidery machines designed for precision, speed, and durability. Maximize your production today.",
  keywords: ["Embroidery Machines", "Industrial Embroidery Machine", "Computerized Embroidery Machine", "Mirai Embroidery", "Commercial Embroidery Equipment", "Embroidery Machinery India", "High Speed Embroidery Machines"],
  authors: [{ name: "Mirai Embroidery" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Mirai Embroidery Machines | Maximize Your Production",
    description: "Premium industrial embroidery machines designed for uncompromising durability and unmatched precision. Sourced with the most modern cutting-edge features.",
    url: "https://miraiembroidery.in", // Official domain
    siteName: "Mirai Embroidery",
    images: [
      {
        url: "/asset/images/mirai.jpg",
        width: 1200,
        height: 630,
        alt: "Mirai Industrial Embroidery Machine",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirai Embroidery Machines | Industry-Leading Technology",
    description: "Boost your garment production with Mirai's high-performance embroidery machinery.",
    images: ["/asset/images/mirai.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mirai Embroidery Machines",
  "image": "https://miraiembroidery.in/asset/images/mirai.jpg",
  "@id": "https://miraiembroidery.in",
  "url": "https://miraiembroidery.in",
  "telephone": "+919898702417",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Surat", // Based on common location for such businesses in India, or adjust if known
    "addressLocality": "Surat",
    "addressRegion": "Gujarat",
    "postalCode": "395006",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.1702,
    "longitude": 72.8311
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  },
  "sameAs": [
    "https://wa.me/919898702417"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
