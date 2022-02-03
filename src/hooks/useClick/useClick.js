import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  const ref = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    const element = ref.current; // 이렇게 해야 warning 문구 발생하지 않는다.
    if (element) {
      element.addEventListener("click", onClick);
    }

    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return ref;
};
