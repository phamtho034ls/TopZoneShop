import React, { useEffect } from "react";
import styles from "./index.module.css";
import { useContext } from "react";
import { cartContext } from "../../components/cartContext/CartContext";
import CartItem from "./cartItem/CartItem";
import { useLocation, useNavigate } from "react-router-dom";
import ListCartItem from "./listCartItem/ListCartItem";
import CurrencyFormatter from "../../components/formatter/CurrencyFormatter";

const CartPage = () => {
  const { cartList, caculateTotal, deleteFromCart } = useContext(cartContext);
  console.log(cartList);
  const location = useLocation();
  const id = location.state?.id;
  useEffect(() => {
    deleteFromCart(location.state?.id);
  }, [id]);


  return (
    <div className={styles.middleCart}>
      {/* <CartItem /> */}
      <ListCartItem listcart={cartList} />
      <div className={styles.inforCustomer}>
        <h4 className="h6 text-start">Thông tin khách hàng</h4>
        <div className={styles.genderSelection}>
          <label>
            <input type="radio" name="gender" value="male" />
            <span>Anh</span>
          </label>
          <label>
            <input type="radio" name="gender" value="female" />
            <span>Chị</span>
          </label>
        </div>
        <div className={styles.formContainer}>
          <form>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nhập tên của bạn"
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Nhập số điện thoại"
              />
            </div>
          </form>
        </div>
      </div>
      <div className={styles.inforCustomer}>
        <h4 className="h6 text-start">Chọn hình thức nhận hàng</h4>
        <div className={styles.genderSelection}>
          <label>
            <input type="radio" name="gender2" value="male" />
            <span>Giao tận nơi </span>
          </label>
          <label>
            <input type="radio" name="gender2" value="female" />
            <span>Nhận tại cửa hàng</span>
          </label>
        </div>
        <form className="grid gap-3">
          <div className="p-2 g-col-6">
            <div className={styles.formGroup}>
              <button>Hồ Chí Minh</button>
              <button>Chọn quận , huyện</button>
            </div>
          </div>

          <div className="p-2 g-col-6">
            <div className={styles.formGroup}>
              <button>Chọn Phường xã</button>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Số nhà , tên đường"
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            {/* <label htmlFor="name">Tên:</label> */}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nhập ghi chú (nếu có)"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label
              className="form-check-label text-start"
              htmlFor="exampleCheck1"
              style={{ float: "inline-start" }}
            >
              Gọi người khác nhận hàng
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label
              className="form-check-label text-start"
              htmlFor="exampleCheck1"
              style={{ float: "inline-start" }}
            >
              Hướng dẫn sử dụng, giải đáp thắc mắc sản phẩm
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label
              className="form-check-label text-start"
              htmlFor="exampleCheck1"
              style={{ float: "inline-start" }}
            >
              Xuất hóa đơn công ty
            </label>
          </div>
        </form>
      </div>
      <div className={styles.Thanhtoan}>
        <div className="d-flex justify-content-between">
          <p className="fw-bold">Tổng tiền:</p>{" "}
          <p className="d-flex">
            {<CurrencyFormatter amount={caculateTotal()} />}VNĐ
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Điểm tích lũy Quà Tặng VIP:</p> <p>{caculateTotal() / 1000}</p>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label
            className="form-check-label text-start"
            htmlFor="exampleCheck1"
            style={{ float: "inline-start" }}
          >
            Tôi đồng ý với <a href="">Chính sách xử lý dữ liệu cá nhân</a> của
            TopZone
          </label>
        </div>
        <div className={styles.banderThanhToan}>
          <p className="h5">Đặt Hàng</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
