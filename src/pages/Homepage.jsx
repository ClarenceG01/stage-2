import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
import Service from "../components/Services/Service";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Service />
      <Cart />
    </>
  );
};

export default Homepage;
