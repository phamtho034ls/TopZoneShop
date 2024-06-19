import React from "react";
import ProductDetail from "./productDetail/ProductDetail";

const MapDetail = ({ listProduct }) => {
  const renderListChecks = () => {
    return listProduct?.map((prd) => {
      return <ProductDetail key={prd?.id} product={prd} />;
    });
  };

  return <div className="row">{renderListChecks()}</div>;
};

export default MapDetail;
