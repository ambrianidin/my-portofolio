import type { Metadata } from "next";
import { Josefin_Sans, Chivo, Caveat } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nadine Ambriani — Fullstack Developer",
  description:
    "Nadine Ambriani — a fullstack developer, West Java, Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${josefin.variable} ${chivo.variable} ${caveat.variable} h-full scroll-smooth scroll-pt-24 antialiased motion-reduce:scroll-auto`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
