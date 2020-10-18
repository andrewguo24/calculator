import React from "react";
import Button from "../../Elements/Button";
import "./ScientificCalc.css";

const ScientificCalc = ({
  value,
  handleBtnClick,
  history,
  handleClearHistory,
}) => {
  return (
    <>
      <div className="display">{value}</div>
      <div className="btn-scientific-container">
        <Button handleBtnClick={handleBtnClick} btn={"("} />
        <Button handleBtnClick={handleBtnClick} btn={")"} />
        <Button handleBtnClick={handleBtnClick} btn={"mc"} />
        <Button handleBtnClick={handleBtnClick} btn={"m+"} />
        <Button handleBtnClick={handleBtnClick} btn={"m-"} />
        <Button handleBtnClick={handleBtnClick} btn={"mr"} />
        <Button
          handleBtnClick={handleBtnClick}
          btn={value === "0" ? "AC" : "C"}
          type={"symbol"}
        />
        <Button handleBtnClick={handleBtnClick} btn={"+/-"} type={"symbol"} />
        <Button handleBtnClick={handleBtnClick} btn="%" type={"symbol"} />
        <Button handleBtnClick={handleBtnClick} btn="÷" type={"operator"} />
        <Button handleBtnClick={handleBtnClick} btn={"2nd"} />
        <Button handleBtnClick={handleBtnClick} btn={"x2"} />
        <Button handleBtnClick={handleBtnClick} btn={"x3"} />
        <Button handleBtnClick={handleBtnClick} btn={"xy"} />
        <Button handleBtnClick={handleBtnClick} btn={"ex"} />
        <Button handleBtnClick={handleBtnClick} btn={"10x"} />
        <Button handleBtnClick={handleBtnClick} btn="7" />
        <Button handleBtnClick={handleBtnClick} btn="8" />
        <Button handleBtnClick={handleBtnClick} btn="9" />
        <Button handleBtnClick={handleBtnClick} btn="x" type={"operator"} />
        <Button handleBtnClick={handleBtnClick} btn={"1/x"} />
        <Button handleBtnClick={handleBtnClick} btn={"2x"} />
        <Button handleBtnClick={handleBtnClick} btn={"3x"} />
        <Button handleBtnClick={handleBtnClick} btn={"xy"} />
        <Button handleBtnClick={handleBtnClick} btn={"ln"} />
        <Button handleBtnClick={handleBtnClick} btn={"log"} />
        <Button handleBtnClick={handleBtnClick} btn="4" />
        <Button handleBtnClick={handleBtnClick} btn="5" />
        <Button handleBtnClick={handleBtnClick} btn="6" />
        <Button handleBtnClick={handleBtnClick} btn="-" type={"operator"} />
        <Button handleBtnClick={handleBtnClick} btn={"x!"} />
        <Button handleBtnClick={handleBtnClick} btn={"sin"} />
        <Button handleBtnClick={handleBtnClick} btn={"cos"} />
        <Button handleBtnClick={handleBtnClick} btn={"tan"} />
        <Button handleBtnClick={handleBtnClick} btn={"e"} />
        <Button handleBtnClick={handleBtnClick} btn={"EE"} />
        <Button handleBtnClick={handleBtnClick} btn="1" />
        <Button handleBtnClick={handleBtnClick} btn="2" />
        <Button handleBtnClick={handleBtnClick} btn="3" />
        <Button handleBtnClick={handleBtnClick} btn="+" type={"operator"} />
        <Button handleBtnClick={handleBtnClick} btn={"Rad"} />
        <Button handleBtnClick={handleBtnClick} btn={"sinh"} />
        <Button handleBtnClick={handleBtnClick} btn={"cosh"} />
        <Button handleBtnClick={handleBtnClick} btn={"tanh"} />
        <Button handleBtnClick={handleBtnClick} btn={"π"} />
        <Button handleBtnClick={handleBtnClick} btn={"Rand"} />
        <Button handleBtnClick={handleBtnClick} btn="0" />
        <Button handleBtnClick={handleBtnClick} btn="." />
        <Button handleBtnClick={handleBtnClick} btn="=" type={"operator"} />
      </div>
      <div className="history-container-scientific">
        {history?.map((item, index) => (
          <div key={index} className="history-item-scientific">
            <div className="history-equation-scientific">{item.equation}</div>
            <div className="history-result-scientific">{item.result}</div>
          </div>
        ))}
        {history.length > 0 && (
          <button
            className="history-btn-scientific"
            onClick={() => handleClearHistory()}
          >
            Clear History
          </button>
        )}
      </div>
    </>
  );
};

export default ScientificCalc;
