import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Rama Interiors | Premium Furniture & Bespoke Interior Solutions in Rajasthan",
    template: "%s | Rama Interiors"
  },
  description: "Rama Interiors is Rajasthan's premier manufacturing partner for bulk furniture, luxury residential designs, and commercial interiors. Over 20 years of excellence in furniture manufacturing.",
  keywords: ["Rama Interiors", "Premium Furniture Rajasthan", "Bespoke Furniture Manufacturing", "Custom Interior Solutions", "Bulk Furniture Orders India", "Luxury Residential Interiors Rajasthan"],
  authors: [{ name: "Rama Interiors" }],
  creator: "Rama Interiors",
  publisher: "Rama Interiors",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://ramainteriors.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rama Interiors | Premium Furniture & Bespoke Interior Solutions",
    description: "Premium manufacturing partner for bulk furniture, luxury residential, and commercial setups in Rajasthan.",
    url: "https://ramainteriors.co",
    siteName: "Rama Interiors",
    images: [
      {
        url: "/og-image.png", // We should create this or use a high-quality image
        width: 1200,
        height: 630,
        alt: "Rama Interiors - Premium Furniture & Bespoke Interiors",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rama Interiors | Premium Furniture & Bespoke Interior Solutions",
    description: "Premium manufacturing partner for bulk furniture and luxury interiors in Rajasthan.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased bg-bg text-text`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Rama Interiors",
              "image": "https://ramainteriors.co/og-image.png",
              "@id": "https://ramainteriors.co",
              "url": "https://ramainteriors.co",
              "telephone": "+91 9772966307",
              "email": "interiorsbyrama@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "New Loha Mandi Rd, Balaji Vihar, Macheda, V.K.I.A, Harmada",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "postalCode": "302013",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.9856, // Approximate for Harmada/VKI
                "longitude": 75.7667
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
                // Add actual social links if you have them
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
