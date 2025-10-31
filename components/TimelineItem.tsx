"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

type TimelineItemProps = {
  item: {
    title: string;
    organization: string;
    period: string;
    description: string;
    type: "education" | "work";
    tags?: string[];
  };
  index: number;
};

// ======
// STYLES
// ======

const styles = {
  // Conteneur principal de l'item
  container: "relative pl-8 md:pl-12",

  // Ligne verticale de la timeline
  line: "absolute left-0 top-0 bottom-0 w-px bg-brand-muted dark:bg-gray-700",

  // Point/puce avec icône
  dot: "absolute left-0 top-2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-brand-primary \
  flex items-center justify-center dark:bg-gray-900/80 dark:border-teal-500",

  // Icône dans la puce
  icon: "text-brand-primary dark:text-teal-400",

  // Carte de contenu
  card: "bg-white rounded-lg p-6 shadow-sm border border-brand-muted/30 hover:shadow-md \
  transition-shadow dark:bg-gray-900/60 dark:border-gray-700 dark:shadow-none",

  // En-tête de la carte
  header: "space-y-2 mb-4",

  // Titre du poste/diplôme
  title: "text-xl font-semibold text-brand-text dark:text-gray-100",

  // Organisation/École
  organization:
    "flex items-center gap-2 text-brand-primary font-medium dark:text-teal-400",

  // Période
  period:
    "flex items-center gap-2 text-sm text-brand-text/60 dark:text-gray-400",

  // Description
  description: "text-brand-text/70 leading-relaxed mb-4 dark:text-gray-300",

  // Conteneur des tags
  tagsContainer: "flex flex-wrap gap-2",

  // Tag individuel
  tag: "px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full dark:text-teal-300 dark:bg-teal-900/40",
};

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const isEducation = item.type === "education";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={styles.container}
    >
      {/* Timeline line */}
      <div className={styles.line} />

      {/* Timeline dot */}
      <div className={styles.dot}>
        {isEducation ? (
          <GraduationCap className={styles.icon} size={20} />
        ) : (
          <Briefcase className={styles.icon} size={20} />
        )}
      </div>

      {/* Content Card */}
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <h3 className={styles.title}>{item.title}</h3>
          <div className={styles.organization}>
            <span>{item.organization}</span>
          </div>
          <div className={styles.period}>
            <Calendar size={14} />
            <span>{item.period}</span>
          </div>
        </div>

        {/* Description */}
        <p className={styles.description}>{item.description}</p>

        {/* Tags for work experience */}
        {item.tags && item.tags.length > 0 && (
          <div className={styles.tagsContainer}>
            {item.tags.map((tag, i) => (
              <span key={i} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
