import React from "react";
import "./success.css";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <section id="success">
      <div>
        <h1>Woohoo!</h1>
        <p>
          Your order has been placed and you will get a shipping confirmation
          soon.
        </p>
      </div>
      <button onClick={() => navigate("/")}>Back Home</button>
    </section>
  );
};

export default Success;
