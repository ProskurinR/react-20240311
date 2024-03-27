import { CountDishes } from "../countdishes/component";

export const Dish = ({ dish }) => {
  //console.log(dish.name);

  return (
    <div>
      {dish.name}
      <CountDishes id={dish.id} />
    </div>
  );
};
