import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-brand-muted bg-brand-surface/90 backdrop-blur supports-[backdrop-filter]:bg-brand-surface/80">
      <div className="container py-4 flex items-center justify-between text-brand-text">
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition-opacity"
        >
          <img src="/logo.svg" alt="Ethan Serville" className="h-10" />
        </Link>
        <nav className="space-x-4">
          <Link
            href="/projects"
            className="text-brand-primary hover:opacity-90"
          >
            Projets
          </Link>
          <Link href="/skills" className="text-brand-primary hover:opacity-90">
            Compétences
          </Link>
          <Link
            href="/experience"
            className="text-brand-primary hover:opacity-90"
          >
            Parcours
          </Link>
          <Link href="/contact" className="text-brand-primary hover:opacity-90">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
