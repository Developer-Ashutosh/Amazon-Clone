import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { SideBar } from "./components";
import "./index.css";

const App = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleSideBarToggle = (e) => setIsToggle(e);

  return (
    <div
      className={`${isToggle ? "max-h-screen overflow-hidden" : "max-h-fit"}`}
    >
      <Header handleSideBarToggle={handleSideBarToggle} />
      <SideBar isToggled={isToggle} handleSideBarToggle={handleSideBarToggle} />
      <Main />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
