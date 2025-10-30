import TimelineItem from "../../components/TimelineItem";

export const metadata = {
  title: "Parcours | Ethan Serville",
  description: "Mon parcours académique et professionnel",
};

export default function ExperiencePage() {
  const education = [
    {
      title: "Licence Informatique",
      organization: "Université Paris Cité",
      period: "2023 - 2026",
      description:
        "Spécialisation en développement logiciel et génie informatique. Apprentissage des fondamentaux de la programmation, des algorithmes et des structures de données.",
      type: "education" as const,
    },
    {
      title: "Baccalauréat Scientifique",
      organization: "Lycée Henri IV",
      period: "2020 - 2023",
      description:
        "Spécialité Mathématiques et NSI (Numérique et Sciences Informatiques). Mention Bien.",
      type: "education" as const,
    },
  ];

  const experience = [
    {
      title: "Développeur Web (stagiaire)",
      organization: "Entreprise XYZ",
      period: "Juin 2024 - Août 2024",
      description:
        "Participation au développement d'une application interne en React et Node.js. Création de composants réutilisables, intégration d'APIs REST, et tests unitaires.",
      type: "work" as const,
      tags: ["React", "Node.js", "REST API", "Jest"],
    },
    {
      title: "Développeur Freelance",
      organization: "Indépendant",
      period: "2023 - Présent",
      description:
        "Développement de sites web et applications pour des clients variés. Gestion de projet de A à Z, de la conception à la mise en production.",
      type: "work" as const,
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-muted/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-brand-text">
              Parcours
            </h1>
            <div className="w-20 h-1 bg-brand-primary rounded-full" />
            <p className="text-xl text-brand-text/70 max-w-2xl font-light">
              Mon parcours académique et mes expériences professionnelles qui
              ont façonné mes compétences.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-16">
          {/* Formation */}
          <div>
            <h2 className="text-3xl font-light text-brand-text mb-8 border-l-4 border-brand-primary pl-4">
              Formation
            </h2>
            <div className="space-y-8">
              {education.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Expérience */}
          <div>
            <h2 className="text-3xl font-light text-brand-text mb-8 border-l-4 border-brand-primary pl-4">
              Expérience professionnelle
            </h2>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
