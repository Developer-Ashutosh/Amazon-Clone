import React, { useState } from "react";

const Card = ({ title, url, link = "Shop Now" }) => {
  return (
    <div
      className={
        "h-96 w-[22rem] bg-white py-5 px-[1.15rem] rounded m-auto my-5 flex-shrink-0 shadow-lg z-10 max-xl:w-[21rem] max-[1105px]:w-80"
      }
    >
      <h2 className="text-[1.35rem] font-bold tracking-wide leading-[1.15]">
        {title}
      </h2>
      <a href="#">
        <img
          src={url}
          className="h-60 w-full object-cover object-center my-4 rounded"
        />
      </a>
      <a href="#" className="font-semibold --link">
        {link}
      </a>
    </div>
  );
};

export default Card;
