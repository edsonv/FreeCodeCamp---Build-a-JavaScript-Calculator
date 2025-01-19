import { MouseEventHandler } from 'react';
import { Key } from '../Key/Key';
import styles from './SymbolsKeys.module.scss';

type Props = {
  callbacks: {
    handleCalculate: () => void;
    appendDecimal: () => void;
    chooseOperation: (operation: string) => void;
    handleClear: () => void;
  };
};

type Button = {
  label: string | number;
  id: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const SymbolsKeys = ({ callbacks }: Props) => {
  const { handleCalculate, chooseOperation, appendDecimal, handleClear } =
    callbacks;

  const buttons: Button[] = [
    { label: 'C', id: 'clear', onClick: handleClear },
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
    { label: '=', id: 'equals', onClick: handleCalculate },
  ];

  return (
    <div className={styles.symbolsWrapper}>
      {buttons.map((button) => (
        <Key {...button} />
      ))}
    </div>
  );
};
