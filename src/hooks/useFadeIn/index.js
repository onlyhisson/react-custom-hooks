import React from "react";
import { useFadeIn } from "./useFadeIn";

const App = () => {
  const fadeInH1 = useFadeIn(1, 0);
  const fadeInP = useFadeIn(5, 0);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum.....</p>
    </div>
  );
};

export default App;
