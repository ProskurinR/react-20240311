import { SIZES } from "../../constants/sizes";
import { useCurrentUser } from "../../contexts/user";
import { useCount } from "../../hooks/use-count";
import { Button } from "../button/component";
import styles from "./styles.module.scss";

export const Dish = ({ dish, className }) => {
  const { amount, increment, decrement } = useCount();
  const { user } = useCurrentUser();

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
