import React from "react";
import Button from "../Button";
import { scientificBtnArr } from "../../constants";
import "./ScientificCalc.css";

const ScientificCalc = ({
  value,
  handleBtnClick,
  history,
  handleClearHistory,
}) => (
  <>
    <div className="display">{value}</div>
    <div className="btn-scientific-container">
      {scientificBtnArr?.map(({ btn, type }) => (
        <Button
          key={btn}
          btn={btn}
          type={type}
          handleBtnClick={handleBtnClick}
        />
      ))}
    </div>
    {history?.length > 0 && (
      <div className="history-container-scientific">
        {history?.map((item, index) => (
          <div key={index} className="history-item-scientific">
            <div className="history-equation-scientific">{item.equation}</div>
            <div className="history-result-scientific">{item.result}</div>
          </div>
        ))}
        <button
          className="history-btn-scientific"
          onClick={() => handleClearHistory()}
        >
          Clear History
        </button>
      </div>
    )}
  </>
);

export default ScientificCalc;
