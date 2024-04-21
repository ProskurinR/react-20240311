import { useParams } from "react-router-dom";
import { useGetDishQuery } from "../../redux/service/api";
import { Button } from "../button/component";
import { decrementProduct, incrementProduct } from "../../redux/ui/cart";
import { SIZES } from "../../constants/sizes";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectDishAmount } from "../../redux/ui/cart/selectors";
import { useCurrentUser } from "../../contexts/user";
import classNames from "classnames";

export const SelectedDish = () => {
  const { dishId } = useParams();
  const { data: dish } = useGetDishQuery(dishId);

  const { user } = useCurrentUser();

  const dispatch = useDispatch();
  const amount = useSelector((state) => selectDishAmount(state, dishId));

  const increment = () => dispatch(incrementProduct(dishId));
  const decrement = () => dispatch(decrementProduct(dishId));

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return (
    <div>
      <div className={classNames(styles.tab)}>Name: {name}</div>
      <div className={classNames(styles.tab)}>Price: {price}</div>
      <div className={classNames(styles.tab)}>
        Ingredients: {ingredients.join(", ")}
      </div>

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
