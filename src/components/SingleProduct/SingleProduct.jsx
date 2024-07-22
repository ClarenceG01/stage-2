// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./singleproduct.css";
// import { IoCartOutline } from "react-icons/io5";

// const SingleProduct = () => {
//   const location = useLocation();
//   const product = location.state;
//   const [activeImage, setActiveImage] = useState(product.images[0]);
//   console.log(product);
//   console.log(activeImage);
//   return (
//     <section id="single-product">
//       <div className="top">
//         <img src="/assets/arrow-left.png" alt="back left" />
//         <IoCartOutline />
//       </div>
//       <div className="product-gallery">
//         <div>
//           <img src={activeImage} alt="" />
//         </div>
//         <div>
//           {product.images.map((image, index) => {
//             return <img key={index} src={image} alt="product" />;
//           })}
//         </div>
//       </div>
//       <article className="bottom">
//         <div className="product-details-price">
//           <div className="single-product-details">
//             <p>{product.name}</p>
//             <p>Available</p>
//             <p>{product.description}</p>
//           </div>
//           <div className="single-product-price">
//             <div>
//               <p>PRICE</p>
//               <p>$ {product.price}</p>
//             </div>
//             <button>Add to Cart Button</button>
//           </div>
//         </div>
//       </article>
//     </section>
//   );
// };

// export default SingleProduct;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./singleproduct.css";
import { IoCartOutline } from "react-icons/io5";

const SingleProduct = () => {
  const location = useLocation();
  const product = location.state;
  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <section id="single-product">
      <div className="top">
        <img
          src="/assets/arrow-left.png"
          alt="back left"
          onClick={() => {
            window.history.back();
          }}
        />
        <IoCartOutline />
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
      <article className="bottom">
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
            <button>Add to Cart</button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SingleProduct;
