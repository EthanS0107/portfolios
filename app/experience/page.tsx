import TimelineItem from "../../components/TimelineItem";
import data from "@/data/experience.json";

export const metadata = {
  title: "Parcours | Ethan Serville",
  description: "Mon parcours académique et professionnel",
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

  // Section Timeline
  timelineSection: "pb-20 px-4",
  timelineContainer: "container mx-auto max-w-4xl space-y-16",

  // Titre de section (Formation / Expérience)
  sectionTitle:
    "text-3xl font-light text-brand-text mb-8 border-l-4 border-brand-primary pl-4",

  // Liste des items
  itemsList: "space-y-8",
};

export default function ExperiencePage() {
  const education = data.education.map((item) => ({
    ...item,
    type: "education" as const,
  }));
  // Garder les données en réserve pour réactiver la section plus tard.
  // La déclaration ci‑dessous est volontairement non utilisée pour l'instant.
  // Désactiver la règle ESLint juste pour cette ligne afin d'éviter l'erreur de build.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _experience = data.experience.map((item) => ({
    ...item,
    type: "work" as const,
  }));

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Parcours</h1>
            <div className={styles.divider} />
            <p className={styles.description}>
              Mon parcours académique et mes expériences professionnelles qui
              ont façonné mes compétences.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineContainer}>
          {/* Formation */}
          <div>
            <h2 className={styles.sectionTitle}>Formation</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-brand-muted" />
              <div className={styles.itemsList}>
                {education.map((item, index) => (
                  <TimelineItem key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Expérience professionnelle (commentée pour exemple)
              Décommente ce bloc quand tu voudras afficher tes expériences réelles.
          */}
          {/*
          {experience.length > 0 && (
            <div>
              <h2 className={styles.sectionTitle}>
                Expérience professionnelle
              </h2>
              <div className={styles.itemsList}>
                {experience.map((item, index) => (
                  <TimelineItem key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          )}
          */}
        </div>
      </section>
    </div>
  );
}
