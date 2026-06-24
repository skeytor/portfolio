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
    title: "SGIP",
    description: ``,
    github: "https://github.com/skeytor/SEGIP-Challenge",
    image: "code-1.webp",
    tags: TAGS.filter((tag) =>
      [
        "C#",
        ".NET Core",
        "xUnit",
        "PostgreSQL",
        "Docker",
        "Azure DevOps",
        "Swagger",
        "Git",
      ].includes(tag.name),
    ),
    isPrivate: false,
  },
  {
    title: "NetBroadcast",
    description: `A multi-client TCP broadcast console chat application built from scratch. It allows users to send and receive messages in real-time.
    The application has a server that manages the connections and broadcasts messages to all connected clients by using TCP sockets and Channel-based communication.
    `,
    github: "https://github.com/skeytor/NetBroadcast",
    image: "code-1.webp",
    tags: TAGS.filter((tag) =>
      ["C#", ".NET Core", "Docker", "Git"].includes(tag.name),
    ),
    isPrivate: false,
  },
  {
    title: "AuthHub",
    description: `A secure authentication and authorization API focused on role-based access control with permission-based policies. Roles can be added dynamically without touching the source code, thanks to a custom authorization attribute that handles policy evaluation at runtime.`,
    github: "https://github.com/skeytor/AuthHub",
    image: "code-1.webp",
    tags: TAGS.filter((tag) =>
      [
        "C#",
        ".NET Core",
        "xUnit",
        "SQL Server",
        "Docker",
        "JWT",
        "Swagger",
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
