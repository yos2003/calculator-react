import "./App.css";
import Btn from "./components/Btn";
import { useState } from "react";
import * as math from "mathjs";
import { Textfit } from "react-textfit";

function App() {
  const [value, setValue] = useState<string>("");
  const handleClick = (btnValue: string) => {
    console.log(btnValue);
    if (btnValue === "=") {
      try {
        const result = math.evaluate(value);
        setValue(result.toFixed(2).toString());
      } catch (error) {
        setValue("Error");
      }
    } else if (btnValue === "C") {
      setValue("");
    } else {
      setValue((prevValue) => prevValue + btnValue);
    }
  };


  return (
    <div className="box">
      <Textfit
        mode="single"
        max={100}
        style={{ height: "auto" }}
        className="header"
        forceSingleModeWidth={false}
      >
        {value}
      </Textfit>
      <div className="container">
        <Btn avg="avg" onClick={handleClick}>
          C
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          +-
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          %
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          /
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          7
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          8
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          9
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          *
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          4
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          5
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          6
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          -
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          1
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          2
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          3
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          +
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          0
        </Btn>
        <Btn avg="avg" onClick={handleClick}>
          .
        </Btn>
        <Btn avg="horizontal" onClick={handleClick}>
          =
        </Btn>
      </div>
    </div>
  );
}

export default App;
