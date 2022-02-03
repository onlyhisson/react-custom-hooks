import React, { useState, useEffect } from "react";
import { useBeforeLeave } from "./useBeforeLeave";

const App = () => {
  const beforeLife = () => console.log("mouseleave...");
  useBeforeLeave(beforeLife);
  return (
    <div className="App">
      <div>Hello</div>
    </div>
  );
};

export default App;
