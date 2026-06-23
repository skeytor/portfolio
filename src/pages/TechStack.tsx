import { NETCoreIcon } from "../icons/NETCORE";
import CSharpIcon from "../icons/CSharp";
import { DockerIcon } from "../icons/Docker";
import { AngularIcon } from "../icons/Angular";
import MicrosoftSQLServerIcon from "../icons/SQLServer";
import PostgreSQLIcon from "../icons/PostgreSQL";
import PythonIcon from "../icons/Python";
import { UMLIcon } from "../icons/UML";
import { XUnitIcon } from "../icons/XUnit";

const STACK = [
  { name: ".NET", icon: <NETCoreIcon className="size-10" /> },
  { name: "C#", icon: <CSharpIcon className="size-10 text-[#9b4f96]" /> },
  { name: "Angular", icon: <AngularIcon className="size-10" /> },
  { name: "Docker", icon: <DockerIcon className="size-10" /> },
  { name: "SQL Server", icon: <MicrosoftSQLServerIcon className="size-10 text-[#cc2927]" /> },
  { name: "PostgreSQL", icon: <PostgreSQLIcon className="size-10 text-[#336791]" /> },
  { name: "Python", icon: <PythonIcon className="size-10 text-[#3776ab]" /> },
  { name: "xUnit", icon: <XUnitIcon className="size-10 text-gray-300" /> },
  { name: "UML", icon: <UMLIcon className="size-10 text-gray-300" /> },
];

export const TechStack = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-5 mb-9">
      {STACK.map(({ name, icon }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 p-4 w-24 rounded-xl border border-gray-700/50 bg-gray-900/40 hover:border-gray-500 hover:bg-gray-800/50 transition-colors duration-200"
        >
          {icon}
          <span className="text-xs text-gray-400 font-medium text-center">{name}</span>
        </div>
      ))}
    </div>
  );
};
