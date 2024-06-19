import React, { useContext } from "react";
import styles from "./index.module.css";
import { colorContext } from "./ColorProduct";

const Buttons = ({ backgroundColor, colorNameBtn }) => {
  const { onclickMau } = useContext(colorContext);

  return (
    <button
      type="button"
      className={styles.customBtn}
      style={{ backgroundColor }}
      onClick={() => onclickMau(colorNameBtn)}
    ></button>
  );
};
export default Buttons;
