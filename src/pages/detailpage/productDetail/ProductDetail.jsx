import React from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import CurrencyFormatter from "../../../components/formatter/CurrencyFormatter";

const ProductDetail = ({ product }) => {
  const newRandomNumber = Math.floor(Math.random() * 6) + 10; // Tạo số ngẫu nhiên từ 10 đến 15
  const total = (a, b) => {
    let sum = (a / 100) * (100 - b);
    return sum;
  };

  const navigate = useNavigate();
  return (
    <div
      className="col-12 col-lg-6 col-xl-4 mx auto"
      style={{ padding: "20px 0px" }}
      onClick={() => navigate(`/product/${product.id}`, { replace: true })}
    >
      <div
        className="card"
        style={{
          width: "350px",
          backgroundColor: "#323232",
          borderRadius: "25px",
        }}
      >
        <label className={styles.cardLabel}> Mới </label>
        <img
          src={product?.image[0]}
          className="card-img-top"
          style={{ height: "235px", width: "235px", alignSelf: "center" }}
        />
        <div className="card-body text-white">
          <h3
            className="card-text h6 text-capitalize"
            style={{ padding: "10px 0px" }}
          >
            {product?.name}
          </h3>
          <span className={styles.boxPrice}>
            {
              <CurrencyFormatter
                amount={total(parseInt(product?.price), newRandomNumber)}
              />
            }
            đ
            <strike>
              {<CurrencyFormatter amount={parseInt(product?.price)} />}
            </strike>
            <small>-{newRandomNumber}%</small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
