import React from "react";
import styles from "./index.module.css";
function ContentShop() {
  return (
    <div>
      <div className={styles.videoTopzone}>
        <video
          width="100vw"
          muted={true}
          autoPlay={true}
          loop={true}
          playsInline={true}
        >
          <source
            src="https://cdn.tgdd.vn/mwgcart/topzone/video/Gt-Topzone.mp4"
            type="video/mp4"
          />
        </video>

        <img
          className={styles.logoTopZone}
          src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_570x207/https://cdn.tgdd.vn/mwgcart/topzone/images/logo-video.png?v=4"
        />
        <div className={styles["overlay-bg"]}></div>
      </div>
      <p className="text-white">
        Tại TopZone, khách hàng yêu mến hệ sinh thái Apple sẽ tìm thấy đầy đủ và
        đa dạng nhất các sản phẩm như <br /> iPhone, iPad, Apple Watch, MacBook
        và các phụ kiện Apple... với không gian mua sắm đẳng cấp, hiện đại.
      </p>
      <button type="button" className="btn btn-primary">
        Đọc thêm
      </button>
      <div className={styles.listShop}>
        <div className={styles.tableShop}>
          <div className={styles.topTable}>
            <p className="text-white">Mở bán tại 96 cửa hàng</p>
            <div className="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-light dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ padding: " 5px 20px 5px 0px" }}
              >
                Chọn Tỉnh thành
              </button>
              <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li>
                  <a className="dropdown-item" href="#">
                    Hồ Chí Minh
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Hà Nội
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Đà Nẵng
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 text-white text-start">
              <div className={styles.contentTable}>
                <p>
                  TopZone Tân Thanh{" "}
                  <a href="">
                    Xem chỉ đường{" "}
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
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    }
                  </a>
                </p>
                <p>
                  Số nhà 583, Tổ dân phố 10, Phường Tân Thanh, Thành phố Điện
                  Biên Phủ, Tỉnh Điện Biên, Việt Nam
                </p>
                <p>
                  {" "}
                  {
                    <img
                      src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/common/Icon_ApplePay.png"
                      style={{ width: "40px", height: "40px", padding: "8px" }}
                    ></img>
                  }
                  Hỗ trợ thanh toán qua Apple Pay
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 text-white text-start">
              <div className={styles.contentTable}>
                <p>
                  TopZone Tân Thanh{" "}
                  <a href="">
                    Xem chỉ đường{" "}
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
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    }
                  </a>
                </p>
                <p>
                  Số nhà 583, Tổ dân phố 10, Phường Tân Thanh, Thành phố Điện
                  Biên Phủ, Tỉnh Điện Biên, Việt Nam
                </p>
                <p>
                  {" "}
                  {
                    <img
                      src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/common/Icon_ApplePay.png"
                      style={{ width: "40px", height: "40px", padding: "8px" }}
                    ></img>
                  }
                  Hỗ trợ thanh toán qua Apple Pay
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 text-white text-start">
              <div className={styles.contentTable}>
                <p>
                  TopZone Tân Thanh{" "}
                  <a href="">
                    Xem chỉ đường{" "}
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
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    }
                  </a>
                </p>
                <p>
                  Số nhà 583, Tổ dân phố 10, Phường Tân Thanh, Thành phố Điện
                  Biên Phủ, Tỉnh Điện Biên, Việt Nam
                </p>
                <p>
                  {" "}
                  {
                    <img
                      src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/common/Icon_ApplePay.png"
                      style={{ width: "40px", height: "40px", padding: "8px" }}
                    ></img>
                  }
                  Hỗ trợ thanh toán qua Apple Pay
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 text-white text-start">
              <div className={styles.contentTable}>
                <p>
                  TopZone Tân Thanh{" "}
                  <a href="">
                    Xem chỉ đường{" "}
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
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    }
                  </a>
                </p>
                <p>
                  Số nhà 583, Tổ dân phố 10, Phường Tân Thanh, Thành phố Điện
                  Biên Phủ, Tỉnh Điện Biên, Việt Nam
                </p>
                <p>
                  {" "}
                  {
                    <img
                      src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/common/Icon_ApplePay.png"
                      style={{ width: "40px", height: "40px", padding: "8px" }}
                    ></img>
                  }
                  Hỗ trợ thanh toán qua Apple Pay
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 text-white text-start">
              <div className={styles.contentTable}>
                <p>
                  TopZone Tân Thanh{" "}
                  <a href="">
                    Xem chỉ đường{" "}
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
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    }
                  </a>
                </p>
                <p>
                  Số nhà 583, Tổ dân phố 10, Phường Tân Thanh, Thành phố Điện
                  Biên Phủ, Tỉnh Điện Biên, Việt Nam
                </p>
                <p>
                  {" "}
                  {
                    <img
                      src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/common/Icon_ApplePay.png"
                      style={{ width: "40px", height: "40px", padding: "8px" }}
                    ></img>
                  }
                  Hỗ trợ thanh toán qua Apple Pay
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 text-white text-start">
              <div className={styles.contentTable}>
                <p>
                  TopZone Tân Thanh{" "}
                  <a href="">
                    Xem chỉ đường{" "}
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
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    }
                  </a>
                </p>
                <p>
                  Số nhà 583, Tổ dân phố 10, Phường Tân Thanh, Thành phố Điện
                  Biên Phủ, Tỉnh Điện Biên, Việt Nam
                </p>
                <p>
                  {" "}
                  {
                    <img
                      src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/common/Icon_ApplePay.png"
                      style={{ width: "40px", height: "40px", padding: "8px" }}
                    ></img>
                  }
                  Hỗ trợ thanh toán qua Apple Pay
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backrought}>
        <div className="row text-white text-center">
          <div className="col-6 col-sm-6 col-lg-3" style={{ padding: "10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              className="bi bi-check2-circle"
              viewBox="0 0 16 16"
              style={{ padding: "10px" }}
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            <p>
              Mẫu mã đa dạng,
              <br /> chính hãng
            </p>
          </div>
          <div className="col-6 col-sm-6 col-lg-3" style={{ padding: "10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              className="bi bi-truck"
              viewBox="0 0 16 16"
              style={{ padding: "10px" }}
            >
              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
            </svg>
            <p> Giao hàng toàn quốc</p>
          </div>
          <div className="col-6 col-sm-6 col-lg-3" style={{ padding: "10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              className="bi bi-shield"
              viewBox="0 0 16 16"
              style={{ padding: "10px" }}
            >
              <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
            </svg>
            <p>
              Bảo hành có cam kết <br />
              tới 12 tháng
            </p>
          </div>
          <div className="col-6 col-sm-6 col-lg-3" style={{ padding: "10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              className="bi bi-arrow-counterclockwise"
              viewBox="0 0 16 16"
              style={{ padding: "10px" }}
            >
              <path
                fillRule="evenodd"
                d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
            </svg>
            <p>
              Có thể đổi trả tại <br />
              Thegioididong và DienmayXANH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentShop;
