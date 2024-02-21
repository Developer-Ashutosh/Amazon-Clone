import React, { useState } from "react";

const Hero = () => {
  const [index, setIndex] = useState(6);

  return (
    <section className="hero flex w-full overflow-hidden absolute top-0 left-0 before:absolute before:top-1/2 before:bottom-0 before:left-0 before:right-0 before:pointer-events-none ">
      <button
        className="h-60 w-20 absolute top-1 left-2 flex items-center justify-center rounded focus-within:shadow-button"
        onClick={() => setIndex((i) => (i === 1 ? 10 : i - 1))}
      >
        <span className="!h-9 !w-9 rotate-45 border-2 border-black border-t-0 border-r-0 before:h-[90%] before:w-[90%] before:absolute before:bottom-0 before:left-0 before:border-2 before:border-white before:border-t-0 before:border-r-0"></span>
      </button>

      <img src={`./hero_${index}.jpg`} alt="Hero Image" />

      <button
        className="h-60 w-20 absolute top-1 right-2 flex items-center justify-center rounded outline-none focus-within:shadow-button"
        onClick={() => setIndex((i) => (i === 10 ? 1 : i + 1))}
      >
        <span className="!h-9 !w-9 rotate-45 border-2 border-black border-b-0 border-l-0 cursor-pointer before:h-[90%] before:w-[90%] before:absolute before:top-0 before:right-0 before:border-2 before:border-white before:border-b-0 before:border-l-0"></span>
      </button>
    </section>
  );
};

export default Hero;
