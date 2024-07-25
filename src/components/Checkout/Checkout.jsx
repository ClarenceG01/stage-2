import React, { useState } from "react";
import "./checkout.css";
import CreditCard from "./CreditCard";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import errorToast from "../../utils/errorToast";

const Checkout = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.products.cart);
  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const handleCardDetailsChange = (details) => {
    setCardDetails(details);
  };
  async function handlePayment() {
    if (
      cardDetails.number === "" ||
      cardDetails.expiry === "" ||
      cardDetails.cvc === "" ||
      cardDetails.name === ""
    ) {
      errorToast("Please fill in all fields");
    } else {
      navigate("/success");
    }
  }
  return (
    <section id="checkout">
      <div className="checkout-nav">
        <img
          src="/assets/arrow-left.png"
          alt="left arrow"
          onClick={() => window.history.back()}
        />
        <p>Checkout</p>
      </div>
      <div className="checkout-payment">
        <div>
          <p>Payment Method</p>
          <button className="edit-btn">Submit</button>
        </div>
        <CreditCard onCardDetailsChange={handleCardDetailsChange} />
      </div>
      <div className="checkout-total">
        <div>
          <input type="text" placeholder="Promo code" />
          <button>Apply</button>
        </div>
        <div>
          <p>Total</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <div>
          <button onClick={handlePayment}>Pay Now</button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
