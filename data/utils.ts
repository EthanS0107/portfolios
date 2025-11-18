import projects from './projects';
import experienceData from './experience';
import type { Project, EducationItem, WorkItem } from './types';

function parseStartYear(period: string): number {
  if (!period) return 0;
  const normalized = period.toLowerCase();
  if (normalized.includes('actuel') || normalized.includes('present')) return 9999;
  const m = period.match(/(\d{4})/);
  if (m) return Number(m[1]);
  return 0;
}

export function getProjects(): Project[] {
  return projects;
}

export function getProjectById(id: string | number): Project | undefined {
  return projects.find((p) => String(p.id) === String(id));
}

export function filterProjectsByTag(tag: string): Project[] {
  return projects.filter((p) => (p.tags || []).includes(tag));
}

export function getAllProjectTags(): string[] {
  const set = new Set<string>();
  projects.forEach((p) => (p.tags || []).forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

export function getEducation(): EducationItem[] {
  return experienceData.education.slice();
}

export function getExperience(): WorkItem[] {
  return experienceData.experience.slice();
}

export function sortByStartYearDesc<T extends { period?: string }>(items: T[]): T[] {
  return items
    .slice()
    .sort(
      (a, b) => parseStartYear(String(b.period || '')) - parseStartYear(String(a.period || '')),
    );
}

export default {
  getProjects,
  getProjectById,
  filterProjectsByTag,
  getAllProjectTags,
  getEducation,
  getExperience,
  sortByStartYearDesc,
};
