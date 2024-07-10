import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div>
        <img
          src="../../../public/assets/uiw_copyright.png"
          alt="copyright logo"
        />
        <p>VitaRx Pharmacy | Est. 2024</p>
      </div>
      <div>
        <img
          src="../../../public/assets/mingcute_facebook-fill.png"
          alt="facebook icon"
        />
        <img
          src="../../../public/assets/ant-design_x-outlined.png"
          alt="x icon"
        />
        <img
          src="../../../public/assets/mdi_instagram.png"
          alt="instagram icon"
        />
        <img
          src="../../../public/assets/ri_linkedin-fill.png"
          alt="linkedln icon"
        />
      </div>
      <div>
        <p>Privacy Policy</p>
        <p>Terms of use</p>
      </div>
    </section>
  );
};

export default Footer;
