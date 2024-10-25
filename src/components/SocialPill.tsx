import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  url: string;
}
export const SocialPill = ({ children, url }: Props) => {
  return (
    <a
      className="`
        rounded-full border border-white/10 flex 
        justify-center items-center gap-x-2 py-2 px-4 
        bg-white/5 hover:scale-110 hover:bg-white/10 transition`"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      {children}
    </a>
  );
};
