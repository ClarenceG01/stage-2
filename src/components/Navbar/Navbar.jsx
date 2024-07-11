import React from "react";
import "./navbar.css";
import logo from "/assets/Logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="three shapes that form the logo" />
      <ul>
        <a href="#hero">
          <li>Home</li>
        </a>
        <a href="#services">
          <li>Services</li>
        </a>
        <a href="#review">
          <li>Reviews</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
      <a href="#products">
        <button className="nav-btn">Shop Now</button>
      </a>
      <img className="burger" src="/assets/marketeq_menu.png" alt="" />
    </nav>
  );
};

export default Navbar;
// <div className="cart">
//         <RiShoppingCart2Line className="cart-icon"/>
//         <span>0</span>
//       </div>
