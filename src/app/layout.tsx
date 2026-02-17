import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "lib/CookieConsent";
import { Toaster } from "ui/sonner";
import Header from "./header";
import Footer from "./footer";

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ["latin"],
  weight: ["400", "600", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://eleveight.ai'),
  title: "Eleveight AI - Cutting-edge technologies driving AI disruption",
  description: "Eleveight AI is a next-generation AI data center in Armenia, powered by NVIDIA DGX SuperPOD systems for machine learning and deep learning workloads.",
  openGraph: {
    title: "Eleveight AI - Cutting-edge technologies driving AI disruption",
    description: "Eleveight AI is a next-generation AI data center in Armenia, powered by NVIDIA DGX SuperPOD systems for machine learning and deep learning workloads.",
    url: "https://eleveight.ai",
    siteName: "Eleveight AI",
    images: [
      {
        url: "/El_generic_opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Eleveight AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eleveight AI - Cutting-edge technologies driving AI disruption",
    description: "Eleveight AI is a next-generation AI data center in Armenia, powered by NVIDIA DGX SuperPOD systems for machine learning and deep learning workloads.",
    images: ["/El_generic_opengraph.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: '#000',
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg"
          sizes="any"
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MDDXHRBJ');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JW7KVVM3G0"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JW7KVVM3G0');
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MDDXHRBJ"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        {children}
        <CookieConsent />
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
