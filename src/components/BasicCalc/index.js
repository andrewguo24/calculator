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
  operator,
  operatorArr,
  memNumber,
}) => (
  <>
    <div className="basic-display">
      {operatorArr?.includes(operator) && value === "0" ? memNumber : value}
    </div>
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
    <div className="history-container-basic">
      {history?.length > 0 ? (
        <>
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
        </>
      ) : (
        <div className="history-message-basic">No Calculation History...</div>
      )}
    </div>
  </>
);

export default BasicCalc;
