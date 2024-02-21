import React from "react";
import { IoMdArrowDropup } from "react-icons/io";

const CustomArrowUp = ({ left, top, rotate }) => {
  return (
    <IoMdArrowDropup
      className="absolute text-white scale-[5] -z-10"
      style={{ left: `${left}`, top: `${top}`, rotate: `${rotate}deg` }}
    />
  );
};

export default CustomArrowUp;
