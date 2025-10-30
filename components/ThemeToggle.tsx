"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Éviter l'hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg border border-brand-muted/30 bg-brand-surface/50 hover:bg-brand-muted/20 transition-colors"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg border border-brand-muted/30 bg-brand-surface/50 hover:bg-brand-muted/20 transition-colors dark:border-gray-600 dark:hover:bg-gray-700/50"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-brand-text dark:text-gray-300" />
      ) : (
        <Moon className="w-5 h-5 text-brand-text" />
      )}
    </button>
  );
}
