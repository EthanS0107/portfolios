"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

// ======
// STYLES
// ======

const styles = {
  // Barre de navigation principale
  header:
    "sticky top-0 z-50 border-b border-blackbrand/40 bg-blackbrand/95 \
    backdrop-blur-lg supports-[backdrop-filter]:bg-blackbrand/95 bg-blackbrand/95 \
    shadow-sm",

  // Logo
  // Ajout d'une ombre, d'une transition plus marquée, et légère rotation au survol
  logo: "flex items-center group transition-transform transition-shadow duration-300 ease-out \
    hover:scale-110 hover:-rotate-1 hover:drop-shadow-2xl hover:brightness-105 \
    active:scale-95 relative z-50",

  // Liens de navigation (état normal)
  navLink:
    "relative px-3 md:px-4 py-2 text-sm md:text-base font-medium rounded-lg transition-all \
    duration-200 ease-in-out text-brand-text/70 hover:text-danger hover:bg-danger/10",

  // Liens de navigation (état actif/sélectionné)
  navLinkActive:
    "relative px-3 md:px-4 py-2 text-sm md:text-base font-medium rounded-lg transition-all \
    duration-200 ease-in-out text-white bg-danger/20",

  // Indicateur sous le lien actif
  activeIndicator:
    "absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-brand-primary rounded-full",

  // Bouton burger
  burgerButton:
    "p-2 rounded-lg text-brand-text hover:bg-danger/10 transition-colors",

  // Overlay sombre derrière le menu mobile
  overlay: "md:hidden fixed top-[73px] inset-x-0 bottom-0 bg-black/50 z-30",

  // Panneau du menu mobile
  mobileMenu:
    "md:hidden fixed top-[73px] right-0 h-[calc(100vh-73px)] w-64 bg-blackbrand/95 \
    border-l border-blackbrand/80 z-40 transform transition-transform transition-opacity duration-300 ease-in-out",

  // Liens dans le menu mobile (état normal)
  mobileNavLink:
    "relative px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ease-in-out \
    text-brand-text/70 hover:text-danger hover:bg-danger/10",

  // Liens dans le menu mobile (état actif)
  mobileNavLinkActive:
    "relative px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ease-in-out \
    text-white bg-danger/20",

  // Point indicateur dans le menu mobile
  mobileActiveIndicator: "w-2 h-2 rounded-full bg-brand-primary",
};

export default function Header() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/projects", label: "Projets" },
    { href: "/skills", label: "Compétences" },
    { href: "/experience", label: "Parcours" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className="container py-4 px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <div className="relative h-10 w-auto">
            <Image
              src={theme === "dark" ? "/logo-dark.svg" : "/logo.svg"}
              alt="Ethan Serville"
              width={180}
              height={40}
              className="h-10 w-auto transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 md:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? styles.navLinkActive : styles.navLink}
              >
                {item.label}
                {isActive && <span className={styles.activeIndicator} />}
              </Link>
            );
          })}

          {/* Divider */}
          <div className="w-px h-6 bg-brand-muted/50 mx-2" />

          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex md:hidden items-center gap-3 relative z-50">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className={styles.burgerButton}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}

      {/* Mobile Menu */}
      <nav
        aria-hidden={!isMenuOpen}
        className={`${styles.mobileMenu} ${
          isMenuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto shadow-2xl"
            : "translate-x-full opacity-0 pointer-events-none shadow-none"
        }`}
      >
        <div className="flex flex-col p-6 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={
                  isActive ? styles.mobileNavLinkActive : styles.mobileNavLink
                }
              >
                <span className="flex items-center justify-between">
                  {item.label}
                  {isActive && (
                    <span className={styles.mobileActiveIndicator} />
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
