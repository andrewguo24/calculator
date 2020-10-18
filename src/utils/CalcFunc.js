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
      if (value.includes(".")) return;
      setValue(value + ".");
      break;
    case "=":
      const memNum = new Decimal(memNumber);
      const num = new Decimal(number);
      if (operator === "+") {
        setValue(memNum.plus(num).toNumber());
      } else if (operator === "-") {
        setValue(memNum.minus(num).toNumber());
      } else if (operator === "x") {
        setValue(memNum.mul(num).toNumber());
      } else if (operator === "÷") {
        setValue(memNum.div(num).toNumber());
      }
      memNumber &&
        setEquation({
          equation: `${memNumber}${operator}${value}=`,
        });
      setMemNumber(null);
      setOperator("=");
      break;
    default:
      if (value[value.length - 1] === ".") {
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
