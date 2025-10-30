import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="font-bold">Mon Portfolio</Link>
        <nav className="space-x-4">
          <Link href="/projects">Projets</Link>
          <Link href="/skills">Compétences</Link>
          <Link href="/experience">Expérience</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
