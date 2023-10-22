import React from "react";
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
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        {/* theme === false ? (if(false:"Light"))  */}
        <span>{!theme ? "Light" : "Dark"}</span>
        <span className="icon" onClick={toggleTheme}>
          Switch Mode
        </span>
      </div>
    </header>
  );
};

export default Header;
