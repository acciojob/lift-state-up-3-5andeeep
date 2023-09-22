
import React, { useState } from "react";
import './../styles/App.css';
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {

  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [selected, setSelected] = useState("");

  const handleOption = () => {
    if(!option1){
      setOption1(true);
      setOption2(false);
      setSelected("Option 1");
    }
  }
  const handleOption2 = () => {
    if(!option2){
      setOption1(false);
      setOption2(true);
      setSelected("Option 2");
    }
  }

  return (
    <div className="App">
      <h1>Parent Component</h1>
      <Child1 setOption={handleOption}/>
      <Child2 setOption={handleOption2}/>
      <p>Selected Option: {selected}</p>
    </div>
  )
}

export default App
