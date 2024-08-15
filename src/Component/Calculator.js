import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { evaluate } from 'mathjs';

function Calculator() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleEvaluate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const handleScientificFunction = (func) => {
    try {
      const result = func(evaluate(input));
      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div>
      <div>
        <input type="text" value={input} readOnly />
      </div>
      <div>
        <button onClick={handleClear}>C</button>
        <button onClick={handleBackspace}>←</button>
        <button onClick={() => handleButtonClick('(')}>(</button>
        <button onClick={() => handleButtonClick(')')}>)</button>
        <button onClick={() => handleButtonClick('%')}>%</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleEvaluate}>=</button>
      </div>
      <div>
        <button onClick={() => handleScientificFunction(Math.sin)}>sin</button>
        <button onClick={() => handleScientificFunction(Math.cos)}>cos</button>
        <button onClick={() => handleScientificFunction(Math.tan)}>tan</button>
        <button onClick={() => handleScientificFunction(Math.log)}>log</button>
        <button onClick={() => handleScientificFunction(Math.exp)}>exp</button>
        <button onClick={() => handleScientificFunction(Math.sqrt)}>√</button>
      </div>
    </div>
  );
}

export default Calculator;
