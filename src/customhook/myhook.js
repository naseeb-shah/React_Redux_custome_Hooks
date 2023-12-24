import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(10);
  const incrementCountBy20 = () => {
    setCount(count + 20);
  };

  return [count, incrementCountBy20];
};
