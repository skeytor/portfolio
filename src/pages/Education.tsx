interface EducationItem {
  institution: string;
  degree: string;
  date: string;
  note?: string;
}

const EDUCATION: EducationItem[] = [
  {
    institution: "Universidad Católica Boliviana (UCB)",
    degree: "Master's Degree in Advanced Software Development",
    date: "February 2025 – Present",
  },
  {
    institution: "Universidad Privada Domingo Savio (UPDS)",
    degree: "Bachelor's Degree in Systems Engineering",
    date: "February 2019 – September 2024",
    note: "Winner of an internal programming competition",
  },
  {
    institution: "Centro Boliviano Americano (CBA)",
    degree: "Advanced Technical English",
    date: "February 2023 – Present",
  },
];

export const Education = () => {
  return (
    <ol className="relative border-s border-gray-700 ml-3 mt-9 mb-9">
      {EDUCATION.map((item) => (
        <li key={item.institution} className="mb-8 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-sky-400" />
          <time className="text-sm leading-none text-gray-400">{item.date}</time>
          <h3 className="text-base font-semibold text-gray-100 mt-1">{item.degree}</h3>
          <p className="text-sm text-sky-400">{item.institution}</p>
          {item.note && (
            <p className="text-xs text-gray-500 mt-1 italic">{item.note}</p>
          )}
        </li>
      ))}
    </ol>
  );
};
