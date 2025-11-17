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

  // Section des compétences
  skillsSection: "pb-20 px-4",
  skillsContainer: "container mx-auto max-w-6xl space-y-12",
};

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Langages de programmation",
      skills: [
        { name: "Python", level: 70, icon : "logo_skills/"},
        { name: "TypeScript", level: 5, icon : "logo_skills/" },
        { name: "PHP", level: 75, icon : "logo_skills/" },
        { name: "C++", level: 50, icon : "logo_skills/" },
        { name: "SQL", level: 80, icon : "logo_skills/" },
      ],
    },
    {
      title: "Frameworks & Bibliothèques",
      skills: [
        { name: "React", level: 5, icon : "logo_skills/" },
        { name: "Next.js", level: 5, icon : "logo_skills/" },
        { name: "Node.js", level: 5, icon : "logo_skills/" },
        { name: "Tailwind CSS", level: 5, icon : "logo_skills/" },
        { name: "Symfony", level: 50, icon : "logo_skills/" },
      ],
    },
    {
      title: "Outils & Technologies",
      skills: [
        { name: "Git & GitHub", level: 85, icon : "logo_skills/" },
        { name: "Linux", level: 70, icon : "logo_skills/" },
        { name: "Windows", level: 70, icon : "logo_skills/" },
        { name: "VS Code", level: 80, icon : "logo_skills/" },
        { name: "PHPStorm", level: 70, icon : "logo_skills/" },
        { name: "PyCharm", level: 70, icon : "logo_skills/" },
        { name: "Oracle", level: 80, icon : "logo_skills/" },
        { name: "MS Office", level: 90, icon : "logo_skills/" },
      ],
    },
    {
      title: "Compétences transversales",
      skills: [
        { name: "Travail d'équipe", level: 90, icon : "logo_skills/" },
        { name: "Résolution de problèmes", level: 85, icon : "logo_skills/" },
        { name: "Communication", level: 80, icon : "logo_skills/" },
        { name: "Gestion de projet", level: 80, icon : "logo_skills/" },
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
