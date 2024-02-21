import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { HoverCard, CustomArrowUp } from "../index";

const Navspirit = ({ handleSideBarToggle }) => {
  const list = [
    "All",
    "Amazon miniTV",
    "Sell",
    "Best Sellers",
    "Mobiles",
    "Today's Deals",
    "Prime",
    "Electronics",
    "Customer Service",
    "New Releases",
    "Home & Kitchen",
    "Gift Ideas",
    "Fashion",
    "Amazon Pay",
    "Computers",
    "Books",
    "Car & Motorbike",
    "Toys & Games",
    "Home Improvement",
    "Beauty & Personal Care",
    "Sports, Fitness & Outdoors",
    "Coupons",
    "Gift Cards",
    "Health, Households & Personal Care",
    "Grocery & Garment Foods",
    "Subscribe & Save",
    "Baby",
    "Video Games",
    "Pet Supplies",
    "Audible",
    "Amazon Basics",
    "Kindle eBooks",
  ];

  return (
    <nav className="h-10 w-full bg-secondary text-white flex justify-between items-center gap-2">
      <div className="px-4 h-full max-h-full flex items-center justify-between flex-wrap gap-1.5">
        {list.map((item, index) => (
          <button
            className={`--border h-[95%] flex items-center justify-center gap-1  cursor-pointer px-1 tracking-wide text-sm flex-shrink-0 relative ${
              item === "Prime" && `group`
            }`}
            onClick={() => item === "All" && handleSideBarToggle(true)}
            key={index}
          >
            {item === "All" && <GiHamburgerMenu className="scale-125" />}
            {item}
            {item === "Prime" && (
              <>
                <IoMdArrowDropdown className="scale-110 text-[#CCC]" />
                <HoverCard top={"2.35rem"} left={"-.1rem"} width={"20.5rem"}>
                  <CustomArrowUp left={"15%"} top={"-.65rem"} />
                  <img
                    src="./prime.jpg"
                    alt="Amazon Prime Image"
                    className="h-full w-full rounded-[.2rem] cursor-pointer"
                  />
                </HoverCard>
              </>
            )}
          </button>
        ))}
      </div>
      <img src="./nav-img.jpg" alt="" className="--border h-[95%] " />
    </nav>
  );
};

export default Navspirit;
