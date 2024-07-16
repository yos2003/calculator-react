import "./App.css";
import Btn from "./components/Btn";
import { useState } from 'react';


function App() {
  const [value, setValue]=useState('');
  const handleClick = (btnValue: string)=>{
    if(btnValue === '=') {
      try {
        setValue(eval(value));
      } catch (error) {
        setValue('Error');
      }
    } else if (btnValue === 'C') {
      setValue('');
    } else {
      setValue(prevValue => prevValue + btnValue);
    }
  };
  return (
      <div className="box">
        <div className="header">
          <input type="number" defaultValue={'0'} value={value} readOnly/>
        </div>
        <div className="container">
          <Btn avg="avg" onClick={handleClick}>C</Btn>
          <Btn avg="avg" onClick={handleClick}>+-</Btn>
          <Btn avg="avg" onClick={handleClick}>%</Btn>
          <Btn avg="avg" onClick={handleClick}>/</Btn>
          <Btn avg="avg" onClick={handleClick}>7</Btn>
          <Btn avg="avg" onClick={handleClick}>8</Btn>
          <Btn avg="avg" onClick={handleClick}>9</Btn>
          <Btn avg="avg" onClick={handleClick}>X</Btn>
          <Btn avg="avg" onClick={handleClick}>4</Btn>
          <Btn avg="avg" onClick={handleClick}>5</Btn>
          <Btn avg="avg" onClick={handleClick}>6</Btn>
          <Btn avg="avg" onClick={handleClick}>-</Btn>
          <Btn avg="avg" onClick={handleClick}>1</Btn>
          <Btn avg="avg" onClick={handleClick}>2</Btn>
          <Btn avg="avg" onClick={handleClick}>3</Btn>
          <Btn avg="avg" onClick={handleClick}>+</Btn>
          <Btn avg="avg" onClick={handleClick}>0</Btn>
          <Btn avg="avg" onClick={handleClick}>.</Btn>
          <Btn avg="horizontal" onClick={handleClick}>=</Btn>

        </div>
      </div>
  );
}

export default App;
