"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-brand-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-brand-text mb-4">
          Prénom Nom
        </h1>
        <h2 className="text-2xl md:text-3xl text-brand-text/80 mb-8">
          Développeur Full Stack
        </h2>
        <p className="text-xl text-brand-text/80 max-w-2xl mx-auto">
          Étudiant passionné en informatique, spécialisé dans le développement.
        </p>
      </motion.div>
    </section>
  );
}
