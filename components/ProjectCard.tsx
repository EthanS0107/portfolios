type Project = {
  id: string | number
  title: string
  description: string
  repo?: string
  demo?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="p-4 border rounded">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-gray-700">{project.description}</p>
      <div className="mt-3 text-sm space-x-3">
        {project.repo && <a href={project.repo} className="text-blue-600">Code</a>}
        {project.demo && <a href={project.demo} className="text-blue-600">Démo</a>}
      </div>
    </article>
  )
}
