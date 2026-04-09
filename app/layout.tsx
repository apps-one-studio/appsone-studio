import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import StickyCTA from "@/components/ui/StickyCTA";
import ScrollCTA from "@/components/ui/ScrollCTA";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

/*Fonts */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/*Metadata (ONLY ONE EXPORT) */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.appsonestudio.com"),

  title: {
    default: "Appsone Studio — AI Website Development & Digital Solutions",
    template: "%s | Appsone Studio",
  },

  description:
    "Appsone Studio builds AI-powered websites, scalable SaaS platforms, and growth-driven digital transformation solutions for modern businesses.",

  keywords: [
    "Web Development Nigeria",
    "AI Website Development",
    "SaaS Development",
    "Next.js Agency",
    "digital transformation",
    "UX strategy",
    "SEO optimization",
    "Appsone Studio",
  ],

  authors: [{ name: "Appsone Studio" }],
  creator: "Appsone Studio",

  openGraph: {
    title: "Appsone Studio",
    description:
      "We engineer scalable digital products, SaaS platforms, and AI-powered systems.",
    url: "https://www.appsonestudio.com",
    siteName: "Appsone Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Appsone Studio",
    description:
      "AI-powered digital systems, SaaS platforms, and high-performance web apps.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.appsonestudio.com",
  },
};

/* REQUIRED DEFAULT EXPORT (THIS FIXES YOUR ERROR) */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">

        {/* Global UI */}
        <Navbar />
        <ScrollProgress />
        <StickyCTA />
        <ScrollCTA />
        <WhatsAppFloat />

        {/* Page Content */}
        <main className="pt-20">{children}</main>

        <Footer />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Appsone Studio",
              url: "https://www.appsonestudio.com",
              logo: "https://www.appsonestudio.com/logo.png",
              sameAs: ["https://wa.me/2348077776001"],
            }),
          }}
        />


      </body>
    </html>
  );
}