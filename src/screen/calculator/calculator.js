import { roman } from "../../utils";

export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return { currentValue: `${value}`, romanValue: convertTonumeral(value) };
  }
  let val = state.secondValue
    ? `${state.secondValue}${value}`
    : `${state.currentValue}${value}`;
  let roman = convertTonumeral(val);
  let numeral;
  let slc = "";
  let indx = "";

  if (state.secondValue) {
    numeral = `${state.romanValue}`;
    indx = numeral.indexOf(state.operator);
    indx += 1;
    slc = numeral.substring(0, indx);
    numeral = `${slc} ${roman}`;
  } else {
    numeral = roman;
  }

  return {
    currentValue: `${state.currentValue}${value}`,
    romanValue: numeral,
    secondValue: state.secondValue ? `${state.secondValue}${value}` : null,
    operator: state?.operator,
  };
};

export const convertTonumeral = (val) => {
  let num = parseFloat(val);
  let str = "";
  for (let i of Object.keys(roman)) {
    let q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }

  return str;
};

export const handleEqual = (state) => {
  const { currentValue } = state;
  const operator = currentValue.split(" ");

  const current = parseFloat(operator[2]);
  const previous = parseFloat(operator[0]);

  if (operator[1] == "/") {
    let divide = previous / current;
    let divideRoman = convertTonumeral(divide);
    return {
      currentValue: divide,
      romanValue: divideRoman,
    };
  }

  if (operator[1] == "*") {
    let multip = previous * current;
    let multipRoman = convertTonumeral(multip);
    return {
      currentValue: multip,
      romanValue: multipRoman,
    };
  }

  if (operator[1] == "+") {
    let add = previous + current;
    let addRoman = convertTonumeral(add);
    return {
      currentValue: add,
      romanValue: addRoman,
    };
  }

  if (operator[1] == "-") {
    let subtract = previous - current;
    let subtractRoman = convertTonumeral(subtract);
    return {
      currentValue: subtract,
      romanValue: subtractRoman,
    };
  }
};

const calculator = (type, value, state, toggle) => {
  switch (type) {
    case "number":
      return handleNumber(value, state, toggle);
    case "operator":
      return {
        operator: value,
        romanValue: `${state.romanValue} ${value} `,
        currentValue: `${state.currentValue} ${value} `,
        secondValue: "0",
      };
    case "equal":
      return handleEqual(state);
    case "clear":
      return initialState;
    default:
      return state;
  }
};

export default calculator;
