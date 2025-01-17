import React from "react";
import "./productcard.css";

const ProductCard = (props) => {
  console.log(props);
  const classStyle = "product-card" + " " + props.className;
  return (
    <div className={classStyle} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default ProductCard;
