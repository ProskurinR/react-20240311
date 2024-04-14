import { useSelector } from "react-redux";
import { useCurrentUser } from "../../contexts/user";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { Dish } from "./component";
import { selectDishAmount } from "../../redux/ui/cart/selectors";
import { useDispatch } from "react-redux";
import { incrementProduct } from "../../redux/ui/cart";
import { decrementProduct } from "../../redux/ui/cart";

export const DishContainer = ({ dishId, ...props }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const { user } = useCurrentUser();

  const dispatch = useDispatch();
  const amount = useSelector((state) => selectDishAmount(state, dishId));

  const increment = () => dispatch(incrementProduct(dishId));
  const decrement = () => dispatch(decrementProduct(dishId));

  if (!dish) {
    return null;
  }

  return (
    <Dish
      {...props}
      dish={dish}
      user={user}
      amount={amount}
      increment={increment}
      decrement={decrement}
    />
  );
};
