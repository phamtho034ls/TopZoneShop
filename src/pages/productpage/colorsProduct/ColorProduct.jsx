import React, { useState, createContext } from "react";
import Buttons from "./Button";
import { useContext } from "react";
import { memoryContext } from "../ProductPage";
export const colorContext = createContext();

const ColorProduct = ({ colors, onChange, value }) => {
  const { addToColor } = useContext(memoryContext);

  const onclickMau = (color) => {
    // settenmau(color);
    onChange(color);
    addToColor(color);
  };
  console.log("value", value);
  const renderColors = () => {
    return colors?.map((mau, index) => {
      return (
        <button
          key={index}
          style={{
            ...(value === mau?.colorName && { border: "2px solid blue" }),
            backgroundColor: mau?.color,
            width: "50px",
            height: "50px",
            margin: "10px 20px 10px 0px",
            borderRadius: "50%",
          }}
          type="button"
          onClick={() => onclickMau(mau?.colorName)}
        ></button>
      );
    });
  };
  return (
    <colorContext.Provider value={{ onclickMau }}>
      <div>
        <p className="text-start text-capitalize">
          Màu: {value || colors?.[0]?.colorName}
        </p>
        {renderColors()}
      </div>
    </colorContext.Provider>
  );
};

export default ColorProduct;
