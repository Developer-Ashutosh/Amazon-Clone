import React, { useState } from "react";
import { SearchBar } from "../index";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiCart } from "react-icons/bi";
import { LanguageSelector, SignIn } from "../index";

const Navbelt = () => {
  const [language, setLanguage] = useState({ name: "english", symbol: "EN" });
  const updateLanguage = (e) => setLanguage(e);

  return (
    <nav className="h-[3.75rem] w-full px-3 py-1 bg-primary text-white text-sm flex items-center justify-between gap-1.5 tracking-wide leading-none fixed top-0 z-[99] *:flex-shrink-0">
      <a href="#" className="--border h-full pl-1 pr-[1.35rem] relative">
        <img src="./logo.png" alt="Amazon Logo" className="h-full scale-125" />
        <span className="absolute right-[.20rem] top-[.9rem]">.in</span>
      </a>

      <div className="--border h-full p-1 flex gap-1">
        <HiOutlineLocationMarker className="h-full scale-150" />
        <p className="h-full flex flex-col items-start justify-center gap-[.15rem]">
          <span className="text-[12px] text-[#CCC]">Delivering to India</span>
          <span className="font-bold tracking-wider">Update location</span>
        </p>
      </div>

      <SearchBar />

      <div className="--border h-full flex items-end justify-center pb-4 px-1 group relative">
        <img
          src="./India.jpeg"
          alt=""
          className="h-[1.05rem] w-6 mr-1 rounded-[1px]"
        />
        <span className="font-bold tracking-wider">{language.symbol}</span>
        <IoMdArrowDropdown className="scale-110 text-[#CCC]" />
        <LanguageSelector type="header" handleLanguage={updateLanguage} />
      </div>

      <div className="--border h-full p-1 group relative">
        <p className="h-full flex flex-col items-start justify-center gap-[.15rem]">
          <span className="text-[12px]">Hello, sign in</span>
          <span className="flex items-center gap-[.15rem] font-bold tracking-wider">
            Accounts & Lists
            <IoMdArrowDropdown className="scale-110 text-[#CCC]" />
          </span>
        </p>
        <SignIn />
      </div>

      <div className="--border h-full p-1 ">
        <p className="h-full flex flex-col items-start justify-center gap-[.15rem]">
          <span className="text-[12px]">Returns</span>
          <span className="font-bold tracking-wider">& Orders</span>
        </p>
      </div>

      <div className="--border h-full p-1 flex items-end justify-center">
        <BiCart className="h-full w-12 " />
        <span className="font-bold tracking-wider pb-2">Cart</span>
      </div>
    </nav>
  );
};

export default Navbelt;
