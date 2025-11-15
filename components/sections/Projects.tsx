"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// ======
// STYLES
// ======

const styles = {
  section: "py-20 bg-brand-surface",
  container: "container mx-auto px-4",
  title: "text-4xl font-bold text-danger mb-12 text-center",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "rounded-lg overflow-hidden border border-blackbrand/80 bg-blackbrand/95",
  imageContainer: "relative aspect-video",
  image: "object-cover w-full h-full",
  cardContent: "p-6",
  cardTitle: "text-xl font-bold text-white mb-2",
  cardDescription: "text-brand-text/70 mb-4",
  techContainer: "flex flex-wrap gap-2",
  techTag: "px-3 py-1 bg-danger/700 text-white rounded-full text-sm",
};

const projects = [
  {
    title: "Projet 1",
    description: "Description du projet 1",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/projects/project1.jpg",
    link: "#",
  },
  {
    title: "Projet 2",
    description: "Description du projet 2",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/project2.jpg",
    link: "#",
  },
  // Ajoutez vos projets ici
];

export default function Projects() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className={styles.title}>Projets</h2>
          <div className={styles.grid}>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.card}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>
                    {project.description}
                  </p>
                  <div className={styles.techContainer}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
