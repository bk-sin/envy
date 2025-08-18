import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Providers from "./providers";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const messages = await getMessages({ locale });
  const meta = messages?.metadata ?? {};
  return {
    title: meta.title ?? "Envy - Gestión Segura de Variables de Entorno",
    description:
      meta.description ??
      "Sincroniza automáticamente las variables de entorno de tu equipo de desarrollo. Sin configuraciones complejas, sin problemas.",
    keywords: [
      meta.keywords?.env ?? "variables de entorno",
      meta.keywords?.dev ?? "desarrollo",
      meta.keywords?.devops ?? "DevOps",
      meta.keywords?.cli ?? "CLI",
      meta.keywords?.sync ?? "sync",
      meta.keywords?.team ?? "team",
    ],
    authors: [{ name: "Envy Team" }],
    icons: {
      icon: [
        { url: "/icon.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${inter.className} antialiased`}
      >
        <NextIntlClientProvider>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
