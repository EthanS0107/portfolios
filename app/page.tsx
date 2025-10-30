import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Bonjour — je suis étudiant en informatique</h1>
      <p className="mt-4 text-lg text-gray-700">Bienvenue sur mon portfolio. Vous trouverez ici mes projets, compétences et expériences.</p>

      <div className="mt-8 space-x-4">
        <Link href="/projects" className="text-blue-600 underline">Voir mes projets</Link>
        <Link href="/about" className="ml-4 text-blue-600 underline">À propos</Link>
      </div>
    </section>
  )
}
