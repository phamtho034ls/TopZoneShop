import React from "react";
import Capacity from "./capacity/Capacity";
function renderCapacity({ product }) {
  const renderCapacity = ({ product }) => {
    if (product?.length > 0) {
      <Capacity memory={product?.memory} />;
    }
  };
  return <div>{renderCapacity()}</div>;
}

export default renderCapacity;
