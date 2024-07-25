import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import close from "/assets/x.jpg";
import {
  changeSeeCart,
  addQuantity,
  reduceQuantity,
  removeProduct,
  clearCart,
} from "../../redux/productsSlice";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.products.setCart);
  const cartItems = useSelector((state) => state.products.cart);
  console.log(cartItems);
  const totalPrice = cartItems.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  console.log(cartItems);
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
                <img src={`/${product.images[0]}`} alt="" />
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p>${(product.price * product.quantity).toFixed(2)}</p>
                  <RiDeleteBin6Line
                    style={{
                      cursor: "pointer",
                      fontSize: "1.3rem",
                      color: "red",
                    }}
                    onClick={() => dispatch(removeProduct(product))}
                  />
                </div>
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
      <button
        style={{
          display: cartItems.length === 0 ? "none" : "block",
        }}
        className="clear-btn"
        onClick={() => dispatch(clearCart())}
      >
        Clear cart
      </button>
    </div>
  );
};

export default Cart;
