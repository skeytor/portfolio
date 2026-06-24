import { DotNetCoreIcon } from "../icons/DotNetCore";
import CSharpIcon from "../icons/CSharp";
import { DockerIcon } from "../icons/Docker";
import { AngularIcon } from "../icons/Angular";
import MicrosoftSQLServerIcon from "../icons/SQLServer";
import PostgreSQLIcon from "../icons/PostgreSQL";
import PythonIcon from "../icons/Python";
import { UMLIcon } from "../icons/UML";
import { XUnitIcon } from "../icons/XUnit";
import { AzureDevOpsIcon } from "../icons/AzureDevOps";
import { AzureIcon } from "../icons/Azure";
import { BlazorIcon } from "../icons/Blazor";
import { EFCoreIcon } from "../icons/EFCore";
import { TestContainersIcon } from "../icons/TestContainers";
import { GitIcon } from "../icons/Git";
import { ClaudeIAIcon } from "../icons/ClaudeIA";

const STACK = [
  { name: ".NET", icon: <DotNetCoreIcon className="size-10" /> },
  { name: "C#", icon: <CSharpIcon className="size-10 text-[#9b4f96]" /> },
  { name: "EF Core", icon: <EFCoreIcon className="size-10 text-[#512bd4]" /> },
  { name: "xUnit", icon: <XUnitIcon className="size-10 text-gray-300" /> },
  { name: "TestContainers", icon: <TestContainersIcon className="size-10" /> },
  { name: "Blazor", icon: <BlazorIcon className="size-10 text-[#512bd4]" /> },
  { name: "Docker", icon: <DockerIcon className="size-10" /> },
  { name: "Git", icon: <GitIcon className="size-10 text-[#f05032]" /> },
  {
    name: "Azure DevOps",
    icon: <AzureDevOpsIcon className="size-10 text-[#0078d4]" />,
  },
  { name: "Azure", icon: <AzureIcon className="size-10 text-[#0078d4]" /> },
  { name: "Claude", icon: <ClaudeIAIcon className="size-10 text-[#f5f5f5]" /> },
  {
    name: "SQL Server",
    icon: <MicrosoftSQLServerIcon className="size-10 text-[#cc2927]" />,
  },
  {
    name: "PostgreSQL",
    icon: <PostgreSQLIcon className="size-10 text-[#336791]" />,
  },
  { name: "Angular", icon: <AngularIcon className="size-10" /> },
  { name: "Python", icon: <PythonIcon className="size-10 text-[#3776ab]" /> },
  { name: "UML", icon: <UMLIcon className="size-10 text-gray-300" /> },
];

export const TechStack = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-5 mb-9">
      {STACK.map(({ name, icon }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-700/50 bg-gray-900/40 hover:border-gray-500 transition-colors duration-200"
        >
          {icon}
          <span className="text-xs text-gray-400 font-medium text-center">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
};
