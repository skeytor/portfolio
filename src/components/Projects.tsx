import { AngularIcon } from "../icons/Angular";
import { AzureDevOpsIcon } from "../icons/Azure";
import CSharpIcon from "../icons/CSharp";
import DjangoIcon from "../icons/Django";
import { DockerIcon } from "../icons/Docker";
import { GitIcon } from "../icons/Git";
import { JWTIcon } from "../icons/JWT";
import { MaterialUIIcon } from "../icons/MaterialUI";
import { NETCoreIcon } from "../icons/NETCORE";
import PostgreSQLIcon from "../icons/PostgreSQL";
import PythonIcon from "../icons/Python";
import MicrosoftSQLServerIcon from "../icons/SQLServer";
import { SwaggerIcon } from "../icons/Swagger";
import { UMLIcon } from "../icons/UML";
import { CardProject } from "./CardProject";

export interface Project {
  title: string;
  description: string;
  link?: string;
  github: string;
  image: string;
  tags: Tag[];
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
  {
    name: "Docker",
    icon: <DockerIcon className="text-white size-5" />,
    class: "bg-gray-800",
  },
  {
    name: "JWT",
    icon: <JWTIcon className="text-white size-5" />,
    class: "bg-gray-800",
  },
  {
    name: "Swagger",
    icon: <SwaggerIcon className="text-white size-5" />,
    class: "bg-gray-800",
  },
  {
    name: "Git",
    icon: <GitIcon className="text-white size-5" />,
    class: "bg-gray-800",
  },
  {
    name: "Angular",
    icon: <AngularIcon className="text-white size-5" />,
    class: "bg-gray-800",
  },
  {
    name: "MaterialUI",
    icon: <MaterialUIIcon className="text-white size-5" />,
    class: "bg-gray-800",
  },
  {
    name: "UML",
    icon: <UMLIcon className="text-white size-5" />,
    class: "bg-gray-800",
  },
  {
    name: ".NET Core",
    icon: <NETCoreIcon className="rounded-full text-white size-5" />,
    class: "bg-gray-800",
  },
  {
    name: "Python",
    icon: <PythonIcon className="text-white size-5" />,
    class: "bg-gray-800",
  },
  {
    name: "Django",
    icon: <DjangoIcon className="text-white size-5" />,
    class: "bg-gray-800",
  },
  {
    name: "PostgreSQL",
    icon: <PostgreSQLIcon className="text-white size-5" />,
    class: "bg-gray-800",
  },
  {
    name: "Azure DevOps",
    icon: <AzureDevOpsIcon className="text-white size-5" />,
    class: "bg-gray-800",
  },
];

const PROJECTS: Project[] = [
  {
    title: "AuthHub",
    description: `This project provides a secure and dynamic 
    solution for authentication and authorization, focusing on role-based access control with 
    permission-based policies. The key feature is its flexibility, allowing the addition of new roles 
    without modifying the source code. This is achieved by implementing a CustomAuthorization attribute 
    to manage policy-based authorization dynamically`,
    github: "https://github.com/skeytor/AuthHub",
    image: "code-1.webp",
    tags: TAGS.filter((tag) =>
      [
        "C#",
        ".NET Core",
        "SQL Server",
        "Docker",
        "JWT",
        "Swagger",
        "Git",
      ].includes(tag.name)
    ),
  },
  {
    title: "ComuniTrack",
    description: `Comunitrack is a web system for managing and tracking letters within an organization. 
      Built with ASP.NET Core and CQRS for optimized performance, it uses SQL Server for a scalable, 
      normalized database. The user-friendly interface, created with Angular 17, Tailwind CSS, and Angular Material,
      ensures smooth navigation and efficient letter management.`,
    github: "https://github.com/skeytor/comunitrack",
    image: "code-1.webp",
    tags: TAGS.filter((tag) =>
      [
        "C#",
        ".NET Core",
        "SQL Server",
        "Docker",
        "Angular",
        "MaterialUI",
        "UML",
        "JWT",
        "Git",
        "Azure DevOps",
      ].includes(tag.name)
    ),
  },
  {
    title: "Inventory System",
    description: `This web application allows the compnay to manage product stock efficiently. It
      integrates with logistics to meet business requiremnts, providing visibility into inventory levels.
      Built on a scalable PostgreSQL database, the system uses Django for backend funcionality and MVC
      architecture for structured development. The user interface designed with Angular, is intuitive
      and user-friendly.`,
    github: "https://github.com/skeytor/sistema-inventario-angular",
    image: "code-1.webp",
    tags: TAGS.filter((tag) =>
      [
        "Python",
        "Django",
        "PostgreSQL",
        "Angular",
        "UML",
        "JWT",
        "Git",
        "Azure DevOps",
      ].includes(tag.name)
    ),
  },
];

export const Projects = () => {
  return (
    <div className="flex flex-col gap-y-16 mt-5 mb-9 ml-3">
      {PROJECTS.map((project) => (
        <CardProject key={project.github} project={{ ...project }} />
      ))}
    </div>
  );
};
