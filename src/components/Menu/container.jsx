import { useSelector } from "react-redux";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors";
import { Menu } from "./component";
import { useRequest } from "../../hooks/use-request";
import { REQUEST_STATUSES } from "../../redux/ui/request/constants";

export const MenuContainer = ({ restaurantId }) => {
  const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);

  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  if (!dishIds?.length) {
    return null;
  }

  if (requestStatus === REQUEST_STATUSES.pending) {
    return <div>Loading</div>;
  }

  return <Menu dishIds={dishIds} />;
};
