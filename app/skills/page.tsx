import SkillCategory from "../../components/SkillCategory";

export const metadata = {
  title: "Compétences | Ethan Serville",
  description: "Mes compétences techniques en développement web et logiciel",
};

// ======
// STYLES
// ======

const styles = {
  // Conteneur principal
  container:
    "min-h-screen bg-gradient-to-b from-white to-brand-muted/20 dark:from-gray-900 dark:to-gray-800",

  // Section Hero
  heroSection: "py-20 px-4",
  heroContainer: "container mx-auto max-w-6xl",
  heroContent: "space-y-4",

  // Titre principal
  title:
    "text-5xl md:text-6xl font-light tracking-tight text-brand-text dark:text-gray-100",

  // Barre décorative
  divider: "w-20 h-1 bg-brand-primary rounded-full",

  // Description
  description:
    "text-xl text-brand-text/70 max-w-2xl font-light dark:text-gray-300",

  // Section des compétences
  skillsSection: "pb-20 px-4",
  skillsContainer: "container mx-auto max-w-6xl space-y-12",
};

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Langages de programmation",
      skills: [
        { name: "Python", level: 70 },
        { name: "TypeScript", level: 5 },
        { name: "PHP", level: 75 },
        { name: "C++", level: 50 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      title: "Frameworks & Bibliothèques",
      skills: [
        { name: "React", level: 5 },
        { name: "Next.js", level: 5 },
        { name: "Node.js", level: 5 },
        { name: "Tailwind CSS", level: 5 },
        { name: "Symfony", level: 50 },
      ],
    },
    {
      title: "Outils & Technologies",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Linux", level: 70 },
        { name: "Windows", level: 70 },
        { name: "VS Code", level: 80 },
        { name: "PHPStorm", level: 70 },
        { name: "PyCharm", level: 70 },
        { name: "Oracle", level: 80 },
        { name: "MS Office", level: 90 },
      ],
    },
    {
      title: "Compétences transversales",
      skills: [
        { name: "Travail d'équipe", level: 90 },
        { name: "Résolution de problèmes", level: 85 },
        { name: "Communication", level: 80 },
        { name: "Gestion de projet", level: 80 },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Compétences</h1>
            <div className={styles.divider} />
            <p className={styles.description}>
              Un aperçu de mes compétences techniques et soft skills développées
              au fil de mes projets et formations.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className={styles.skillsSection}>
        <div className={styles.skillsContainer}>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
