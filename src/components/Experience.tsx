import { CardExperience } from "./CardExperience";

export interface ExperienceItem {
  date: string;
  title: string;
  description: string;
  link: string;
}

const EXPERIENCE_ITMES: ExperienceItem[] = [
  {
    date: "March 2023",
    title: "Software developer",
    description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy 
      text ever since the 1500s, when an unknown printer took a galley 
      of type and scrambled it to make a type specimen book.`,
    link: "#",
  },
  {
    date: "March 2023",
    title: "Software developer",
    description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy 
      text ever since the 1500s, when an unknown printer took a galley 
      of type and scrambled it to make a type specimen book.`,
    link: "#",
  },
  {
    date: "March 2023",
    title: "Software developer",
    description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy 
      text ever since the 1500s, when an unknown printer took a galley 
      of type and scrambled it to make a type specimen book.`,
    link: "#",
  },
  {
    date: "March 2023",
    title: "Software developer",
    description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy 
      text ever since the 1500s, when an unknown printer took a galley 
      of type and scrambled it to make a type specimen book.`,
    link: "#",
  },
  {
    date: "March 2023",
    title: "Software developer",
    description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy 
      text ever since the 1500s, when an unknown printer took a galley 
      of type and scrambled it to make a type specimen book.`,
    link: "#",
  },
];

export const Experience = () => {
  return (
    <ol className="relative border-s border-gray-200 ml-3 mt-9">
      {EXPERIENCE_ITMES.map((item) => (
        <li key={item.link} className="mb-10 ms-6">
          <CardExperience data={{ ...item }} />
        </li>
      ))}
    </ol>
  );
};
