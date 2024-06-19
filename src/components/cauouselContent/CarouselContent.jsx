import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./index.module.css";

function CarouselContent({ banners }) {
  const renderBanners = () => {
    return banners?.map((bn, index) => {
      return (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 rounded-3"
            src={bn || ""}
            alt="First slide"
          />
        </Carousel.Item>
      );
    });
  };
  return <Carousel data-bs-theme="dark">{renderBanners()}</Carousel>;
}

export default CarouselContent;
