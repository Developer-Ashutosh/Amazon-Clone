import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxMagnifyingGlass } from "react-icons/rx";

const SearchBar = () => {
  const [category, setCategory] = useState("All");
  const categoryList = [
    "All Categories",
    "Alexa Skills",
    "Amazon Devices",
    "Amazon Fashion",
    "Amazon Pharmacy",
    "Appliances",
    "Apps & Games",
    "Audible Audiobooks",
    "Baby",
    "Beauty",
    "Books",
    "Car & Motorbike",
    "Clothing & Accessories",
    "Collectibles",
    "Computers & Accessories",
    "Deals",
    "Electronics",
    "Furniture",
    "Garden & Outdoors",
    "Gift Cards",
    "Grocery & Gourmet Foods",
    "Health & Personal Care",
    "Home & Kitchen",
    "Industrial & Scientific",
    "Jewellery",
    "Kindle Store",
    "Luggage & Bags",
    "Luxury Beauty",
    "Movies & TV Shows",
    "Music",
    "Musical Instruments",
    "Office Products",
    "Pet Supplies",
    "Prime Video",
    "Shoes & Handbags",
    "Software",
    "Sports, Fitness & Outdoors",
    "Subscribe & Save",
    "Tools & Home Improvement",
    "Toys & Games",
    "Under ₹500",
    "Video Games",
    "Watches",
  ];

  return (
    <form
      className="text-primary h-[90%] flex-auto flex items-center justify-center relative border-[3.3px] border-transparent rounded-lg focus-within:border-mainHover"
      onSubmit={(e) => e.preventDefault()}
    >
      <select
        id="drop-down-menu"
        className="h-full w-full cursor-pointer opacity-0 absolute left-0 z-[100] peer"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        {categoryList.map((category, index) => (
          <option key={index}>{category}</option>
        ))}
      </select>

      <span
        id="drop-down-display"
        className="h-full min-w-fit px-2 flex items-center justify-between rounded-tl-[.25rem] rounded-bl-[.25rem] outline-none bg-[#e6e6e6] peer-hover:bg-[#D4D4D4] transition cursor-pointer border-r border-r-zinc-300 pr-6 relative"
      >
        <span className="text-[13.5px] text-secondary font-medium">
          {category}
        </span>
        <IoMdArrowDropdown className="scale-110 absolute right-1 text-[#3A4553]" />
      </span>
      <input
        type="text"
        name="SearchBox"
        id="search-box"
        placeholder="Search Amazon.in"
        className="h-full px-4 text-[#111] outline-none border-none text-[1rem] placeholder:text-[#777] z-[101]"
        style={{ width: "calc(100% - 2rem)" }}
      />
      <button
        type="submit"
        className="bg-main h-full px-4 rounded-tr-[.25rem] rounded-br-[.25rem] hover:bg-mainHover transition z-[101]"
      >
        <RxMagnifyingGlass className="scale-[2] font-bold" />
      </button>
    </form>
  );
};

export default SearchBar;
