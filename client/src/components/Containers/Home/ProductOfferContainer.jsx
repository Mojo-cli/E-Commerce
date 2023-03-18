import React from "react";
import { OFFERS_DATA } from "../../../data/HomeContent";
import ProductCard from "../../Card/Home/ProductCard";
import "./poc.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const products = OFFERS_DATA.map(({ title, img, offer, id, desc }) => (
  <ProductCard
    item_name={title}
    img_url={img}
    offer={offer}
    key={id}
    desc={desc}
  />
));

function ProductOfferContainer() {
  return (
    <div className="product-offer-container">
      <div className="offer-details-container">
        <div>Top Offers !</div>
        <button className="view-all-btn">View All</button>
      </div>

      <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass={"product-offer-container"}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products}
      </Carousel>
    </div>
  );
}

export default ProductOfferContainer;
