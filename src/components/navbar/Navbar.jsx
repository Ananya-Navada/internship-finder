import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className={`navbar ${theme === "dark" ? "dark" : ""}`}>
      <img
        src={theme === "light" ? logo_light : logo_dark}
        alt="Logo"
        className="logo"
      />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Products">Products</Link></li>
        <li><Link to="/Features">Features</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>

      <div className="searchbox">
        <input type="text" placeholder="search" onChange={(e) => console.log(e.target.value)} />
        <img
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt="Search Icon"
        />
      </div>

      <img
        onClick={toggle_mode}
        src={theme === "light" ? toggle_light : toggle_dark}
        alt="Toggle Icon"
        className="toggleicon"
      />
    </div>
  );
};

export default Navbar;
