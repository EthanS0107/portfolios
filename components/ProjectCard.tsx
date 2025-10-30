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

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-muted/30"
    >
      {/* Image placeholder ou gradient */}
      <div className="relative h-48 bg-gradient-to-br from-brand-primary/20 via-brand-muted/30 to-brand-primary/10 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 border-2 border-brand-primary/30 rounded-lg transform rotate-45" />
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-brand-text/0 group-hover:bg-brand-text/5 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-brand-text group-hover:text-brand-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="mt-2 text-brand-text/70 leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-text/70 hover:text-brand-primary transition-colors group/link"
            >
              <Github size={16} />
              <span>Code</span>
              <ArrowUpRight
                size={14}
                className="opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all"
              />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-text/70 hover:text-brand-primary transition-colors group/link"
            >
              <ExternalLink size={16} />
              <span>Démo</span>
              <ArrowUpRight
                size={14}
                className="opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all"
              />
            </a>
          )}
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-primary/0 to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.article>
  );
}
