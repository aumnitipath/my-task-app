import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        <span>Light Mode</span>
        <span className="icon">Switch Mode</span>
      </div>
    </header>
  );
};

export default Header;
