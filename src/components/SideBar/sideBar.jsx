import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const SideBar = ({ isToggled, handleSideBarToggle }) => {
  const data = [
    {
      title: "Trending",
      content: ["Best Sellers", "New Realeases", "Movers and Shakes"],
    },
    {
      title: "Digital Content & Devices",
      content: [
        "Amazon miniTv - FREE Entertainment",
        "Echo & Alexa",
        "Fire TV",
        "Kindle E-Readers & eBooks",
        "Auduble Audiobooks",
        "Amazon Prime Video",
        "Amazon Prime Music",
      ],
    },
    {
      title: "Shop by Category",
      content: [
        "Mobiles, Computers",
        "TV, Appliances, Electronics",
        "Men's Fashion",
        "Women's Fashion",
      ],
    },
    {
      title: "Programs & Features",
      content: [
        "Amazon Pay",
        "Gift Cards & Mobile Recharges",
        "Amazon Launchpad",
        "Handloom and Handicrafts",
      ],
    },
    {
      title: "Help & Settings",
      content: ["Your Account", "Customer Service", "Sign in"],
    },
  ];

  return (
    <section
      className={`${
        isToggled ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      } absolute top-0 left-0 max-h-screen w-[23rem] overflow-y-scroll text-primary bg-white z-[99999] transition-all duration-500`}
    >
      <div className="bg-[#232F3E] text-white min-h-[3.2rem] w-full px-4 flex items-center justify-between sticky top-0">
        <div className="flex items-center gap-3.5">
          <FaUserCircle className="h-7 w-7" />
          <h1 className="text-lg font-bold tracking-wider">Hello, sign in</h1>
        </div>
        <RxCross2
          className="h-8 w-8 text-white cursor-pointer"
          onClick={() => handleSideBarToggle(false)}
        />
      </div>

      {data.map((e, i) => (
        <div
          className={`w-full border-b-2 py-2 ${
            i != data.length - 1 ? "border-[#CCC]" : "pb-5"
          }`}
          key={i}
        >
          <h2 className="text-[1.1rem] font-bold px-5 py-2 ">{e.title}</h2>
          {e.content.map((e, i) => (
            <a
              href={e.toLowerCase().replaceAll(" ", "-")}
              className="flex items-center justify-between cursor-pointer group hover:bg-[#F3F3F3] px-3.5 py-3 w-[94%] m-auto rounded transition-all"
              key={i}
            >
              <p className="text-sm font-medium tracking-wide">{e}</p>
              <IoIosArrowForward className="text-[#CCC] group-hover:text-black" />
            </a>
          ))}
        </div>
      ))}
    </section>
  );
};

export default SideBar;
