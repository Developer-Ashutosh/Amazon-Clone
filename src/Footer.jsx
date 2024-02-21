import React, { useState } from "react";
import { FooterCard, LanguageSelector, Button } from "./components";
import { IoGlobeSharp } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Footer = () => {
  const [language, setLanguage] = useState({ name: "english", symbol: "EN" });
  const updateLanguage = (e) => setLanguage(e);

  const data = [
    {
      title: "Get to Know Us",
      topics: ["About Us", "Carrers", "Press Releases", "Amzon Science"],
    },
    {
      title: "Connect with Us",
      topics: ["Facebook", "Twitter", "Instagram"],
    },
    {
      title: "Make Money with Us",
      topics: [
        "Sell on Amazon",
        "Sell under Amazon Accelerator",
        "Protect and Build Your Brand",
        "Amazon Global Selling",
        "Become an Affiliat",
        "Fulfilment by Amazon",
        "Advertise Your Products",
        "Amazon Pay on Merchants",
      ],
    },
    {
      title: "Let Us Help You",
      topics: [
        "COVID-19 and Amazon",
        "Your Account",
        "Returns Centre",
        "100% Purchase Protection",
        "Amazon App Download",
        "Help",
      ],
    },
  ];

  const countries = [
    "Australia",
    "Brazil",
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "Mexico",
    "Netherlands",
    "Poland",
    "Singapore",
    "Spain",
    "Turkey",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
  ];

  const topics = [
    {
      primary: "AbeBooks",
      seconday: "Books, art & collectibles",
    },
    {
      primary: "Amazon Web Services",
      seconday: "Scalacle Cloud Computing Services",
    },
    {
      primary: "Audible",
      seconday: "Download Audio Books",
    },
    {
      primary: "IMBd",
      seconday: "Movies, TV & Celebrities",
    },
    {
      primary: "Shopbop",
      seconday: "Designer Fashion Brands",
    },
    {
      primary: "Amazon Bussiness",
      seconday: "Everything For Your Business",
    },
    {
      primary: "Prime Now",
      seconday: "2-Hour Delivery on Everyday Items",
    },
    {
      primary: "Amazon Prime Music",
      seconday: "100 Mllion Songs, ad-free Over 15 million podcast episodes",
    },
  ];

  const last = [
    "Conditions of Use & Sale",
    "Privacy Notice",
    "Intrest-Based Ads",
  ];

  return (
    <footer className="text-white">
      <section className="text-primary text-center bg-white py-5 mt-6">
        <p className="text-sm w-[97%] border-t m-auto py-2">
          See personalized recommendations
        </p>
        <Button />
        <p className="text-[12px] w-[97%] border-b m-auto py-2">
          New Coustomer?{" "}
          <a href="start-here" className="--link !text-[12px]">
            Start here.
          </a>
        </p>
      </section>

      <button
        className="w-full h-[3.2rem] bg-tertiary hover:bg-tertiaryHover text-center text-sm outline-none"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Back to top
      </button>

      <section className="bg-secondary w-full flex justify-center flex-wrap gap-x-24 gap-y-4 py-12 px-8 border-b border-[#3A4553]">
        {data.map((e, i) => (
          <FooterCard title={e.title} topics={e.topics} key={i} />
        ))}
      </section>

      <section className="bg-secondary w-full flex justify-center items-center flex-col gap-5 p-8">
        <div className="flex items-center gap-16">
          <a href="#">
            <img
              src="./logo.png"
              alt="Amazon Logo"
              className=" h-14 cursor-pointer"
            />
          </a>
          <div className="flex items-center gap-6 cursor-pointer border text-sm text-[#CCC] border-[#3A4553] px-3 h-10 rounded group relative">
            <span className="flex items-center gap-2 capitalize">
              <IoGlobeSharp className="scale-110" />
              <p>{language.name}</p>
            </span>

            <span>
              <IoMdArrowDropup />
              <IoMdArrowDropdown />
            </span>
            <LanguageSelector type="footer" handleLanguage={updateLanguage} />
          </div>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          {countries.map((country, index) => (
            <a
              href={country.toLowerCase().replaceAll(" ", "-")}
              className="text-[13px] flex-wrap text-[#CCC] --underline"
              key={index}
            >
              {country}
            </a>
          ))}
        </div>
      </section>

      <section className="bg-quaternary w-full p-8 flex items-start justify-center flex-wrap gap-x-8 gap-y-4 m-auto">
        {topics.map((topic, index) => (
          <a
            href={topic.primary.toLowerCase().replaceAll(" ", "-")}
            className="text-[13px] text-white --underline w-40 text-center"
            key={index}
          >
            {topic.primary}
            <span className="text-[#CCC]">
              <br />
              {topic.seconday}
            </span>
          </a>
        ))}
      </section>

      <section className="bg-quaternary w-full text-center p-4">
        <div className="space-x-10">
          {last.map((topic, index) => (
            <a
              href={topic.toLowerCase().replaceAll(" ", "-")}
              className="--underline text-[13px]"
              key={index}
            >
              {topic}
            </a>
          ))}
        </div>
        <p className="text-sm mt-1">
          &copy; 1996-2023, Amazon.com, Inc. or its affiliates
        </p>
      </section>
    </footer>
  );
};

export default Footer;
