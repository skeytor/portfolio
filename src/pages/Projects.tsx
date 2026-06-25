import { CardProject } from "../components/CardProject";
import { Project } from "../types";

const PROJECTS: Project[] = [
  {
    title: "SGIP",
    description: `SGIP is a full-stack financial loan management system that lets 
      users simulate loans, view full payment schedules before committing, 
      and request loans that are auto-approved based on business rules. 
      It also registers transactions with idempotency guarantees to prevent duplicate charges.`,
    github: "https://github.com/skeytor/SGIP",
    link: "https://segip-challenge.vercel.app/",
    tags: [
      "csharp",
      "netcore",
      "efcore",
      "xunit",
      "testcontainers",
      "docker",
      "swagger",
      "postgresql",
      "azuredovops",
      "nextjs",
      "typescript",
    ],
    isPrivate: false,
  },
  {
    title: "NetBroadcast",
    description: `A multi-client TCP broadcast console chat application built from scratch. 
      It allows users to send and receive messages in real-time.
      The application has a server that manages the connections and broadcasts messages to 
      all connected clients by using TCP sockets and Channel-based communication.
    `,
    github: "https://github.com/skeytor/NetBroadcast",
    tags: ["csharp", "netcore", "xunit", "docker"],
    isPrivate: false,
  },
  {
    title: "AuthHub",
    description: `A secure authentication and authorization API focused on role-based access control 
      with permission-based policies. 
      Roles can be added dynamically without touching the source code, 
      thanks to a custom authorization attribute that handles policy evaluation at runtime.`,
    github: "https://github.com/skeytor/AuthHub",
    tags: [
      "csharp",
      "netcore",
      "efcore",
      "docker",
      "xunit",
      "testcontainers",
      "postgresql",
      "swagger",
    ],
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
