import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <a href="/detail/Phu-kien">
          <img
            className="d-block w-100"
            src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2024/04/banner/dandau-2880-800--1--1920x533.png"
            alt="First slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/detail/iphone">
          <img
            className="d-block w-100"
            src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2024/04/banner/ip15-DD-2880-800-1920x533.png"
            alt="Second slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/detail/mac">
          <img
            className="d-block w-100"
            src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2024/04/banner/MAC-Air-M2-DD-2880-800-1920x533.png"
            alt="Third slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/detail/ipad">
          <img
            className="d-block w-100"
            src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2024/04/banner/iPad-9-2880-800-1920x533-2.png"
            alt="Third slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/detail/watch">
          <img
            className="d-block w-100"
            src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2024/04/banner/AW-SE-DD-2880-800-1920x533.png"
            alt="Third slide"
          />
          F
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/detail/amthanh">
          <img
            className="d-block w-100"
            src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2024/04/banner/AirPods-Pro-2-2880-800-1920x533.png"
            alt="Third slide"
          />
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
