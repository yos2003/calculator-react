import { Textfit } from "react-textfit";
import { useState } from "react";
import "./Btn.css";
import {value} from "./"

function TextInput() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      
    </div>
  );
}

export default TextInput;
