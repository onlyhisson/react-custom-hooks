import React from "react";
import { useHover } from "./useHover";

const App = () => {
  const hoverEvent = () => console.log("hover event");
  const title = useHover(hoverEvent);

  return (
    <div className="App">
      <h1 ref={title}>Hover</h1>
    </div>
  );
};

export default App;
