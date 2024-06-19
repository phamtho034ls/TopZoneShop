import React from "react";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-black text-white">
      <section className="d-flex justify-content-center justify-content-lg-between p-4">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
      </section>
      <section>
        <div className=" container text-center text-md-start mt-5 ">
          <div className="row">
            <div className="col-4 text-lg font-medium">
              <h6 className="text-uppercase fw-bold mb-4">Tổng đài</h6>
              <p>
                <a
                  href="#!"
                  className="link-offset-2 link-light link-underline-opacity-0"
                >
                  Mua hàng:
                  <span className="block hover:underline">
                    1900.9696.42 (7:30 - 22:00)
                  </span>
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="link-offset-2 link-light link-underline-opacity-0"
                >
                  Khiếu nại:
                  <span>1900.9868.43 (8:00 - 21:30)</span>
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="link-offset-2 link-light link-underline-opacity-0"
                >
                  Kết nối với chúng tôi
                </a>
              </p>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-3">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Hệ thống cửa hàng
                  </h6>
                  <p>
                    <a
                      href="#!"
                      className="link-offset-2 link-light link-underline-opacity-0"
                    >
                      Xem 96 cửa hàng
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="link-offset-2 link-light link-underline-opacity-0"
                    >
                      Nội quy cửa hàng
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="link-offset-2 link-light link-underline-opacity-0"
                    >
                      Chất lượng phục vụ
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="link-offset-2 link-light link-underline-opacity-0"
                    >
                      Chính sách bảo hành & đổi trả
                    </a>
                  </p>
                </div>
                <div className="col-3">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Hỗ trợ khách hàng
                  </h6>
                  <p>
                    <a
                      href="#!"
                      className="link-offset-2 link-light link-underline-opacity-0"
                    >
                      Điều kiện giao dịch chung
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="link-offset-2 link-light link-underline-opacity-0"
                    >
                      Hướng dẫn mua hàng online
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="link-offset-2 link-light link-underline-opacity-0"
                    >
                      Chính sách giao hàng
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="link-offset-2 link-light link-underline-opacity-0"
                    >
                      Hướng dẫn thanh toán
                    </a>
                  </p>
                </div>
                <div className="col-3">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Về thương hiệu TopZone
                  </h6>
                  <p>
                    <a
                      href="#!"
                      className="link-offset-2 link-primary link-underline-opacity-0"
                    >
                      Tích điểm Quà tặng Vip
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="link-offset-2 link-light link-underline-opacity-0"
                    >
                      Bán hàng doanh nghiệp
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="link-offset-2 link-light link-underline-opacity-0"
                    >
                      Chính sách xử lý dữ liệu cá nhân
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="link-offset-2 link-light link-underline-opacity-0"
                    >
                      Xem bản mobile
                    </a>
                  </p>
                </div>
                <div className="col-3">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    trung tâm bảo hàng TopCare
                  </h6>
                  <p>
                    <a
                      href="#!"
                      className="link-offset-2 link-light link-underline-opacity-0"
                    >
                      Giới thiệu TopCare
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-start p-4 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <p style={{ fontSize: "12px" }}>
          © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH
          & ĐT TP.HCM cấp ngày 02/01/2007. <br />
          Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP. Hồ Chí Minh. Điện
          thoại: 028 38125960. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2,
          <br />
          Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Chịu trách
          nhiệm nội dung: Huỳnh Văn Tốt. Email: <br />
          hotrotmdt@thegioididong.com.
        </p>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
