"use client";
import { motion } from "framer-motion";

// ======
// STYLES
// ======

const styles = {
  section: "py-20 bg-brand-surface",
  container: "container mx-auto px-4",
  title: "text-4xl font-bold text-brand-text mb-12 text-center",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto",
  skillCard: "rounded-lg p-4 border border-brand-muted bg-brand-surface",
  skillHeader: "flex justify-between mb-2",
  skillName: "text-brand-text",
  skillLevel: "text-brand-text/70",
  progressBar: "h-2 bg-brand-muted/60 rounded-full",
  progressFill: "h-full bg-brand-primary rounded-full",
};

const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Python", level: 70 },
  { name: "SQL", level: 75 },
];

export default function Skills() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className={styles.title}>Compétences</h2>
          <div className={styles.grid}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <div className={styles.skillCard}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
