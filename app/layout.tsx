import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Ethan Serville — Portfolio",
  description:
    "Portfolio d'Ethan Serville — projets, compétences, formation et contact.",
  applicationName: "Ethan Serville — Portfolio",
  authors: [{ name: "Ethan Serville" }],
  openGraph: {
    title: "Ethan Serville — Portfolio",
    description:
      "Portfolio d'Ethan Serville — projets, compétences, formation et contact.",
    url: "https://ethan-serville-portfolios-sigma-six.vercel.app",
    siteName: "Ethan Serville",
    images: [
      {
        url: "https://ethan-serville-portfolios-sigma-six.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ethan Serville — Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Serville — Portfolio",
    description:
      "Portfolio d'Ethan Serville — projets, compétences, formation et contact.",
    images: [
      "https://ethan-serville-portfolios-sigma-six.vercel.app/og-image.png",
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* JSON-LD: Schema.org Person for better indexing */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ethan Serville",
            "url": "https://ethan-serville-portfolios-sigma-six.vercel.app",
            "sameAs": [
              "https://github.com/EthanS0107"
            ]
          }`}
        </script>
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main className="container py-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
