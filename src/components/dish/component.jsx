import { useCount } from "../../hooks/use-count";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Dish = ({ dish }) => {
  const { amount, increment, decrement } = useCount();

  return (
    <div className={classNames(styles.root)}>
      {dish.name}
      <div>
        <Button onClick={increment} disabled={amount === 5}>
          +
        </Button>
        <span className={classNames(styles.paddingLeft)}>{amount}</span>
        <Button onClick={decrement} disabled={amount === 0}>
          -
        </Button>
      </div>
    </div>
  );
};
