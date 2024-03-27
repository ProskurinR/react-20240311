import { useState } from "react";

export const CountDishes = ({ id }) => {
  const [countDishes, setCountDishes] = useState(0);

  return (
    <span>
      <button
        onClick={() =>
          setCountDishes(countDishes < 5 ? countDishes + 1 : countDishes)
        }
      >
        +
      </button>
      <span>{countDishes}</span>
      <button
        onClick={() =>
          setCountDishes(countDishes > 0 ? countDishes - 1 : countDishes)
        }
      >
        -
      </button>
    </span>
  );
};
