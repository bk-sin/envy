import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Envy - Gestión Segura de Variables de Entorno",
  description:
    "Sincroniza automáticamente las variables de entorno de tu equipo de desarrollo. Sin configuraciones complejas, sin problemas.",
  keywords: [
    "variables de entorno",
    "desarrollo",
    "DevOps",
    "CLI",
    "sync",
    "team",
  ],
  authors: [{ name: "Envy Team" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${inter.className} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
