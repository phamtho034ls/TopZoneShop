import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import styles from "./index.module.css";
const AsNavFor = ({ product }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container overflow-auto">
      <Slider
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
        className={styles.poste}
      >
        <div>
          <h3>
            <img src={product?.[0] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[1] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[2] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[3] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[4] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[5] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[6] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[7] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[8] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[9] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img
              src={product?.[10] || ""}
              className="d-block w-100 rounded-3"
            />
          </h3>
        </div>
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        className={styles.bander}
      >
        <div>
          <h3>
            <img src={product?.[0] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[1] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[2] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[3] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[4] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[5] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[6] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[7] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[8] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={product?.[9] || ""} className="d-block w-100 rounded-3" />
          </h3>
        </div>
        <div>
          <h3>
            <img
              src={product?.[10] || ""}
              className="d-block w-100 rounded-3"
            />
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default AsNavFor;
