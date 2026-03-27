export interface Experience {
  title: string;
  place: string;
  date: string;
}

export interface RepositoryContribution {
  title: string;
  url: string;
  mergedAt: string;
}

export interface Contributions {
  [repoName: string]: RepositoryContribution[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: string;
  link?: string;
}
