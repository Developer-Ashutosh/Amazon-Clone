import React from "react";
import { Hero, CardSection } from "./components";

const Main = () => {
  return (
    <main className="relative px-6 pt-[14.5rem] max-w-screen-2xl m-auto max-[1105px]:px-3">
      <Hero />
      <CardSection />
    </main>
  );
};

export default Main;
