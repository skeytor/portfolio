import React, { ChangeEventHandler, useRef, useState } from "react";

interface Props {
  type: InputType;
  name: string;
  placeholder?: string;
  className?: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}
type InputType = "text" | "number" | "email";
export const InputSpotlightBorder = ({
  name,
  type,
  placeholder,
  className,
  value,
  handleChange,
}: Props) => {
  const divRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div className="relative w-full">
      <input
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        autoComplete="off"
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className={`h-12 w-full cursor-default rounded-md border border-gray-800 bg-gray-700 p-3.5 text-gray-100 transition-colors duration-500 placeholder:select-none  placeholder:text-gray-400 focus:border-sky-500 focus:outline-none ${className}`}
      />
      <input
        ref={divRef}
        disabled
        style={{
          border: "1px solid #33beff",
          opacity,
          WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
        }}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 h-12 w-full cursor-default rounded-md border border-sky-500 bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none"
      />
    </div>
  );
};
