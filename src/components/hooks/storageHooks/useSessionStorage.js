import { useEffect, useState } from "react";

function useSessionStorage(defaultValue, key) {
  // Get items from locastorage content and stok it on state if is not empty
  const [value, setValue] = useState(() => {
    const sessionStorageValue = window.sessionStorage.getItem(key);

    return sessionStorageValue !== null
      ? JSON.parse(sessionStorageValue)
      : defaultValue;
  });
  useEffect(() => {
    // Set items to locastorage content and stock it to value state
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useSessionStorage;
