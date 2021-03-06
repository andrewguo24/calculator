import React, { useState, useEffect } from "react";
import BasicCalc from "./BasicCalc";
import ScientificCalc from "./ScientificCalc";
import { calcFunc } from "../utils/CalcFunc";
import { addComma } from "../utils/AddComma";
import { useMediaQuery } from "react-responsive";
import "./App.css";

const App = () => {
  const historyArr =
    localStorage.getItem("history")?.length > 0
      ? JSON.parse(localStorage.getItem("history"))
      : [];
  const [value, setValue] = useState("0");
  const [memNumber, setMemNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [equation, setEquation] = useState(null);
  const [history, setHistory] = useState(historyArr);
  const valueWithComma = addComma(value, setEquation);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 960px)" });
  const operatorArr = ["+", "-", "x", "÷"];

  const handleBtnClick = (btn) => () => {
    return calcFunc(
      value,
      btn,
      setValue,
      setMemNumber,
      setOperator,
      operator,
      memNumber,
      setEquation
    );
  };

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem("history");
  };

  useEffect(
    () => {
      if (value !== null && operator === "=") {
        equation?.equation !== "" &&
          setHistory(
            history?.concat([{ ...equation, result: valueWithComma }])
          );
        equation?.equation !== "" &&
          localStorage.setItem(
            "history",
            JSON.stringify(
              history?.concat([{ ...equation, result: valueWithComma }])
            )
          );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [operator, value, equation, valueWithComma]
  );

  return (
    <div className="App">
      {!isTabletOrMobile ? (
        <ScientificCalc
          value={valueWithComma}
          handleBtnClick={handleBtnClick}
          handleClearHistory={handleClearHistory}
          history={history}
          operator={operator}
          operatorArr={operatorArr}
          memNumber={memNumber}
        />
      ) : (
        <BasicCalc
          value={valueWithComma}
          handleBtnClick={handleBtnClick}
          handleClearHistory={handleClearHistory}
          isTabletOrMobile={isTabletOrMobile}
          history={history}
          operator={operator}
          operatorArr={operatorArr}
          memNumber={memNumber}
        />
      )}
    </div>
  );
};

export default App;
