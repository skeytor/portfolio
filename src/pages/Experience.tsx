import { CardExperience } from "../components/CardExperience";
import { ExperienceItem } from "../types";

const EXPERIENCE_ITMES: ExperienceItem[] = [
  {
    date: "January 2026 - April 2026",
    title: "Full Stack Developer - Freelancer",
    description: `Built a full-stack ticketing management app using .NET 10, ASP.NET Core Minimal API,
    and Angular, with PostgreSQL, Docker, and role-based access control via JWT. Wrote unit and
    integration tests with xUnit and TestContainers, and set up CI/CD pipelines in Azure DevOps
    for automated deployments to Azure Web Apps.`,
    company: "Freelancer",
  },
  {
    date: "August 2025 - December 2025",
    title: "Full Stack Developer - Freelancer",
    description: `Developed a Full Stack Web Applicationfor an inventory management system using .NET 9 and
    ASP.NET Core and Blazor following clean architecture principles. Designed a normalized PostgreSQL database,
    secured endpoints with JWT-based RBAC, containerized the stack with Docker, and covered the
    codebase with unit and integration tests.`,
    company: "Freelancer",
  },
  {
    date: "January 2024 - June 2024",
    title: "Full Stack Developer - Internship",
    description: `Developed a web system for tracking internal correspondence at Plan International.
    Built the backend with ASP.NET Core using CQRS and clean architecture, designed the SQL Server
    database, and delivered a responsive frontend with Angular 17 and Angular Material.
    The team worked in SCRUM cycles managed through Azure DevOps.`,
    company: "Plan International Bolivia",
  },
  {
    date: "September 2022 - December 2022",
    title: "Full Stack Developer - Internship",
    description: `Built a web-based inventory management system for a logistics company, working
    closely with the warehouse team to capture real business needs. Designed the PostgreSQL database,
    developed the backend with Django (MVC), and contributed to the Angular frontend.
    Managed the project with SCRUM and Azure DevOps.`,
    company: "Cybercorp",
  },
];

export const Experience = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-3 mt-9">
      {EXPERIENCE_ITMES.map((item, index) => (
        <li key={`${item.date}${index}`} className="mb-10 ms-4">
          <CardExperience experience={{ ...item }} />
        </li>
      ))}
    </ol>
  );
};
