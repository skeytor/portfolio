import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  url: string;
}
export const LinkButton = ({ url, children }: Props) => {
  return (
    <a
      target="_blank"
      href={url}
      className="inline-flex items-center px-4 py-2 text-sm font-medium gap-2 text-white-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    >
      {children}
    </a>
  );
};
