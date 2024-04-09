import { SIZES } from "../../constants/sizes";
import { useSelector } from "react-redux";
import { useCurrentUser } from "../../contexts/user";
import { useCount } from "../../hooks/use-count";
import { Button } from "../button/component";
import styles from "./styles.module.scss";

export const Dish = ({ dishId, className }) => {
  const dish = useSelector((state) => state.dish.entities[dishId]);
  const { amount, increment, decrement } = useCount();
  const { user } = useCurrentUser();

  if (!dish) {
    return null;
  }

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
