import { useState } from 'react';
import './styles/global.scss';
import { Key } from './components/Key/Key';

function App() {
  const [display, setDisplay] = useState('0');

  function appendDecimal() {
    if (display.includes('.')) return;
    setDisplay(display + '.');
  }

  function calculate() {
    let localDisplay = display;
    if (localDisplay.includes('÷')) {
      localDisplay = localDisplay.replace('÷', '/');
    }
    if (localDisplay.includes('×')) {
      localDisplay = localDisplay.replace('×', '*');
    }
    console.log(localDisplay);

    try {
      setDisplay(eval(localDisplay).toString());
    } catch (err) {
      console.log(err);
      setDisplay('Error');
    }
  }
  function clear() {
    setDisplay('0');
  }

  function appendNumber(value: string) {
    if (display === '0') {
      return setDisplay(value);
    }
    setDisplay(display + value);
  }

  function chooseOperation(operation: string) {
    let matchedOperation = '';
    const lastChar = display.charAt(display.length - 1);
    switch (operation) {
      case '/':
        matchedOperation = '÷';
        break;
      case '*':
        matchedOperation = '×';
        break;
      default:
        matchedOperation = operation;
    }

    // const sanitizedDisplay = display
    //   .replace(/([+*/])-+([+*/])/g, '$2') // Handle sequences like *-+ to *
    //   .replace(/([+\-*/])(?=[+*/])/g, '')
    //   .replace(/÷/g, '/')
    //   .replace(/×/g, '*');
    // console.log(eval(sanitizedDisplay).toString());

    if (
      matchedOperation !== '-' &&
      (lastChar === '+' || lastChar === '÷' || lastChar === '×')
    ) {
      setDisplay(display.slice(0, -1) + matchedOperation);
    } else {
      setDisplay(display + matchedOperation);
    }
  }

  return (
    <div>
      <div id='display'>{display}</div>
      <Key label='=' id='equals' onClick={calculate} />
      <Key label={0} id='zero' onClick={() => appendNumber('0')} />
      <Key label={1} id='one' onClick={() => appendNumber('1')} />
      <Key label={2} id='two' onClick={() => appendNumber('2')} />
      <Key label={3} id='three' onClick={() => appendNumber('3')} />
      <Key label={4} id='four' onClick={() => appendNumber('4')} />
      <Key label={5} id='five' onClick={() => appendNumber('5')} />
      <Key label={6} id='six' onClick={() => appendNumber('6')} />
      <Key label={7} id='seven' onClick={() => appendNumber('7')} />
      <Key label={8} id='eight' onClick={() => appendNumber('8')} />
      <Key label={9} id='nine' onClick={() => appendNumber('9')} />
      <Key label='-' id='subtract' onClick={() => chooseOperation('-')} />
      <Key label='+' id='add' onClick={() => chooseOperation('+')} />
      <Key label='×' id='multiply' onClick={() => chooseOperation('*')} />
      <Key label='÷' id='divide' onClick={() => chooseOperation('/')} />
      <Key label='.' id='decimal' onClick={appendDecimal} />
      <Key label='C' id='clear' onClick={clear}>
        C
      </Key>
    </div>
  );
}

export default App;
