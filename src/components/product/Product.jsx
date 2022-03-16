import React from "react";
import "./product.css";

const product = (props) => {
  return (
    <div className="product">
      <h2 className="text-danger">{props.header}</h2>
      <div className="productContainer">
        <a>
          <img src={props.src} />
          <p>{props.productInfo}</p>
          <h3 className="text-primary">{props.price}</h3>
        </a>
      </div>
    </div>
  );
};

export default product;
