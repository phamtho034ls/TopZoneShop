import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import AsNavFor from "./poster/Poster";
import { useParams } from "react-router-dom";
import Capacity from "./capacity/Capacity";
import ColorProduct from "./colorsProduct/ColorProduct";
import renderCapacity from "./renderCapacity";
import { useContext } from "react";
import { cartContext } from "../../components/cartContext/CartContext";
import { createContext } from "react";

export const memoryContext = createContext();

const ProductPage = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState("");
  const { addToCart } = useContext(cartContext);
  const [memoryCart, setmemoryCart] = useState("");
  const [coloCart, setColoCart] = useState("");

  console.log("productDetail?.memory?.[0] ", coloCart, memoryCart);
  const onClickAddToCart = (product) => {
    addToCart(product);
  };
  const addToMemory = (memo) => {
    setmemoryCart(memo);
  };
  const addToColor = (memo) => {
    setColoCart(memo);
  };
  const fetProductDetail = async () => {
    try {
      const resp = await fetch(`http://localhost:8080/tho/detail/${id}`).then(
        (response) => response.json()
      );
      setProductDetail(resp?.detail);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetProductDetail();
  }, []);

  useEffect(() => {
    if (!productDetail) return;

    console.log("productDetail", productDetail?.memory);
    setmemoryCart(productDetail?.memory?.[0]);
    setColoCart(productDetail?.colors?.[0]?.colorName);
  }, [productDetail]);

  return (
    <memoryContext.Provider value={{ addToMemory, addToColor }}>
      <div>
        <div className="rootBackrought text-light ">
          <div className="row rootWith" style={{ margin: "0 auto" }}>
            <div className="col-12 col-lg-6">
              <AsNavFor product={productDetail?.image} />
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex align-items-start flex-column">
                <h1 className="text-start">{productDetail?.name}</h1>
                <p>Giá khuyến mãi tại: </p>
                <Capacity currentMemory={memoryCart} memory={productDetail?.memory} />
                {/* <renderCapacity product={productDetail?.memory} />  */}
                <ColorProduct onChange={(value)=>setColoCart(value)} value={coloCart} colors={productDetail?.colors} />
                <div className={styles.bander}>
                  <img
                    src="https://cdn.tgdd.vn/2024/06/banner/trang-chi-tiet-desk-920x230-12.png"
                    alt=""
                  />
                </div>
                <div className="d-flex" style={{ cursor: "pointer" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-box-seam"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                  </svg>
                  <p style={{ padding: "0px 10px" }}>
                    {" "}
                    Xem Topzone có hàng
                    {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          // style={{padding:" 0px 10px"}}
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    }
                  </p>
                </div>
                <div
                  className={styles.btnCart}
                  onClick={() => {
                    onClickAddToCart({
                      id: productDetail?.id,
                      name: productDetail?.name,
                      price: parseInt(productDetail?.price),
                      img: productDetail?.image[0],
                      colors: coloCart,
                      colorslist: productDetail.colors,
                      memory: memoryCart,
                      memorylist: productDetail?.memory,
                    });
                  }}
                >
                  Mua ngay
                </div>
                <div className="d-flex">
                  <div className={styles.btnTraGop}>
                    <p>
                      <span className="fw-bold">
                        Mua trả góp 0% <br />
                      </span>
                      Qua công ty tài chính
                    </p>
                  </div>
                  <div className={styles.btnTraGop}>
                    <p>
                      <span className="fw-bold">
                        Mua trả góp 0% qua thẻ <br />
                      </span>
                      Visa, Matercard,JCB,Amex
                    </p>
                  </div>
                </div>
                <div className="text-start">
                  <p>
                    {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-box-seam"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                      </svg>
                    }{" "}
                    Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type
                    C
                  </p>
                  <p>
                    {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-arrow-repeat"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                        <path
                          fillRule="evenodd"
                          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
                        />
                      </svg>
                    }{" "}
                    Hư gì đổi nấy 12 tháng tại 3250 siêu thị trên toàn quốc{" "}
                    <a
                      href=""
                      className="link-offset-2 link-underline link-underline-opacity-0"
                    >
                      {" "}
                      Xem chi tiết chính sách bảo hành, đổi trả
                    </a>
                  </p>
                  <p>
                    {" "}
                    {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-shield-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                      </svg>
                    }{" "}
                    Bảo hành chính hãng 1 năm
                  </p>
                  <p>
                    {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-truck"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                      </svg>
                    }{" "}
                    Giao hàng nhanh toàn quốc{" "}
                    <a
                      href=""
                      className="link-offset-2 link-underline link-underline-opacity-0"
                    >
                      Xem chi tiết
                    </a>
                  </p>
                  <p>
                    {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-telephone"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                      </svg>
                    }{" "}
                    Tổng đài:{" "}
                    <a
                      href=""
                      className="link-offset-2 link-underline link-underline-opacity-0"
                    >
                      1900.9696.42
                    </a>{" "}
                    (7:30 - 22:00)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mota}>
          <div className="">
            <button type="button" className="btn btn-light fw-bold">
              Mô tả
            </button>
            <button type="button" className="btn btn-light fw-bold">
              Thông số kỹ thuật
            </button>
            <button type="button" className="btn btn-light fw-bold">
              Đánh giá sản phẩm
            </button>
          </div>
          <div className="text-start">{productDetail?.description}</div>
        </div>
      </div>
    </memoryContext.Provider>
  );
};

export default ProductPage;
