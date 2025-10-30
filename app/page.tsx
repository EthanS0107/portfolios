import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="py-10">
      <div className="grid gap-10 md:grid-cols-12 items-center">
        {/* Colonne texte */}
        <div className="md:col-span-7 lg:col-span-7">
          <span className="inline-block rounded-full bg-brand-muted/60 text-brand-text px-3 py-1 text-xs tracking-wide">
            Portfolio
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-brand-text">
            Bonjour, je m’appelle{" "}
            <span className="text-brand-primary">Ethan Serville</span>
          </h1>
          <p className="mt-4 text-lg text-brand-text/80">
            Étudiant en BUT informatique | Passionné par le développement.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center rounded bg-brand-primary px-4 py-2 text-white hover:opacity-90"
            >
              Voir mes projets
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded border border-brand-muted px-4 py-2 text-brand-text hover:opacity-90"
            >
              Me contacter
            </Link>
            <a
              href="/cv.pdf"
              className="inline-flex items-center rounded border border-brand-muted px-4 py-2 text-brand-text hover:opacity-90"
              download
            >
              Télécharger mon CV
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-brand-text/70">
            <a
              href="https://github.com/EthanS0107"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-90"
            >
              GitHub
            </a>
            <a
              href="https://fr.linkedin.com/in/ethan-serville"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-90"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ethanserville@gmail.com"
              className="hover:opacity-90"
            >
              ethanserville@gmail.com
            </a>
          </div>
        </div>

        {/* Colonne image */}
        <div className="md:col-span-5 lg:col-span-5 flex md:justify-end">
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-brand-muted shadow-sm">
            <Image
              src="/profile.jpg"
              alt="Photo de profil"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 12rem, (max-width: 1024px) 16rem, 18rem"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bandeau d’infos rapides */}
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-brand-muted p-4">
          <div className="text-sm text-brand-text/70">Spécialité</div>
          <div className="font-semibold text-brand-text">Développement</div>
        </div>
        <div className="rounded-lg border border-brand-muted p-4">
          <div className="text-sm text-brand-text/70">Technos</div>
          <div className="font-semibold text-brand-text">
            C++, PHP, Python, HTML/CSS
          </div>
        </div>
        <div className="rounded-lg border border-brand-muted p-4">
          <div className="text-sm text-brand-text/70">Localisation</div>
          <div className="font-semibold text-brand-text">
            Reims & Crépy en Valois
          </div>
        </div>
      </div>
    </section>
  );
}
