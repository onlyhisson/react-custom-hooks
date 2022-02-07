import React, { useState, useEffect } from "react";
import { useFullscreen } from "./useFullscreen";

const App = () => {
  const callback = (isFull) => {
    console.log(isFull ? "Full [O]" : "Full [X]");
  };
  const { element, triggerFull, exitFull } = useFullscreen(callback);
  const imgUrl =
    "https://images.unsplash.com/photo-1644169276891-235775ba3cad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80";
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src={imgUrl} alt="sample" />
        <button onClick={exitFull}>Exit Full Screen</button>
      </div>
      <button onClick={triggerFull}>Make Full Screen</button>
    </div>
  );
};

export default App;
