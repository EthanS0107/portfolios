import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Projets</h2>
      <div className="mt-6 grid gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
