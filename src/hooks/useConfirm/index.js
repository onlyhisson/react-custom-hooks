import React from "react";
import { useConfirm } from "./useConfirm";

const App = () => {
  const someFunc = () => console.log("confirm OK");
  const abortFunc = () => console.log("aborted OK");
  const confirmSomething = useConfirm("Are you sure?", someFunc, abortFunc);
  return (
    <div className="App">
      <button onClick={confirmSomething}>Confirm Something</button>
    </div>
  );
};

export default App;
