import TimelineItem from "../../components/TimelineItem";

export const metadata = {
  title: "Parcours | Ethan Serville",
  description: "Mon parcours académique et professionnel",
};

export default function ExperiencePage() {
  const education = [
    {
      title: "BUT informatique",
      organization: "IUT Reims Chalon-Charleville",
      period: "2024 - Actuel",
      description: "Parcours développement (C++)",
      type: "education" as const,
    },
    {
      title: "Baccalauréat Générale",
      organization: "Lycée Saint-Vincent | Senlis",
      period: "2021 - 2024",
      description:
        "Spécialité Mathématiques, NSI (Numérique et Sciences Informatiques) et SES (Science économique et sociale)",
      type: "education" as const,
    },
  ];
  /*
const experience = [
  {
    title: "Développeur Web (stagiaire)",
    organization: "Entreprise XYZ",
    period: "Juin 2024 - Août 2024",
    description:
      "Participation au développement d'une application interne en React et Node.js. Création de composants réutilisables, intégration d'APIs REST, et tests unitaires.",
    type: "work" as const,
    tags: ["React", "Node.js", "REST API", "Jest"],
  }
];
*/
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
        </div>
      </section>
    </div>
  );
}
