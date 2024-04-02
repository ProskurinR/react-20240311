import { useCount } from "../../hooks/use-count";

export const Dish = ({ dish }) => {
  const { amount, increment, decrement } = useCount();

  return (
    <div>
      {dish.name}
      <div>
        <button onClick={increment} disabled={amount === 5}>
          +
        </button>
        {amount}
        <button onClick={decrement} disabled={amount === 0}>
          -
        </button>
      </div>
    </div>
  );
};
