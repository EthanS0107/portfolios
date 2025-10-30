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
        isScrolled ? "bg-gray-900/95 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-white">
            Portfolio
          </a>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              À propos
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Compétences
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projets
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
