import React from "react";
import Card from "../Card/Home/Card";
import "./carousel.css";

const Carousel = ({ data }) => {
  let box = document.querySelector(".carousel-content-container");

  function buttonPressPrev() {
    let width = box.clientWidth;
    console.log(width);
    box.scrollLeft = box.scrollLeft - width;
    // console.log("Pressed")
  }

  function buttonPressNext() {
    let width = box.clientWidth;
    console.log(width);
    box.scrollLeft = box.scrollLeft + width;
    // console.log("Pressed")
  }

  return (
    <div className="carousel-container">
      {/* <button className="pre-btn" onClick={buttonPressPrev}>
        <p>&lt;</p>
      </button>
      <button className="post-btn" onClick={buttonPressNext}>
        <p>&gt;</p>
      </button> */}
      <div className="carousel-content-container">
        {data.map((data) => (
          <Card img_src={data.img_url} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
