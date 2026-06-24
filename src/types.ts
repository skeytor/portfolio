export interface FormState {
  email: string;
  name: string;
  message: string;
}
export interface ExperienceItem {
  date: string;
  title: string;
  description: string;
  company?: string;
  link?: string;
}
export interface Project {
  title: string;
  description: string;
  link?: string;
  github: string;
  image: string;
  tags: Tag[];
  isPrivate?: boolean;
}

type TagType =
  | "C#"
  | "SQL Server"
  | "Docker"
  | "JWT"
  | "Swagger"
  | "Git"
  | "Github"
  | "Angular"
  | "MaterialUI"
  | "UML"
  | ".NET Core"
  | "Python"
  | "Django"
  | "PostgreSQL"
  | "Azure DevOps";

interface Tag {
  name: TagType;
  icon: JSX.Element;
  class: string;
}