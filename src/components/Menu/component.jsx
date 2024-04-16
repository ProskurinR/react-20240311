/* eslint-disable react/jsx-key */
import { DishContainer } from "../dish/container";

export const Menu = ({ dishIds }) => {
  return (
    <ul>
      {dishIds.map((dishId) => (
        <li>
          <DishContainer dishId={dishId} />
        </li>
      ))}
    </ul>
  );
};
