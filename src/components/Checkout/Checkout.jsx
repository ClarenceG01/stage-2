import React from "react";
import "./checkout.css";

const Checkout = () => {
  return (
    <section id="checkout">
      <div className="checkout-nav">
        <img src="/assets/arrow-left.png" alt="left arrow" />
        <p>Checkout</p>
      </div>
      <div className="checkout-payment">
        <div>
          <p>Payment Method</p>
          <button className="edit-btn">Edit</button>
        </div>
      </div>
      <div className="checkout-address">
        <div>
          <p>Address</p>
          <button className="edit-btn">Edit</button>
        </div>
        <div className="address-details">
          <p>Leslie Flores</p>
          <p>2972 Westheimer Rd. </p>
          <p>Santa Ana, Illinois</p>
          <p>85486, United States of America</p>
        </div>
      </div>
      <div className="checkout-total">
        <div>
          <input type="text" placeholder="Promo code" />
          <button>Apply</button>
        </div>
        <div>
          <div>
            <p>Delivery</p>
            <p>
              Free
              <img src="/assets/help-circle.png" alt="question mark icon" />
            </p>
          </div>
          <div>
            <p>Total</p>
            <p>$135.98</p>
          </div>
        </div>
        <div>
          <button>Pay Now</button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
