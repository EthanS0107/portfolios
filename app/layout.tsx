import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Portfolio - Étudiant en informatique",
  description:
    "Portfolio d'un étudiant en informatique — projets, compétences, formation et contact.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
