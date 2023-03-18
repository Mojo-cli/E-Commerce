import React from "react";
import "./card.css";

const Card = ({ img_src }) => {
  return (
    <div className="card-container">
      <img src={img_src} alt="" />
    </div>
  );
};

export default Card;
