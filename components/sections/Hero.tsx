"use client";
import { motion } from "framer-motion";

// ======
// STYLES
// ======

const styles = {
  section: "h-screen flex items-center justify-center bg-brand-surface",
  content: "text-center",
  mainTitle: "text-5xl md:text-7xl font-bold text-brand-text mb-4",
  subtitle: "text-2xl md:text-3xl text-brand-text/80 mb-8",
  description: "text-xl text-brand-text/80 max-w-2xl mx-auto",
};

export default function Hero() {
  return (
    <section className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <h1 className={styles.mainTitle}>Prénom Nom</h1>
        <h2 className={styles.subtitle}>Développeur Full Stack</h2>
        <p className={styles.description}>
          Étudiant passionné en informatique, spécialisé dans le développement.
        </p>
      </motion.div>
    </section>
  );
}
