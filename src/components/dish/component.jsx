import { SIZES } from "../../constants/sizes";
import { Button } from "../button/component";
import styles from "./styles.module.scss";

export const Dish = ({
  className,
  dish,
  user,
  amount,
  increment,
  decrement,
}) => {
  return (
    <div className={className}>
      {dish.name}

      {!!user && (
        <div>
          <Button
            onClick={increment}
            disabled={amount === 5}
            size={SIZES.s}
            className={styles.action}
          >
            +
          </Button>
          <span>{amount}</span>
          <Button
            onClick={decrement}
            disabled={amount === 0}
            size={SIZES.s}
            className={styles.action}
          >
            –
          </Button>
        </div>
      )}
    </div>
  );
};
