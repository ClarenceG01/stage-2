import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import close from "/assets/x.jpg";
import {
  changeSeeCart,
  addQuantity,
  reduceQuantity,
} from "../../redux/productsSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.products.setCart);
  const cartItems = useSelector((state) => state.products.cart);
  const totalPrice = cartItems.reduce((total, product) => {
    return total + product.current_price[0].USD[0] * product.quantity;
  }, 0);
  const getImageUrl = (imageUrl) => {
    return `https://api.timbu.cloud/images/${imageUrl}`;
  };
  return (
    <div className={visible ? "cart-container" : "no-cart"}>
      <div className="top">
        <img src={close} alt="" onClick={() => dispatch(changeSeeCart())} />
        <h3>Cart</h3>
      </div>
      <div className="cart-products">
        {cartItems.map((product) => {
          return (
            <div className="cart-product" key={product.id}>
              <div className="cart-img">
                <img src={getImageUrl(product.photos[0].url)} alt="" />
              </div>
              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>
                  <div class="number-input">
                    <button
                      className="decrease"
                      disabled={product.quantity === 1 ? true : false}
                      onClick={() => dispatch(reduceQuantity(product))}
                    >
                      -
                    </button>
                    <div>{product.quantity}</div>
                    <button
                      className="increase"
                      onClick={() => dispatch(addQuantity(product))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <p>
                  $
                  {(product.current_price[0].USD[0] * product.quantity).toFixed(
                    2
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-checkout">
        <div className="total-price">
          <p>Cart total</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <button onClick={() => navigate("/checkout")}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
