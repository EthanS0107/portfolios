import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border-b border-brand-muted bg-brand-surface/90 backdrop-blur supports-[backdrop-filter]:bg-brand-surface/80 dark:bg-gray-900/90 dark:border-gray-700">
      <div className="container py-4 flex items-center justify-between text-brand-text dark:text-gray-200">
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition-opacity"
        >
          <img src="/logo.svg" alt="Ethan Serville" className="h-10" />
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/projects"
            className="text-brand-primary hover:opacity-90 dark:text-teal-400"
          >
            Projets
          </Link>
          <Link
            href="/skills"
            className="text-brand-primary hover:opacity-90 dark:text-teal-400"
          >
            Compétences
          </Link>
          <Link
            href="/experience"
            className="text-brand-primary hover:opacity-90 dark:text-teal-400"
          >
            Parcours
          </Link>
          <Link
            href="/contact"
            className="text-brand-primary hover:opacity-90 dark:text-teal-400"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
