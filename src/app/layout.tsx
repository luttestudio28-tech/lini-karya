import type { Metadata } from "next";
import { Italiana, Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const fontDisplay = Italiana({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const fontBody = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
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
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
