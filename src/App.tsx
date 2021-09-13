import Button from './components/Button';
import { useState } from 'react';
import { canAddDecimal, evaluateFormula, evaluateImmediate } from './utils/MathUtils';
import { allButtons, operators } from './constants/constants';
import ModeToggle from './components/ModeToggle';

const App = () => {
  const [expression, setExpression] = useState('0');
  const [mode, setMode] = useState('formula');

  const clearDisplay = () => {
    setExpression('0');
  };

  const isInitialDisplayText = () => {
    return expression === '0';
  };

  const deleteLastChar = () => {
    if (expression.length > 1) {
      setExpression(expression.slice(0, expression.length - 1));
    } else {
      setExpression('0');
    }
  };

  const toggleMode = () => {
    setMode(mode === 'immediate' ? 'formula' : 'immediate');
  };

  const handleOperator = (op: string) => {
    const isLastOp = operators.includes(expression.charAt(expression.length - 1));
    const isSecondLastOp = operators.includes(expression.charAt(expression.length - 2));
    if (isInitialDisplayText() && op !== '-') {
      return;
    }
    if (!expression.length || isInitialDisplayText() || isLastOp) {
      if (op !== '-') {
        return setExpression(dt => dt.substr(0, dt.length - (isSecondLastOp ? 2 : 1)) + op);
      } else if (op === '-' && isSecondLastOp) {
        return;
      }
    }

    updateDisplayText(op);
  };

  const updateDisplayText = (value: string | number) => {
    if (isInitialDisplayText()) {
      return setExpression(`${value}`);
    } else {
      return setExpression(dt => dt + value);
    }
  };

  const addDecimal = () => {
    if (canAddDecimal(expression)) {
      return setExpression(dt => {
        if (operators.includes(dt.charAt(dt.length - 1))) {
          return dt + '0.';
        }
        return dt + '.';
      });
    }
  };

  const matchValue = (value: string | number) => {
    switch (value) {
      case 'AC':
        return clearDisplay();
      case 'C':
        return deleteLastChar();
      case 0:
        if (isInitialDisplayText()) {
          return;
        } else {
          return setExpression(dt => dt + '0');
        }
      case '.':
        return addDecimal();
      case '=':
        const result = mode === 'formula' ? evaluateFormula(expression) : evaluateImmediate(expression);
        return setExpression(`${result}`);
      case '+':
      case '-':
      case '/':
      case 'x':
        return handleOperator(value);
      default:
        updateDisplayText(value);
    }
  };

  return (
    <>
      <ModeToggle value={mode} onChange={toggleMode} />
      <main className="calc">
        <div className="calc-display" id="display">
          {expression}
        </div>
        <div className="calc-buttons">
          {allButtons.map(btn => (
            <Button
              label={btn.label}
              key={btn.id}
              id={btn.id}
              className={btn.className}
              onClick={() => matchValue(btn.label)}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
