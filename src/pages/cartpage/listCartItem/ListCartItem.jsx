import React from "react";
import CartItem from "../cartItem/CartItem";

const ListCartItem = ({ listcart }) => {
  const renderListCart = () => {
    return listcart.map((prd) => {
      return <CartItem key={prd.id} product={prd} />;
    });
  };
  return <>{renderListCart()}</>;
};

export default ListCartItem;
