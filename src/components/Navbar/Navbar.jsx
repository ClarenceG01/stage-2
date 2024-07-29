import React, { useState } from "react";
import "./navbar.css";
import logo from "/assets/Logo.png";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav>
      <img src={logo} alt="three shapes that form the logo" />
      <ul className="desktop-nav">
        <a href="#hero">
          <li>Home</li>
        </a>
        <a href="#services">
          <li>Services</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
      <a href="#products">
        <button className="nav-btn">Shop Now</button>
      </a>
      <img
        className="burger"
        src="/assets/marketeq_menu.png"
        alt=""
        onClick={toggleMenu}
      />
      {showMenu && (
        <div className="overlay">
          <MdClose
            className="close-btn"
            onClick={() => setShowMenu(!showMenu)}
          />
          <ul className="mobile-nav">
            <a href="#hero">
              <li onClick={() => setShowMenu(!showMenu)}>Home</li>
            </a>
            <a href="#services">
              <li onClick={() => setShowMenu(!showMenu)}>Services</li>
            </a>
            <a href="#contact">
              <li onClick={() => setShowMenu(!showMenu)}>Contact</li>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
