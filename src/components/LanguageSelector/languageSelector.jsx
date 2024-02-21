import React, { useState } from "react";
import { HoverCard, CustomArrowUp } from "../index";

const LanguageSelector = ({ type, handleLanguage }) => {
  const languages = [
    {
      key: 0,
      name: "English",
      symbol: "EN",
    },
    {
      key: 1,
      name: "हिन्दी",
      symbol: "HI",
    },
    {
      key: 2,
      name: "தமிழ்",
      symbol: "TA",
    },
    {
      key: 3,
      name: "తెలుగు",
      symbol: "TE",
    },
    {
      key: 4,
      name: "ಕನ್ನಡ",
      symbol: "KN",
    },
    {
      key: 5,
      name: "മലയാളം",
      symbol: "ML",
    },
    {
      key: 6,
      name: "বাংলা",
      symbol: "BN",
    },
    {
      key: 7,
      name: "मराठी",
      symbol: "MR",
    },
  ];

  const A = (language) => (
    <button
      className="group language --link flex items-center justify-start gap-2 pl-1 relative cursor-pointer"
      key={language.key}
      onClick={() => {
        setSelected(language.key);
        handleLanguage(language);
      }}
    >
      <span
        className={`h-4 w-4 border-2 border-[#D4D4D4] rounded-full relative before:h-[.4rem] before:w-[.4rem] before:bg-main before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 group-[.language]:group-hover:before:block flex-shrink-0 ${
          language.key !== selected && "before:hidden"
        }
      `}
      ></span>
      <span
        className={`${
          language.key === selected ? "border-b-2 py-2" : "py-1"
        } w-full text-primary group-[.language]:group-hover:text-linkHover`}
      >
        {language.name + " - " + language.symbol}
      </span>
    </button>
  );

  const [selected, setSelected] = useState(0);

  return (
    <HoverCard
      top={type === "header" ? "3rem" : "-2rem"}
      left={type === "header" ? "0rem" : "110%"}
      width={"14.5rem"}
    >
      <CustomArrowUp
        left={type === "header" ? "23%" : "-.5rem"}
        top={type === "header" ? "-.5rem" : "11%"}
        rotate={type === "footer" && "-90"}
      />
      {A(languages[selected])}
      <div className="my-3 ">
        {languages
          .filter((language) => language.key != selected)
          .map((language) => A(language))}
        <a
          href="find-more"
          className="--link text-[13px] border-b-2 ml-7 py-2 block"
        >
          Find more
        </a>
      </div>

      <div>
        <span className="flex items-center justify-start gap-2">
          <img
            src="./India.jpeg"
            alt=""
            className="h-3 w-5 mr-1 rounded-[1px]"
          />
          <p className="w-full text-primary text-[13px]">
            You are shopping on Amazon.in
          </p>
        </span>
        <a
          href="change-country-region"
          className="--link text-[13px] ml-7 py-2 block"
        >
          Change country/region
        </a>
      </div>
    </HoverCard>
  );
};

export default LanguageSelector;
