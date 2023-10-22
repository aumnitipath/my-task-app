import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { RiSwitchFill } from "react-icons/ri";
import { RxSwitch } from "react-icons/rx";
import "./Header.css";

const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    if (theme === false) {
      // setTheme("Dark");
      setTheme(true);
    } else {
      // setTheme("Light");
      setTheme(false);
    }
  };

  return (
    <header className="bg">
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        {/* theme === false ? (if(false:"Light"))  */}
        <span onClick={toggleTheme}>{!theme ? "Light Mode" : "Dark Mode"}</span>
        <span className="icon" onClick={toggleTheme}>
          {theme === false ? <MdLightMode /> : <MdDarkMode />}
        </span>
      </div>
    </header>
  );
};

export default Header;
