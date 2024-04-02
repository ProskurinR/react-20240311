import { useState } from "react";
import { useCallback } from "react";

export const useCount = ({ defaultValue = 0, step = 1 } = {}) => {
  const [amount, setAmount] = useState(defaultValue);

  const increment = useCallback(
    () => setAmount((currentAmount) => currentAmount + step),
    [step]
  );

  const decrement = useCallback(
    () => setAmount((currentAmount) => currentAmount - step),
    [step]
  );

  return { amount, increment, decrement };
};
