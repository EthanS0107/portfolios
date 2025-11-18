import { ExperienceData } from './types';

export const experienceData: ExperienceData = {
  education: [
    {
      title: 'BUT informatique',
      organization: 'IUT Reims Chalon-Charleville',
      period: '2024 - Actuel',
      description: 'Parcours développement (C++)',
      type: 'education',
    },
    {
      title: 'Baccalauréat Générale',
      organization: 'Lycée Saint-Vincent | Senlis',
      period: '2021 - 2024',
      description:
        'Spécialité Mathématiques, NSI (Numérique et Sciences Informatiques) et SES (Science économique et sociale)',
      type: 'education',
    },
  ],
  experience: [
    {
      title: 'Développeur Web (stagiaire)',
      organization: 'Entreprise XYZ',
      period: 'Juin 2024 - Août 2024',
      description:
        "Participation au développement d'une application interne en React et Node.js. Création de composants réutilisables, intégration d'APIs REST, et tests unitaires.",
      type: 'work',
      tags: ['React', 'Node.js', 'REST API', 'Jest'],
    },
  ],
};

export default experienceData;
