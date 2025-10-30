import TimelineItem from "../../components/TimelineItem";
import data from "@/data/experience.json";

export const metadata = {
  title: "Parcours | Ethan Serville",
  description: "Mon parcours académique et professionnel",
};

export default function ExperiencePage() {
  const education = data.education.map((item) => ({
    ...item,
    type: "education" as const,
  }));
  const experience = data.experience.map((item) => ({
    ...item,
    type: "work" as const,
  }));

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

          {/* Expérience professionnelle */}
          {experience.length > 0 && (
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
          )}
        </div>
      </section>
    </div>
  );
}
