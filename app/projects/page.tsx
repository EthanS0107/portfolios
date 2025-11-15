import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projets | Ethan Serville",
  description:
    "Découvrez mes projets et réalisations en développement web et logiciel",
};

// ======
// STYLES
// ======

const styles = {
  // Conteneur principal
  container:
    "min-h-screen bg-gradient-to-b from-brand-surface to-brand-muted/20",

  // Section Hero
  heroSection: "py-20 px-4",
  heroContainer: "container mx-auto max-w-6xl",
  heroContent: "space-y-4",

  // Titre principal
  title: "text-5xl md:text-6xl font-light tracking-tight text-brand-text",

  // Barre décorative
  divider: "w-20 h-1 bg-brand-primary rounded-full",

  // Description
  description: "text-xl text-brand-text/70 max-w-2xl font-light",

  // Section grille de projets
  projectsSection: "pb-20 px-4",
  projectsContainer: "container mx-auto max-w-6xl",
  projectsGrid: "grid gap-8 md:grid-cols-2 lg:grid-cols-2",

  // État vide
  emptyState: "text-center py-20",
  emptyText: "text-brand-text/50 text-lg",
};

export default function ProjectsPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Projets</h1>
            <div className={styles.divider} />
            <p className={styles.description}>
              Une sélection de mes projets personnels et professionnels
              démontrant mes compétences en développement.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsContainer}>
          <div className={styles.projectsGrid}>
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          {/* Empty State si pas de projets */}
          {projects.length === 0 && (
            <div className={styles.emptyState}>
              <p className={styles.emptyText}>Nouveaux projets à venir...</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
