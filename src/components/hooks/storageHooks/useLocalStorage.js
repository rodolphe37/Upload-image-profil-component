import { useEffect, useState } from "react";

function useLocalStorage(defaultValue, key) {
  // Get items from locastorage content and stok it on state if is not empty
  const [value, setValue] = useState(() => {
    const localStorageValue = window.localStorage.getItem(key);

    return localStorageValue !== null
      ? JSON.parse(localStorageValue)
      : defaultValue;
  });
  useEffect(() => {
    // Set items to locastorage content and stock it to value state
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
