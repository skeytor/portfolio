import { TAGS } from "./utilities/tags";

interface Project {
  title: string;
  description: string;
  link?: string;
  github: string;
  images?: string[];
  tags: Tag[];
  isPrivate: boolean;
}
interface ExperienceItem {
  date: string;
  title: string;
  description: string;
  company?: string;
  link?: string;
}

type Tag = keyof typeof TAGS;

export type { Project, ExperienceItem, Tag, };