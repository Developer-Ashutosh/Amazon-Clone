import React from "react";
import { HoverCard, CustomArrowUp, Button } from "../index";

const SignIn = () => {
  const data = [
    {
      title: "Your Lists",
      content: [
        "Create a Wish List",
        "Wish from Any Website",
        "Baby Wishlist",
        "Discover Your Style",
        "Explore Showroom",
      ],
    },
    {
      title: "Your Account",
      content: [
        "Your Account",
        "Your Orders",
        "Your Wish List",
        "Your Recommendations",
        "Your Prime Membership",
        "Your Prime Vedios",
        "Your Subscribe &Save Items",
        "Memberships & Subscription",
        "Your Seller Account",
        "Manage Your Content & Device",
        "Your Free Amazon Business Account",
      ],
    },
  ];

  return (
    <HoverCard width={"32rem"} top={"3.2rem"} right={"-10rem"}>
      <CustomArrowUp left={"65.4%"} top={"-.6rem"} />
      <div className="text-primary text-center space-y-1 border-b pb-2.5">
        <Button />
        <p className="text-[12px]">
          New Coustomer?{" "}
          <a href="#" className="--link !text-[12px]">
            Start here.
          </a>
        </p>
      </div>

      <div className="flex items-start justify-between w-11/12 m-auto p-3 pb-1">
        {data.map((list, index) => (
          <div
            key={index}
            className="odd:w-1/2 even:w-3/5 even:border-l-2 even:pl-6 "
          >
            <h1 className="text-primary text-lg font-bold tracking-wide mb-2.5">
              {list.title}
            </h1>
            <ul className="space-y-2.5">
              {list.content.map((content, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[#222] hover:text-linkHover --underline text-[13.5px] font-medium"
                  >
                    {content}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </HoverCard>
  );
};

export default SignIn;
