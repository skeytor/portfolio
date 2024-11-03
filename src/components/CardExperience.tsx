import { ExperienceItem } from "./Experience";

interface Props {
  experience: ExperienceItem;
}

export const CardExperience = ({ experience: data }: Props) => {
  return (
    <div className="max-w-3xl">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-sky-400"></div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-sky-400">
        {data.title}
      </h3>
      <h4 className="ext-xl font-bold text-gray-900 dark:text-gray-100">
        {data.company}
      </h4>
      <time className="mb-1 text-sm leading-none text-gray-400 dark:text-gray-400">
        {data.date}
      </time>

      <p className="text-pretty mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
        {data.description}
      </p>
      {data.link ? (
        <a
          href={data.link}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Learn more{" "}
          <svg
            className="w-3 h-3 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};
