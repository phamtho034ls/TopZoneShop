import React, { useState, useEffect, useCallback } from "react";
import styles from "./index.module.css";
import CarouselContent from "../../components/cauouselContent/CarouselContent";
import MapDetail from "./MapDetail";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { category } = useParams();
  const [categoryDetail, setCateDetail] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetCategoryDetail = async () => {
    setLoading(true);
    try {
      const resp = await fetch(
        `http://localhost:8080/tho/category/${category}`
      ).then((response) => response.json());
      setCateDetail(resp?.category);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetCategoryDetail();
  }, []);
  return (
    <div className=" rootBackrought ">
      <div className={styles.topdetail}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-apple"
          viewBox="0 0 16 16"
        >
          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
        </svg>
        <h2 className="h2 text-capitalize">{categoryDetail?.name}</h2>
      </div>
      <div className="rootWith">
        <CarouselContent banners={categoryDetail?.banners} />
      </div>
      <div className="d-flex justify-content-end rootWith">
        <div className="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-link dropdown-toggle text-white"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Xắp sếp :
          </button>
          <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <li>
              <a className="dropdown-item">Nổi bật</a>
            </li>
            <li>
              <a className="dropdown-item">Mới ra mắt</a>
            </li>
            <li>
              <a className="dropdown-item">Bán chạy</a>
            </li>
            <li>
              <a className="dropdown-item">Giá thấp đến cao</a>
            </li>
            <li>
              <a className="dropdown-item">Giá cao đến thấp</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="rootWith">
        <MapDetail listProduct={categoryDetail?.products} />
      </div>
    </div>
  );
};

export default DetailPage;
