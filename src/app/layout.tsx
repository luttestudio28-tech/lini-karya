import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import CustomCursor from "@/components/ui/CustomCursor";

const fontDisplay = Bricolage_Grotesque({
  variable: "--font-display",
  weight: ["800"],
  subsets: ["latin"],
});

const fontMono = Space_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lini Karya | Studio Arsitektur Digital & Jasa Website Bandung",
    template: "%s | Lini Karya"
  },
  description: "Lini Karya adalah studio arsitektur digital di Bandung yang fokus membangun identitas digital premium, ekosistem web otomatis, dan strategi skala untuk UMKM Indonesia.",
  keywords: ["Digital Agency Bandung", "Jasa Website UMKM", "Arsitektur Digital", "Web Development Indonesia", "Lini Karya Studio", "Branding Design Bandung"],
  authors: [{ name: "Lini Karya Studio" }],
  creator: "Lini Karya Studio",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linikarya.com",
    title: "Lini Karya | Studio Arsitektur Digital & Jasa Website Bandung",
    description: "Membangun infrastruktur digital berperforma tinggi untuk generasi baru UMKM Indonesia. Presisi di atas dekorasi.",
    siteName: "Lini Karya",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lini Karya Studio Arsitektur Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lini Karya | Studio Arsitektur Digital",
    description: "Membangun infrastruktur digital berperforma tinggi untuk generasi baru UMKM Indonesia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "kdjbVMfE0pbawZhV08Ogv8EFzXKCGlPUaHz9Zp6NRHo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${fontDisplay.variable} ${fontMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DPK3HY9CT8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DPK3HY9CT8');
          `}
        </Script>
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <WhatsAppCTA />
      </body>
    </html>
  );
}
