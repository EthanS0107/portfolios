export default function SkillList({ skills }: { skills: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((s) => (
        <li key={s} className="text-sm px-3 py-1 border rounded">{s}</li>
      ))}
    </ul>
  )
}
