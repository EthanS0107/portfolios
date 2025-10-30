"use client";
import { motion } from "framer-motion";

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
    <section className="py-20 bg-brand-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-brand-text mb-12 text-center">
            Projets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg overflow-hidden border border-brand-muted bg-brand-surface"
              >
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-text mb-2">
                    {project.title}
                  </h3>
                  <p className="text-brand-text/80 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-brand-muted/40 text-brand-text rounded-full text-sm"
                      >
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
