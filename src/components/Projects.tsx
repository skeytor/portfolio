import CSharpIcon from "../icons/CSharp";
import MicrosoftSQLServerIcon from "../icons/SQLServer";
import { CardProject } from "./CardProject";

export interface Project {
  title: string;
  description: string;
  link?: string;
  github: string;
  image: string;
  tags: Tag[];
}

type TagType = "C#" | "SQL Server";

interface Tag {
  name: TagType;
  icon: JSX.Element;
  class: string;
}

const TAGS: Tag[] = [
  {
    name: "C#",
    icon: <CSharpIcon className=" text-white size-5 " />,
    class: "bg-gray-800",
  },
  {
    name: "SQL Server",
    icon: <MicrosoftSQLServerIcon className="text-white size-5" />,
    class: "bg-gray-800",
  },
];

const PROJECTS: Project[] = [
  {
    title: "Title 1",
    description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy 
      text ever since the 1500s, when an unknown printer took a galley 
      of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry.`,
    github: "github1",
    image: "/src/assets/image.webp",
    tags: TAGS.filter((tag) => ["C#", "SQL Server"].includes(tag.name)),
  },
  {
    title: "Title 2",
    description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy 
      text ever since the 1500s, when an unknown printer took a galley 
      of type and scrambled it to make a type specimen book.`,
    link: "www.google.com",
    github: "github2",
    image: "/src/assets/image.webp",
    tags: TAGS.filter((tag) => ["C#"].includes(tag.name)),
  },
];

export const Projects = () => {
  return (
    <div className="flex flex-col gap-y-16 mt-5 mb-4">
      {PROJECTS.map((project) => (
        <CardProject key={project.github} project={{ ...project }} />
      ))}
    </div>
  );
};
