import React, { useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import ProductOfferContainer from "../../components/Containers/Home/ProductOfferContainer";
import NavBar from "../../components/Navbar/NavBar";
import "./css/home.css";

export default function Home() {
  const [active, setActive] = useState(false);

  const CAROUSEL_DATA = [
    { id: 1, img_url: require("../../assets/home/carousel/1.jpg") },
    { id: 2, img_url: require("../../assets/home/carousel/2.jpg") },
    { id: 3, img_url: require("../../assets/home/carousel/3.jpg") },
    { id: 4, img_url: require("../../assets/home/carousel/4.jpg") },
  ];

  return (
    <div className="home-container">
      <NavBar
        callFrom={"home"}
        active={active}
        setActive={() => setActive(!active)}
      />
      <Carousel data={CAROUSEL_DATA} />
      <ProductOfferContainer />
    </div>
  );
}
