import React, { useState, useEffect } from "react";
import { useScroll } from "./useScroll";

const App = () => {
  const { y } = useScroll();

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
};

export default App;
