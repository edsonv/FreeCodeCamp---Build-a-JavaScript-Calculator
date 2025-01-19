import { MouseEventHandler } from 'react';
import './styles/global.scss';
import { Key } from './components/Key/Key';
import { numberToNameString } from './utils/numberToNameString';
import { useCalculator } from './hooks/useCalculator.hook';

type Button = {
  label: string | number;
  id: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const App = () => {
  const {
    display,
    handleCalculate,
    chooseOperation,
    appendDecimal,
    handleClear,
    appendNumber,
  } = useCalculator();

  const buttons: Button[] = [
    { label: '=', id: 'equals', onClick: handleCalculate },
    { label: '-', id: 'subtract', onClick: () => chooseOperation('-') },
    {
      label: '+',
      id: 'add',
      onClick: () => chooseOperation('+'),
    },
    {
      label: '×',
      id: 'multiply',
      onClick: () => chooseOperation('*'),
    },
    {
      label: '÷',
      id: 'divide',
      onClick: () => chooseOperation('/'),
    },
    { label: '.', id: 'decimal', onClick: appendDecimal },
    { label: 'C', id: 'clear', onClick: handleClear },
  ];

  return (
    <div>
      <div id='display'>{display}</div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
        <Key
          label={number}
          id={numberToNameString(number)}
          onClick={() => appendNumber(number)}
        />
      ))}
      {buttons.map((button) => (
        <Key {...button} />
      ))}
    </div>
  );
};
