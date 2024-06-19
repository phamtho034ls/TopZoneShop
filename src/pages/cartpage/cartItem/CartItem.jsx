import React from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import CurrencyFormatter from "../../../components/formatter/CurrencyFormatter";
const CartItem = ({ product }) => {
  const navigate = useNavigate();
  const goToCleanCart = (id) => {
    navigate(`/cart`, { state: { id } });
  };
  return (
    <div className={styles.productItem}>
      <div className={styles.imgsp}>
        <img src={product?.img} alt="" />

        <div>
          {" "}
          <button
            type="button"
            className="btn btn-light"
            style={{ fontSize: "8px" }}
            onClick={()=>goToCleanCart(product.id)}
          >
            x Xóa
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div className="d-flex justify-content-between">
          <p className="text-start h5">
            {product?.name}{" "} {product?.memory}
            <br />
            <span className="fw-light h6">2 Khuyến mại</span>
          </p>
          <p>
            {<CurrencyFormatter  amount={product?.price}/>}
            <br />
            <span className={styles.strikethrough}>{<CurrencyFormatter  amount={product?.price}/>}</span>
          </p>
        </div>

        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-light">
            {product?.colors} {}
          </button>
          <div className="col-md-3 col-lg-3  d-flex">
            <button
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-link px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
              </svg>
            </button>
            <input
              id="form1"
              min={0}
              name="quantity"
              defaultValue={product?.quantity||1}
              type="number"
              className="form-control form-control-sm"
            />
            <button
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-link px-2"
            >
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
