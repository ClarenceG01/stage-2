import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import close from "../../../public/assets/x.jpg";
import { changeSeeCart } from "../../redux/productsSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.products.setCart);
  return (
    <div className={visible ? "cart-container" : "no-cart"}>
      <div className="top">
        <img src={close} alt="" onClick={() => dispatch(changeSeeCart())} />
        <h3>Cart</h3>
      </div>
    </div>
  );
};

export default Cart;
