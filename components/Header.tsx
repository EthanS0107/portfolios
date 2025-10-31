"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/projects", label: "Projets" },
    { href: "/skills", label: "Compétences" },
    { href: "/experience", label: "Parcours" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-brand-muted/50 bg-brand-surface/80 backdrop-blur-lg supports-[backdrop-filter]:bg-brand-surface/60 dark:bg-gray-900/80 dark:border-gray-700/50 shadow-sm">
      <div className="container py-4 px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center group transition-transform hover:scale-105 duration-200"
        >
          <div className="relative h-10 w-auto">
            <Image
              src="/logo.svg"
              alt="Ethan Serville"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative px-3 md:px-4 py-2 text-sm md:text-base font-medium rounded-lg
                  transition-all duration-200 ease-in-out
                  ${
                    isActive
                      ? "text-brand-primary dark:text-teal-400 bg-brand-primary/10 dark:bg-teal-900/30"
                      : "text-brand-text/70 dark:text-gray-400 hover:text-brand-primary dark:hover:text-teal-400 hover:bg-brand-primary/5 dark:hover:bg-gray-800/50"
                  }
                `}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-brand-primary dark:bg-teal-400 rounded-full" />
                )}
              </Link>
            );
          })}

          {/* Divider */}
          <div className="w-px h-6 bg-brand-muted/50 dark:bg-gray-700 mx-2" />

          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
