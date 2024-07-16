import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./singleproduct.css";
import { IoCartOutline } from "react-icons/io5";
const SingleProduct = () => {
  const { id } = useParams();
  const getProduct = async () => {
    const response = await axios.get(
      `https://timbu-get-single-product.reavdev.workers.dev/${id}`,
      {
        params: {
          organization_id: import.meta.env.VITE_ORGANIZATION_ID,
          Appid: import.meta.env.VITE_API_ID,
          Apikey: import.meta.env.VITE_API_KEY,
        },
      }
    );
    console.log(response.data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <section id="single-product">
      <div>
        <img src="/assets/arrow-left.png" alt="back left" />
        <IoCartOutline />
      </div>
      <div></div>
    </section>
  );
};

export default SingleProduct;
