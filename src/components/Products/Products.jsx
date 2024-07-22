import React, { useState, useEffect } from "react";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, changeSeeCart } from "../../redux/productsSlice";
import ProductCard from "../../UI/ProductCard";
import cartIcon from "/assets/mdi_cart.png";
import { useNavigate } from "react-router-dom";
import products from "../../../data.json";

const Products = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("featured");
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const endSlice = currentPage * productsPerPage;
  const startSlice = endSlice - productsPerPage;
  const totalPages = Math.ceil(products[category].length / productsPerPage);
  console.log(currentPage, startSlice, endSlice, totalPages);
  return (
    <section id="products">
      <div className="nav-tab">
        <ul>
          <li
            onClick={() => setCategory("featured")}
            className={category === "featured" ? "active" : "inactive"}
          >
            Featured
          </li>
          <li
            onClick={() => setCategory("latest")}
            className={category === "latest" ? "active" : "inactive"}
          >
            Latest
          </li>
          <li
            onClick={() => setCategory("special")}
            className={category === "special" ? "active" : "inactive"}
          >
            Special
          </li>
        </ul>
        <div className="cart-count">
          <button
            className="cart-btn"
            onClick={() => dispatch(changeSeeCart())}
          >
            Cart
          </button>
          <span>{cart.length}</span>
        </div>
      </div>
      <div className="products-grid">
        {products[category]
          .slice(startSlice, endSlice)
          .map((product, index) => {
            return (
              <ProductCard
                className="single-product"
                key={index}
                onClick={() =>
                  navigate(`/product/${product.name}`, { state: product })
                }
              >
                <img className="cart-icon" src={cartIcon} alt="cart icon" />
                <div className="product-img">
                  <img src={product.images[0]} alt="" />
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p className="desc">{product.description}</p>
                  <p className="price">${product.price}</p>
                </div>
              </ProductCard>
            );
          })}
      </div>
      <div
        className="pagination-controls"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "40%",
          margin: "20px auto",
          fontFamily: "Inter",
        }}
      >
        <button
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#4d73f8",
            color: "white",
            fontFamily: "Inter",
            cursor: "pointer",
          }}
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          Previous
        </button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <button
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#4d73f8",
            color: "white",
            fontFamily: "Inter",
            cursor: "pointer",
          }}
          onClick={() => {
            if (currentPage < totalPages) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Products;
