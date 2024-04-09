/* eslint-disable react/jsx-key */
import { Dish } from "../dish/component";

export const Menu = ({ dishesIds }) => {
  return (
    <ul>
      {dishesIds.map((dishId) => (
        <li>
          <Dish dishId={dishId} />
        </li>
      ))}
    </ul>
  );
};
