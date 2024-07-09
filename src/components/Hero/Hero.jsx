import React from "react";
import "./hero.css";
import heroImg from "../../assets/Imagery.png";

const Hero = () => {
  return (
    <section id="hero">
      <div>
        <h1>Welcome to VitaRX Your Health, Our Priority</h1>
        <p>Empowering wellness with expert care and personalized solutions.</p>
        <button>Get in touch</button>
      </div>
      <img src={heroImg} alt="image of a patient and a doctor" />
    </section>
  );
};

export default Hero;
