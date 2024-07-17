import React from "react";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
        relative 
        ${customPaddings || "py-10 lg:py-16 xl:py-20"}
        ${className || ""}
      `}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.5 h-full bg-stroke-1 pointer-events-none md:block lg:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.5 h-full bg-stroke-1 pointer-events-none md:block lg:right-10" />

      {crosses && (
        <div
          className={`
            hidden absolute top-0 left-10 right-10 h-0.5 bg-stroke-1
            ${crossesOffset ? crossesOffset : ""}
            pointer-events-none lg:block xl:left-20 xl:right-20
          `}
        />
      )}
    </div>
  );
};

export default Section;
