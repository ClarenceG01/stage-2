import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import close from "/assets/x.jpg";
import { changeSeeCart } from "../../redux/productsSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.products.setCart);
  return (
    <div className={visible ? "cart-container" : "no-cart"}>
      <div className="top">
        <img src={close} alt="" onClick={() => dispatch(changeSeeCart())} />
        <h3>Cart</h3>
      </div>
      <div className="cart-products">
        <div className="cart-product">
          <div className="cart-img">
            <img src="/assets/1.png" alt="" />
          </div>
          <div className="product-info">
            <h3>Product Name</h3>
            <div class="number-input">
              <button className="decrease">-</button>
              <div>1</div>
              <button className="increase">+</button>
            </div>
          </div>
          <p>$19.99</p>
        </div>
      </div>
      <div className="cart-checkout">
        <div className="total-price">
          <p>Cart total</p>
          <p>$165.97</p>
        </div>
        <button onClick={() => navigate("/checkout")}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
