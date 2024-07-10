import React from "react";
import "./contact.css";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Your trusted partner in health. Licensed and accredited.</h2>
      <div className="main-contacts">
        <div className="words-contacts">
          <div className="single-contact">
            <img src="../../../public/assets/carbon_time.png" alt="" />
            <p>Open Mon-Fri 8AM-8PM, Sat 9AM-6PM, Sun 10AM-4PM</p>
          </div>
          <div className="single-contact">
            <img src="../../../public/assets/mdi_location.png" alt="" />
            <p>123 Main Street, Anytown, USA 12345</p>
          </div>
          <div className="single-contact">
            <img
              src="../../../public/assets/solar_phone-linear (1).png"
              alt=""
            />
            <p>Phone: (555) 123-4567</p>
          </div>
          <div className="single-contact">
            <img src="../../../public/assets/mdi-light_email.png" alt="" />
            <p>Email: care@vitarx.com</p>
          </div>
        </div>
        <div className="contact-img"></div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
