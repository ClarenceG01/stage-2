import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
import Service from "../components/Services/Service";
import Reviews from "../components/Reviews/Reviews";
import Contact from "../components/Contacts/Contact";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <Products />
      <Service />
      <Contact />
      <Cart />
    </div>
  );
};

export default Homepage;
