import React from "react";

const HoverCard = ({ children, top, left, right, width }) => {
  return (
    <div
      className="absolute bg-white p-3 rounded-[.2rem] scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 z-30 cursor-default shadow-2xl transition-all duration-500"
      style={{
        top: `${top}`,
        left: `${left}`,
        right: `${right}`,
        width: `${width}`,
      }}
    >
      {children}
    </div>
  );
};

export default HoverCard;
