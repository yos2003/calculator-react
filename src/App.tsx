import "./App.css";
import Btn from "./components/Btn";

function App() {
  return (
      <div className="box">
        <div className="header"></div>
        <div className="container">
          <Btn avg="avg">C</Btn>
          <Btn avg="avg">+-</Btn>
          <Btn avg="avg">%</Btn>
          <Btn avg="avg">/</Btn>
          <Btn avg="avg">7</Btn>
          <Btn avg="avg">8</Btn>
          <Btn avg="avg">9</Btn>
          <Btn avg="avg">X</Btn>
          <Btn avg="avg">4</Btn>
          <Btn avg="avg">5</Btn>
          <Btn avg="avg">6</Btn>
          <Btn avg="avg">-</Btn>
          <Btn avg="avg">1</Btn>
          <Btn avg="avg">2</Btn>
          <Btn avg="avg">3</Btn>
          <Btn avg="avg">+</Btn>
          <Btn avg="avg">0</Btn>
          <Btn avg="avg">.</Btn>
          <Btn avg="horizontal">=</Btn>

        </div>
      </div>
  );
}

export default App;
