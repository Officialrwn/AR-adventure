// hooks.js
import { useEffect } from "react";

export const useOnClickOutside = (refs, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (
        refs.some((ref) => ref.current && ref.current.contains(event.target))
      ) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [refs, handler]); // Depend on refs and handler
};
