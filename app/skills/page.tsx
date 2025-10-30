import SkillCategory from "@/components/SkillCategory";

export const metadata = {
  title: "Compétences | Ethan Serville",
  description: "Mes compétences techniques en développement web et logiciel",
};

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Langages de programmation",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "SQL", level: 70 },
      ],
    },
    {
      title: "Frameworks & Bibliothèques",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Outils & Technologies",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Docker", level: 70 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "REST API", level: 80 },
      ],
    },
    {
      title: "Compétences transversales",
      skills: [
        { name: "Travail d'équipe", level: 90 },
        { name: "Résolution de problèmes", level: 85 },
        { name: "Communication", level: 80 },
        { name: "Gestion de projet", level: 75 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-muted/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-brand-text">
              Compétences
            </h1>
            <div className="w-20 h-1 bg-brand-primary rounded-full" />
            <p className="text-xl text-brand-text/70 max-w-2xl font-light">
              Un aperçu de mes compétences techniques et soft skills développées
              au fil de mes projets et formations.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
