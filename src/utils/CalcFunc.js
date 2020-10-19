import { Decimal } from "decimal.js";

export const calcFunc = (
  value,
  btn,
  setValue,
  setMemNumber,
  setOperator,
  operator,
  memNumber,
  setEquation
) => {
  const number = parseFloat(value);
  switch (btn) {
    case "AC":
      setValue("0");
      setMemNumber(null);
      setOperator(null);
      setEquation(null);
      break;
    case "+/-":
      setValue((number * -1).toString());
      break;
    case "%":
      setValue((number / 100).toString());
      setMemNumber(null);
      setOperator(null);
      break;
    case "-":
      operatorFunc(operator, setMemNumber, memNumber, number);
      setValue("0");
      setOperator("-");
      break;
    case "+":
      operatorFunc(operator, setMemNumber, memNumber, number);
      setValue("0");
      setOperator("+");
      break;
    case "x":
      operatorFunc(operator, setMemNumber, memNumber, number);
      setValue("0");
      setOperator("x");
      break;
    case "÷":
      operatorFunc(operator, setMemNumber, memNumber, number);
      setValue("0");
      setOperator("÷");
      break;
    case ".":
      if (value?.includes(".")) return;
      setValue(value + ".");
      break;
    case "=":
      const memNum = new Decimal(memNumber === null ? "0" : memNumber);
      const num = new Decimal(number === null ? "0" : number);
      if (operator === "+") {
        setValue(memNum.plus(num).toNumber());
        setMemNumber(memNum.plus(num).toNumber());
      } else if (operator === "-") {
        setValue(memNum.minus(num).toNumber());
        setMemNumber(memNum.minus(num).toNumber());
      } else if (operator === "x") {
        setValue(memNum.mul(num).toNumber());
        setMemNumber(memNum.mul(num).toNumber());
      } else if (operator === "÷") {
        setValue(memNum.div(num).toNumber());
        setMemNumber(memNum.div(num).toNumber());
      }
      memNumber &&
        setEquation({
          equation:
            memNumber === value && operator === "="
              ? ""
              : `${memNumber}${operator}${value}=`,
        });
      setOperator("=");
      break;
    default:
      if (value[value?.length - 1] === ".") {
        return setValue(value + btn);
      } else {
        return setValue(parseFloat(number + btn).toString());
      }
  }
};

const operatorFunc = (operator, setMemNumber, memNumber, number) => {
  if (operator !== null) {
    if (operator === "+") {
      setMemNumber(parseFloat(memNumber + number));
    } else if (operator === "-") {
      setMemNumber(parseFloat(memNumber - number));
    } else if (operator === "x") {
      setMemNumber(parseFloat(memNumber * number));
    } else if (operator === "÷") {
      setMemNumber(parseFloat(memNumber / number));
    }
  } else {
    setMemNumber(number);
  }
};
