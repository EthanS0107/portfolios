"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

type Project = {
  id: string | number;
  title: string;
  description: string;
  repo?: string;
  demo?: string;
  tags?: string[];
  image?: string;
};

// ======
// STYLES
// ======

const styles = {
  // Carte principale du projet
  card: "group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all \
  duration-300 border border-brand-muted/30 dark:bg-gray-800 dark:border-gray-700",

  // Zone d'image/gradient
  imageContainer:
    "relative h-48 bg-gradient-to-br from-brand-primary/20 via-brand-muted/30 to-brand-primary/10 overflow-hidden",

  // Image du projet
  image:
    "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",

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
    "text-xl font-semibold text-brand-text group-hover:text-brand-primary transition-colors duration-300 \
    dark:text-gray-100 dark:group-hover:text-teal-400",

  // Description
  description:
    "mt-2 text-brand-text/70 leading-relaxed font-light dark:text-gray-300",

  // Conteneur des tags
  tagsContainer: "flex flex-wrap gap-2",

  // Tag individuel
  tag: "px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full \
  dark:text-teal-400 dark:bg-teal-900/30",

  // Conteneur des liens
  linksContainer: "flex gap-4 pt-2",

  // Lien (Code/Démo)
  link: "inline-flex items-center gap-2 text-sm font-medium text-brand-text/70 hover:text-brand-primary \
  transition-colors group/link dark:text-gray-400 dark:hover:text-teal-400",

  // Icône de flèche dans les liens
  arrow:
    "opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all",

  // Accent décoratif dans le coin
  cornerAccent:
    "absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-primary/0 to-brand-primary/5 opacity-0 \
    group-hover:opacity-100 transition-opacity duration-300",
};

export default function ProjectCard({ project }: { project: Project }) {
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
          <img
            src={project.image}
            alt={project.title}
            className={styles.image}
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
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className={styles.cornerAccent} />
    </motion.article>
  );
}
