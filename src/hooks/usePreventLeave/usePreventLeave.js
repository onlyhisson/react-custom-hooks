//import React, { useState, useEffect, useRef } from "react";

export const usePreventLeave = () => {
  const linstener = (event) => {
    event.preventDefault();
    event.returnValue = ""; // 이 코드라인이 있어야 작동
  };

  const enablePrevent = () => {
    window.addEventListener("beforeunload", linstener);
  };

  const disablePrevent = () => {
    window.removeEventListener("beforeunload", linstener);
  };

  return { enablePrevent, disablePrevent };
};
