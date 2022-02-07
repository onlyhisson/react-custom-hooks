import { useRef } from "react";

export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen(); // firefox
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen(); // orera
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen(); // micro soft
      }

      runCb(true);
    }
  };

  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen(); // firefox
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(); // orera
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen(); // micro soft
    }

    runCb(false);
  };
  return { element, triggerFull, exitFull };
};
