import { useEffect } from "react";

export default function useKey(key: string, action: () => void) {
  function downHandler(event: KeyboardEvent) {
    if (event.key === key) action();
  }

  useEffect(() => {
    document.addEventListener("keydown", downHandler);
    return () => {
      document.removeEventListener("keydown", downHandler);
    };
  }, [key]);
}
