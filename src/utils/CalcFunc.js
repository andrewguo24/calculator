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
      if (operator === "+") {
        const result = parseFloat(memNumber + number);
        setValue(result);
      } else if (operator === "-") {
        const result = parseFloat(memNumber - number);
        setValue(result);
      } else if (operator === "x") {
        const result = parseFloat(memNumber * number);
        setValue(parseResult(result));
      } else if (operator === "÷") {
        const result = parseFloat(memNumber / number);
        setValue(parseResult(result));
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

const parseResult = (result) => {
  return result.toFixed(2).toString();
};
