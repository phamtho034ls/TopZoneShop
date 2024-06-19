import React from "react";
import styles from "./index.module.css";
import { useContext } from "react";
import { memoryContext } from "../ProductPage";

const Capacity = ({ memory, currentMemory }) => {
  const { addToMemory } = useContext(memoryContext);
  const onclickMemory = (aaa) => {
    addToMemory(aaa);
  };
  const renderMemory = () => {
    return memory?.map((memo, index) => {
      return (
        <button
          type="button"
          className="btn btn-dark gap-3"
          key={index}
          style={{
            margin: "10px 20px 10px 0px",
            ...(currentMemory === memo && { border: "2px solid blue" }),
          }}
          onClick={() => onclickMemory(memo)}
        >
          {memo}
        </button>
      );
    });
  };
  return (
    <div>
      <p className="text-start">Dung lượng</p>
      {renderMemory()}
    </div>
  );
};

export default Capacity;
