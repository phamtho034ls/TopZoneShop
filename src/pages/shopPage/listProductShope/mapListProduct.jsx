import React from "react";
import ProductShope from "./ProductShope";
const MapListProduct = ({ listProduct }) => {
  const renderListChecks = () => {
    return listProduct.map((prd) => {
      return <ProductShope key={prd.id} product={prd} />;
    });
  };
  return ( <> {renderListChecks()} </> 
    
  );
};

export default MapListProduct;
