"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// ======
// STYLES
// ======

const styles = {
  // Bouton du toggle
  button:
    "p-2 rounded-lg border border-brand-muted/30 bg-brand-surface/50 hover:bg-brand-muted/20 \
    transition-colors dark:border-gray-600 dark:hover:bg-gray-700/50",

  // Placeholder pendant le chargement
  placeholder: "w-5 h-5",

  // Icône
  icon: "w-5 h-5 text-brand-text dark:text-gray-300",
};

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Éviter l'hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className={styles.button} aria-label="Toggle theme">
        <div className={styles.placeholder} />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={styles.button}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className={styles.icon} />
      ) : (
        <Moon className={styles.icon} />
      )}
    </button>
  );
}
