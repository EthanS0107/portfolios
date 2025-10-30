import SkillList from "@/components/SkillList";

export default function SkillsPage() {
  const skills = ["JavaScript", "TypeScript", "React", "Node.js", "SQL", "Git"];

  return (
    <section>
      <h2 className="text-2xl font-semibold">Compétences</h2>
      <div className="mt-4">
        <SkillList skills={skills} />
      </div>
    </section>
  );
}
