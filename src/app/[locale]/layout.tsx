import type { Metadata } from "next";
import { Rubik, UnifrakturMaguntia, Mea_Culpa, Great_Vibes} from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next"

// SEO
import JsonLd from "@/components/seo/JsonLd";
import { buildPersonSchema, buildWebsiteSchema } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/seo/routes";

const rubik = Rubik({
  subsets: ['latin','latin-ext'],
  display: 'swap',
  variable: '--font-rubik',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: "--font-great-vibes",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} dir={locale === "ar-AE" ? "rtl" : "ltr"} suppressHydrationWarning
      className={`${rubik.className} ${greatVibes.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fff" />
        {/* <link rel="apple-touch-icon" href="/favicon.ico"></link>
        <link rel="shortcut icon" href="/favicon.ico" sizes="any"/> */}
        <link rel="apple-touch-icon" href="/logo.webp"/>
        <link rel="icon" type="image/webp" sizes="any" href="/logo.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <JsonLd schema={[buildPersonSchema(locale), buildWebsiteSchema(locale)]} />
      </head>
      <body>
        <Providers>
          {children}
          <SpeedInsights/>
        </Providers>
      </body>
    </html>
  );
}
