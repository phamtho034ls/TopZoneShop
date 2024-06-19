import React from "react";
import styles from "./index.module.css";
import CurrencyFormatter from "../../../components/formatter/CurrencyFormatter";
import { useNavigate } from "react-router-dom";
const ProductShope = ({ product }) => {
  const navigate = useNavigate();
  const newRandomNumber = Math.floor(Math.random() * 6) + 10; // Tạo số ngẫu nhiên từ 10 đến 15
  const total =(a,b)=>
    {
      let sum = (a/100)*(100-b);
      return sum;
    }
  return (
    <div
      className="card col-12 col-md-6 col-lg-4"
      style={{
        width: "18rem",
        backgroundColor: "#323232",
        borderRadius: "25px",
        cursor: "pointer"
      }}
      onClick={() => navigate(`/product/${product.id}`, { replace: true })}
    >
      <label className={styles.cardLabel}> Mới </label>
      <img src={product?.image[0]} className="card-img-top" />
      <div className="card-body text-white">
        <h3
          className="card-text h6 text-lowercase"
          style={{ padding: "10px 0px" }}
        >
          {product?.name}
        </h3>
        <span className={styles.boxPrice}>
          {<CurrencyFormatter amount={total(parseInt(product?.price),newRandomNumber)}/>}đ
          <strike>
            {<CurrencyFormatter amount={parseInt(product?.price)} />}
          </strike>
          <small>-{newRandomNumber}%</small>
        </span>
      </div>
    </div>
  );
};

export default ProductShope;
