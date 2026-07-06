import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veinshot.com"),
  title: "Veinshot — One dose. No filler.",
  description:
    "Veinshot is a software studio that ships solutions straight to the vein: precise scope, senior execution, zero bloat.",
  openGraph: {
    title: "Veinshot — One dose. No filler.",
    description:
      "Veinshot is a software studio that ships solutions straight to the vein: precise scope, senior execution, zero bloat.",
    url: "https://veinshot.com",
    siteName: "Veinshot",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Veinshot",
  url: "https://veinshot.com",
  logo: "https://veinshot.com/opengraph-image.png",
  email: "hello@veinshot.com",
  description:
    "Software studio that ships solutions straight to the vein: precise scope, senior execution, zero bloat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
