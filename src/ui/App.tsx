import './styles/global.scss';
import { useCalculator } from './hooks/useCalculator.hook';
import { MainLayout } from './layouts/Main/Main.layout';
import { Display } from './components/Display/Display';
import { NumberKeys } from './components/NumberKeys/NumberKeys';
import { SymbolsKeys } from './components/SymbolsKeys/SymbolsKeys';

export const App = () => {
  const {
    display,
    handleCalculate,
    chooseOperation,
    appendDecimal,
    handleClear,
    appendNumber,
  } = useCalculator();

  return (
    <MainLayout>
      <Display display={display} />
      <NumberKeys callback={appendNumber} />
      <SymbolsKeys
        callbacks={{
          handleCalculate,
          chooseOperation,
          appendDecimal,
          handleClear,
        }}
      />
    </MainLayout>
  );
};
