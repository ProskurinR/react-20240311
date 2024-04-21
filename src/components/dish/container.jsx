import { Dish } from "./component";

export const DishContainer = ({ dish, ...props }) => {
  if (!dish) {
    return null;
  }

  return <Dish {...props} dish={dish} />;
};
