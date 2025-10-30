import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projets | Ethan Serville",
  description:
    "Découvrez mes projets et réalisations en développement web et logiciel",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-muted/20 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-brand-text dark:text-gray-100">
              Projets
            </h1>
            <div className="w-20 h-1 bg-brand-primary rounded-full" />
            <p className="text-xl text-brand-text/70 max-w-2xl font-light dark:text-gray-300">
              Une sélection de mes projets personnels et professionnels
              démontrant mes compétences en développement.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          {/* Empty State si pas de projets */}
          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-brand-text/50 text-lg">
                Nouveaux projets à venir...
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
