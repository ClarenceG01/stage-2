import React from "react";
import "./service.css";

const Service = () => {
  return (
    <div id="services">
      <h1>Services</h1>
      <div className="main-services">
        <div className="details">
          <div className="services-contacts">
            <h2>Consult A Doctor</h2>
            <div className="doc-contact">
              <img src="/assets/mdi-light_email.png" alt="" />
              <p>deanna.curtis@example.com</p>
            </div>
            <div className="doc-contact">
              <img src="/assets/solar_phone-linear.png" alt="" />
              <p>(219) 555-0114</p>
            </div>
            <div className="doc-contact">
              <img src="/assets/carbon_link.png" alt="" />
              <p>http://www.statholdings.com</p>
            </div>
          </div>
          <img src="/assets/Image.png" alt="Smiling doctor image" />
        </div>
      </div>
    </div>
  );
};

export default Service;
