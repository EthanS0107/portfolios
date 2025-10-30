"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-surface/90 backdrop-blur supports-[backdrop-filter]:bg-brand-surface/80 shadow"
          : "bg-transparent"
      } border-b ${isScrolled ? "border-brand-muted" : "border-transparent"}`}
    >
      <div className="container mx-auto px-4 text-brand-text">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold hover:opacity-90">
            Portfolio
          </a>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-brand-primary hover:opacity-90 transition-opacity"
            >
              À propos
            </a>
            <a
              href="#skills"
              className="text-brand-primary hover:opacity-90 transition-opacity"
            >
              Compétences
            </a>
            <a
              href="#projects"
              className="text-brand-primary hover:opacity-90 transition-opacity"
            >
              Projets
            </a>
            <a
              href="#contact"
              className="text-brand-primary hover:opacity-90 transition-opacity"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
