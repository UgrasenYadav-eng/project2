import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [memory, setMemory] = useState(0);
  const [history, setHistory] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      const result = evaluate(input).toString();
      setHistory([...history, `${input} = ${result}`]);
      setInput(result);
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

  const handleMemoryAdd = () => {
    try {
      setMemory(memory + evaluate(input));
    } catch {
      setInput('Error');
    }
  };

  const handleMemorySubtract = () => {
    try {
      setMemory(memory - evaluate(input));
    } catch {
      setInput('Error');
    }
  };

  const handleMemoryRecall = () => {
    setInput(memory.toString());
  };

  const handleMemoryClear = () => {
    setMemory(0);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`calculator-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="button-row">
        <button className="button clear" onClick={handleClear}>C</button>
        <button className="button backspace" onClick={handleBackspace}>←</button>
        <button className="button" onClick={() => handleButtonClick('(')}>(</button>
        <button className="button" onClick={() => handleButtonClick(')')}>)</button>
        <button className="button" onClick={() => handleButtonClick('%')}>%</button>
        <button className="button operator" onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('7')}>7</button>
        <button className="button" onClick={() => handleButtonClick('8')}>8</button>
        <button className="button" onClick={() => handleButtonClick('9')}>9</button>
        <button className="button operator" onClick={() => handleButtonClick('*')}>*</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('4')}>4</button>
        <button className="button" onClick={() => handleButtonClick('5')}>5</button>
        <button className="button" onClick={() => handleButtonClick('6')}>6</button>
        <button className="button operator" onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('1')}>1</button>
        <button className="button" onClick={() => handleButtonClick('2')}>2</button>
        <button className="button" onClick={() => handleButtonClick('3')}>3</button>
        <button className="button operator" onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('0')}>0</button>
        <button className="button" onClick={() => handleButtonClick('.')}>.</button>
        <button className="button equals" onClick={handleEvaluate}>=</button>
      </div>
      <div className="button-row scientific">
        <button className="button" onClick={() => handleScientificFunction(Math.sin)}>sin</button>
        <button className="button" onClick={() => handleScientificFunction(Math.cos)}>cos</button>
        <button className="button" onClick={() => handleScientificFunction(Math.tan)}>tan</button>
        <button className="button" onClick={() => handleScientificFunction(Math.log)}>log</button>
        <button className="button" onClick={() => handleScientificFunction(Math.exp)}>exp</button>
        <button className="button" onClick={() => handleScientificFunction(Math.sqrt)}>√</button>
      </div>
      <div className="button-row memory">
        <button className="button" onClick={handleMemoryAdd}>M+</button>
        <button className="button" onClick={handleMemorySubtract}>M-</button>
        <button className="button" onClick={handleMemoryRecall}>MR</button>
        <button className="button" onClick={handleMemoryClear}>MC</button>
      </div>
      <div className="button-row mode-toggle">
        <button className="button" onClick={toggleDarkMode}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </div>
      <div className="history">
        <h3>History</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculator;
