import { SIZES } from "../../constants/sizes";
import { useSelector } from "react-redux";
import { useCurrentUser } from "../../contexts/user";
//import { useCount } from "../../hooks/use-count";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { selectDishAmount } from "../../redux/ui/cart/selectors";
import { useDispatch } from "react-redux";
import { incrementProduct } from "../../redux/ui/cart";
import { decrementProduct } from "../../redux/ui/cart";

export const Dish = ({ dishId, className }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  //const { amount, increment, decrement } = useCount();
  //const { increment, decrement } = useCount();
  const { user } = useCurrentUser();

  const dispatch = useDispatch();
  const amount = useSelector((state) => selectDishAmount(state, dishId));

  const increment = () => dispatch(incrementProduct(dishId));
  const decrement = () => dispatch(decrementProduct(dishId));

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
