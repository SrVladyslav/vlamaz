import type { Metadata } from "next";
import { Rubik, UnifrakturMaguntia, Mea_Culpa, Great_Vibes} from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next"

const rubik = Rubik({
  subsets: ['latin','latin-ext'],
  // display: 'swap',
  variable: '--font-rubik',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  // display: 'swap',
  variable: "--font-great-vibes",
})

export const metadata: Metadata = {
  title: "Vlamaz | Home",
  description: "Welcome to my personal website, here you can find all the useful information about me and book a meeting if necessary.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning
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
