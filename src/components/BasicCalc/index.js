import React from "react";
import Button from "../../Elements/Button";
import "./BasicCalc.css";

const BasicCalc = ({
  value,
  handleBtnClick,
  isTabletOrMobile,
  handleClearHistory,
  history,
}) => {
  return (
    <>
      <div className="basic-display">{value}</div>
      <div className="btn-basic-container">
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn={value === "0" ? "AC" : "C"}
          type={"symbol"}
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn={"+/-"}
          type={"symbol"}
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="%"
          type={"symbol"}
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="÷"
          type={"operator"}
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="7"
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="8"
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="9"
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="x"
          type={"operator"}
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="4"
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="5"
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="6"
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="-"
          type={"operator"}
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="1"
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="2"
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="3"
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="+"
          type={"operator"}
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="0"
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="."
        />
        <Button
          handleBtnClick={handleBtnClick}
          isTabletOrMobile={isTabletOrMobile}
          btn="="
          type={"operator"}
        />
      </div>
      {history?.length > 0 && (
        <div className="history-container-basic">
          {history?.map((item, index) => (
            <div key={index} className="history-item-basic">
              <div className="history-equation-basic">{item.equation}</div>
              <div className="history-result-basic">{item.result}</div>
            </div>
          ))}
          {history?.length > 0 && (
            <button
              className="history-btn-basic"
              onClick={() => handleClearHistory()}
            >
              Clear History
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default BasicCalc;
