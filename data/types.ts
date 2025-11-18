export type Project = {
  id: string | number;
  title: string;
  image?: string | null;
  description: string;
  repo?: string;
  demo?: string;
  launch?: string | null;
  tags?: string[];
};

export type EducationItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education';
};

export type WorkItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work';
  tags?: string[];
};

export type ExperienceData = {
  education: EducationItem[];
  experience: WorkItem[];
};
