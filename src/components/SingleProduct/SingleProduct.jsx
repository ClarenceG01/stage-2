import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./singleproduct.css";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, changeSeeCart } from "../../redux/productsSlice";
import Cart from "../Cart/Cart";

const SingleProduct = () => {
  const location = useLocation();
  const product = location.state;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart);
  const [activeImage, setActiveImage] = useState(product.images[0]);
  return (
    <section id="single-product">
      <article className="nav-top">
        <IoArrowBack
          alt="back left"
          className="back-icon"
          onClick={() => {
            window.history.back();
          }}
        />
        <div className="cart-count" onClick={() => dispatch(changeSeeCart())}>
          <LiaShoppingCartSolid className="cart-icon" />
          <span>{cart.length}</span>
        </div>
      </article>
      <div className="product-gallery">
        <div>
          <img src={`/${activeImage}`} alt="Active product" />
        </div>
        <div className="thumbnail-gallery">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={`/${image}`}
              alt={`product ${index}`}
              onClick={() => setActiveImage(image)}
              className={activeImage === image ? "active-thumbnail" : ""}
            />
          ))}
        </div>
      </div>
      <div className="product-details-price">
        <div className="single-product-details">
          <p>{product.name}</p>
          <p>Available</p>
          <p>{product.description}</p>
        </div>
        <div className="single-product-price">
          <div>
            <p>PRICE</p>
            <p>$ {product.price}</p>
          </div>
          <button
            onClick={() =>
              dispatch(
                addProductToCart({
                  ...product,
                  quantity: 1,
                })
              )
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Cart />
    </section>
  );
};

export default SingleProduct;
