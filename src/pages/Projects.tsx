import { CardProject } from "../components/CardProject";
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
import { Project, Tag } from "../types";

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
    description: `A secure authentication and authorization API focused on role-based access control with permission-based policies. Roles can be added dynamically without touching the source code, thanks to a custom authorization attribute that handles policy evaluation at runtime.`,
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
      ].includes(tag.name),
    ),
    isPrivate: false,
  },
  {
    title: "ComuniTrack",
    description: `A web system for managing and tracking internal letters across an organization. Built with ASP.NET Core and the CQRS pattern for performance, it uses SQL Server as the database and Angular 17 with Angular Material for the frontend.`,
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
      ].includes(tag.name),
    ),
    isPrivate: true,
  },
  {
    title: "Inventory System",
    description: `A web application for managing product stock across logistics and warehouse operations. Built with Django (MVC) and a normalized PostgreSQL database on the backend, and Angular with Tailwind CSS on the frontend.`,
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
      ].includes(tag.name),
    ),
    isPrivate: false,
  },
];

export const Projects = () => {
  return (
    <div className="flex flex-col gap-4 mt-6 mb-9">
      {PROJECTS.map((project) => (
        <CardProject key={project.github} project={{ ...project }} />
      ))}
    </div>
  );
};
