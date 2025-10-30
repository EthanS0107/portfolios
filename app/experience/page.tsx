import experience from "@/data/experience.json";

export default function ExperiencePage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Expérience</h2>
      <ul className="mt-4 space-y-4">
        {experience.map((e) => (
          <li key={e.company}>
            <div className="font-medium">
              {e.role} — {e.company}
            </div>
            <div className="text-sm text-gray-600">{e.period}</div>
            <p className="mt-2 text-gray-700">{e.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
