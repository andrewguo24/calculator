import React from "react";
import Button from "../Button";
import { basicBtnArr } from "../../constants";
import "./BasicCalc.css";

const BasicCalc = ({
  value,
  handleBtnClick,
  isTabletOrMobile,
  handleClearHistory,
  history,
}) => (
  <>
    <div className="basic-display">{value}</div>
    <div className="btn-basic-container">
      {basicBtnArr?.map(({ btn, type }) => (
        <Button
          key={btn}
          handleBtnClick={handleBtnClick}
          btn={btn}
          type={type}
          isTabletOrMobile={isTabletOrMobile}
        />
      ))}
    </div>
    {history?.length > 0 && (
      <div className="history-container-basic">
        {history?.map((item, index) => (
          <div key={index} className="history-item-basic">
            <div className="history-equation-basic">{item.equation}</div>
            <div className="history-result-basic">{item.result}</div>
          </div>
        ))}
        <button
          className="history-btn-basic"
          onClick={() => handleClearHistory()}
        >
          Clear History
        </button>
      </div>
    )}
  </>
);

export default BasicCalc;
