import { ReactNode } from "react";

interface SectionContainerProps {
  children?: ReactNode;
  id?: string;
  className?: string;
}
export const SectionContainer = ({
  children,
  id,
  className,
}: SectionContainerProps) => {
  return (
    <section id={id} className={`w-full mx-auto lg:w-[740px] ${className}`}>
      {children}
    </section>
  );
};
