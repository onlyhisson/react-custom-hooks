import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const App = () => {
  const [value, setValue] = useLocalStorage("lsKey", "lsValue");

  const onClick = (event) => {
    setValue("TEST");
  };

  return (
    <div className="App">
      <h1>Value : {value} </h1>
      <button onClick={onClick}>Set Item "TEST"</button>
    </div>
  );
};

export default App;
