"use client";
import { motion } from "framer-motion";

// ======
// STYLES
// ======

const styles = {
  section: "py-20 bg-brand-surface",
  container: "container mx-auto px-4",
  content: "max-w-4xl mx-auto",
  title: "text-4xl font-bold text-brand-text mb-8",
  textContainer: "text-brand-text/80 space-y-4",
};

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.content}
        >
          <h2 className={styles.title}>À propos</h2>
          <div className={styles.textContainer}>
            <p>
              Je suis un étudiant en informatique passionné par la création
              d&apos;applications web modernes et performantes. Mon parcours
              académique m&apos;a permis de développer une solide base en
              programmation et en résolution de problèmes.
            </p>
            <p>
              Je m&apos;intéresse particulièrement aux technologies web
              modernes, à l&apos;intelligence artificielle et au développement
              d&apos;applications innovantes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
