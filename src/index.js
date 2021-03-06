import React from "react";
import ReactDOM from "react-dom";
//import App from "./hooks/useInput";
//import App from "./hooks/useTabs";
//import App from "./hooks/useEffectIntro";
//import App from "./hooks/useTitle";
//import App from "./hooks/useClick";
//import App from "./hooks/useHover";
//import App from "./hooks/useConfirm";
//import App from "./hooks/usePreventLeave";
//import App from "./hooks/useBeforeLeave";
//import App from "./hooks/useFadeIn";
//import App from "./hooks/useNetwork";
//import App from "./hooks/useScroll";
//import App from "./hooks/useFullscreen";
//import App from "./hooks/useNotification";
//import App from "./hooks/useAxios";
//import App from "./hooks/useWindowDimensions";
import App from "./hooks/useLocalStorage";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
