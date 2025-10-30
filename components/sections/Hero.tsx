"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Prénom Nom
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          Développeur Full Stack
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Étudiant passionné en informatique, spécialisé dans le développement
          web et les technologies modernes.
        </p>
      </motion.div>
    </section>
  );
}
