"use client";

import { motion } from "framer-motion";

type Skill = {
  name: string;
  level: number;
};

type SkillCategoryProps = {
  category: {
    title: string;
    skills: Skill[];
  };
};

// ======
// STYLES
// ======

const styles = {
  // Conteneur de la catégorie
  container: "space-y-6",

  // Titre de la catégorie
  title:
    "text-2xl font-light text-brand-text border-l-4 border-brand-primary pl-4",

  // Grille des compétences
  grid: "grid gap-6 md:grid-cols-2",

  // Conteneur d'une compétence
  skillContainer: "space-y-2",

  // En-tête (nom + pourcentage)
  skillHeader: "flex justify-between items-center",

  // Nom de la compétence
  skillName: "text-brand-text font-medium",

  // Pourcentage
  skillLevel: "text-sm text-brand-text/60 font-light",

  // Barre de progression (fond)
  progressBar: "h-2 bg-brand-muted/30 rounded-full overflow-hidden",

  // Barre de progression (remplissage)
  progressFill:
    "h-full bg-gradient-to-r from-brand-primary to-brand-primary/70 rounded-full relative",

  // Effet de brillance sur la barre
  shimmer:
    "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer",
};

export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      {/* Category Title */}
      <h2 className={styles.title}>{category.title}</h2>

      {/* Skills Grid */}
      <div className={styles.grid}>
        {category.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={styles.skillContainer}
          >
            {/* Skill Name and Level */}
            <div className={styles.skillHeader}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillLevel}>{skill.level}%</span>
            </div>

            {/* Progress Bar */}
            <div className={styles.progressBar}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.1 + 0.2,
                  ease: "easeOut",
                }}
                className={styles.progressFill}
              >
                {/* Shine effect */}
                <div className={styles.shimmer} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
