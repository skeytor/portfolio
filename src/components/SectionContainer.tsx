import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  id?: string;
  className?: string;
}
export const SectionContainer = ({ children, id, className }: Props) => {
  return (
    <section
      id={id ?? ""}
      className={`scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl ${className}`}
    >
      {children}
    </section>
  );
};
