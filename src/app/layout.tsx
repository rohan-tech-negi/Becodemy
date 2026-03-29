import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../shared/styles/globals.css";
import Providers from "@/shared/utils/Providers";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";

const clashDisplay = localFont({
  src: "../assets/ClashDisplay-Variable.ttf",
  variable: "--font-clash-display",
  display: "swap",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Becodemy — Newsletter Platform Built for Growth",
  description: "Everything you need to create, send, and scale your newsletter — all in one powerful platform. Start your free trial today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${clashDisplay.variable} ${inter.variable} antialiased`}
        >
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
