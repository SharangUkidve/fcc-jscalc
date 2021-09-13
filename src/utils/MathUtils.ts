import { operators } from '../constants/constants';

export const getExpressionArrayFromString = (text: string) => {
  const exprArray = [];
  let currentStr = '';
  for (let i = 0; i < text.length; i++) {
    const ch = text.charAt(i);
    const prevChar = text.charAt(i - 1);
    if (operators.includes(ch) && !(i > 0 && operators.includes(prevChar))) {
      exprArray.push(currentStr);
      exprArray.push(ch);
      currentStr = '';
    } else {
      currentStr += ch;
    }
  }
  exprArray.push(currentStr);
  return exprArray;
};

export const evaluatePartialExpression = (num1: number, num2: number, op: string) => {
  switch (op) {
    case '+':
      return num1 + num2;
    case '-':
      return num2 - num1;
    case 'x':
      return num1 * num2;
    case '/':
      return num2 / num1;
    default:
      return num2;
  }
};

const getResult = (exprArray: string[]) => {
  let op: string | null;
  return exprArray.reduce((prev: number, curr: string) => {
    if (operators.includes(curr)) {
      op = curr;
      return prev;
    }
    if (op) {
      const num = +curr;
      let sum = evaluatePartialExpression(num, prev, op);
      op = null;
      return sum;
    }
    return +curr + prev;
  }, 0);
};

export const evaluateImmediate = (expression: string) => {
  console.log('evaluating immediate');
  const exprArray = getExpressionArrayFromString(expression);
  if (exprArray.length <= 1) {
    return;
  }
  return getResult(exprArray);
};

export const evaluateFormula = (expression: string) => {
  console.log('evaluating formula');
  const exprArray = getExpressionArrayFromString(expression);
  if (exprArray.length <= 1) {
    return;
  }
  let currentOpIndex = 0;
  let res = 0;

  while (currentOpIndex < 2) {
    const currentOperator = operators[currentOpIndex];
    const ind = exprArray.indexOf(currentOperator);
    if (ind < 0) {
      currentOpIndex++;
      continue;
    }
    res = evaluatePartialExpression(+exprArray[ind + 1], +exprArray[ind - 1], currentOperator);
    exprArray.splice(ind - 1, 3, `${res}`);
  }
  if (exprArray.length === 1) {
    return exprArray[0];
  }
  res = getResult(exprArray);
  return res;
};

export const canAddDecimal = (expr: string) => {
  if (expr === '0') {
    return true;
  }
  const exprArray = getExpressionArrayFromString(expr);
  if (exprArray.length === 1 && expr.includes('.')) {
    return false;
  }
  const lastItem = exprArray[exprArray.length - 1];

  if (!lastItem.includes('.')) {
    return true;
  }
  return operators.includes(lastItem);
};
