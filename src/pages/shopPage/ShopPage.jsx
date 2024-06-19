import React, { useState, useEffect, useContext } from "react";
import DarkVariantExample from "../../components/carousel/Carousel";
import styles from "./index.module.css";
import SimpleSlider from "./listProductShope/ListProductShope";
import ContentShop from "./contentshop/ContentShop";

const ShopPage = () => {
  const [posts, setPots] = useState([]);
  const [iphoneList, setIphoneList] = useState([]);
  const [macList, setMacList] = useState([]);
  const [ipadList, setIpadList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [amThanhList, setAmThanhList] = useState([]);
  const [phuKienList, setPhukienList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/tho/list")
      .then((response) => response.json())
      .then((json) => {
        setPots(json.list);
      });
  }, []);

  useEffect(() => {
    // iphone
    const iphone = posts.filter((prd) => prd.category === "iphone");
    setIphoneList(iphone);
    // mac
    const mac = posts.filter((prd) => prd.category === "mac");
    setMacList(mac);
    // ipad
    const ipad = posts.filter((prd) => prd.category === "ipad");
    setIpadList(ipad);
    // watch
    const watch = posts.filter((prd) => prd.category === "watch");
    setWatchList(watch);
    // am-thanh
    const amThanh = posts.filter((prd) => prd.category === "am-thanh");
    setAmThanhList(amThanh);
    // phu-kien
    const pk = posts.filter((prd) => prd.category === "Phu-kien");
    setPhukienList(pk);
  }, [posts]);

  return (
    <div className={styles.backRoughtColor}>
      <DarkVariantExample />
      <ul className={styles.chooseCate}>
        <li>
          <a href="/detail/iphone">
            <div className={styles.imgCatesp}>
              <img
                src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/IP_Desktop.png"
                alt=""
                width={174}
                height={160}
              />
            </div>
            <span>iPhone</span>
          </a>
        </li>
        <li>
          <a href="/detail/mac">
            <div className={styles.imgCatesp}>
              <img
                src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/Mac_Desktop.png"
                alt=""
                width={174}
                height={160}
              />
            </div>
            <span>Mac</span>
          </a>
        </li>
        <li>
          <a href="/detail/ipad">
            <div className={styles.imgCatesp}>
              <img
                src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/IPad_Desktop.png"
                alt=""
                width={174}
                height={160}
              />
            </div>
            <span>iPad</span>
          </a>
        </li>
        <li>
          <a href="/detail/apple-watch">
            <div className={styles.imgCatesp}>
              <img
                src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/Watch_Desktop.png"
                alt=""
                width={174}
                height={160}
              />
            </div>
            <span>Watch</span>
          </a>
        </li>
        <li>
          <a href="/detail/am-thanh">
            <div className={styles.imgCatesp}>
              <img
                src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/Amthanh_Desktop.png"
                alt=""
                width={174}
                height={160}
              />
            </div>
            <span>Tai nghe, loa</span>
          </a>
        </li>
        <li>
          <a href="/detail/Phu-kien">
            <div className={styles.imgCatesp}>
              <img
                src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/PK_Desktop.png"
                alt=""
                width={174}
                height={160}
              />
            </div>
            <span>Phụ kiện</span>
          </a>
        </li>
      </ul>
      <SimpleSlider simples={iphoneList} />
      <SimpleSlider simples={ipadList} />
      <SimpleSlider simples={macList} />
      <SimpleSlider simples={phuKienList} />
      <ContentShop />
    </div>
  );
};
// category: phu-kien, iphone, ipad, mac, watch, am-thanh
export default ShopPage;
