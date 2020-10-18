import React from "react";
import "./Button.css";

const Button = ({ btn, type, handleBtnClick, isTabletOrMobile }) => {
  return (
    <div
      onClick={handleBtnClick(btn)}
      className={`${isTabletOrMobile ? "Button-mobile" : "Button"} ${
        btn === "0" && "zero"
      } ${type === "symbol" && "symbol"} ${type === "operator" && "operator"}`}
    >
      {btn}
    </div>
  );
};

export default Button;
