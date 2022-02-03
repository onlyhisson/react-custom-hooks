import React from "react";
import { useClick } from "./useClick";

const App = () => {
  const clickEvent = () => console.log("click event");
  const title = useClick(clickEvent);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
