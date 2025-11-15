"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// ======
// STYLES
// ======

const styles = {
  section: "h-screen flex items-center justify-center bg-brand-surface",
  content: "text-center",
  mainTitle: "text-5xl md:text-7xl font-bold text-brand-text mb-4",
  subtitle: "text-2xl md:text-3xl text-brand-text/80 mb-8",
  description: "text-xl text-brand-text/80 max-w-2xl mx-auto",
  cta: "inline-flex items-center gap-3 bg-danger text-white px-5 py-3 rounded-md font-semibold hover:brightness-110 transition",
  nameAccent: "block w-28 h-1 bg-danger rounded-full mx-auto mt-4",
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
        <span className={styles.nameAccent} aria-hidden />
        <h2 className={styles.subtitle}>Développeur Full Stack</h2>
        <p className={styles.description}>
          Étudiant passionné en informatique, spécialisé dans le développement.
        </p>
        <div className="flex items-center justify-center">
          <Link href="#projects" className={styles.cta} onClick={() => {}}>
            Voir mes projets
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
