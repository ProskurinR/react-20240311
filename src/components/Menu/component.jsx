/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dish } from "../dish/component";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";

export const Menu = ({ restaurantId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishesByRestaurantId(restaurantId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restaurantId]);

  const dishesIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  if (!dishesIds?.length) {
    return null;
  }

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
