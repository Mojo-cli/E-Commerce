import React from "react";
import "./productcard.css";

function ProductCard({ item_name, img_url, offer, desc }) {
  return (
    <div className="product-card-container">
      <div className="img-container">
        <img src={img_url} alt="" />
      </div>

      <div className="info-container">
        <span className="item-name">{item_name}</span>
        <span className="offer">{offer}</span>
        <span className="card-category-name">{desc}</span>
      </div>
    </div>
  );
}

export default ProductCard;
