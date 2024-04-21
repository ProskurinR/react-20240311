/* eslint-disable react/jsx-key */
import { DishContainer } from "../dish/container";

export const Menu = ({ dishes }) => {
  return (
    <ul>
      {dishes.map((dish) => (
        <li>
          <DishContainer dish={dish} />
        </li>
      ))}
    </ul>
  );
};
