import { AzureIcon } from "../icons/Azure";
import { AzureDevOpsIcon } from "../icons/AzureDevOps";
import CSharpIcon from "../icons/CSharp";
import { DockerIcon } from "../icons/Docker";
import { GitIcon } from "../icons/Git";
import { JWTIcon } from "../icons/JWT";
import { DotNetCoreIcon } from "../icons/DotNetCore";
import { NextJsIcon } from "../icons/Nextjs";
import PostgreSQLIcon from "../icons/PostgreSQL";
import MicrosoftSQLServerIcon from "../icons/SQLServer";
import { SwaggerIcon } from "../icons/Swagger";
import { TypescriptIcon } from "../icons/Typescript";
import { UMLIcon } from "../icons/UML";
import { XUnitIcon } from "../icons/XUnit";
import { EFCoreIcon } from "../icons/EFCore";
import { TestContainersIcon } from "../icons/TestContainers";

export const TAGS = {
  csharp: {
    label: "C#",
    icon: <CSharpIcon className="text-white size-5" />,
  },
  efcore: {
    label: "Entity Framework Core",
    icon: <EFCoreIcon className="text-white size-5" />,
  },
  sqlserver: {
    label: "SQL Server",
    icon: <MicrosoftSQLServerIcon className="text-white size-5" />,
  },
  netcore: {
    label: ".NET Core",
    icon: <DotNetCoreIcon className="rounded-full text-white size-5" />,
  },
  xunit: {
    label: "xUnit",
    icon: <XUnitIcon className="text-white size-5" />,
  },
  testcontainers: {
    label: "TestContainers",
    icon: <TestContainersIcon className="text-white size-5" />,
  },
  postgresql: {
    label: "PostgreSQL",
    icon: <PostgreSQLIcon className="text-white size-5" />,
  },
  docker: {
    label: "Docker",
    icon: <DockerIcon className="text-white size-5" />,
  },
  jwt: {
    label: "JWT",
    icon: <JWTIcon className="text-white size-5" />,
  },
  swagger: {
    label: "Swagger",
    icon: <SwaggerIcon className="text-white size-5" />,
  },
  git: {
    label: "Git",
    icon: <GitIcon className="text-white size-5" />,
  },
  azuredovops: {
    label: "Azure DevOps",
    icon: <AzureDevOpsIcon className="text-white size-5" />,
  },
  azure: {
    label: "Azure",
    icon: <AzureIcon className="text-white size-5" />,
  },
  uml: {
    label: "UML",
    icon: <UMLIcon className="text-white size-5" />,
  },
  nextjs: {
    label: "Next.js",
    icon: <NextJsIcon className="text-white size-5" />,
  },
  typescript: {
    label: "TypeScript",
    icon: <TypescriptIcon className="text-white size-5" />,
  },
} as const satisfies Record<string, unknown>;
