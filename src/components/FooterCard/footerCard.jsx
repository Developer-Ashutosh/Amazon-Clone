import React from "react";

const FooterCard = ({ title, topics }) => {
  return (
    <div className="text-center">
      <h3 className="font-bold tracking-wider text-[1.1rem]">{title}</h3>
      <ul className="flex flex-col gap-[.35rem] mt-2">
        {topics.map((topic, index) => (
          <li key={index}>
            <a
              href={topic.toLowerCase().replaceAll(" ", "-")}
              className="--underline text-sm text-[#c8cbcd] tracking-wide"
            >
              {topic}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCard;
