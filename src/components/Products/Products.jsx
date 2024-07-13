import React, { useState, useEffect } from "react";
import products from "../../utils/data.json";
import "./products.css";
import { useDispatch } from "react-redux";
import { addProductToCart, changeSeeCart } from "../../redux/productsSlice";
import ProductCard from "../../UI/ProductCard";
import cartIcon from "/assets/mdi_cart.png";
import axios from "axios";

const Products = () => {
  const [category, setCategory] = useState("featured");
  const [vitu, setVitu] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch();
  const fetchProducts = async (page) => {
    const response = await axios.get(
      "https://timbu-get-all-products.reavdev.workers.dev/",
      {
        params: {
          organization_id: "4bd89264aa3542f18f77f874eff9cef0",
          reverse_sort: false,
          page: page,
          size: 5,
          Appid: "FBTOWENILIDEZ9F",
          Apikey: "9c368623c67d4536a7ad00aa4a106ba720240713112146733729",
        },
      }
    );
    setTotalPages(response.data.total / response.data.size);
    return response.data;
  };
  const getImageUrl = (imageUrl) => {
    return `https://api.timbu.cloud/images/${imageUrl}`;
  };
  useEffect(() => {
    fetchProducts(currentPage).then((data) => {
      setVitu(data.items);
    });
  }, [currentPage]);
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
        <button className="cart-btn" onClick={() => dispatch(changeSeeCart())}>
          Cart
        </button>
      </div>
      <div className="products-grid">
        {vitu.map((product) => {
          return (
            <ProductCard className="single-product" key={product.id}>
              <img
                className="cart-icon"
                src={cartIcon}
                alt="cart icon"
                onClick={() => {
                  dispatch(addProductToCart({ ...product, quantity: 1 }));
                  console.log("Product added to cart");
                }}
              />
              <div className="product-img">
                <img src={getImageUrl(product.photos[0]?.url)} alt="" />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p className="desc">{product.description}</p>
                <p className="price">${product.current_price[0].USD}</p>
              </div>
            </ProductCard>
          );
        })}
      </div>
      <div className="pagination-controls">
        <button
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
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
