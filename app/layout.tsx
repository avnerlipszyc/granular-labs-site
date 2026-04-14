import type { Metadata } from "next";
import { Tiny5, Kode_Mono } from "next/font/google";
import "./globals.css";

const tiny5 = Tiny5({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tiny5",
});

const kodeMono = Kode_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-kode-mono",
});

export const metadata: Metadata = {
  title: "Granular Labs",
  description: "We are building a chip that brings data center inference and programmable logic to systems built for the edge.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${tiny5.variable} ${kodeMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
