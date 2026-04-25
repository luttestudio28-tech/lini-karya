import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

const fontDisplay = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const fontBody = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lini Karya",
  description: "Minimalist Editorial Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${fontDisplay.variable} ${fontBody.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <WhatsAppCTA />
      </body>
    </html>
  );
}
