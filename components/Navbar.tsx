"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ======
// STYLES
// ======

const styles = {
  // Navigation principale
  nav: "fixed w-full z-50 transition-all duration-300",

  // État scrollé
  navScrolled:
    "bg-brand-surface/90 backdrop-blur supports-[backdrop-filter]:bg-brand-surface/80 shadow",

  // État transparent
  navTransparent: "bg-transparent",

  // Bordure scrollée
  borderScrolled: "border-brand-muted",

  // Bordure transparente
  borderTransparent: "border-transparent",

  // Conteneur
  container: "container mx-auto px-4 text-brand-text",

  // Flex wrapper
  flexWrapper: "flex items-center justify-between h-16",

  // Logo
  logo: "text-xl font-bold hover:opacity-90",

  // Menu desktop
  menu: "hidden md:flex space-x-8",

  // Lien de navigation
  link: "text-brand-primary hover:opacity-90 transition-opacity",
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`${styles.nav} ${
        isScrolled ? styles.navScrolled : styles.navTransparent
      } border-b ${
        isScrolled ? styles.borderScrolled : styles.borderTransparent
      }`}
    >
      <div className={styles.container}>
        <div className={styles.flexWrapper}>
          <a href="#" className={styles.logo}>
            Portfolio
          </a>
          <div className={styles.menu}>
            <a href="#about" className={styles.link}>
              À propos
            </a>
            <a href="#skills" className={styles.link}>
              Compétences
            </a>
            <a href="#projects" className={styles.link}>
              Projets
            </a>
            <a href="#contact" className={styles.link}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
