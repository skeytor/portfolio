import { CardExperience } from "./CardExperience";

export interface ExperienceItem {
  date: string;
  title: string;
  description: string;
  company?: string;
  link?: string;
}

const EXPERIENCE_ITMES: ExperienceItem[] = [
  {
    date: "January 2024",
    title: "FullStack Developer",
    description: `I developed a web system for managing document tracking within the organization, 
    handling both the backend with ASP.NET Core and the frontend using Angular. 
    I applied the CQRS pattern for optimized performance and scalability. 
    Using SCRUM and Azure DevOps, 
    I managed the project lifecycle and created detailed system designs with UML diagrams.`,
    company: "Plan International Bolivia",
  },
  {
    date: "April 2023",
    title: "Support IT - Intership",
    description: `I implemented and managed a print server that improved resource efficiency 
    and was replicated nationwide. 
    I optimized print reports using Python and Power BI, 
    developed a MySQL event to enhance system performance, 
    and provided hardware, software, and network support while managing user accounts and permissions.`,
    company: "Plan International Bolivia",
  },
  {
    date: "October 2022",
    title: "Web Developer - Intership",
    description: `I developed a web system for managing product inventory. 
    I utilized SCRUM and Azure DevOps for project management and created UML 
    diagrams to help in design clarity. I designed the PostgreSQL database with 
    normalization principles for efficiency, developed the backend using Django with MVC architecture, 
    and Angular with Tailwind CSS. 
    Additionally, I focused on code documentation and refactoring to improve readability.`,
    company: "Cibercorp SRL",
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
