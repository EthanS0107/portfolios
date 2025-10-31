import Link from "next/link";
import Image from "next/image";

// ======
// STYLES
// ======

const styles = {
  // Section principale
  section: "min-h-[calc(100vh-73px-80px)] flex flex-col justify-center py-10",

  // Grille principale
  grid: "grid gap-10 md:grid-cols-12 items-center",

  // Badge "Portfolio"
  badge:
    "inline-block rounded-full bg-brand-muted/60 text-brand-text px-3 py-1 text-xs tracking-wide dark:bg-gray-700 dark:text-gray-300",

  // Titre principal
  title:
    "mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-brand-text dark:text-gray-100",

  // Nom en surbrillance
  name: "text-brand-primary dark:text-teal-400",

  // Description/sous-titre
  subtitle: "mt-4 text-lg text-brand-text/80 dark:text-gray-300",

  // Conteneur des boutons CTA
  ctaContainer: "mt-6 flex flex-wrap gap-3",

  // Bouton principal (Voir mes projets)
  primaryButton:
    "inline-flex items-center rounded bg-brand-primary px-4 py-2 text-white hover:opacity-90 dark:bg-teal-600",

  // Bouton secondaire (bordure)
  secondaryButton:
    "inline-flex items-center rounded border border-brand-muted px-4 py-2 text-brand-text hover:opacity-90 dark:border-gray-600 dark:text-gray-300",

  // Liens sociaux
  socialLinks:
    "mt-6 flex flex-wrap gap-4 text-sm text-brand-text/70 dark:text-gray-400",
  socialLink: "hover:opacity-90",

  // Photo de profil
  profileContainer: "md:col-span-5 lg:col-span-5 flex md:justify-end",
  profileImage:
    "relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-brand-muted shadow-sm dark:border-gray-700",

  // Bandeau d'infos
  infoGrid: "mt-12 grid gap-4 sm:grid-cols-3",
  infoCard:
    "rounded-lg border border-brand-muted p-4 dark:border-gray-700 dark:bg-gray-800/50",
  infoLabel: "text-sm text-brand-text/70 dark:text-gray-400",
  infoValue: "font-semibold text-brand-text dark:text-gray-200",
};

export default function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* Colonne texte */}
        <div className="md:col-span-7 lg:col-span-7">
          <span className={styles.badge}>Portfolio</span>
          <h1 className={styles.title}>
            Bonjour, je m&apos;appelle{" "}
            <span className={styles.name}>Ethan Serville</span>
          </h1>
          <p className={styles.subtitle}>
            Étudiant en BUT informatique | Passionné par le développement.
          </p>

          <div className={styles.ctaContainer}>
            <Link href="/projects" className={styles.primaryButton}>
              Voir mes projets
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Me contacter
            </Link>
            <a href="/cv.pdf" className={styles.secondaryButton} download>
              Télécharger mon CV
            </a>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/EthanS0107"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              GitHub
            </a>
            <a
              href="https://fr.linkedin.com/in/ethan-serville"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              LinkedIn
            </a>
            <a
              href="mailto:ethanserville@gmail.com"
              className={styles.socialLink}
            >
              ethanserville@gmail.com
            </a>
          </div>
        </div>

        {/* Colonne image */}
        <div className={styles.profileContainer}>
          <div className={styles.profileImage}>
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

      {/* Bandeau d'infos rapides */}
      <div className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <div className={styles.infoLabel}>Spécialité</div>
          <div className={styles.infoValue}>Développement</div>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoLabel}>Technos</div>
          <div className={styles.infoValue}>C++, PHP, Python, HTML/CSS</div>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoLabel}>Localisation</div>
          <div className={styles.infoValue}>Reims & Crépy en Valois</div>
        </div>
      </div>
    </section>
  );
}
