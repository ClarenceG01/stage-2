import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./singleproduct.css";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/productsSlice";

const SingleProduct = () => {
  const location = useLocation();
  const product = location.state;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart);
  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <section id="single-product">
      <div className="nav-top">
        <img
          src="/assets/arrow-left.png"
          alt="back left"
          onClick={() => {
            window.history.back();
          }}
        />
        <div className="cart-count">
          <IoCartOutline className="cart-icon" />
          <span>{cart.length}</span>
        </div>
      </div>
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
    </section>
  );
};

export default SingleProduct;
