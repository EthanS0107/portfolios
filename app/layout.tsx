import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Portfolio - Étudiant en informatique',
  description: 'Portfolio d\'un étudiant en informatique — projets, compétences, formation et contact.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
