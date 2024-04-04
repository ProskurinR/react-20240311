/* eslint-disable react/jsx-key */
import { Dish } from "../dish/component";

export const Menu = ({ dishes }) => {
  return (
    <ul>
      {dishes.map((dish) => (
        <li>
          <Dish dish={dish} />
        </li>
      ))}
    </ul>
  );
};
