"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink, Play } from "lucide-react";

type Project = {
  id: string | number;
  title: string;
  description: string;
  repo?: string;
  demo?: string;
  tags?: string[];
  image?: string | null;
};

// ======
// STYLES
// ======

const styles = {
  // Carte principale du projet
  card: "group relative bg-brand-surface rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all \
  duration-300 border border-brand-muted/30 bg-brand-surface/100 border-brand-muted/100",

  // Zone d'image/gradient
  imageContainer:
    "relative h-48 bg-gradient-to-br from-brand-primary/20 via-brand-muted/30 to-brand-primary/10 overflow-hidden flex items-center justify-center",

  // Image du projet
  image:
    "w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-2",

  // Icône décorative (si pas d'image)
  placeholder: "absolute inset-0 flex items-center justify-center",
  placeholderIcon:
    "w-20 h-20 border-2 border-brand-primary/30 rounded-lg transform rotate-45",

  // Overlay au survol
  overlay:
    "absolute inset-0 bg-brand-text/0 group-hover:bg-brand-text/5 transition-all duration-300",

  // Contenu de la carte
  content: "p-6 space-y-4",

  // Titre du projet
  title:
    "text-xl font-semibold text-brand-text group-hover:text-brand-primary transition-colors duration-300",

  // Description
  description: "mt-2 text-brand-text/70 leading-relaxed font-light",

  // Conteneur des tags
  tagsContainer: "flex flex-wrap gap-2",

  // Tag individuel
  tag: "px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full",

  // Conteneur des liens
  linksContainer: "flex gap-4 pt-2",

  // Lien (Code/Démo)
  link: "inline-flex items-center gap-2 text-sm font-medium text-brand-text/70 hover:text-brand-primary \
  transition-colors group/link",

  // Bouton principal (Lancer)
  ctaButton:
    "ml-auto inline-flex items-center gap-2 bg-brand-primary text-white px-3 py-2 rounded-md text-sm font-semibold hover:brightness-105 transition",
  ctaDisabled:
    "ml-auto inline-flex items-center gap-2 bg-brand-muted text-brand-text/60 px-3 py-2 rounded-md text-sm font-semibold cursor-not-allowed",

  // Icône de flèche dans les liens
  arrow:
    "opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all",

  // Accent décoratif dans le coin
  cornerAccent:
    "absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-primary/0 to-brand-primary/5 opacity-0 \
    group-hover:opacity-100 transition-opacity duration-300",
};

export default function ProjectCard({ project }: { project: Project }) {
  const handleLaunch = () => {
    const hasDemo = project.demo && project.demo.trim().length > 0;
    const hasRepo = project.repo && project.repo.trim().length > 0;

    if (hasDemo) {
      window.open(project.demo, "_blank", "noopener,noreferrer");
      return;
    }

    if (hasRepo) {
      // If no demo, open the repo so user can download/run locally
      window.open(project.repo, "_blank", "noopener,noreferrer");
      return;
    }

    // Fallback: notify user there's no demo available
    alert(
      "Aucune démo disponible pour ce projet. Consultez le dépôt pour les instructions d'exécution."
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={styles.card}
    >
      {/* Image placeholder ou gradient */}
      <div className={styles.imageContainer}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className={styles.placeholder}>
            <div className={styles.placeholderIcon} />
          </div>
        )}

        {/* Overlay on hover */}
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
        </div>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className={styles.tagsContainer}>
            {project.tags.map((tag, i) => (
              <span key={i} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className={styles.linksContainer}>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <Github size={16} />
              <span>Code</span>
              <ArrowUpRight size={14} className={styles.arrow} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <ExternalLink size={16} />
              <span>Démo</span>
              <ArrowUpRight size={14} className={styles.arrow} />
            </a>
          )}

          {/* Lancer / Play button */}
          <button
            type="button"
            onClick={handleLaunch}
            className={
              project.demo?.trim() || project.repo?.trim()
                ? styles.ctaButton
                : styles.ctaDisabled
            }
            aria-label={`Lancer ${project.title}`}
            title={
              project.demo?.trim()
                ? "Ouvrir la démo"
                : project.repo?.trim()
                ? "Ouvrir le dépôt"
                : "Pas de démo disponible"
            }
          >
            <Play size={16} />
            <span>Lancer</span>
          </button>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className={styles.cornerAccent} />
    </motion.article>
  );
}
