import React from "react";
import "./hero.css";
import heroImg from "../../../public/assets/Imagery.png";

const Hero = () => {
  return (
    <section id="hero">
      <div>
        <h1>
          Welcome to <span style={{ color: "#225AE9" }}>VitaRX</span> <br />
          Your Health, Our Priority
        </h1>
        <p>Empowering wellness with expert care and personalized solutions.</p>
        <button>Get in touch</button>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
