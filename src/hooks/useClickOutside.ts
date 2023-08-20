import { RefObject, useEffect } from "react";

function useClickOutside(ref: RefObject<HTMLElement>, action: () => void) {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      action();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
}

export default useClickOutside;
