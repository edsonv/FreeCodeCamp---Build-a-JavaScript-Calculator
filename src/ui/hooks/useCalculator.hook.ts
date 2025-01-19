import { useState } from 'react';

export const useCalculator = () => {
  const [display, setDisplay] = useState('0');

  function handleCalculate() {
    try {
      const result = parseFloat(eval(display).toFixed(4));

      setDisplay(result.toString());
    } catch (error) {
      console.log(error);
      setDisplay('Error');
    }
  }

  function appendDecimal() {
    const lastNumber = display.split(/\+|-|\*|\//).pop();

    if (lastNumber?.includes('.')) return;

    return setDisplay(display + '.');
  }

  function appendNumber(number: number) {
    if (display === '0' && number === 0) return;

    if (display === '0' && number !== 0) return setDisplay(number.toString());

    return setDisplay(display + number.toString());
  }

  function chooseOperation(operation: string) {
    if (/([+\-*/])-+$/.test(display + operation)) {
      // Allow negative sign after an operator
      return setDisplay(display + operation);
    }

    if (/[+\-*/]{2,}$/.test(display + operation)) {
      // Replace multiple consecutive operators with the last one, except for the negative sign
      const sanitizedDisplay = display.replace(/[+\-*/]+$/, operation);
      return setDisplay(sanitizedDisplay);
    }

    return setDisplay(display + operation);
  }

  function handleClear() {
    setDisplay('0');
  }

  return {
    display,
    handleCalculate,
    appendDecimal,
    appendNumber,
    chooseOperation,
    handleClear,
  };
};
