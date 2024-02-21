import React from "react";
import { NavBelt, NavSpirit } from "./components";

const Header = ({ handleSideBarToggle }) => {
  return (
    <header className="mt-[3.75rem]">
      <NavBelt />
      <NavSpirit handleSideBarToggle={handleSideBarToggle} />
    </header>
  );
};

export default Header;
