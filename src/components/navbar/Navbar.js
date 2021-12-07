import React, { useState } from "react";
import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
 
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li onClick={() => setShowMediaIcons(!showMediaIcons)}> 
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <NavLink to="/about">About Me</NavLink>
            </li>
            <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="menu-template">
          <div className="hamburger-menu">
            <a  href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu color="#000" />
            </a>
          </div>
        </div>
      </nav>


    </>
  );
};

export default Navbar;
