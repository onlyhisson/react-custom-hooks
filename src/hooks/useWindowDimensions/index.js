import React, { useState } from "react";
import useWindowDimensions from "./useWindowDimensions";

const App = () => {
  const { width, height } = useWindowDimensions();
  const [mousePosition, setMousePosition] = useState({
    mouseX: 0,
    mouseY: 0,
  });

  function handleMouseMove(event) {
    const mouseY = event.pageY;
    const mouseX = event.pageX;
    setMousePosition({ mouseX, mouseY });
  }

  return (
    <div
      className="App"
      onMouseMove={(e) => handleMouseMove(e)}
      style={{
        display: "flex",
        flexDirection: "column",
        height: height - 16,
        backgroundColor: "lightgrey",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>브라우저 너비 : {width}</div>
      <div>브라우저 높이 : {height}</div>
      <br />
      <div>마우스 위치 left : {mousePosition.mouseX}</div>
      <div>마우스 위치 top : {mousePosition.mouseY}</div>
    </div>
  );
};

export default App;
